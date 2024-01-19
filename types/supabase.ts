export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      customer: {
        Row: {
          contact_method: string
          created_at: string
          id: number
          name: string
          notes: string | null
          phone_number: string
          status: number
          tour_id: number | null
        }
        Insert: {
          contact_method: string
          created_at?: string
          id?: number
          name: string
          notes?: string | null
          phone_number: string
          status: number
          tour_id?: number | null
        }
        Update: {
          contact_method?: string
          created_at?: string
          id?: number
          name?: string
          notes?: string | null
          phone_number?: string
          status?: number
          tour_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'customer_tour_id_fkey'
            columns: ['tour_id']
            referencedRelation: 'tour'
            referencedColumns: ['id']
          },
        ]
      }
      location: {
        Row: {
          created_at: string
          id: number
          image: Json | null
          is_active: boolean | null
          is_office: boolean | null
          name: string
          seo: Json | null
          slug: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image?: Json | null
          is_active?: boolean | null
          is_office?: boolean | null
          name: string
          seo?: Json | null
          slug?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image?: Json | null
          is_active?: boolean | null
          is_office?: boolean | null
          name?: string
          seo?: Json | null
          slug?: string | null
        }
        Relationships: []
      }
      location_attributes: {
        Row: {
          created_at: string
          id: number
          location_id: number | null
          order: number | null
          seo: Json | null
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          location_id?: number | null
          order?: number | null
          seo?: Json | null
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          location_id?: number | null
          order?: number | null
          seo?: Json | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'location_attributes_location_id_fkey'
            columns: ['location_id']
            referencedRelation: 'location'
            referencedColumns: ['id']
          },
        ]
      }
      location_tours: {
        Row: {
          created_at: string
          id: number
          location_attr_id: number
          location_id: number
          tour_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          location_attr_id: number
          location_id: number
          tour_id: number
        }
        Update: {
          created_at?: string
          id?: number
          location_attr_id?: number
          location_id?: number
          tour_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'location_tours_location_attr_id_fkey'
            columns: ['location_attr_id']
            referencedRelation: 'location_attributes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'location_tours_location_id_fkey'
            columns: ['location_id']
            referencedRelation: 'location'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'location_tours_tour_id_fkey'
            columns: ['tour_id']
            referencedRelation: 'tour'
            referencedColumns: ['id']
          },
        ]
      }
      office: {
        Row: {
          address: string | null
          best_tours: number[] | null
          bg_primary_color: string | null
          bg_secondary_color: string | null
          contact_number: string | null
          created_at: string
          currency: string
          email: string | null
          id: number
          logo: string | null
          name: string | null
          primary_color: string | null
          primary_font: string | null
          secondary_color: string | null
          seo: Json | null
          slug: string | null
          social_media: Json[] | null
          status: boolean | null
          third_color: string | null
        }
        Insert: {
          address?: string | null
          best_tours?: number[] | null
          bg_primary_color?: string | null
          bg_secondary_color?: string | null
          contact_number?: string | null
          created_at?: string
          currency?: string
          email?: string | null
          id?: number
          logo?: string | null
          name?: string | null
          primary_color?: string | null
          primary_font?: string | null
          secondary_color?: string | null
          seo?: Json | null
          slug?: string | null
          social_media?: Json[] | null
          status?: boolean | null
          third_color?: string | null
        }
        Update: {
          address?: string | null
          best_tours?: number[] | null
          bg_primary_color?: string | null
          bg_secondary_color?: string | null
          contact_number?: string | null
          created_at?: string
          currency?: string
          email?: string | null
          id?: number
          logo?: string | null
          name?: string | null
          primary_color?: string | null
          primary_font?: string | null
          secondary_color?: string | null
          seo?: Json | null
          slug?: string | null
          social_media?: Json[] | null
          status?: boolean | null
          third_color?: string | null
        }
        Relationships: []
      }
      tour: {
        Row: {
          additional_Info: string | null
          additional_service: Json[] | null
          airpot_coming: string | null
          airpot_going: string | null
          code: string | null
          created_at: string
          external_file: Json | null
          id: number
          images: string[] | null
          is_active: boolean | null
          is_ticket_included: boolean | null
          name: string
          number_of_days: number
          price_double: number | null
          price_double_sa: number | null
          price_single: number | null
          price_single_sa: number | null
          seo: Json | null
          slug: string | null
          start_day: string[] | null
          tour_countries: string[] | null
          tour_excludes: Json[] | null
          tour_hotels: string[] | null
          tour_includes: Json[] | null
          tour_prices: Json[] | null
          tour_sections: Json[] | null
          type_id: number | null
        }
        Insert: {
          additional_Info?: string | null
          additional_service?: Json[] | null
          airpot_coming?: string | null
          airpot_going?: string | null
          code?: string | null
          created_at?: string
          external_file?: Json | null
          id?: number
          images?: string[] | null
          is_active?: boolean | null
          is_ticket_included?: boolean | null
          name: string
          number_of_days: number
          price_double?: number | null
          price_double_sa?: number | null
          price_single?: number | null
          price_single_sa?: number | null
          seo?: Json | null
          slug?: string | null
          start_day?: string[] | null
          tour_countries?: string[] | null
          tour_excludes?: Json[] | null
          tour_hotels?: string[] | null
          tour_includes?: Json[] | null
          tour_prices?: Json[] | null
          tour_sections?: Json[] | null
          type_id?: number | null
        }
        Update: {
          additional_Info?: string | null
          additional_service?: Json[] | null
          airpot_coming?: string | null
          airpot_going?: string | null
          code?: string | null
          created_at?: string
          external_file?: Json | null
          id?: number
          images?: string[] | null
          is_active?: boolean | null
          is_ticket_included?: boolean | null
          name?: string
          number_of_days?: number
          price_double?: number | null
          price_double_sa?: number | null
          price_single?: number | null
          price_single_sa?: number | null
          seo?: Json | null
          slug?: string | null
          start_day?: string[] | null
          tour_countries?: string[] | null
          tour_excludes?: Json[] | null
          tour_hotels?: string[] | null
          tour_includes?: Json[] | null
          tour_prices?: Json[] | null
          tour_sections?: Json[] | null
          type_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'tour_type_id_fkey'
            columns: ['type_id']
            referencedRelation: 'tour_type'
            referencedColumns: ['id']
          },
        ]
      }
      tour_type: {
        Row: {
          created_at: string
          id: number
          image: string
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image: string
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image?: string
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
