import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import remarkGfm from 'remark-gfm'

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html)
    .use(remarkGfm)
    .use(prism)
    .process(markdown)
  return result.toString()
}
