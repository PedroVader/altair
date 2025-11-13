// data/locations.ts

export interface Location {
    name: string;
    slug: string;
    zip: string;
    description: string;
    neighborhoods?: string[];
  }
  
  export const locations: Location[] = [
    {
      name: 'Austin',
      slug: 'austin-roofing-company',
      zip: '78701',
      description: 'Professional roofing services in Austin. Serving downtown and surrounding areas with quality residential roofing solutions.',
      neighborhoods: ['Downtown Austin', 'East Austin', 'South Congress', 'Zilker']
    },
    {
      name: 'Round Rock',
      slug: 'round-rock-roofing-company',
      zip: '78664',
      description: 'Expert roofing contractors in Round Rock. Trusted for residential roof repair, replacement, and installation.',
      neighborhoods: ['Downtown Round Rock', 'Stone Oak', 'Forest Creek']
    },
    {
      name: 'Cedar Park',
      slug: 'cedar-park-roofing-company',
      zip: '78613',
      description: 'Reliable roofing services in Cedar Park. Specialized in storm damage repair and new roof installation.',
      neighborhoods: ['Buttercup Creek', 'Anderson Mill', 'Whitestone']
    },
    {
      name: 'Georgetown',
      slug: 'georgetown-roofing-company',
      zip: '78626',
      description: 'Quality roofing services in Georgetown. Family-owned business serving the community since 2008.',
      neighborhoods: ['Downtown Georgetown', 'Sun City', 'Berry Creek']
    },
    {
      name: 'Lakeway',
      slug: 'lakeway-roofing-company',
      zip: '78734',
      description: 'Premium roofing services in Lakeway. Luxury home specialists with superior craftsmanship.',
      neighborhoods: ['Lakeway Highlands', 'The Hills', 'Rough Hollow']
    },
    {
      name: 'Buda',
      slug: 'buda-roofing-company',
      zip: '78610',
      description: 'Affordable roofing services in Buda. Quality service for all budgets with excellent results.',
      neighborhoods: ['Downtown Buda', 'Garlic Creek', 'Legend Point']
    },
    {
      name: 'Pflugerville',
      slug: 'pflugerville-roofing-company',
      zip: '78660',
      description: 'Professional roofing contractors in Pflugerville. Fast response times and quality workmanship.',
      neighborhoods: ['Pfluger Park', 'Blackhawk', 'Windermere']
    },
    {
      name: 'Leander',
      slug: 'leander-roofing-company',
      zip: '78641',
      description: 'Trusted roofing services in Leander. Serving growing families with reliable roofing solutions.',
      neighborhoods: ['Crystal Falls', 'Northline', 'Mason Hills']
    },
    {
      name: 'Kyle',
      slug: 'kyle-roofing-company',
      zip: '78640',
      description: 'Local roofing experts in Kyle. Community-focused service with professional results.',
      neighborhoods: ['Plum Creek', 'Waterleaf', 'Blanco Vista']
    },
    {
      name: 'Dripping Springs',
      slug: 'dripping-springs-roofing-company',
      zip: '78620',
      description: 'Hill Country roofing specialists in Dripping Springs. Understanding unique roofing challenges.',
      neighborhoods: ['Caliterra', 'Headwaters', 'Belterra']
    }
  ];