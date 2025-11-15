// app/sitemap.ts
import { MetadataRoute } from 'next';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { roofTypes } from '@/data/roofTypes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://altairaustin.com';
  const currentDate = new Date();

  // Página principal
  const homePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Páginas de servicios
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Páginas de roof types
  const roofTypePages = roofTypes.map((roofType) => ({
    url: `${baseUrl}/roof-types/${roofType.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Páginas de locations
  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Páginas de location + service (todas las combinaciones)
  const locationServicePages = locations.flatMap((location) =>
    services.map((service) => ({
      url: `${baseUrl}/locations/${location.slug}/${service.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // Páginas de location + roof type (todas las combinaciones)
  const locationRoofTypePages = locations.flatMap((location) =>
    roofTypes.map((roofType) => ({
      url: `${baseUrl}/locations/${location.slug}/${roofType.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [
    ...homePages,
    ...servicePages,
    ...roofTypePages,
    ...locationPages,
    ...locationServicePages,
    ...locationRoofTypePages,
  ];
}