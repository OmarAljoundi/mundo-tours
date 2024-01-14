import { getAllPaths } from '@/lib/sitemapHelper'
import { getServerSideSitemap } from 'next-sitemap'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  // const urls = await getAllPaths();
  // return getServerSideSitemap(urls);

  return NextResponse.json({
    success: true,
  })
}
