import { NextResponse } from "next/server";

//? Working with cookies
export function middleware(request) {
  const response = NextResponse.next();

  //! setting cookies if not present
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  //! setting custom header
  response.headers.set("custom-header", "custom-value");

  return response;
}

//* URL rewriting. Rewrite the redirected URL but load the expected content
// export function middleware(request) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.rewrite(new URL("/hello", request.url));
//   }
// }

//* with conditional redirection
// export function middleware(request) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/hello", request.url));
//   }
// }

//* with config object
// export function middleware(request) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile",
// };
