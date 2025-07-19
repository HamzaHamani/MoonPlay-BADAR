import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogTitle?: string
  ogDescription?: string
  twitterTitle?: string
  twitterDescription?: string
}

export function generateSEOMetadata({
  title = "MoonPlay - Premium IPTV Service | 3000+ Live Channels & Movies",
  description = "Stream 3000+ live TV channels, sports, movies & series with MoonPlay IPTV. HD/4K quality, worldwide content, multi-device support. Start watching instantly!",
  keywords = "IPTV, live TV streaming, sports channels, movies online, TV series, HD streaming, 4K content, premium IPTV service, global channels, entertainment streaming",
  canonicalUrl = "https://moonplay.live",
  ogImage = "/hero.jpg",
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords,
    metadataBase: new URL('https://moonplay.live'),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      url: canonicalUrl,
      siteName: 'MoonPlay',
      images: [
        {
          url: ogImage,
          width: 1280,
          height: 720,
          alt: 'MoonPlay IPTV Service - Premium Streaming Platform',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: twitterTitle || title,
      description: twitterDescription || description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
