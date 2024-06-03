import { headers, cookies } from "next/headers";
export async function GET(request) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));

  cookies().set("resultsPerPage", 20);
  console.log(cookies().get("resultsPerPage"));

  const theme = request.cookies.get("theme");
  console.log(theme);

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
