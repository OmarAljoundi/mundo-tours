'use server'

import { Customer, Hotel, Location, LocationAttributes, Office, Response, Setting, Tour, TourType } from '@/types/custom'
import { supabaseClient } from './supabaseClient'
import { http } from '@/service/httpService'
import {
  CONFIG_PATH,
  REVALIDATE_CONTENT_DATA,
  REVALIDATE_CUSTOMER_LIST,
  REVALIDATE_HOTEL_LIST,
  REVALIDATE_LOCATION_LIST,
  REVALIDATE_OFFICE_LIST,
  REVALIDATE_TOUR_LIST,
  REVALIDATE_TOUR_TYPE,
  SETTING_PATH,
} from './keys'
import { Order, SearchQuery } from '@/types/search'
import { v4 } from 'uuid'
import { formatDistance, subDays } from 'date-fns'
import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'
import { getEqOperator } from './helpers'
import { revalidateTag, unstable_cache, unstable_noStore } from 'next/cache'
import { cache } from 'react'

type OrQuriesProp = {
  forigenTable: string | null
  query: string
}

const SearchData = async (tag: string, revalidate: number, requestData: SearchQuery) => {
  const unstable_cache_search_data = unstable_cache(
    async () => {
      const supabase = createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY!, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
          detectSessionInUrl: false,
        },
      })

      const getPagination = (page: number, size: number) => {
        const limit = size ? +size : 3
        let from = page ? page * limit : 0
        let to = page ? from + size : size

        if (from !== 0) {
          ++from
          ++to
        }

        return { from, to }
      }

      try {
        var OrQuries: OrQuriesProp[] = []

        var query = supabase.from(requestData.Table!).select(requestData.Select, { count: 'exact' })

        requestData.FilterByOptions.map((i) => {
          if (i.MemberName.includes('.')) {
            let memberNames = i.MemberName?.split('.')
            if (OrQuries.find((x) => x.forigenTable == memberNames[0])) {
              OrQuries.map((o) => {
                if (o.forigenTable == memberNames[0]) {
                  o.query += `${memberNames[1]}.${getEqOperator(i.FilterOperator)}.${i.FilterFor},`
                }
              })
            } else {
              OrQuries.push({
                forigenTable: memberNames[0],
                query: `${memberNames[1]}.${getEqOperator(i.FilterOperator)}.${i.FilterFor},`,
              })
            }
          } else {
            OrQuries.push({
              forigenTable: null,
              query: `${i.MemberName}.${getEqOperator(i.FilterOperator)}.${i.FilterFor},`,
            })
          }
        })

        if (OrQuries.length > 0) {
          OrQuries.map((o) => {
            o.query = o.query.slice(0, -1)
            if (o.forigenTable) {
              query = query.or(o.query, { foreignTable: o.forigenTable })
            } else {
              query = query.or(o.query)
            }
          })
        }

        if (requestData.OrderByOptions.length > 0) {
          query = query.order(requestData.OrderByOptions[0].MemberName, {
            ascending: requestData.OrderByOptions[0].SortOrder == Order.ASC ? true : false,
          })
        }

        const { from, to } = getPagination(requestData.PageIndex, requestData.PageSize)
        query = query.range(from, to)

        const { data: result, count, error } = await query

        if (error) {
          console.error(error)
          throw new Error(error.details)
        }
        return {
          success: true,
          results: result as any[],
          result: (result[0] as any) ?? null,
          total: count,
        }
      } catch (ex) {
        console.error('ex', ex)
        return {
          success: false,
          message: ex as any,
        }
      }
    },
    [tag],
    {
      revalidate,
      tags: [tag],
    },
  )
  return await unstable_cache_search_data()
}

export async function updateTourStatus(status: boolean, id: number): Promise<Response<any>> {
  const { error } = await supabaseClient.from('tour').update({ is_active: status }).eq('id', id)

  if (error) {
    throw new Error(`faild to update tour status, ${error.message}`)
  }

  revalidateTag(REVALIDATE_TOUR_LIST)

  return {
    message: 'Tour updated successfully..',
    success: true,
  }
}
export async function updateOfficeStatus(status: boolean, id: number): Promise<Response<any>> {
  const { error } = await supabaseClient.from('office').update({ status: status }).eq('id', id)

  if (error) {
    throw new Error(`faild to update office status, ${error.message}`)
  }

  revalidateTag(REVALIDATE_OFFICE_LIST)

  return {
    message: 'Office updated successfully..',
    success: true,
  }
}
export async function getTourTypes(): Promise<Response<TourType>> {
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: 100,
    Select: '*',
    Table: 'tour_type',
  }

  const response = await SearchData(REVALIDATE_TOUR_TYPE, 86400, _SQ)
  return response
}

export async function getDestination() {
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [{ MemberName: 'created_at', SortOrder: Order.DESC }],
    PageIndex: 0,
    PageSize: 1000,
    Select: '*,location_attributes(*,location_tours(*))',
    Table: 'location',
  }

  const response = await SearchData(REVALIDATE_LOCATION_LIST, 86400, _SQ)
  return response
}

export async function createTour(tour: Tour) {
  const _tour = { ...tour }
  const { data, error } = await supabaseClient
    .from('tour')
    .insert(_tour as any)
    .select('*')
    .single()

  if (error) {
    console.log('Errors in creating tours.. ', error)
    throw new Error(error.message)
  }
  revalidateTag(REVALIDATE_TOUR_LIST)

  return data
}

export async function updateTour(tour: Tour) {
  tour.additional_Info = v4()
  const { data, error } = await supabaseClient
    .from('tour')
    .update(tour as any)
    .eq('id', tour.id!)
    .select('*')
    .single()

  if (error) {
    console.log('Errors in updating tour.. ', error)
    throw new Error(error.message)
  }
  revalidateTag(REVALIDATE_TOUR_LIST)

  return data
}

export async function createTourType(type: TourType) {
  const { data, error } = await supabaseClient
    .from('tour_type')
    .insert(type as any)
    .select('*')
    .single()

  if (error) {
    console.log('Errors.. ', error)
    throw new Error(error.message)
  }

  revalidateTag(REVALIDATE_TOUR_TYPE)

  return data
}

export async function updateTourType(type: TourType) {
  const { data, error } = await supabaseClient
    .from('tour_type')
    .update(type as any)
    .eq('id', type.id!)
    .select('*')
    .single()

  if (error) {
    console.log('Errors.. ', error)
    throw new Error(error.message)
  }
  revalidateTag(REVALIDATE_TOUR_TYPE)

  return data
}

export async function createDestination(dest: Location) {
  const { data, error } = await supabaseClient
    .from('location')
    .insert(dest as any)
    .select('*')
    .single()

  if (error) {
    console.log('Errors.. ', error)
    throw new Error(error.message)
  }
  revalidateTag(REVALIDATE_LOCATION_LIST)

  return data
}

export async function updateDestination(dest: Location) {
  const { data, error } = await supabaseClient
    .from('location')
    .update(dest as any)
    .eq('id', dest.id!)
    .select('*')
    .single()

  if (error) {
    console.log('Errors.. ', error)
    throw new Error(error.message)
  }
  revalidateTag(REVALIDATE_LOCATION_LIST)

  return data
}

export async function createOffice(office: Office) {
  const { data, error } = await supabaseClient
    .from('office')
    .insert(office as any)
    .select('*')
    .single()

  if (error) {
    console.log('Errors.. ', error)
    throw new Error(error.message)
  }

  revalidateTag(REVALIDATE_OFFICE_LIST)

  return data
}

export async function updateOffice(office: Office) {
  const { data, error } = await supabaseClient
    .from('office')
    .update(office as any)
    .eq('id', office.id!)
    .select('*')
    .single()

  if (error) {
    console.log('Errors.. ', error)
    throw new Error(error.message)
  }

  revalidateTag(REVALIDATE_OFFICE_LIST)

  return data
}
export async function getTours() {
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: 1000,
    Select: '*,tour_type(*)',
    Table: 'tour',
  }

  const response = await SearchData(REVALIDATE_TOUR_LIST, 86400, _SQ)
  return response.results
}
export async function getHotels() {
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: 1000,
    Select: '*',
    Table: 'hotel',
  }

  const response = await SearchData(REVALIDATE_HOTEL_LIST, 86400, _SQ)

  return response.results
}
export async function deleteLocationAttr(location_id: number) {
  const { data, error } = await supabaseClient.from('location_attributes').delete().eq('location_id', location_id)

  if (error) {
    throw new Error(`An error occured in operation deleteLocationAttr ${error.message}`)
  }

  revalidateTag(REVALIDATE_LOCATION_LIST)
}
export async function createDestinationAttr(destinationAttr: LocationAttributes) {
  let id: number = 0

  const locationAtrrResponse = await supabaseClient
    .from('location_attributes')
    .insert({
      order: Number(destinationAttr.order),
      seo: destinationAttr.seo,
      title: destinationAttr.title,
      location_id: destinationAttr.location_id,
    })
    .select('*')
    .single()

  if (locationAtrrResponse.error) {
    throw new Error('Error happend while creating destination tours ' + locationAtrrResponse.error.message)
  }

  id = locationAtrrResponse.data.id

  if (destinationAttr.location_tours && destinationAttr.location_tours.length > 0) {
    const locationToursResponse = await supabaseClient.from('location_tours').insert(
      destinationAttr.location_tours.map((x) => {
        return {
          location_attr_id: id,
          tour_id: x.tour_id,
          location_id: x.location_id,
        }
      }),
    )
    if (locationToursResponse.error) {
      console.log('location Tours Response error', locationToursResponse.error)
      throw new Error('Error while creating location tours ' + locationToursResponse.error.message)
    }
  }

  revalidateTag(REVALIDATE_LOCATION_LIST)
}

export async function createHotel(hotel: Hotel) {
  const { data, error } = await supabaseClient
    .from('hotel')
    .insert(hotel as any)
    .select('*')
    .single()

  if (error) {
    console.log('Errors.. ', error)
    throw new Error(error.message)
  }

  revalidateTag(REVALIDATE_HOTEL_LIST)

  return data
}
export async function updateHotel(hotel: Hotel) {
  const { data, error } = await supabaseClient
    .from('hotel')
    .update(hotel as any)
    .eq('id', hotel.id!)
    .select('*')
    .single()

  if (error) {
    console.log('Errors.. ', error)
    throw new Error(error.message)
  }

  revalidateTag(REVALIDATE_HOTEL_LIST)

  return data
}

const getContent = async () => {
  const { data, error } = await supabaseClient.storage.from('mundo_tours').list(SETTING_PATH)

  let responseData: Setting | undefined

  if (data && data.length > 0 && data.find((x) => x.name === CONFIG_PATH)) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_IMAGE_URL}/${SETTING_PATH}/${CONFIG_PATH}`, {
      next: { revalidate: 86400, tags: [REVALIDATE_CONTENT_DATA] },
    })

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`)
    }

    responseData = (await response.json()) as Setting

    return responseData
  }
}

export const getContentData = cache(getContent)

export async function submitForm(formData: Customer) {
  unstable_noStore()
  const { data, error } = await supabaseClient.from('customer').insert(formData).select('*,tour(name)').single()

  if (error) {
    console.log('error', error)
    return {
      error: error.details,
      success: false,
    }
  }
  var currentDate = formatDistance(subDays(new Date(data.created_at), 0), new Date(), { addSuffix: true })
  await http<Response<any>>('/api/mail', { revalidate: 0 }).post({
    note: data.notes,
    tour_name: data.tour?.name,
    created_at: currentDate,
    customer_name: data.name,
    contact_option: data.contact_method,
    customer_number: data.phone_number,
  })

  await http<Response<any>>(`/api/revalidate?tag=${REVALIDATE_CUSTOMER_LIST}`, { revalidate: 0 }).get()

  return {
    success: true,
  }
}
