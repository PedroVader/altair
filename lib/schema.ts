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
      telephone: '+1-512-555-0123',
      email: 'info@altairaustin.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Main Street',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        postalCode: '78701',
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
      sameAs: [
        'https://www.facebook.com/altairaustin',
        'https://www.instagram.com/altairaustin',
        'https://www.linkedin.com/company/altairaustin',
        'https://www.yelp.com/biz/altair-austin-roofing'
      ],
      priceRange: '$$',
      areaServed: [
        { '@type': 'City', name: 'Austin, TX' },
        { '@type': 'City', name: 'Round Rock, TX' },
        { '@type': 'City', name: 'Cedar Park, TX' },
        { '@type': 'City', name: 'Georgetown, TX' },
        { '@type': 'City', name: 'Pflugerville, TX' },
        { '@type': 'City', name: 'Leander, TX' },
        { '@type': 'City', name: 'Lakeway, TX' },
        { '@type': 'City', name: 'Buda, TX' },
        { '@type': 'City', name: 'Kyle, TX' },
        { '@type': 'City', name: 'Dripping Springs, TX' }
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
      }
    };
  }
  
  // Schema para página de roof type individual
  export function getRoofTypeSchema(roofTypeName: string, roofTypeDescription: string, roofTypeSlug: string, averageLifespan?: string, averageCost?: string) {
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
          name: 'Altair Austin Roofing'
        }
      }
    };
  }
  
  // Schema para página de location individual
  export function getLocationSchema(locationName: string, locationZip: string, locationSlug: string, locationDescription: string) {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `https://altairaustin.com/locations/${locationSlug}`,
      name: `Altair Austin Roofing - ${locationName}`,
      description: locationDescription,
      telephone: '+1-512-555-0123',
      email: 'info@altairaustin.com',
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
          }
        ]
      }
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
          contactType: 'customer service'
        }
      }
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