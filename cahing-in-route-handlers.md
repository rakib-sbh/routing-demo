## Caching in Route Handlers

- Route Handlers are cached by default when using GET method with the Response object in Next.js

- We can use `dynamic mode Segment Config Option`
- There are other ways to opt out of caching
  - using the Request object with the GET method
  - employing dynamic functions like `headers()` and `cookies()`
  - using any HTTP method other than GET
