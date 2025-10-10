import { NextResponse, NextRequest } from "next/server";
import { geolocation } from "@vercel/functions";

function setCookies(value: string, response: NextResponse) {
  const name = "currency";
  const days = 365;

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  response.cookies.set(name, value, {
    path: "/",
    expires: expirationDate,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return response;
}

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  const currancyFromSearch = request.nextUrl.searchParams.get("from");

  if (currancyFromSearch) return setCookies(currancyFromSearch, response);

  const currentCurrancy = request.cookies.get("currency");

  if (currentCurrancy) return response;

  const { country } = geolocation(request);
  const userCountry = country ?? "SA";
  const value = userCountry == "OM" ? "OMR" : "SAR";

  return setCookies(value, response);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
