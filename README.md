## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

it starts running on port 4000 which the frontend Nextjs has been proxied to use

it has 3 APIroutes

1. /getCats route that get All catigories
2. /getSubcatsByCat/:cat_id route that get all subcartigories based on the catigory id param passed in "cat_id"
3. /getDuasBySubcat/:subcat_id route that get all duas based on the subcatigory id param passed in "subcat_id"
