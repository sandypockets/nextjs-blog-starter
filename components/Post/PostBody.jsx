import { useEffect } from 'react'
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Prism) {
      window.Prism.highlightAll()
    }
  }, [content])

  return (
    <div className="max-w-3xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
