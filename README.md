## See this in production

[Audiu](https://coding-mountain-audiu.vercel.app/)

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

## Tech Stack

- NextJs : Fullstack with react and serverless on NodeJs runtime
- NeonDB: Postgres DB for serveless with Prisma ORM
- Material UI: Component Library
- Clerk : For Basic authentication
- UploadThing: For file uploads

## Regarding the decion

As assignment wanted something that uploaded audio file and feature of sharing file to others, something
in production made for sense than running it locally because of difficulty in testing. I did not have aws account
so i had to use some free service(uploadthing) for file uploads. Clerk is used for basic authentication so that the
app is not just public to anyone.

## Features Covered

- [x] Authentication
- [x] Upload Audio File
- [x] Timestamp audio share link
- [x] Number of plays (based on how many time the audio link is opened)
- [x] Basic Custom Player

## Notes

I did is task while trying to learn latest features of nextjs. This might not represent best practices. Various aspects
can be improved like folder structure and code orgranization.
