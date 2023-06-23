## Getting Started


#### Install dependencies
```bash
pnpm install
```

#### Setup prisma
```bash
pnpm prisma migrate dev
npx prisma studio # In another terminal
```

#### Seed prisma (Optional)
```bash
npx prisma db seed
```

#### Setup database environment variable:
- DATABASE_URL

#### Setup NEXTAUTH environment variables:
- NEXTAUTH_URL
- AUTH values (example: GOOGLE_ID and GOOGLE_SECRET for google)


#### Start server
```bash
pnpm run dev
```
