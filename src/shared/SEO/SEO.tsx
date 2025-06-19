import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title?: string
  description?: string
  image?: string
  url?: string
}

export const SEO: FC<SEOProps> = ({
  title = 'Кристина & Вадим - Свадьба',
  description = 'Приглашаем вас на нашу свадьбу 15 сентября 2025 года в Санкт-Петербурге',
  image = '/wedding-preview.jpg',
  url = 'https://vadoslight.github.io/wedding/'
}) => {
  const fullTitle = title
  const fullDescription = description

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={image} />

      {/* Дополнительные метатеги */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="canonical" href={url} />
    </Helmet>
  )
} 