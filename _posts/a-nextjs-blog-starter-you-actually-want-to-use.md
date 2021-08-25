---
title: 'A blog starter you actually want to use'
excerpt: 'There are hundreds of different blog starters out there. But none felt quite right. So I built my own. Based off the basic Next.js Blog Starter, but now with several handy features like dark mode (using local storage) or Google Analytics. It comes with Storybook too.'
coverImage: '/assets/blog/a-nextjs-blog-starter-you-actually-want-to-use/tree-minimal.jpg'
date: '2021-08-24T05:35:07.322Z'
author:
  name: sandypockets
  picture: '/assets/blog/authors/sandypockets_avatar.jpg'
ogImage:
  url: '/assets/blog/a-nextjs-blog-starter-you-actually-want-to-use/tree.jpg'
---

There are hundreds of Next.js blog starters out there. I've tinkered with a few dozen of them, and while there are many that are quite good, they just didn't seem to fit what I wanted to do with them. Nothing was ready out of the box. That's fine for some projects, but for others, I'm not looking to reinvent the wheel. 

I've always been drawn to the Next.js blog starter. The overall design is clean, and it supports markdown, though it doesn't come with much styling for it. But still lacked features, like Google Analytics, dark mode, or syntax highlighting, that I'd become accustomed to with my own bespoke templates. _This_ starter, is the result of combining the features I've come to rely on with much of the OG Next blog starter's slick layout. 

## Features ✨

##### Dark mode
The app defaults to the user's OS preferences. If the user hasn't selected an OS preference, the theme defaults to light mode. The user can switch between light and dark mode using the toggle in the nav. Dark/light theme preferences are stored on the client, in `localStorage.theme`

Adding new dark classes is easy. Simply prefix the Tailwind CSS class name with `dark:` and it will be applied during dark mode only.

##### Google Analytics
Understanding traffic is a big part of blogging. Simply copy your Google ID, paste it into the `.env.local` file, and you're all set. The Google tag is set up to track a number of events, including form submissions. 

##### A working contact form
The contact form uses [SendGrid](https://sendgrid.com/) to send emails from your contact form on your behalf. Their free plan is suitable. Just add your SendGrid API key, and your "to" and "from" email addresses to the `.env.local` file, and you're all set. Submissions to the contact form will be emailed directly to your inbox. And, as mentioned above, all submissions on the contact form are tracked as Google Analytics events. 

##### Markdown
It's a blog. We're here for the content. You shouldn't be wrangling HTML or CSS. You should be writing. Creating. That's it. And that's exactly what markdown lets you do. But, unlike many blog starters touting markdown, _this_ starter actually comes with built-in styling. Take a look at the [Markdown Guide](/posts/markdown-guide) for examples. 

##### Syntax highlighting
Is your blog code heavy? Tutorials? All preformatted (`<pre>`) code blocks are highlighted with Prism. The theme can be adjusted in the Meta component.

##### Tailwind CSS
Tailwind keeps CSS manageable, in an understandable, and scalable way. If you're not already familiar with Tailwind, check it out [here](https://tailwindcss.com), and never look back.

##### Storybook
Storybook helps you build more composable components, by crafting and testing them in isolation. Run `yarn storybook` from the root directory to start Storybook and view stories.

##### Statically generated
Need to show the same page to a bunch of users? Generate it at build. When your users ask for your content, deliver it lightning fast.

##### Image optimization
Defer images you don't need, and prioritize the ones you do. All the while, making sure you're serving up the smallest size possible without sacrificing quality. For example, the hero image on the homepage receives priority (since it's above the fold), while the images below the fold, in the "More stories" section, will be deferred. The same is true for the hero image on each blog post's page.

##### React
A fast, robust library. Popular enough that you'll always be able to find the tools and packages you need to build out custom features. 