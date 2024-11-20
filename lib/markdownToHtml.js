import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import remarkGfm from 'remark-gfm'

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(prism)
    .use(remarkGfm)
    .use(html)
    .process(markdown)
  return result.toString()
}
