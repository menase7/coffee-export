export interface CoffeeProduct {
  id: string;
  slug: string;
  name: string;
  origin: string;
  region: string;
  grade: string;
  isSpecialty: boolean;
  processingMethod: "Washed" | "Natural" | "Anaerobic Experimental" | "Commercial Green";
  variety: string;
  cuppingScore?: number;
  cuppingNotes: string[];
  altitude: string;
  moistureContent: string;
  screenSize: string;
  harvestSeason: string;
  packagingOptions: string[];
  minimumOrderQuantity: string;
  availability: "In Stock - Prompt Shipment" | "Coming Harvest - Forward Booking" | "Limited Lots Available";
  leadTime: string;
  portOfOrigin: string;
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
  image: string;
  featured: boolean;
}

export const coffeeProducts: CoffeeProduct[] = [
  {
    id: "yirgacheffe-g1-washed",
    slug: "yirgacheffe-grade-1-washed",
    name: "Yirgacheffe Grade 1 Washed Specialty",
    origin: "Yirgacheffe, Ethiopia",
    region: "Gedeo Zone / Kochere Micro-Region",
    grade: "Grade 1 (Specialty SCA 87.5+)",
    isSpecialty: true,
    processingMethod: "Washed",
    variety: "Indigenous Ethiopian Heirloom (Kurume & Dega)",
    cuppingScore: 88.5,
    cuppingNotes: ["Jasmine Blossoms", "Bergamot", "Meyer Lemon", "Peach Nectar", "Silk Tea Finish"],
    altitude: "1,950 – 2,200 MASL",
    moistureContent: "10.8% – 11.2%",
    screenSize: "Screen 15+ (85% min)",
    harvestSeason: "November 2024 – January 2025 (Current Crop)",
    packagingOptions: [
      "60 kg Jute Bag with GrainPro Hermetic Liner",
      "30 kg Vacuum Box (Specialty Micro-lot)",
      "Standard 20ft FCL (~320 bags / 19.2 Metric Tons)",
    ],
    minimumOrderQuantity: "10 Bags (600 kg) for air freight or LCL / 1 x 20ft FCL for sea container",
    availability: "In Stock - Prompt Shipment",
    leadTime: "14 – 21 days to Port of Djibouti",
    portOfOrigin: "Port of Djibouti (Incoterms: FOB Djibouti / CIF destination available)",
    description:
      "Hand-picked at peak ripeness in the highland micro-valleys of Kochere. Depulped, fermented in spring water for 36–48 hours, washed in grading canals, and dried over 14 days on African raised beds under constant shade canopy rotation.",
    specifications: [
      { label: "Grade", value: "ECX Grade 1 / Specialty SCA 88.5" },
      { label: "Processing", value: "Fully Washed with Double Sorting" },
      { label: "Defects Count", value: "Max 3 secondary defects per 350g, 0 primary" },
      { label: "Water Activity", value: "0.56 aw" },
      { label: "Export Packaging", value: "Export-grade Jute + GrainPro Ultra" },
    ],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "guji-hambela-g1-natural",
    slug: "guji-hambela-grade-1-natural",
    name: "Guji Hambela Grade 1 Sun-Dried Natural",
    origin: "Guji, Ethiopia",
    region: "Hambela Wamena, Oromia",
    grade: "Grade 1 (Specialty SCA 89.0+)",
    isSpecialty: true,
    processingMethod: "Natural",
    variety: "Wild Forest Heirloom Selections",
    cuppingScore: 89.25,
    cuppingNotes: ["Ripe Strawberry", "Passionfruit", "Lavender Flower", "Cacao Nibs", "Syrupy Body"],
    altitude: "2,050 – 2,300 MASL",
    moistureContent: "10.5% – 11.0%",
    screenSize: "Screen 15/16+",
    harvestSeason: "December 2024 – February 2025",
    packagingOptions: [
      "60 kg Clean Jute with GrainPro Hermetic Liner",
      "Full Container Load 20ft (320 bags)",
    ],
    minimumOrderQuantity: "10 Bags (600 kg)",
    availability: "In Stock - Prompt Shipment",
    leadTime: "14 – 21 days to Port of Djibouti",
    portOfOrigin: "Port of Djibouti (FOB & CIF)",
    description:
      "Grown under virgin cloud-forest canopy in Hambela. Whole cherries are dried slowly on raised African bamboo beds for 21–25 days, carefully turned every 40 minutes during peak midday heat to ensure even moisture distribution.",
    specifications: [
      { label: "Grade", value: "Specialty Grade 1 (Zero Primary Defects)" },
      { label: "Processing", value: "Slow Sun-Dried Natural on Raised Beds" },
      { label: "Color", value: "Consistent Jade Green with Silver Skin" },
      { label: "Density", value: "720 g/L (Exceptional High Elevation)" },
    ],
    image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "sidama-bensa-g2-washed",
    slug: "sidama-bensa-grade-2-washed",
    name: "Sidama Bensa Grade 2 Washed Specialty",
    origin: "Sidama, Ethiopia",
    region: "Bensa Highland District",
    grade: "Grade 2 (Specialty SCA 86.0+)",
    isSpecialty: true,
    processingMethod: "Washed",
    variety: "Regional Heirloom 74110 & 74112",
    cuppingScore: 86.75,
    cuppingNotes: ["Red Currant", "Sweet Apricot", "Brown Sugar", "Crisp Apple", "Balanced Cocoa"],
    altitude: "1,900 – 2,150 MASL",
    moistureContent: "11.0% – 11.5%",
    screenSize: "Screen 14/15+",
    harvestSeason: "October 2024 – January 2025",
    packagingOptions: [
      "60 kg Export Jute with GrainPro",
      "Full Container 20ft (19.2 MT)",
    ],
    minimumOrderQuantity: "20 Bags (1,200 kg) or 1 FCL",
    availability: "In Stock - Prompt Shipment",
    leadTime: "14 days to Port of Djibouti",
    portOfOrigin: "Port of Djibouti",
    description:
      "Bensa is celebrated for its pristine mountain rivers and meticulous washing stations. This Grade 2 lot delivers outstanding fruit sweetness with high clean-cup consistency, making it an extraordinary choice for roasters needing volume specialty coffee.",
    specifications: [
      { label: "Grade", value: "Grade 2 Specialty Export" },
      { label: "Processing", value: "Fully Washed & Par-boiled grading" },
      { label: "Moisture", value: "11.2% measured at dispatch" },
    ],
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "limu-g2-washed",
    slug: "limu-grade-2-washed",
    name: "Limu Grade 2 Washed Highland",
    origin: "Limu, Western Highlands",
    region: "Jimma / Limu Kosa",
    grade: "Grade 2 Washed Arabica",
    isSpecialty: true,
    processingMethod: "Washed",
    variety: "Limu Forest Selections",
    cuppingScore: 85.0,
    cuppingNotes: ["Sweet Orange", "Caramelized Hazelnut", "Blackcurrant", "Mild Clove", "Round Body"],
    altitude: "1,600 – 1,950 MASL",
    moistureContent: "11.2% – 11.8%",
    screenSize: "Screen 14+",
    harvestSeason: "November 2024 – January 2025",
    packagingOptions: ["60 kg Jute Bag with Inner Liner", "Bulk Sea Container FCL"],
    minimumOrderQuantity: "1 x 20ft FCL (~19.2 MT)",
    availability: "In Stock - Prompt Shipment",
    leadTime: "14 days to Djibouti",
    portOfOrigin: "Port of Djibouti",
    description:
      "Grown in the lush western forest belt. Limu washed green coffee is acclaimed for its low-to-medium bright acidity, sweet caramel foundation, and round mouthfeel. A staple for premium espresso blends and high-volume specialty roasters.",
    specifications: [
      { label: "Processing", value: "Wet Fermented & Sun-cured" },
      { label: "Sorting", value: "Gravity sorted & Optical Color Sorted" },
    ],
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "jimma-g5-commercial",
    slug: "jimma-commercial-grade-5-natural",
    name: "Jimma Commercial Grade 5 Natural (Djimmah)",
    origin: "Jimma, Ethiopia",
    region: "Southwestern Native Forests",
    grade: "Commercial Grade 5 (Unwashed Arabica)",
    isSpecialty: false,
    processingMethod: "Commercial Green",
    variety: "Indigenous Forest Arabica",
    cuppingNotes: ["Dark Cocoa", "Roasted Malt", "Dried Fruit", "Earthy Spice", "Heavy Crema"],
    altitude: "1,400 – 1,750 MASL",
    moistureContent: "11.5% – 12.0%",
    screenSize: "Standard Export Blend",
    harvestSeason: "Current Crop 2024/2025",
    packagingOptions: [
      "60 kg Export Jute Bags",
      "Bulk container with container dry liner (21.5 MT)",
    ],
    minimumOrderQuantity: "1 x 20ft FCL (19.2 MT minimum)",
    availability: "In Stock - Prompt Shipment",
    leadTime: "10 – 14 days",
    portOfOrigin: "Port of Djibouti",
    description:
      "Reliable, high-volume commercial Ethiopian Arabica. Ideal for large-scale coffee roasting enterprises, instant coffee manufacturing, and full-bodied traditional espresso blends requiring dependable Ethiopian Arabica base volume.",
    specifications: [
      { label: "Grade", value: "Standard Commercial ECX Grade 5" },
      { label: "Application", value: "Espresso base, wholesale roasting, private label" },
    ],
    image: "https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "guji-anaerobic-g1-microlot",
    slug: "guji-anaerobic-maceration-grade-1",
    name: "Guji Uraga Anaerobic Maceration Micro-Lot G1",
    origin: "Guji, Ethiopia",
    region: "Uraga Woreda, High Plateau",
    grade: "Specialty Micro-Lot (SCA 90+)",
    isSpecialty: true,
    processingMethod: "Anaerobic Experimental",
    variety: "Kurume Heirloom Selection",
    cuppingScore: 90.5,
    cuppingNotes: ["Rum-Soaked Cherry", "Blood Orange", "Tropical Guava", "Cocoa Butter", "Intense Floral"],
    altitude: "2,150 – 2,350 MASL",
    moistureContent: "10.4% – 10.9%",
    screenSize: "Screen 16+ Strictly High Grown",
    harvestSeason: "December 2024 – January 2025",
    packagingOptions: ["30 kg Vacuum Packed Box", "60 kg GrainPro in Export Jute"],
    minimumOrderQuantity: "5 Boxes (150 kg) / Air Freight Ready",
    availability: "Limited Lots Available",
    leadTime: "Prompt Air Freight or Sea Shipment",
    portOfOrigin: "Addis Ababa Bole International (Air) / Djibouti (Sea)",
    description:
      "Exclusive experimental micro-lot. Ripe purple cherries sealed in stainless fermentation tanks with one-way valves for 96 hours of temperature-controlled anaerobic fermentation, followed by 30 days of gradual raised-bed drying in double shade.",
    specifications: [
      { label: "Fermentation", value: "96h Controlled Anaerobic Tank" },
      { label: "Cupping", value: "Q-Grader Verified SCA 90.5" },
    ],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
];
