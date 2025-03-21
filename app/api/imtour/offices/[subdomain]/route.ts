import { getOfficeDetails } from "@/server/public-query.server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ subdomain: string }> }
) {
  try {
    const { subdomain } = await context.params;
    const office = await getOfficeDetails(subdomain);

    if (!office)
      throw new Error(`Office with subdomain '${subdomain}' was not found`);

    return NextResponse.json({
      success: true,
      result: { ...office },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 400 }
    );
  }
}
