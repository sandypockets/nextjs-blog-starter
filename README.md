# Next.js Blog Starter
A custom Next.js blog starter for use with `create next app`. This starter is based on the original blog starter provided by Next, but includes a few extra features and improvements.

## Core features
* Write articles in markdown
* Dark mode based on OS preference, with toggle to manually change.
* Tailwind CSS
* Google Analytics
* Storybook

### Improvements
* Hero image displayed above the fold receives priority loading.
* Dark mode detects preference based on user's OS. Dark mode can be manually toggled in the Nav, which then uses localStorage to keep track of the user's preference. 

## Get started
### Create Next App
You can bootstrap this starter using `create next app`. 

```shell
# with npm
npx create-next-app --example https://github.com/sandypockets/nextjs-blog-starter
```

```shell
# with yarn
yarn create next-app --example https://github.com/sandypockets/nextjs-blog-starter
```

### Dependencies
* @headlessui/react `^1.4.0`
* @heroicons/react `^1.0.4`
* classnames `2.2.6`
* date-fns `2.16.1`
* gray-matter `4.0.2`
* next `latest`
* react `^17.0.2`
* react-dom `^17.0.2`
* remark `13.0.0`
* remark-html `13.0.1`

#### Dev Dependencies
* @babel/core `7.15.0`
* @storybook/addon-actions `^6.3.7`
* @storybook/addon-essentials `^6.3.7`
* @storybook/addon-links `^6.3.7`
* @storybook/react `^6.3.7`
* autoprefixer `^10.2.1`
* babel-loader `^8.2.2`
* postcss `^8.2.4`
* tailwindcss `npm:@tailwindcss/postcss7-compat@^2.2.4`

## How it works
Blog posts are stored in the `/_posts` directory as Markdown files. Each post must include the appropriate front matter. 

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

### Front matter
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

### Create a new article
1. Add a new Markdown file (`.md`) to the `/_posts` directory. 
2. Add the required front matter (described above) and adjust it as needed. 
3. Images related to the post should be stored in within the appropriate the `/public/assets/blog` directory. It is recommended you create a new folder for each blog post to prevent the images files from growing unwieldy. 
4. That's it. Your new post will show up alongside the others on your homepage. 

> Note: The slug is the path that will be displayed, and is based on the title of your `.md` file. For example, `kobe.md` becomes `localhost:3000/posts/kobe`

## Contributing

## Acknowledgements