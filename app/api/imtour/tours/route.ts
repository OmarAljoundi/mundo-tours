export const dynamic = "force-dynamic";
import { getOfficeTours } from "@/server/public-query.server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const currency = request.nextUrl.searchParams.get("currency") ?? "SAR";
    const result = await getOfficeTours(currency as "SAR" | "OMR");
    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 400 }
    );
  }
}
