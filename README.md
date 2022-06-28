# cors-example
This repo contains the demo to this article that I've written [here](https://medium.com/@karissekhoo/access-blocked-by-cors-policy-whats-cors-and-what-should-you-do-ddcf24955966). Do check it out if you haven't done so! The article attempts to make sense of the very common CORS policy error by analysing how SOP and CORS apply in Client-Side Rendering, how they differ in Server-Side Rendering, and, most importantly, how we can resolve the error.


## :hammer_and_wrench: How to set up locally
We'll set up 3 different apps. 1 as frontend app, and another 2 as backend services.
### Client App
After installation, proceed to http://localhost:3000
```shell
cd app
npm i # install relevant packages
npm run start # run app
```

### Server with CORS
This server runs on port `8000`.
```shell
cd with-cors-server
npm i # install relevant packages
npm run start # run app
```

### Server without CORS
This server runs on port `4000`.
```shell
cd without-cors-server
npm i # install relevant packages
npm run start # run app
```

## :books: Project Directory
To keep it simple, we have 2 separate folders to demostrate one server with CORS enabled and another without CORS enabled, and the `app` folder to store our client application.
```shell
- app
  -- pages
    -- api # this is where we store our server-side api route
  - index.js # /
  - ssr.js # /ssr
  - with-cors.js # /with-cors
  - without-cors.js # /without-cors
- with-cors-server
- without-cors-server
```

## :bulb: How to use
**Note:** The 2 servers running on port `8000` and `4000` should be up and running before visiting the URLs.

| Name      | URL                      | Rendering Type | Description |
| ----------- | ---------------------- | ---------------------- | ----------- |
| Same origin | http://localhost:3000       | CSR       |Visit URL to discover how client-side rendering works and fetches data from the same origin successfully.
| Without CORS | http://localhost:3000/without-cors | CSR        | Visit URL to discover how client-side rendering works and how it fails to fetch data from a different origin.
| Without CORS | http://localhost:3000/ssr        | SSR        | Visit URL to discover how server-side rendering works and fetches data from a different origin successfully despite not having CORS enabled.
| With CORS | http://localhost:3000/with-cors    | CSR        | Visit URL to discover how client-side rendering and fetches data from the different origin.
