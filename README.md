Deployed link:
https://stablemax-project-vedant.vercel.app/


## Screenshots

Here are some screenshots of the application:

1. Home Page
   ![Home Page](src/screenshots/1.png)

2. Writing the Prompt
   ![Image Generation](src/screenshots/2.png)

3. Output
   ![Output](src/screenshots/3.png)

3. All the results
   ![Results Page](src/screenshots/4.png)




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# We are using Neon db

# Initialize Prisma and create the prisma folder and .env file
npx prisma init 

# Generate and apply database migrations
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate

# Connect to the PostgreSQL database using psql
# Replace the placeholders with your actual database credentials
psql "postgresql://example_user:example_password@example-host.provider.com/example_db?sslmode=require"