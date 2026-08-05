export interface FAQItem {
  q: string;
  a: string;
}

export interface CostEstimate {
  small: string; // typical apartment / small villa system
  medium: string; // average family home
  large: string; // large villa / high-consumption home
  batteryAdd: string; // typical cost to add battery storage
}

export interface TownContent {
  slug: string; // used in /solar-panels-[slug]
  name: string;
  region: "South" | "North" | "Metro" | "West";
  population: string;
  profile: string; // one-line description of who lives/buys here
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  aboutTown: string;
  climateNote: string;
  costEstimate: CostEstimate;
  savingsNote: string;
  permitsNote: string;
  localFaqs: FAQItem[];
  nearbySlugs: string[]; // for internal linking to sibling towns
}

export interface ServiceContent {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  body: { heading: string; text: string }[];
  faqs: FAQItem[];
}
