import { writeFileSync } from 'fs'
import RSS from 'rss'
import { globby } from 'globby'
import fs from 'fs'
import matter from 'gray-matter'

const BLOG_URL = 'https://blog-starter.sandypockets.dev'

async function generate() {
  const allBlogs = await globby(['_posts/*.md'])

  const feed = new RSS({
    title: 'Next.js Blog Starter',
    site_url: BLOG_URL,
    feed_url: `${BLOG_URL}/feed.xml`,
  })

  allBlogs.map((post) => {
    if (!post) return
    const fileContents = fs.readFileSync(post, 'utf8')
    const { data } = matter(fileContents)
    const slug = post.replace('_posts', '/posts').replace('.md', '')
    feed.item({
      title: data.title,
      url: `${BLOG_URL}${slug}`,
      date: data.date,
      description: data.excerpt,
    })
  })

  writeFileSync('public/feed.xml', feed.xml({ indent: true }))
}

generate()
