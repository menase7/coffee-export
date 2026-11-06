export interface ExportService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  buyerRequirements: string;
}

export const exportServices: ExportService[] = [
  {
    id: "green-coffee-supply",
    title: "Specialty & Commercial Green Coffee Supply",
    shortDescription:
      "Reliable sourcing and lot preparation for Ethiopian Arabica greens across Grade 1, Grade 2, and commercial grades.",
    fullDescription:
      "We source directly through verified washing stations and cooperative unions across Yirgacheffe, Sidama, Guji, and Limu. Every lot undergoes rigorous pre-shipment cupping, moisture analysis, screen grading, and defect removal at our partner dry mills.",
    iconName: "Bean",
    deliverables: [
      "Grade 1 & Grade 2 Specialty Lots (SCA 85–90+)",
      "Grade 4 & Grade 5 Commercial Green Coffee",
      "GrainPro hermetically sealed liners for specialty lots",
      "Lot-specific cupping notes and moisture test verification",
    ],
    buyerRequirements: "Specify required coffee profile, grade, target volume, and preferred delivery window.",
  },
  {
    id: "bulk-wholesale-orders",
    title: "Wholesale & Full Container Load (FCL) Supply",
    shortDescription:
      "Full container loads (19.2 to 21.6 metric tons) and consolidated LCL shipments for international importers and distributors.",
    fullDescription:
      "Whether you require 10 bags via air freight or multiple 20ft Full Container Loads (FCLs) via ocean freight, our logistical operations in Addis Ababa and Kality Dry Port ensure prompt stuffing, container moisture protection, and seamless export rail dispatch to Djibouti.",
    iconName: "Container",
    deliverables: [
      "Standard 20ft FCL container loads (~320 bags / 19.2 MT)",
      "Consolidated multi-origin containers (e.g. half Yirgacheffe / half Guji)",
      "Bulk container liner bags for commercial volume accounts",
      "Pre-loading container inspection and moisture barrier installation",
    ],
    buyerRequirements: "Estimated order volume, frequency (spot vs forward contract), and port of discharge.",
  },
  {
    id: "sample-evaluation",
    title: "Green Coffee Sample Coordination",
    shortDescription:
      "Pre-shipment (PSS) and offer samples dispatched globally via DHL Express with full laboratory moisture & roast data.",
    fullDescription:
      "We believe direct sensory evaluation builds unshakeable buyer confidence. We dispatch 250g–500g green coffee offer samples worldwide within 48–72 hours of inquiry, accompanied by screen analysis and moisture readings.",
    iconName: "FlaskConical",
    deliverables: [
      "250g or 500g hermetically sealed green samples",
      "Pre-Shipment Samples (PSS) drawn directly from export-ready lots",
      "Comprehensive cupping sheet with SCA scoring breakdown",
      "Express courier tracking to your roastery or cupping lab",
    ],
    buyerRequirements: "Courier delivery address, recipient contact, and target purchasing timeframe.",
  },
  {
    id: "export-documentation",
    title: "Export Documentation & Compliance",
    shortDescription:
      "Complete handling of National Bank of Ethiopia export permits, phytosanitary certificates, and ICO Certificates of Origin.",
    fullDescription:
      "Navigating Ethiopian coffee export regulations requires experience. Our documentation team coordinates all statutory certifications from the Ethiopian Coffee & Tea Authority, ensuring rapid customs clearance in North America, Europe, Asia, and the Middle East.",
    iconName: "FileCheck",
    deliverables: [
      "International Coffee Organization (ICO) Certificate of Origin",
      "Ethiopian Ministry of Agriculture Phytosanitary Certificate",
      "Commercial Invoice, Packing List & Bill of Lading (B/L)",
      "Quality & Inspection Certificate (ECTA / ECX verified)",
      "Non-GMO and Free-Sale declarations where mandated",
    ],
    buyerRequirements: "Specific import regulations or documentary requirements of destination customs.",
  },
  {
    id: "international-shipping",
    title: "International Freight & Port Coordination",
    shortDescription:
      "FOB Port of Djibouti transit, Ethio-Djibouti standard-gauge rail logistics, and CIF ocean carriage to major world ports.",
    fullDescription:
      "Shipments move securely from Addis Ababa via the electrified Ethio-Djibouti Railway directly to the Doraleh Container Terminal in Djibouti. We provide standard FOB Djibouti terms or coordinate complete CIF ocean freight to your port of discharge with top shipping lines.",
    iconName: "Ship",
    deliverables: [
      "FOB Port of Djibouti standard contract terms",
      "CIF / CFR ocean shipping coordination with leading global carriers",
      "Real-time vessel tracking and transit updates",
      "Container desiccant bags and Kraft paper lining to prevent cargo sweat",
    ],
    buyerRequirements: "Preferred Incoterm (FOB or CIF), discharge port name, and destination forwarder details.",
  },
  {
    id: "long-term-partnerships",
    title: "Importer & Roaster Long-Term Partnerships",
    shortDescription:
      "Forward harvest booking, tailored micro-lot processing contracts, and direct origin relationship programs.",
    fullDescription:
      "We build multi-year relationships with specialty roasters, private label brands, and international green coffee merchants. Secure your annual Ethiopian supply ahead of harvest with fixed price contracts and customizable processing protocols.",
    iconName: "Handshake",
    deliverables: [
      "Pre-harvest forward contracts with price stability",
      "Custom processing agreements (custom fermentation times, honey, washed)",
      "Traceability documentation linking lots to specific washing stations",
      "Origin visit coordination during the harvest season (Nov–Jan)",
    ],
    buyerRequirements: "Annual volume forecast, preferred flavor profiles, and partnership objectives.",
  },
];

export interface ExportProcessStep {
  step: number;
  title: string;
  tagline: string;
  description: string;
  details: string[];
}

export const exportProcessSteps: ExportProcessStep[] = [
  {
    step: 1,
    title: "Initial Inquiry & Requirement Discussion",
    tagline: "Define Your Target Profile",
    description:
      "The buyer submits their coffee requirements, target origins (Yirgacheffe, Sidama, Guji, Limu), desired volumes, target delivery schedule, and destination port.",
    details: [
      "Detailed quote request review within 24 business hours",
      "Review of current spot availability vs upcoming crop contracts",
      "Initial pricing consultation based on volume and Incoterms (FOB/CIF)",
    ],
  },
  {
    step: 2,
    title: "Product Selection & Specification",
    tagline: "Aligning Grades & Sensory Specs",
    description:
      "We discuss available lots, screen sizes, moisture percentages, SCA cupping profiles, and packaging preferences to match your roast portfolio or wholesale distribution needs.",
    details: [
      "Matching your taste profile with regional harvest lots",
      "Confirmation of grade specifications (Grade 1, 2, or commercial)",
      "Agreement on packaging (60kg Jute with GrainPro or bulk liner)",
    ],
  },
  {
    step: 3,
    title: "Sample Dispatch & Cupping Evaluation",
    tagline: "Sensory Approval in Your Lab",
    description:
      "Green coffee offer samples or Pre-Shipment Samples (PSS) are prepared and dispatched to your facility via DHL Express for sensory evaluation and Q-grader cupping.",
    details: [
      "250g–500g sealed samples dispatched within 48–72 hours",
      "Accompanying physical analysis sheet (moisture, density, defect count)",
      "Sample approval confirmation prior to contract finalization",
    ],
  },
  {
    step: 4,
    title: "Commercial Order & Export Documentation",
    tagline: "Formalizing Commercial Terms",
    description:
      "Confirmation of commercial contract, payment terms (Letter of Credit / Bank Wire T/T), export permits from the Ethiopian Coffee & Tea Authority, and export dry-mill booking.",
    details: [
      "Formal Proforma Invoice and Sales Contract issuance",
      "National Bank of Ethiopia export registration compliance",
      "Phytosanitary inspection and ICO Certificate of Origin preparation",
    ],
  },
  {
    step: 5,
    title: "Stuffing, Rail Transit & Shipment to Destination",
    tagline: "From Addis Ababa to Your Port",
    description:
      "Export lots are dressed in GrainPro liners, loaded at our export terminal, transported by electric rail to Port of Djibouti, and loaded onto ocean vessels for global delivery.",
    details: [
      "Container inspection and desiccant bag moisture protection",
      "Ethio-Djibouti Railway express transit to Doraleh Container Terminal",
      "Full digital and courier delivery of original shipping documents (B/L)",
    ],
  },
];
