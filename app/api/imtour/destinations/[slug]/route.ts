import { getToursByAttributes } from "@/server/public-query.server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const result = await getToursByAttributes(slug, undefined, true);
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
