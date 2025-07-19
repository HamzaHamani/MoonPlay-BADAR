export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MoonPlay",
  url: "https://moonplay.live",
  logo: "https://moonplay.live/placeholder-logo.svg",
  description:
    "Premium IPTV service offering 3000+ live TV channels, sports, movies & series with HD/4K quality worldwide.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX",
    contactType: "customer service",
    availableLanguage: ["English", "Arabic", "French"],
  },
  sameAs: [
    "https://www.facebook.com/moonplay",
    "https://www.twitter.com/moonplay",
    "https://www.instagram.com/moonplay",
  ],
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MoonPlay IPTV Service",
  description:
    "Premium IPTV streaming service with 3000+ live channels, HD/4K quality, and multi-device support",
  brand: {
    "@type": "Brand",
    name: "MoonPlay",
  },
  offers: {
    "@type": "Offer",
    url: "https://moonplay.live",
    priceCurrency: "USD",
    price: "19.99",
    priceValidUntil: "2025-12-31",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1250",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MoonPlay",
  url: "https://moonplay.live",
  description:
    "Premium IPTV service offering 3000+ live TV channels, sports, movies & series",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://moonplay.live/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "IPTV Streaming Service",
  provider: {
    "@type": "Organization",
    name: "MoonPlay",
  },
  description:
    "Premium IPTV streaming service with 3000+ live channels, sports, movies, and series in HD/4K quality",
  offers: {
    "@type": "Offer",
    url: "https://moonplay.live",
    priceCurrency: "USD",
    price: "19.99",
  },
};
