import { useEffect } from 'react'

export function Seo({ title, description }) {
  useEffect(() => {
    document.title = title

    const setMeta = (name, content) => {
      let tag = document.head.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    setMeta('description', description)
  }, [title, description])

  return null
}
