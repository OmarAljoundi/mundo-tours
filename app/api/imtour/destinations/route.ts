import { getDestinations } from "@/server/public-query.server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await getDestinations(true);
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
