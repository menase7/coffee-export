/**
 * Configurable Company Information
 * Business owners can update these settings to customize the website for their export enterprise.
 */

export interface CompanyConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  foundedYear: string;
  headquarters: {
    address: string;
    city: string;
    country: string;
    exportHub: string;
    portOfExport: string;
  };
  contact: {
    email: string;
    salesEmail: string;
    phone: string;
    whatsapp: string;
    hours: string;
    timezone: string;
  };
  stats: {
    label: string;
    value: string;
    numeric?: number;
    suffix?: string;
    description: string;
    isPlaceholder?: boolean;
  }[];
  socials: {
    platform: string;
    url: string;
  }[];
}

export const companyConfig: CompanyConfig = {
  name: "Bole Highland Ethiopian Coffee Exports",
  tagline: "Authentic Ethiopian Arabica Green Coffee for the Global Specialty Market",
  shortDescription:
    "Licensed Ethiopian green coffee exporter connecting international importers, roasters, and distributors directly to the historic coffee-growing highlands of Yirgacheffe, Sidama, Guji, and Limu.",
  longDescription:
    "We specialize in the export of Grade 1 and Grade 2 washed and natural Ethiopian specialty coffees, as well as dependable commercial Arabica grades. Operating with full transparency, rigorous lot preparation, and international export coordination through Djibouti Port, we build lasting partnerships with green coffee buyers worldwide.",
  foundedYear: "2018",
  headquarters: {
    address: "Bole Export Trade Zone, Sub-City Suite 402",
    city: "Addis Ababa",
    country: "Ethiopia",
    exportHub: "Addis Ababa Dry Port & Kality Logistics Terminal",
    portOfExport: "Port of Djibouti (FOB & CIF available)",
  },
  contact: {
    email: "inquiries@ethiopiancoffee-export.example",
    salesEmail: "orders@ethiopiancoffee-export.example",
    phone: "+251 11 667 8900",
    whatsapp: "+251 91 123 4567",
    hours: "Monday – Friday: 8:30 AM – 5:30 PM (EAT)",
    timezone: "East Africa Time (UTC+3)",
  },
  stats: [
    {
      label: "Growing Regions",
      value: "6",
      numeric: 6,
      suffix: "+",
      description: "Direct partnerships across Yirgacheffe, Sidama, Guji, Limu, Jimma & Harrar",
    },
    {
      label: "Harvest Elevations",
      value: "1,800 - 2,250m",
      description: "High-altitude microclimates producing dense, complex Arabica beans",
    },
    {
      label: "Export Standards",
      value: "Grade 1 & 2",
      description: "Specialty-grade SCA 85+ coffees and export-ready commercial grades",
    },
    {
      label: "Standard Packaging",
      value: "60 kg Jute",
      description: "GrainPro hermetic inner liners ensuring freshness across transit",
    },
  ],
  socials: [
    { platform: "LinkedIn", url: "https://linkedin.com" },
    { platform: "Instagram", url: "https://instagram.com" },
  ],
};

export interface NavChildItem {
  label: string;
  href: string;
  description: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavChildItem[];
}

export const navItems: NavItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Our Coffee",
    href: "/coffee",
    children: [
      {
        label: "Coffee Catalog",
        href: "/coffee",
        description: "Grade 1 & 2 Washed, Natural & Specialty green coffee lots",
        badge: "SCA 85+",
      },
      {
        label: "Origins & Terroir",
        href: "/origins",
        description: "Highland growing regions: Yirgacheffe, Sidama, Guji & Limu",
        badge: "6 Regions",
      },
    ],
  },
  {
    label: "Export & Quality",
    href: "/services",
    children: [
      {
        label: "Export Services",
        href: "/services",
        description: "FOB & CIF terms, bulk jute, GrainPro & Djibouti rail transit",
        badge: "Logistics",
      },
      {
        label: "Quality & Traceability",
        href: "/quality",
        description: "Moisture thresholds, ECX grading, cupping & lot traceability",
        badge: "Standards",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const navigationLinks = [
  { label: "About", href: "/about" },
  { label: "Our Coffee", href: "/coffee" },
  { label: "Origins", href: "/origins" },
  { label: "Export Services", href: "/services" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];
