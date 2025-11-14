// data/roofTypes.ts

export interface RoofType {
    name: string;
    slug: string;
    icon: string;
    shortDescription: string;
    description: string;
    materials?: string[];
    pros?: string[];
    cons?: string[];
    averageLifespan?: string;
    averageCost?: string;
    maintenance?: string;
    idealFor?: string[];
    notIdealFor?: string[];
  }
  
  export const roofTypes: RoofType[] = [
    {
      name: 'Asphalt Shingles Roof',
      slug: 'asphalt-shingles-roof',
      icon: 'mdi:layers',
      shortDescription: 'The most popular roofing material in America, offering affordability and durability.',
      description: 'Asphalt shingles are the most common roofing material in North America, and for good reason. They offer an excellent balance of affordability, durability, and aesthetic appeal. Available in a wide range of colors and styles, asphalt shingles can complement any home design while providing reliable protection against the elements.',
      materials: [
        'Three-tab asphalt shingles',
        'Architectural/dimensional shingles',
        'Luxury asphalt shingles',
        'Impact-resistant shingles'
      ],
      pros: [
        'Most affordable roofing option',
        'Easy to install and repair',
        'Wide variety of colors and styles',
        'Good fire resistance',
        'Widely available',
        'Suitable for most roof slopes'
      ],
      cons: [
        'Shorter lifespan than other materials',
        'Can be damaged by high winds',
        'Not as environmentally friendly',
        'Color may fade over time',
        'Less durable in extreme climates'
      ],
      averageLifespan: '15-30 years',
      averageCost: '$3.50 - $5.50 per square foot',
      maintenance: 'Low maintenance. Annual inspections recommended. Clean gutters regularly and replace damaged shingles promptly.',
      idealFor: [
        'Budget-conscious homeowners',
        'Moderate climates',
        'Traditional home styles',
        'Quick installation needs'
      ],
      notIdealFor: [
        'Extreme weather areas',
        'Homes needing maximum longevity',
        'Eco-conscious projects',
        'Very low-slope roofs'
      ]
    },
    {
      name: 'Fiberglass Roof Panels',
      slug: 'fiberglass-roof-panels',
      icon: 'mdi:crop-square',
      shortDescription: 'Lightweight, translucent panels perfect for patios, sunrooms, and covered areas.',
      description: 'Fiberglass roof panels are an excellent choice for areas where natural light is desired, such as patios, sunrooms, greenhouses, and covered walkways. These lightweight, durable panels come in various colors and levels of transparency, allowing you to control the amount of light filtering through while providing weather protection.',
      materials: [
        'Corrugated fiberglass panels',
        'Flat fiberglass sheets',
        'Colored fiberglass panels',
        'Clear/translucent panels'
      ],
      pros: [
        'Allows natural light transmission',
        'Lightweight and easy to install',
        'Resistant to rust and corrosion',
        'Good impact resistance',
        'Affordable option',
        'Available in various colors'
      ],
      cons: [
        'Can yellow or discolor over time',
        'May become brittle in extreme cold',
        'Not suitable for main roof structures',
        'Can amplify noise during rain',
        'UV exposure can cause degradation'
      ],
      averageLifespan: '10-20 years',
      averageCost: '$2.00 - $4.00 per square foot',
      maintenance: 'Moderate maintenance. Clean regularly to prevent discoloration. Check for cracks and seal edges annually.',
      idealFor: [
        'Patios and decks',
        'Sunrooms and solariums',
        'Greenhouses',
        'Covered walkways',
        'Carports'
      ],
      notIdealFor: [
        'Main house roofing',
        'High-traffic areas',
        'Extreme climate zones',
        'Long-term installations'
      ]
    },
    {
      name: 'Clay / Concrete Roof Tiles',
      slug: 'clay-concrete-roof-tiles',
      icon: 'mdi:texture-box',
      shortDescription: 'Premium roofing material offering exceptional durability and timeless Mediterranean style.',
      description: 'Clay and concrete tiles are premium roofing materials that have been used for centuries. These tiles offer exceptional durability, fire resistance, and a distinctive aesthetic that complements Spanish, Mediterranean, and Southwestern architectural styles. While they require a stronger roof structure due to their weight, their longevity and low maintenance make them an excellent long-term investment.',
      materials: [
        'Clay barrel tiles (Spanish style)',
        'Flat clay tiles',
        'Concrete S-tiles',
        'Concrete flat tiles',
        'Interlocking concrete tiles'
      ],
      pros: [
        'Extremely long lifespan (50-100+ years)',
        'Excellent fire resistance',
        'Low maintenance requirements',
        'Energy efficient (reflects heat)',
        'Pest and rot resistant',
        'Adds significant curb appeal',
        'Environmentally friendly'
      ],
      cons: [
        'Very heavy - requires reinforced structure',
        'High initial cost',
        'Professional installation required',
        'Individual tiles can break if walked on',
        'Limited color options for clay',
        'Expensive to repair'
      ],
      averageLifespan: '50-100+ years',
      averageCost: '$10.00 - $18.00 per square foot',
      maintenance: 'Low maintenance. Annual inspections. Replace broken tiles promptly. Check underlayment every 20-30 years.',
      idealFor: [
        'Spanish/Mediterranean style homes',
        'Hot, dry climates',
        'Long-term investment',
        'Luxury properties',
        'Fire-prone areas'
      ],
      notIdealFor: [
        'Homes with weak roof structures',
        'Budget projects',
        'DIY installations',
        'Frequent roof access needs'
      ]
    },
    {
      name: 'Metal Roofing',
      slug: 'metal-roofing',
      icon: 'mdi:iron',
      shortDescription: 'Modern, energy-efficient roofing with exceptional durability and longevity.',
      description: 'Metal roofing has become increasingly popular due to its exceptional durability, energy efficiency, and modern aesthetic. Available in various styles including standing seam, metal shingles, and corrugated panels, metal roofs can complement both contemporary and traditional homes. They excel in extreme weather conditions and offer one of the longest lifespans of any roofing material.',
      materials: [
        'Standing seam metal panels',
        'Metal shingles',
        'Corrugated metal sheets',
        'Stone-coated steel',
        'Aluminum roofing',
        'Copper roofing (premium)'
      ],
      pros: [
        'Extremely long lifespan (40-70+ years)',
        'Excellent weather resistance',
        'Energy efficient (reflects solar heat)',
        'Lightweight material',
        'Fire resistant',
        'Low maintenance',
        'Environmentally friendly (recyclable)',
        'Increases home value'
      ],
      cons: [
        'Higher initial cost',
        'Can be noisy during rain/hail',
        'May dent from large hail',
        'Expansion/contraction in temperature changes',
        'Professional installation required',
        'Limited color options may fade over time'
      ],
      averageLifespan: '40-70+ years',
      averageCost: '$7.00 - $14.00 per square foot',
      maintenance: 'Very low maintenance. Annual inspections. Check fasteners and sealants. Remove debris. Touch up scratches to prevent rust.',
      idealFor: [
        'All climate types',
        'Modern/contemporary homes',
        'Energy-conscious homeowners',
        'Long-term investment',
        'Severe weather areas',
        'Eco-friendly projects'
      ],
      notIdealFor: [
        'Very tight budgets',
        'Historic homes requiring traditional look',
        'Areas with frequent large hail',
        'Noise-sensitive locations without proper insulation'
      ]
    }
  ];