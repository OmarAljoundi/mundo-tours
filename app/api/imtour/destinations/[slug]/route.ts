import { getToursByAttributes } from "@/server/public-query.server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const currency = request.nextUrl.searchParams.get("currency") ?? "SAR";
    const result = await getToursByAttributes(
      slug,
      undefined,
      true,
      currency as "SAR" | "OMR"
    );
    return NextResponse.json({
      success: true,
      result,
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
