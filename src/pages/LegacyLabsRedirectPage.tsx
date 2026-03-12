import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function LegacyLabsRedirectPage() {
  const { slug } = useParams()

  useEffect(() => {
    window.location.replace(slug ? `/${slug}` : '/')
  }, [slug])

  return null
}
