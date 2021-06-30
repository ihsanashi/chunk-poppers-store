## Introduction

This is an ongoing e-commerce project I started for my wife, to bring her dessert products on a web store. The project originally started with Gatsby, but I'm in the middle of migrating it to Next.js. Products information are stored with [Sanity.io](https://www.sanity.io/), while [Snipcart](https://snipcart.com/) acts as the shopping cart platform and back-office management dashboard.

The project is currently on hold as we recently moved and don't have a functioning kitchen. I will resume this after the kitchen makeover is completed.

### Technologies

- React and Next.js for UI

- Tailwind CSS for the styling

- Sanity.io to store product information (eg. product name, description, images, category, etc)

- Snipcart for the shopping cart and back-office operations

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Screenshots

![Homepage](./public/screenshots/homepage.png)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
