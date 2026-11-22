export interface LocalBusinessSchemaProps {
  name: string;
  alternateName?: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
}

export function generateOrganizationSchema(props: LocalBusinessSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${props.url}#organization`,
    name: props.name,
    alternateName: props.alternateName,
    description: props.description,
    url: props.url,
    telephone: props.telephone,
    email: props.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: props.address.streetAddress,
      addressLocality: props.address.addressLocality,
      addressRegion: props.address.addressRegion,
      postalCode: props.address.postalCode,
      addressCountry: props.address.addressCountry,
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Uttar Pradesh',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
    priceRange: '₹₹₹',
    openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:30-19:30',
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  providerName: string;
  providerUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: service.providerName,
      url: service.providerUrl,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Uttar Pradesh, India',
    },
  };
}

export function generateCreativeWorkSchema(work: {
  headline: string;
  description: string;
  creator: string;
  url: string;
  dateCreated?: string;
  genre: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    headline: work.headline,
    description: work.description,
    creator: {
      '@type': 'Organization',
      name: work.creator,
    },
    url: work.url,
    genre: work.genre,
    inLanguage: ['hi', 'en'],
  };
}
