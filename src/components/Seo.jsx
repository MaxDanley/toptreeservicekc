import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { siteMeta } from '../data/siteData'

export function Seo({ title, description, pathname = '', image = siteMeta.defaultOgImage, keywords = '' }) {
  const location = useLocation()

  useEffect(() => {
    const resolvedPath = pathname || location.pathname
    const canonicalUrl = `${siteMeta.baseUrl}${resolvedPath}`
    const ogImageUrl = image.startsWith('http') ? image : `${siteMeta.baseUrl}${image}`

    document.title = title

    const setMetaByName = (name, content) => {
      let tag = document.head.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    const setMetaByProperty = (property, content) => {
      let tag = document.head.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    const setCanonical = (href) => {
      let link = document.head.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }

    setMetaByName('description', description)
    setMetaByName('robots', 'index, follow, max-image-preview:large')
    setMetaByName('twitter:card', 'summary_large_image')
    setMetaByName('twitter:title', title)
    setMetaByName('twitter:description', description)
    setMetaByName('twitter:image', ogImageUrl)
    if (keywords) {
      setMetaByName('keywords', keywords)
    }

    setMetaByProperty('og:title', title)
    setMetaByProperty('og:description', description)
    setMetaByProperty('og:type', 'website')
    setMetaByProperty('og:url', canonicalUrl)
    setMetaByProperty('og:image', ogImageUrl)
    setMetaByProperty('og:site_name', siteMeta.brand)

    setCanonical(canonicalUrl)
  }, [title, description, pathname, image, keywords, location.pathname])

  return null
}
