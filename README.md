# Next.js Blog Starter
A custom Next.js blog starter for use with [`create next app`](https://nextjs.org/docs/api-reference/create-next-app). This starter is based on the original blog starter provided by Next, but includes a few extra features and performance improvements that are nice to have right out of the box. 

# Contents
* [Preview](https://github.com/sandypockets/nextjs-blog-starter#preview)
* [Live demo](https://github.com/sandypockets/nextjs-blog-starter#live-demo)
* [Deploy your own](https://github.com/sandypockets/nextjs-blog-starter#deploy-your-own)
* [Built with](https://github.com/sandypockets/nextjs-blog-starter#built-with)
* [Core features](https://github.com/sandypockets/nextjs-blog-starter#core-features)
* [Get started](https://github.com/sandypockets/nextjs-blog-starter#get-started)
  * [create next app](https://github.com/sandypockets/nextjs-blog-starter#create-next-app)
  * [Set up constants](https://github.com/sandypockets/nextjs-blog-starter#constants)
  * [Generate a sitemap and robots.txt](https://github.com/sandypockets/nextjs-blog-starter#generate-a-sitemap-and-robotstxt)
  * [Set up Google Analytics](https://github.com/sandypockets/nextjs-blog-starter#set-up-google-analytics)
  * [Set up SendGrid](https://github.com/sandypockets/nextjs-blog-starter#set-up-sendgrid)
* [Dependencies](https://github.com/sandypockets/nextjs-blog-starter#dependencies)
  * [Dev dependencies](https://github.com/sandypockets/nextjs-blog-starter#dev-dependencies)
* [How it works](https://github.com/sandypockets/nextjs-blog-starter#how-it-works)
  * [Front matter](https://github.com/sandypockets/nextjs-blog-starter#front-matter)
  * [Create a new article](https://github.com/sandypockets/nextjs-blog-starter#create-a-new-article)
* [Contributing](https://github.com/sandypockets/nextjs-blog-starter#contributing)

## Preview
Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/sandypockets/nextjs-blog-starter/tree/main)

## Live demo

Check out the live demo at [blog-starter.sandypockets.dev](https://blog-starter.sandypockets.dev/), or see it in production as my actual blog at [sandypockets.dev](https://sandypockets.dev), generated using [`create-next-app`](https://github.com/sandypockets/nextjs-blog-starter#create-next-app)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=sandypockets):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/sandypockets/nextjs-blog-starter/tree/main&project-name=sandypockets-blog-starter&repository-name=sandypockets-blog-starter)

## Built with

* [React](https://reactjs.org/docs/getting-started.html)
* [Next.js](https://nextjs.org/docs/getting-started)
* [Tailwind CSS](https://tailwindcss.com/docs/utility-first)
* [Remark](https://remark.js.org/)
* [Gray Matter](https://github.com/jonschlinkert/gray-matter)

## Core features
* Write articles in markdown
* Markdown is already styled. Just start writing.
* Dark mode based on OS preference, with toggle to manually change.
* Google Analytics
* Email contact form (using SendGrid)
* Tailwind CSS v3.0
* Preformatted code syntax highlighting
* Priority image downloads for content above the fold, deferred downloads for below it
* Automatically generated sitemap and robots.txt
* Storybook.js

## Get started
This README will guide you through the basic set up. However, please refer to the blog posts in the [live demo](https://github.com/sandypockets/nextjs-blog-starter#live-demo) for more information. Don't worry, no lorem ipsums here. Each post contains real, actually helpful content. 

Built and tested with Node 14

### Create Next App
1. Bootstrap this starter using `create next app`.
```shell
yarn create next-app --example https://github.com/sandypockets/nextjs-blog-starter/tree/main nextjs-blog-starter
```

2. Change into the new project directory.
```shell
cd nextjs-blog-starter
```

3. Start the development server.

```shell
yarn dev
```

5. Once the server is running, visit [http://localhost:3000](http://localhost:3000) in your browser.
6. Set up constant variables, and prepare to generate a sitemap.
7. [Set up Google Analytics](https://github.com/sandypockets/nextjs-blog-starter#set-up-google-analytics)
8. [Set up SendGrid](https://github.com/sandypockets/nextjs-blog-starter#set-up-sendgrid).

### Constants

Set up each of the constants, much like you would a `.env`, in the `lib/constants.js` file.   

```javascript
export const EXAMPLE_PATH = 'blog-starter'
export const CMS_NAME = 'Markdown'
export const HOME_OG_IMAGE_URL = 'https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'
export const BLOG_NAME = 'Next.js Blog Starter'
export const KEYWORDS = 'starter, blog, next.js, template'
export const DESCRIPTION = 'A starter blog template for Next.js'
export const AUTHOR = 'sandypockets'
export const LANG = 'en-CA'
export const GITHUB_REPO = 'https://github.com/sandypockets'
```

### Generate a sitemap and robots.txt

Sitemaps are an important part of SEO. This section walks through adding your base URL to the sitemap generator. The generator runs automatically after each build, generating a new sitemap each time you update your blog. 

The generated sitemap can be found in `public/sitemap.xml`. This command also generates a new `public/robots.txt` file.

1. Open the `scripts/generate.sitemap.mjs` file.
2. On Line 5, replace `https://blog-starter.sandypockets.dev` with your own blog's website.
3. On Line 6, replace `en-CA` with your preferred locale (`en-UK`, `en-US`, etc.). This is used to determine the format of the date stamp in the sitemap.  

When you're ready to test it:

1. Run `yarn build`
2. Check the `public/` directory for the `sitemap.xml` file and `robots.txt` file.
3. Run `yarn start`
4. Visit `http://localhost:3000/sitemap.xml`

If you see the xml sitemap, then you're all set.

### Set up Google Analytics

You will need to have your Google tag ID. If you do not have one, or do not have a Google Analytics account, you can sign up at [analytics.google.com](https://analytics.google.com/)

1. Create a copy of the `.env.local.example` file, and name it `.env.local`. To do so in the terminal, run:

```shell
cp .env.local.example .env.local
```

2. Grab your Google tag ID from your Analytics account, and replace the `G-XXXXXXXXXX` in the new `.env.local` file you just created.

### Set up SendGrid
You will need a free SendGrid account, which allows you to send up to 100 emails each day.

1. Get your SendGrid API key from your SendGrid account.
2. Open the `.env.local` file that you created when setting up Google Analytics.
3. Replace `REPLACE-WITH-YOUR-API-KEY` with your actual API key from SendGrid.

## Dependencies
* @headlessui/react `^1.4.0`
* @heroicons/react `^1.0.4`
* @sendgrid/mail `^7.4.6`
* classnames `2.2.6`
* @tailwindcss/forms `^0.4.0`
* axios `^0.24.0`
* date-fns `2.16.1`
* gray-matter `4.0.2`
* next `latest`
* react `^17.0.2`
* react-dom `^17.0.2`
* remark `13.0.0`
* remark-html `13.0.1`
* remark-prism `^1.3.6`

### Dev Dependencies
* @babel/core `7.15.0`
* @storybook/addon-actions `^6.3.7`
* @storybook/addon-essentials `^6.3.7`
* @storybook/addon-links `^6.3.7`
* @storybook/react `^6.3.7`
* autoprefixer `^10.4.0`
* babel-loader `^8.2.2`
* globby `^13.1.1`
* postcss `^8.4.5`
* prettier `^2.5.1`
* tailwindcss `3.0.5`

## How it works
Blog posts are stored in the `/_posts` directory as Markdown files. Each post must include the appropriate front matter. 

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

### Front matter
An example of the required front matter:

> Note: The formatting of the front matter is important. Ensure the indentation, and quotes remain the same. 

```text
---
title: 'A blog starter you actually want to use'
excerpt: 'There are hundreds of different blog starters out there. But none felt quite right. So I built my own. Based off the basic Next.js Blog Starter, but now with several handy features like dark mode (using local storage) or Google Analytics. It comes with Storybook too.'
coverImage: '/assets/blog/a-nextjs-blog-starter-you-actually-want-to-use/tree-minimal.jpg'
date: '2021-08-24T05:35:07.322Z'
author:
  name: sandypockets
  picture: '/assets/blog/authors/sandypockets_avatar.jpg'
ogImage:
  url: '/assets/blog/a-nextjs-blog-starter-you-actually-want-to-use/tree-minimal.jpg'
---
```

Adjust the value of each key as needed.

### Create a new article
1. Add a new Markdown file (`.md`) to the `/_posts` directory. 
2. Add the required front matter (described above) and adjust it as needed. 
3. Images related to the post should be stored in within the appropriate the `/public/assets/blog` directory. It is recommended you create a new folder for each blog post to prevent the images files from growing unwieldy. 
4. That's it. Your new post will show up alongside the others on your homepage. 

> Note: The slug is the path that will be displayed, and is based on the title of your `.md` file. For example, `kobe.md` becomes `localhost:3000/posts/kobe`

## Contributing
Contributions are what make the open source community such an amazing place to be, learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature or Fix Branch (`git checkout -b feature/AmazingFeature` or `git checkout -b fix/ContactForm` ) 
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request