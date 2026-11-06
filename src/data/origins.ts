export interface CoffeeOrigin {
  id: string;
  name: string;
  amharicName?: string;
  zone: string;
  elevation: string;
  harvestPeriod: string;
  processingMethods: string[];
  flavorProfile: string[];
  description: string;
  terroirNote: string;
  availableFromCompany: boolean;
  image: string;
  mapCoordinates: { x: number; y: number }; // Relative percentage for interactive map
}

export const coffeeOrigins: CoffeeOrigin[] = [
  {
    id: "yirgacheffe",
    name: "Yirgacheffe",
    amharicName: "ይርጋጨፌ",
    zone: "Gedeo Zone, Southern Nations",
    elevation: "1,750 – 2,200 MASL",
    harvestPeriod: "October – January",
    processingMethods: ["Washed (Wet)", "Natural (Sun-dried)"],
    flavorProfile: ["Jasmine Florals", "Bergamot", "Lemon Blossom", "Peach", "Black Tea"],
    description:
      "Renowned worldwide as the crown jewel of floral coffees, Yirgacheffe produces an intensely aromatic cup with crystalline citric acidity and a delicate, tea-like body. Grown in misty highland gardens shaded by indigenous false-banana (Ensete) trees.",
    terroirNote:
      "Rich volcanic red soils and dense morning fog slow bean maturation, concentrating sugars and aromatic floral precursors.",
    availableFromCompany: true,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
    mapCoordinates: { x: 48, y: 68 },
  },
  {
    id: "sidama",
    name: "Sidama",
    amharicName: "ሲዳማ",
    zone: "Sidama Regional State",
    elevation: "1,800 – 2,250 MASL",
    harvestPeriod: "October – February",
    processingMethods: ["Washed", "Natural"],
    flavorProfile: ["Red Berries", "Cane Sugar", "Meyer Lemon", "Stone Fruit", "Honeyed Finish"],
    description:
      "Covering rolling fertile highlands in southern Ethiopia, Sidama is famed for coffees of profound sweetness, bright stone fruit clarity, and balanced vibrancy. It is home to celebrated micro-regions like Bensa, Chire, and Aroresa.",
    terroirNote:
      "High diurnal temperature swings between cool highland nights and warm sunny days create exceptional bean density.",
    availableFromCompany: true,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
    mapCoordinates: { x: 53, y: 62 },
  },
  {
    id: "guji",
    name: "Guji",
    amharicName: "ጉጂ",
    zone: "Oromia Region",
    elevation: "1,900 – 2,300 MASL",
    harvestPeriod: "November – February",
    processingMethods: ["Natural (Sun-dried on raised beds)", "Washed", "Anaerobic Experimental"],
    flavorProfile: ["Wild Strawberry", "Ripe Mango", "Passionfruit", "Lavender", "Dark Chocolate"],
    description:
      "Guji was historically grouped under Sidama, but its unique microclimates and ancient semi-forest farms produce some of the most complex, fruit-forward coffees on Earth. Highly prized by third-wave specialty roasters worldwide.",
    terroirNote:
      "Deep, iron-rich loam soils and untouched virgin forest microclimates give Guji coffees their characteristic tropical punch.",
    availableFromCompany: true,
    image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1200&q=80",
    mapCoordinates: { x: 62, y: 74 },
  },
  {
    id: "limu",
    name: "Limu",
    amharicName: "ሊሙ",
    zone: "Western Highlands, Oromia",
    elevation: "1,400 – 2,000 MASL",
    harvestPeriod: "November – January",
    processingMethods: ["Predominantly Washed", "Natural"],
    flavorProfile: ["Sweet Tangerine", "Caramel", "Spice", "Floral Cedar", "Balanced Body"],
    description:
      "Cultivated in southwest Ethiopia's lush evergreen forest zones, Limu coffees offer a rounder, medium body with well-balanced acidity and comforting sweet spice and citrus notes. Excellent for premium single-origin espresso and filter blends.",
    terroirNote:
      "Abundant rainfall, deep cloud cover, and fertile forest humus create a mild, sweet, and approachable cup profile.",
    availableFromCompany: true,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=80",
    mapCoordinates: { x: 38, y: 50 },
  },
  {
    id: "jimma",
    name: "Jimma (Djimmah)",
    amharicName: "ጅማ",
    zone: "Jimma Zone, Southwestern Ethiopia",
    elevation: "1,350 – 1,850 MASL",
    harvestPeriod: "October – December",
    processingMethods: ["Natural (Dry Process)", "Washed"],
    flavorProfile: ["Earthy Cocoa", "Dried Fig", "Roasted Walnut", "Heavy Body", "Subtle Spice"],
    description:
      "The historic cradle where wild Coffea Arabica originated in the Kaffa rainforests. Jimma produces robust, heavy-bodied Arabica green coffee that serves as a dependable backbone for international commercial blends and espresso bases.",
    terroirNote:
      "Vast native forest coffee systems with centuries of traditional wild harvesting knowledge passed down through generations.",
    availableFromCompany: true,
    image: "https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=1200&q=80",
    mapCoordinates: { x: 34, y: 57 },
  },
  {
    id: "harrar",
    name: "Harrar",
    amharicName: "ሐረር",
    zone: "Eastern Highlands",
    elevation: "1,500 – 2,100 MASL",
    harvestPeriod: "October – February",
    processingMethods: ["100% Sun-Dried Natural"],
    flavorProfile: ["Dried Blueberry", "Wild Berry Wine", "Dark Chocolate", "Cardamom", "Syrupy Body"],
    description:
      "Grown in the arid, sun-drenched eastern mountains surrounding the historic walled city of Harar. These beans are exclusively sun-dried in the cherry on traditional mats, creating an unmistakable wild blueberry and dark chocolate cup.",
    terroirNote:
      "Dry, sunny highland climate forces deep drought resilience into ancient Arabica heirloom varieties.",
    availableFromCompany: false, // Distinguish company availability vs educational reference
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
    mapCoordinates: { x: 78, y: 44 },
  },
];
