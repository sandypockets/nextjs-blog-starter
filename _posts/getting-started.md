---
title: 'Getting started with this template'
excerpt: 'Everything you need to know to get a Next.js blog up and running.'
coverImage: '/assets/blog/getting-started/snowy-mountain.jpg'
date: '2021-08-24T05:35:07.322Z'
author:
  name: sandypockets
  picture: '/assets/blog/authors/sandypockets_avatar.jpg'
ogImage:
  url: '/assets/blog/getting-started/cover.jpg'
---

# Getting started
These steps will guide you through creating your own local copy of the project. You'll learn how to quickly get it up and running, so you can get back to creating your content.

This app was built and tested with Node `14`. It uses React `17.0.2`, the latest version of `Next`, and Tailwind CSS `2.2.4`. Check out the `package.json` file for a complete list of dependencies.

## Use create-next-app

Create Next App is the fastest way to begin using this blog starter. You can use NPM or Yarn, but Yarn is recommended. 

1. Replace `my-new-blog` in either of the examples below (with whatever you'd like to use as the root directory), and run the command. 

```
# with npm
npx create-next-app --example https://github.com/sandypockets/nextjs-blog-starter/tree/main my-new-blog
```

<br/>

```shell
# with yarn
yarn create next-app --example https://github.com/sandypockets/nextjs-blog-starter/tree/main my-new-blog
```

2. Once the project is created, change into the directory. 

```shell
cd my-new-blog
```

3. Install dependencies. 

```shell
yarn install
```

or if you used npm

```shell
npm install
```

### Development server

You can start the development server with `yarn`, `npm`, or `next`. 

```shell
# yarn
yarn dev

# npm
npm dev

# next
next dev
```

Once the server is running, visit [http://localhost:3000](http://localhost:3000) in your browser.

### Set up Google Analytics

You will need to have your Google tag ID. If you do not have one, or do not have a Google Analytics account, you can sign up at [analytics.google.com](https://analytics.google.com/)

1. Create a copy of the `.env.local.example` file, and name it `.env.local`. In the terminal, run:

```shell
cp .env.local.example .env.local
```

2. Grab your Google tag ID from your Analytics account, and replace the `G-XXXXXXXXXX` in the new `.env.local` file you just created.

### Set up SendGrid
You will need a free SendGrid account, which allows you to send up to 100 emails each day. Replace the `REPLACE-WITH-YOUR-API-KEY` text in the `.env.exa

1. Get your SendGrid API key from your SendGrid account.
2. Open the `.env.local` file that you created when setting up Google Analytics.
3. Replace `REPLACE-WITH-YOUR-API-KEY` with your actual API key from SendGrid.

### Storybook

Storybook is handy for crafting and tweaking components. Styling components in isolation this way can help make them more composable, since they're less reliant on the environment they're rendered in. Storybook runs on a separate server, so you can run it alongside the development server if you prefer.

1. To use Storybook, start the Storybook server.

```shell
yarn storybook
```

2. Visit [http://localhost:6006/](http://localhost:6006/) in your browser.

## Building for production

While it's always a good idea to check out the build, it is especially important with Tailwind CSS. Tailwind purges unused classes to keep the build size light. However, if you've added classes dynamically with JavaScript, then you should be sure those classes weren't removed during build. Learn more in the [Optimizing for production](https://tailwindcss.com/docs/optimizing-for-production) section of the Tailwind docs.

1. Start building.

```shell
yarn build
```

2. Once building is complete, run the build.

```shell
yarn start
```

3. Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Adding content

Learn how to add content like blog posts or pages.

### Add a blog post

1. Add a new Markdown file (`.md`) to the `/_posts` directory.
2. Add the required front matter (described below) and adjust it as needed.
3. Images related to the post should be stored in within the appropriate the `/public/assets/blog` directory. It is recommended you create a new folder for each blog post to prevent the images files from growing unwieldy.
4. That's it. Your new post will show up alongside the others on your homepage.

> Note: The slug is the path that will be displayed, and is based on the title of your `.md` file. For example, `kobe.md` becomes `localhost:3000/posts/kobe`

#### How it works
Blog posts are stored in the `/_posts` directory as Markdown files. To create a new post, simply add a new markdown file (`.md`) to the `/_posts` directory. Each post must include the appropriate front matter.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

##### Front matter
An example of the required front matter:

> Note: The formatting of the front matter is important. Ensure the indentation remains the same.

```text
---
title: 'A blog starter you actually want to use'
excerpt: 'There are hundreds of different blog starters out there. But none felt quite right. So I built my own. Based off the basic Next.js Blog Starter, but now with several handy features like dark mode (using local storage) or Google Analytics. It comes with Storybook too.'
coverImage: '/assets/blog/dynamic-routing/tree.jpg'
date: '2021-08-24T05:35:07.322Z'
author:
  name: sandypockets
  picture: '/assets/blog/authors/sandypockets_avatar.jpg'
ogImage:
  url: '/assets/blog/dynamic-routing/tree.jpg'
---
```

Adjust the value of each key as needed.

### Add a page

Next.js makes routing easy. All pages live in the `/pages` directory. The file names used in that directory will map to the path in the browser. 

> Example: `/pages/cool-page.jsx` becomes `localhost:3000/pages/cool-page`

### Manage global data

Global variables, like your blog's name, or your GitHub URL, can be managed in `/lib/constants.js`

You can adjust the blog's metadata (some of which relies on the global variables described above) can be adjusted in the `/components/Layout/Meta.jsx` component. 