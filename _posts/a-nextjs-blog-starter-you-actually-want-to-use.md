---
title: 'A blog starter you actually want to use'
excerpt: 'There are hundreds of different blog starters out there. But none felt quite right. So I built my own. Based off the basic Next.js Blog Starter, but now with several handy features like dark mode (using local storage) or Google Analytics. It comes with Storybook too.'
coverImage: '/assets/blog/a-nextjs-blog-starter-you-actually-want-to-use/tree.jpg'
date: '2021-08-24T05:35:07.322Z'
author:
  name: sandypockets
  picture: '/assets/blog/authors/sandypockets_avatar.jpg'
ogImage:
  url: '/assets/blog/a-nextjs-blog-starter-you-actually-want-to-use/tree.jpg'
---

There are hundreds of Next.js blog starters out there. I've tinkered with a few dozen of them, and while there are many that are quite good, they just didn't seem to fit what I wanted to do with them. 

Instead, I created my own templates, and packed them full of all the extra features I wanted. But still, it wasn't quite right. 

I've always been drawn to the Next.js blog starter. The overall design is clean, but it still lacked features, like Google Analytics, or dark mode, that I'd become accustomed to with my own bespoke templates. _This_ starter, is the result of combining the features I've come to rely on with the OG Next blog starter. 

## Features
### Dark mode
The app defaults to the user's OS preferences. If the user hasn't selected an OS preference, the theme defaults to light mode. The user can switch between light and dark mode using the toggle in the nav. Dark/light theme preferences are stored on the client, in `localStorage.theme`

Adding new dark classes is easy. Simply prefix the Tailwind CSS class name with `dark:` and it will be applied during dark mode only. 

### Syntax highlighting
Is your blog code heavy? Tutorials? All code blocks are highlighted with Prism. The theme can be adjusted in the Meta component. 

### Google Analytics
Understanding traffic is a big part of blogging. Simply copy your Google ID, paste it into the `.env.local` file, and you're all set. The Google tag is set up to track a number of events, including form submissions. 

### Tailwind CSS
Tailwind keeps CSS manageable, in an understandable, and scalable way. If you're not already familiar with Tailwind, check it out [here](https://tailwindcss.com), and never look back. 

### Storybook
Storybook helps you build more composable components, by crafting and testing them in isolation. Run `yarn storybook` from the root directory to start Storybook and view stories. 

### Markdown
All blog posts are written in markdown, so you can focus on your content. Markdown file is prefaced with some front matter at the top of the file. Front matter is special content (existing between a set of `---`) that is similar to metadata. It's parsed using `remark`, and fed into a blog post template. 

