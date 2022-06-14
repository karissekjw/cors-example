# cors-example

## Set Up
### Client App
After installation, proceed to http://localhost:3000
```shell
cd app
npm i # install relevant packages
npm run start # run app
```

### Server with CORS
This server runs on port 8000.
```shell
cd with-cors-server
npm i # install relevant packages
npm run start # run app
```

### Server without CORS
This server runs on port 4000.
```shell
cd without-cors-server
npm i # install relevant packages
npm run start # run app
```

## Project Directory
To keep it simple, we have 2 separate folders to demostrate one with CORS enabled and another without CORS enabled, and the `app` folder to store our client application.
```
- app
  -- pages
    -- api # this is where we store our server-side api route
  - index.js # /
  - with-cors.js # /with-cors
  - without-cors.js # /without-cors
- with-cors-server
- without-cors-server
```

## How to use

### Same origin
http://localhost:3000

### Without CORS
http://localhost:3000/without-cors

### With CORS
http://localhost:3000/with-cors