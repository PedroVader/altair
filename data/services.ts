// data/services.ts

export interface Service {
    name: string;
    slug: string;
    icon: string;
    shortDescription: string;
    description: string;
    features?: string[];
    benefits?: string[];
  }
  
  export const services: Service[] = [
    {
      name: 'Roof Inspection',
      slug: 'roof-inspection',
      icon: 'mdi:clipboard-search',
      shortDescription: 'Comprehensive roof inspections to identify potential issues before they become major problems.',
      description: 'Our professional roof inspection services in Austin provide thorough assessments of your roof\'s condition. We examine every aspect of your roofing system, from shingles to flashing, identifying potential problems before they escalate into costly repairs.',
      features: [
        'Complete visual inspection of roof surface',
        'Assessment of shingles, flashing, and gutters',
        'Interior inspection for water damage signs',
        'Detailed written report with photos',
        'Free estimates for recommended repairs',
        'Drone inspection available for hard-to-reach areas'
      ],
      benefits: [
        'Identify problems early',
        'Extend roof lifespan',
        'Prevent costly repairs',
        'Peace of mind',
        'Insurance documentation'
      ]
    },
    {
      name: 'Roof Estimate',
      slug: 'roof-estimate',
      icon: 'mdi:calculator',
      shortDescription: 'Free, detailed estimates for all your roofing needs with transparent pricing.',
      description: 'Get accurate, transparent roofing estimates from Austin\'s trusted roofing experts. We provide detailed breakdowns of all costs, materials, and labor, so you know exactly what to expect with no hidden fees or surprises.',
      features: [
        'Free on-site evaluation',
        'Detailed cost breakdown',
        'Multiple material options',
        'Financing options available',
        'Written guarantee',
        'Same-day estimates available'
      ],
      benefits: [
        'No obligation',
        'Transparent pricing',
        'Compare options easily',
        'Budget planning',
        'Expert recommendations'
      ]
    },
    {
      name: 'Roof Repair',
      slug: 'roof-repair',
      icon: 'mdi:tools',
      shortDescription: 'Fast, reliable roof repairs for leaks, damage, and wear throughout Austin.',
      description: 'When your roof needs repairs, time is of the essence. Our expert team provides fast, reliable roof repair services throughout Austin and surrounding areas. From minor leaks to extensive damage, we fix it right the first time.',
      features: [
        'Emergency repair services',
        'Leak detection and repair',
        'Shingle replacement',
        'Flashing repair',
        'Gutter repair',
        'Same-day service available'
      ],
      benefits: [
        'Prevent further damage',
        'Cost-effective solution',
        'Quick turnaround',
        'Warranty on repairs',
        'Licensed professionals'
      ]
    },
    {
      name: 'Re-Roof',
      slug: 're-roof',
      icon: 'mdi:autorenew',
      shortDescription: 'Complete re-roofing services to restore your roof\'s protection and appearance.',
      description: 'Re-roofing involves installing a new roof over your existing roof system. This cost-effective solution can extend your roof\'s life and improve your home\'s appearance without the expense of a complete tear-off.',
      features: [
        'Installation over existing roof',
        'Multiple material options',
        'Improved energy efficiency',
        'Enhanced curb appeal',
        'Lifetime warranty available',
        'Professional installation'
      ],
      benefits: [
        'Cost-effective solution',
        'Faster installation',
        'Less waste',
        'Improved protection',
        'Increased home value'
      ]
    },
    {
      name: 'Roof Replacement',
      slug: 'roof-replacement',
      icon: 'mdi:home-roof',
      shortDescription: 'Complete roof replacement services with premium materials and expert installation.',
      description: 'When repairs aren\'t enough, trust our expert team for complete roof replacement services. We remove your old roof and install a brand-new system with premium materials, ensuring decades of reliable protection for your Austin home.',
      features: [
        'Complete tear-off and replacement',
        'Premium roofing materials',
        'Deck inspection and repair',
        'Updated ventilation systems',
        'Enhanced insulation options',
        'Comprehensive warranty'
      ],
      benefits: [
        'Long-term protection',
        'Improved energy efficiency',
        'Increased property value',
        'Enhanced curb appeal',
        'Peace of mind'
      ]
    },
    {
      name: 'Roof Installation',
      slug: 'roof-installation',
      icon: 'mdi:hammer-wrench',
      shortDescription: 'Professional roof installation for new construction and additions.',
      description: 'Building new or adding to your Austin home? Our professional roof installation services ensure your new roof is installed correctly from the start. We work with builders and homeowners to deliver quality roofing that lasts.',
      features: [
        'New construction roofing',
        'Addition roofing',
        'Custom designs',
        'Premium materials',
        'Code compliance',
        'Project coordination'
      ],
      benefits: [
        'Quality from the start',
        'Proper installation',
        'Material warranty',
        'Professional service',
        'Timely completion'
      ]
    },
    {
      name: 'Storm Damage',
      slug: 'storm-damage',
      icon: 'mdi:weather-lightning',
      shortDescription: '24/7 emergency storm damage repair and restoration services.',
      description: 'Texas weather can be brutal on roofs. Our emergency storm damage services are available 24/7 to protect your Austin home. We respond quickly, assess damage, provide temporary repairs, and work with your insurance company for complete restoration.',
      features: [
        '24/7 emergency response',
        'Immediate damage assessment',
        'Temporary repairs',
        'Insurance claim assistance',
        'Complete restoration',
        'Direct insurance billing'
      ],
      benefits: [
        'Rapid response',
        'Prevent further damage',
        'Insurance expertise',
        'Complete restoration',
        'Peace of mind'
      ]
    },
    {
      name: 'Hail Damage',
      slug: 'hail-damage',
      icon: 'mdi:weather-hail',
      shortDescription: 'Expert hail damage inspection, documentation, and repair services.',
      description: 'Hail can cause significant damage to your roof, even if it\'s not immediately visible. Our hail damage specialists provide thorough inspections, detailed documentation for insurance claims, and expert repairs to restore your Austin roof.',
      features: [
        'Free hail damage inspection',
        'Detailed damage documentation',
        'Photo evidence for insurance',
        'Insurance claim guidance',
        'Complete repair services',
        'Warranty on all work'
      ],
      benefits: [
        'Expert assessment',
        'Insurance support',
        'Full restoration',
        'Prevent future issues',
        'Professional service'
      ]
    },
    {
      name: 'Wind Damage',
      slug: 'wind-damage',
      icon: 'mdi:weather-windy',
      shortDescription: 'Wind damage repair and prevention services for Austin homes.',
      description: 'High winds can lift shingles, damage flashing, and compromise your roof\'s integrity. Our wind damage specialists quickly identify and repair wind-related damage, preventing water intrusion and further deterioration of your Austin roof.',
      features: [
        'Wind damage assessment',
        'Shingle replacement',
        'Flashing repair',
        'Structural reinforcement',
        'Preventive measures',
        'Emergency tarping'
      ],
      benefits: [
        'Quick repairs',
        'Prevent water damage',
        'Structural protection',
        'Insurance assistance',
        'Expert service'
      ]
    }
  ];