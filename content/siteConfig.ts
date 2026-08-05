export const siteConfig = {
  name: "The Tenerife Solar Guide",
  domain: "thetenerifesolarguide.com",
  url: "https://thetenerifesolarguide.com",
  description:
    "The most complete independent guide to solar panels, battery storage and EV charging in Tenerife. Costs, savings, permits and trusted local installers for every town on the island.",
  contactEmail: "hello@thetenerifesolarguide.com", // TODO: replace with Simon's real receiving address before launch
  phoneDisplay: "", // optional, add if you want a phone number shown in the header/footer
  social: {
    // add if/when created
  },
  locale: "en-ES",
  // Canary Islands specific facts reused across every page. Keep this list accurate,
  // since consistency across pages is one of the biggest AI/LLM citation trust signals.
  islandFacts: {
    sunHoursPerYear: "2,800+",
    // NOTE: IGIC (7% general rate) applies to goods generally in the Canary
    // Islands vs 21% IVA on the mainland. That's a fact about living here,
    // not something specific to solar equipment, so don't present it as a
    // solar-specific benefit. The genuinely solar-specific tax incentives are
    // IRPF deductions and IBI reductions for self-consumption installations. 
    // see solarIncentives below. Always verify current grant windows before
    // publishing, since these open and close year to year.
    solarIncentives:
      "IRPF income tax deductions (historically ~10% for single-family homes, ~20% for communities of owners, subject to annual caps) and IBI reductions of 30–50% for several years after installation",
    typicalPaybackYearsResidential: "5–7",
    typicalSavingsRange: "60–80%",
    typicalSavingsWithBattery: "90%+",
    surplusExportRate: "€0.04–0.10 per kWh",
    selfConsumptionValue: "€0.15–0.18 per kWh",
    recommendedTiltDegrees: "25°",
    recommendedOrientation: "South-facing",
  },
};

export type SiteConfig = typeof siteConfig;
