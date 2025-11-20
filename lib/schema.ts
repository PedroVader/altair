// lib/schema.ts

// Schema principal de la organización (para todas las páginas)
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': 'https://altairaustin.com/#organization',
    name: 'Altair Austin Roofing',
    url: 'https://altairaustin.com',
    logo: 'https://altairaustin.com/logo.png',
    image: 'https://altairaustin.com/worker-repairing-roof.jpg',
    description: 'Professional roofing services in Austin, TX. Residential roof repair, replacement, and installation. Licensed, insured, and trusted since 2008.',
    slogan: 'Expert roofing solutions for Central Texas homes and businesses',
    telephone: '+1-512-555-0123',
    email: 'info@austinroofingcompany.com',
    
    // Dirección principal
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '78701',
      addressCountry: 'US'
    },
    
    // Coordenadas GPS
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.267153,
      longitude: -97.743057
    },
    
    // Horario 24/7
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday', 
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    
    // Redes sociales
    sameAs: [
      'https://www.facebook.com/altairaustin',
      'https://www.instagram.com/altairaustin',
      'https://www.linkedin.com/company/altairaustin',
      'https://www.yelp.com/biz/altair-austin-roofing'
    ],
    
    // Rango de precios
    priceRange: '$$',
    
    // Métodos de pago aceptados
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'Check'],
    
    // Google Maps
    hasMap: 'https://goo.gl/maps/austinroofing',
    
    // Áreas servidas con códigos postales
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        geo: {
          '@type': 'GeoShape',
          postalcode: [
            '78701', '78702', '78703', '78704', '78705', '78712', '78717', '78719',
            '78721', '78722', '78723', '78724', '78725', '78726', '78727', '78728',
            '78729', '78730', '78731', '78732', '78733', '78734', '78735', '78736',
            '78737', '78738', '78739', '78741', '78742', '78744', '78745', '78746',
            '78747', '78748', '78749', '78750', '78751', '78752', '78753', '78754',
            '78756', '78757', '78758', '78759'
          ]
        },
        containsPlace: [
          { '@type': 'City', name: 'Austin', url: 'https://en.wikipedia.org/wiki/Austin,_Texas' },
          { '@type': 'City', name: 'Round Rock', url: 'https://en.wikipedia.org/wiki/Round_Rock,_Texas' },
          { '@type': 'City', name: 'Cedar Park', url: 'https://en.wikipedia.org/wiki/Cedar_Park,_Texas' },
          { '@type': 'City', name: 'Georgetown', url: 'https://en.wikipedia.org/wiki/Georgetown,_Texas' },
          { '@type': 'City', name: 'Pflugerville', url: 'https://en.wikipedia.org/wiki/Pflugerville,_Texas' },
          { '@type': 'City', name: 'Leander', url: 'https://en.wikipedia.org/wiki/Leander,_Texas' },
          { '@type': 'City', name: 'Lakeway', url: 'https://en.wikipedia.org/wiki/Lakeway,_Texas' },
          { '@type': 'City', name: 'Buda', url: 'https://en.wikipedia.org/wiki/Buda,_Texas' },
          { '@type': 'City', name: 'Kyle', url: 'https://en.wikipedia.org/wiki/Kyle,_Texas' },
          { '@type': 'City', name: 'Dripping Springs', url: 'https://en.wikipedia.org/wiki/Dripping_Springs,_Texas' }
        ]
      }
    ],
    
    knowsAbout: [
      'commercial roofing',
      'residential roofing',
      'roof repair',
      'roof replacement',
      'roof installation',
      'roof inspection',
      'storm damage repair',
      'hail damage repair',
      'wind damage repair',
      'asphalt shingles',
      'asphalt roofing',
      'metal roofing',
      'tile roofing',
      'clay roofing',
      'concrete roofing',
      'fiberglass roofing',
      'flat roofing',
      'emergency roof repair',
      're-roofing',
      'roof maintenance',
      'https://en.wikipedia.org/wiki/Roofing',
      'https://en.wikipedia.org/wiki/Roof',
      'https://en.wikipedia.org/wiki/Roofer',
      'https://en.wikipedia.org/wiki/Asphalt_shingle',
      'https://en.wikipedia.org/wiki/Metal_roof'
    ]
  };
}

// Schema para página de servicio individual
export function getServiceSchema(serviceName: string, serviceDescription: string, serviceSlug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://altairaustin.com/services/${serviceSlug}`,
    name: serviceName,
    description: serviceDescription,
    serviceType: 'Roofing Service',
    brand: {
      '@type': 'Brand',
      name: 'Altair Austin Roofing'
    },
    provider: {
      '@type': 'RoofingContractor',
      name: 'Altair Austin Roofing',
      url: 'https://altairaustin.com',
      telephone: '+1-512-555-0123',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        postalCode: '78701',
        addressCountry: 'US'
      }
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Austin',
        containedInPlace: {
          '@type': 'State',
          name: 'Texas'
        }
      }
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://altairaustin.com/services/${serviceSlug}`,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+1-512-555-0123',
        contactType: 'customer service',
        availableLanguage: ['English', 'Spanish']
      }
    },
    audience: 'Anyone who needs commercial or residential roofing services performed by local professionals.'
  };
}

// Schema para página de roof type individual
export function getRoofTypeSchema(
  roofTypeName: string, 
  roofTypeDescription: string, 
  roofTypeSlug: string, 
  averageLifespan?: string, 
  averageCost?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://altairaustin.com/roof-types/${roofTypeSlug}`,
    name: roofTypeName,
    description: roofTypeDescription,
    category: 'Roofing Material',
    brand: {
      '@type': 'Brand',
      name: 'Altair Austin Roofing'
    },
    ...(averageLifespan && {
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Average Lifespan',
          value: averageLifespan
        },
        ...(averageCost ? [{
          '@type': 'PropertyValue',
          name: 'Average Cost',
          value: averageCost
        }] : [])
      ]
    }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      seller: {
        '@type': 'RoofingContractor',
        name: 'Altair Austin Roofing',
        url: 'https://altairaustin.com'
      }
    }
  };
}

// Schema para página de location individual
export function getLocationSchema(
  locationName: string, 
  locationZip: string, 
  locationSlug: string, 
  locationDescription: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://altairaustin.com/locations/${locationSlug}`,
    name: `Altair Austin Roofing - ${locationName}`,
    description: locationDescription,
    telephone: '+1-512-555-0123',
    email: '',
    url: `https://altairaustin.com/locations/${locationSlug}`,
    image: 'https://altairaustin.com/worker-repairing-roof.jpg',
    priceRange: '$$',
    
    address: {
      '@type': 'PostalAddress',
      addressLocality: locationName,
      addressRegion: 'TX',
      postalCode: locationZip,
      addressCountry: 'US'
    },
    
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.267153,
      longitude: -97.743057
    },
    
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday', 
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    
    areaServed: {
      '@type': 'City',
      name: locationName,
      containedInPlace: {
        '@type': 'State',
        name: 'Texas'
      }
    },
    
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Roofing Services in ${locationName}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Repair',
            description: `Professional roof repair services in ${locationName}, TX`
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Replacement',
            description: `Complete roof replacement services in ${locationName}, TX`
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Installation',
            description: `New roof installation in ${locationName}, TX`
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Storm Damage Repair',
            description: `Emergency storm damage repair in ${locationName}, TX`
          }
        }
      ]
    },
    
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'Check']
  };
}

// Schema para location + service combinado
export function getLocationServiceSchema(
  locationName: string, 
  locationZip: string, 
  locationSlug: string,
  serviceName: string,
  serviceDescription: string,
  serviceSlug: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://altairaustin.com/locations/${locationSlug}/${serviceSlug}`,
    name: `${serviceName} in ${locationName}, TX`,
    description: `${serviceDescription} Professional services in ${locationName}, Texas.`,
    serviceType: serviceName,
    
    provider: {
      '@type': 'RoofingContractor',
      name: 'Altair Austin Roofing',
      url: 'https://altairaustin.com',
      telephone: '+1-512-555-0123',
      address: {
        '@type': 'PostalAddress',
        addressLocality: locationName,
        addressRegion: 'TX',
        postalCode: locationZip,
        addressCountry: 'US'
      }
    },
    
    areaServed: {
      '@type': 'City',
      name: locationName,
      containedInPlace: {
        '@type': 'State',
        name: 'Texas'
      }
    },
    
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://altairaustin.com/locations/${locationSlug}/${serviceSlug}`,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+1-512-555-0123',
        contactType: 'customer service',
        availableLanguage: ['English', 'Spanish']
      }
    },
    
    audience: `Anyone in ${locationName} who needs professional ${serviceName.toLowerCase()} services.`
  };
}

// Schema de BreadcrumbList
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://altairaustin.com${item.url}`
    }))
  };
}

// Schema para FAQs
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}