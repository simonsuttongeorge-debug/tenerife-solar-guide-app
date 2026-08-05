import { TownContent } from "./types";

// ---------------------------------------------------------------------------
// TOWN CONTENT DATA
// ---------------------------------------------------------------------------
// Each entry drives a full page at /solar-panels-[slug].
// Costs and savings figures are grounded in the island-wide facts in faqs.ts
// and siteConfig.ts, kept consistent across pages deliberately, since AI
// search engines and Google both penalise (or at least don't trust) a site
// that states different numbers for the same fact on different pages.
//
// STATUS: Adeje, Arona, Los Cristianos, Costa Adeje, Puerto de la Cruz,
// Santa Cruz de Tenerife and La Laguna are fully written (reference quality).
// Remaining 11 expat-priority towns follow the same pattern. See
// /content/towns-batch-2.ts once populated, then merged in here.
// ---------------------------------------------------------------------------

export const towns: TownContent[] = [
  {
    slug: "adeje",
    name: "Adeje",
    region: "South",
    population: "~48,000",
    profile:
      "Home to Costa Adeje's resorts and a large year-round international resident population, from retirees to remote workers.",
    metaTitle: "Solar Panels in Adeje, Tenerife | Costs, Savings & Installers 2026",
    metaDescription:
      "Thinking about solar panels in Adeje? See real 2026 installation costs, expected savings, permit rules and local FAQs for villas, apartments and holiday lets. Then get matched with a vetted local installer.",
    heroIntro:
      "Adeje gets some of the most reliable sunshine on the island, and with a large stock of villas and holiday-let apartments around Costa Adeje, it's one of the strongest places in Tenerife for solar payback.",
    aboutTown:
      "Adeje stretches from the historic hillside town centre down to the resort strip of Costa Adeje, and its property mix reflects that: dense holiday-apartment blocks and hotels near the coast, and detached villas with private roof space further up the hill and inland toward Ifonche and Taucho. A high proportion of residents are foreign owners. Full-time expats, second-home owners, and landlords running holiday lets. Which means solar decisions here are often about balancing upfront cost against either long-term personal savings or making a rental property's running costs and energy rating more attractive to guests.",
    climateNote:
      "Adeje sits in the dry, sunny south-west microclimate that Costa Adeje is famous for. Noticeably less cloud cover than the north of the island, and very few days lost to the low cloud (\"panza de burro\") that can affect Puerto de la Cruz or La Orotava. That makes it one of the most consistent solar-yield locations on Tenerife.",
    costEstimate: {
      small: "€3,200–€4,800 for a 2–3 kWp system, typical for an apartment or small townhouse",
      medium: "€6,500–€9,500 for a 4–6 kWp system, typical for a family villa",
      large: "€12,000–€17,000 for an 8–10 kWp+ system, typical for a large villa or a small holiday-let complex",
      batteryAdd: "€3,500–€6,000 to add a 5–10 kWh lithium battery to any of the above",
    },
    savingsNote:
      "With Adeje's consistent sun, well-oriented villas typically see 65–80% reductions on their electricity bill from panels alone, and holiday-let owners often find the improved energy rating helps with guest reviews and running costs between bookings.",
    permitsNote:
      "Adeje's ayuntamiento processes solar permits alongside general building licences. Most local installers include this paperwork in their quote. If your property is within a community (common in Costa Adeje's apartment complexes), you'll also need comunidad de vecinos approval before roof work starts.",
    localFaqs: [
      {
        q: "How much does it cost to install solar panels in Adeje?",
        a: "For a typical Adeje villa (4–6 kWp), expect €6,500–€9,500 installed. Smaller apartment systems run €3,200–€4,800, and larger properties or small holiday-let complexes (8–10 kWp+) typically cost €12,000–€17,000. These are pre-grant figures. Ask your installer what current subsidies apply.",
      },
      {
        q: "How much does a solar battery cost in Adeje?",
        a: "Adding a 5–10 kWh lithium battery to a new or existing system in Adeje typically costs €3,500–€6,000. Given how many Adeje properties run air conditioning in the evening, a battery is often worth evaluating here more than in cooler parts of the island.",
      },
      {
        q: "Is solar worth it for a holiday let in Costa Adeje?",
        a: "Often yes, daytime consumption from air conditioning and pool pumps during guest stays lines up well with solar generation, and a better energy rating is increasingly checked by guests and required for certain rental licences. Get a quote based on your actual booking and consumption pattern rather than assuming standard residential savings apply.",
      },
      {
        q: "Do apartment owners in Costa Adeje need community approval for solar panels?",
        a: "Yes, if your building is managed by a comunidad de vecinos, since roof space is a shared element. Raise it at a community meeting early, and ask your installer whether autoconsumo colectivo (a shared system with generation split between several owners) suits your building better than an individual installation.",
      },
    ],
    nearbySlugs: ["arona", "los-cristianos", "costa-adeje", "guia-de-isora"],
  },
  {
    slug: "arona",
    name: "Arona",
    region: "South",
    population: "~85,000",
    profile:
      "One of Tenerife's largest municipalities by population, covering Los Cristianos and a broad mix of long-term resident and holiday-let housing.",
    metaTitle: "Solar Panels in Arona, Tenerife | Costs, Savings & Installers 2026",
    metaDescription:
      "Complete guide to solar panel costs, savings, permits and FAQs for Arona, Tenerife. Covering villas, townhouses and apartments, including Los Cristianos. Get matched with a trusted local installer.",
    heroIntro:
      "Arona is one of Tenerife's biggest municipalities and one of its sunniest, with a housing mix from hillside villas to dense apartment blocks near Los Cristianos. Most of it well suited to solar.",
    aboutTown:
      "Arona municipality runs from the coastal hub of Los Cristianos up through residential neighbourhoods like Cabo Blanco, Valle San Lorenzo and the town centre itself, with a large long-term expat population alongside seasonal residents. Housing styles vary from modern townhouse developments to older detached properties with more roof flexibility, which affects what size and type of system makes sense.",
    climateNote:
      "Arona shares the dry south-facing microclimate that makes the south of Tenerife so reliable for solar. Generally under 300mm of rain a year and few overcast days compared with the north, so actual generation tends to track closely with the theoretical maximum for the island.",
    costEstimate: {
      small: "€3,000–€4,700 for a 2–3 kWp apartment or townhouse system",
      medium: "€6,200–€9,200 for a 4–6 kWp family home system",
      large: "€11,500–€16,500 for an 8–10 kWp+ large villa system",
      batteryAdd: "€3,400–€5,800 to add a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Arona homeowners typically see 60–80% bill reductions from panels alone, reaching 90%+ with battery storage. Consistent with the island-wide average given Arona's strong, reliable irradiance.",
    permitsNote:
      "Arona's ayuntamiento requires the standard self-consumption paperwork and, in many cases, a building permit. Most established local installers manage this as part of their service. Townhouse developments with shared roofs will need sign-off from the community of owners.",
    localFaqs: [
      {
        q: "How much does it cost to install solar panels in Arona?",
        a: "A typical family home in Arona (4–6 kWp) costs €6,200–€9,200 installed. Apartments and smaller systems run €3,000–€4,700, while larger villas (8–10 kWp+) typically run €11,500–€16,500, before any applicable grants.",
      },
      {
        q: "How much does a solar battery cost in Arona?",
        a: "A 5–10 kWh battery added to a residential system in Arona typically costs €3,400–€5,800. Worth evaluating if most of your household's electricity use happens in the evening rather than during the day.",
      },
      {
        q: "How much can I save on electricity bills with solar in Arona?",
        a: "Most Arona households see 60–80% savings from panels alone, and 90%+ with battery storage, in line with the wider Tenerife averages, thanks to consistently strong sun and high island electricity rates.",
      },
      {
        q: "Do I need a permit to install solar panels in Los Cristianos or Arona town?",
        a: "In most cases yes, Arona's ayuntamiento typically requires standard self-consumption paperwork and often a building permit, which most local installers include in their quoted price. Always confirm this is included before signing.",
      },
    ],
    nearbySlugs: ["los-cristianos", "adeje", "san-miguel-de-abona", "granadilla-de-abona"],
  },
  {
    slug: "los-cristianos",
    name: "Los Cristianos",
    region: "South",
    population: "~9,000 (within Arona)",
    profile:
      "Tenerife's original south-coast resort town. Dense apartment living, holiday lets, and a large retired and remote-working expat community.",
    metaTitle: "Solar Panels in Los Cristianos, Tenerife | Costs & Savings 2026",
    metaDescription:
      "Solar panel costs, savings and FAQs for Los Cristianos apartments, townhouses and holiday lets. Plus how to get a vetted local installer quote for your property.",
    heroIntro:
      "Los Cristianos is built mostly on apartments and townhouse complexes rather than detached villas. Which changes the solar conversation from 'how big a system' to 'how do we get community agreement and rooftop access.'",
    aboutTown:
      "As one of the original resort towns on the south coast, Los Cristianos is dominated by mid-rise apartment blocks, many run as holiday lets or long-term rentals for the town's large international community. Detached properties with private roofs are less common here than in Adeje or Arona town, so collective/shared installations and landlord-led community projects are a bigger part of the picture.",
    climateNote:
      "Los Cristianos sits within the same dry, sunny south-coast microclimate as the rest of Arona municipality, with minimal cloud interference and strong, consistent solar yield across the year.",
    costEstimate: {
      small: "€2,900–€4,500 for a 2–3 kWp individual apartment system (where feasible)",
      medium: "€6,000–€9,000 for a 4–6 kWp system on a townhouse or larger unit",
      large: "€11,000–€16,000 for larger systems, more relevant to landlords with multiple units or small complexes",
      batteryAdd: "€3,300–€5,700 to add a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Where an individual system is feasible, owners typically see 60–80% bill reductions. For apartment buildings, autoconsumo colectivo (shared community systems) is often the more realistic route to solar savings for individual unit owners.",
    permitsNote:
      "Because most Los Cristianos properties sit within a comunidad de vecinos, community approval is usually the first step before any permit application. Factor in time for a community vote alongside the ayuntamiento's own paperwork.",
    localFaqs: [
      {
        q: "Can apartment owners in Los Cristianos install solar panels?",
        a: "Yes, but because most buildings are managed by a comunidad de vecinos, you'll typically need community approval first, since roof space is shared. Autoconsumo colectivo. A shared system with output split between participating owners. Is often the most practical route in Los Cristianos's apartment-dominated housing stock.",
      },
      {
        q: "How much does it cost to install solar panels in Los Cristianos?",
        a: "Individual apartment systems, where roof access is feasible, typically cost €2,900–€4,500 for 2–3 kWp. Larger townhouse or landlord-led systems covering bigger units or several apartments run €6,000–€16,000 depending on scale.",
      },
      {
        q: "Is it worth installing solar on a holiday-let apartment in Los Cristianos?",
        a: "It can be, particularly for daytime cooling and appliance loads during guest stays, and for the energy-rating benefit on the listing. Community approval and shared-roof logistics are usually the bigger hurdle here than the economics.",
      },
    ],
    nearbySlugs: ["arona", "adeje", "san-miguel-de-abona"],
  },
  {
    slug: "costa-adeje",
    name: "Costa Adeje",
    region: "South",
    population: "Resort district within Adeje",
    profile:
      "Tenerife's premium resort strip. High-end villas, hotel-adjacent apartments and a dense concentration of holiday-let properties.",
    metaTitle: "Solar Panels in Costa Adeje, Tenerife | Costs, Savings & Installers 2026",
    metaDescription:
      "Solar panel costs, ROI and FAQs for Costa Adeje villas, apartments and holiday-rental properties. See real 2026 figures and get matched with a trusted local installer.",
    heroIntro:
      "Costa Adeje's mix of premium villas and high-occupancy holiday-let apartments makes it one of the best places on the island to run the numbers on solar, since daytime cooling and pool-pump loads during guest stays line up closely with peak generation.",
    aboutTown:
      "As Tenerife's flagship resort district, Costa Adeje has a high concentration of well-specified villas and apartment complexes, many operating as holiday rentals with strong daytime occupancy and consumption from air conditioning and pools. Property owners here are often weighing solar not just as a running-cost saving but as part of a wider push to improve energy ratings and sustainability credentials for guests.",
    climateNote:
      "Costa Adeje benefits from the same dry, low-cloud south-west microclimate as the rest of Adeje municipality. Among the most reliable solar yield anywhere on the island.",
    costEstimate: {
      small: "€3,300–€5,000 for a 2–3 kWp apartment system",
      medium: "€6,800–€10,000 for a 4–6 kWp villa system",
      large: "€13,000–€18,500 for an 8–10 kWp+ premium villa or small complex system",
      batteryAdd: "€3,600–€6,200 to add a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Villas and holiday lets with strong daytime consumption from cooling and pool equipment often see savings toward the top of the island-wide 60–80% range, since more of what's generated is used directly rather than exported.",
    permitsNote:
      "Handled the same way as elsewhere in Adeje municipality. Most installers manage the ayuntamiento paperwork, and apartment/complex properties will need comunidad de vecinos sign-off before installation.",
    localFaqs: [
      {
        q: "How much does it cost to install solar panels on a villa in Costa Adeje?",
        a: "A typical Costa Adeje villa (4–6 kWp) costs €6,800–€10,000 installed, with premium/larger villas (8–10 kWp+) running €13,000–€18,500. Costa Adeje pricing sits slightly above the Tenerife-wide average, reflecting property size and specification rather than location alone.",
      },
      {
        q: "Does solar make sense for a holiday-rental villa in Costa Adeje?",
        a: "Often strongly so, daytime pool-pump and air-conditioning loads during guest stays consume a high share of what panels generate directly, which is the most valuable way to use solar power (worth roughly €0.15–0.18/kWh versus €0.04–0.10/kWh for exported surplus).",
      },
      {
        q: "How much does battery storage cost for a Costa Adeje property?",
        a: "Typically €3,600–€6,200 for a 5–10 kWh lithium battery, which can be worthwhile for evening air-conditioning use once guests are back from the beach or pool.",
      },
    ],
    nearbySlugs: ["adeje", "arona", "guia-de-isora"],
  },
  {
    slug: "puerto-de-la-cruz",
    name: "Puerto de la Cruz",
    region: "North",
    population: "~30,000",
    profile:
      "Tenerife's historic north-coast resort town. A long-established, largely northern-European expat community, and a cloudier microclimate than the south.",
    metaTitle: "Solar Panels in Puerto de la Cruz, Tenerife | Costs & Savings 2026",
    metaDescription:
      "Honest guide to solar panel costs, realistic savings and FAQs for Puerto de la Cruz, Tenerife. Including how the north's cloudier climate affects payback. Get matched with a local installer.",
    heroIntro:
      "Puerto de la Cruz is one of the cloudier parts of Tenerife thanks to the \"panza de burro\" low cloud that regularly sits over the north coast. Solar still works well here, but the numbers and expectations should be set slightly differently than for the south of the island.",
    aboutTown:
      "One of Tenerife's oldest tourist towns, Puerto de la Cruz has a large, long-established international community, particularly older housing stock in the town centre and La Paz, alongside villas further up toward La Orotava valley. Property types are more varied here than in the newer southern resorts, from traditional Canarian houses to 1970s apartment blocks.",
    climateNote:
      "The north of Tenerife, including Puerto de la Cruz, sees noticeably more cloud cover than the south. Particularly the \"panza de burro\" (donkey's belly) low stratus cloud common in mornings, especially outside summer. Annual solar yield is still good by European standards, but typically 10–20% lower than equivalent south-coast systems, which is worth factoring into payback expectations rather than assuming island-wide averages apply unchanged.",
    costEstimate: {
      small: "€3,100–€4,700 for a 2–3 kWp apartment or townhouse system",
      medium: "€6,300–€9,300 for a 4–6 kWp family home system",
      large: "€11,800–€16,800 for an 8–10 kWp+ villa system",
      batteryAdd: "€3,400–€5,900 to add a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Given the north coast's higher cloud cover, expect savings toward the lower-to-middle end of the island-wide 60–80% range from panels alone, still a strong return given high island electricity prices. Just don't assume Costa Adeje-style yields without an adjusted quote.",
    permitsNote:
      "Puerto de la Cruz's ayuntamiento handles solar permitting under the same general Canarian and national rules as elsewhere. Confirm permit inclusion with your installer, and check comunidad de vecinos requirements if you're in one of the town's many apartment blocks.",
    localFaqs: [
      {
        q: "Does solar work well in Puerto de la Cruz given the cloudier weather?",
        a: "Yes, but expect somewhat lower output than the south of the island. The \"panza de burro\" low cloud common on the north coast typically reduces annual yield by around 10–20% compared with Costa Adeje or Arona. It's still a strong investment given high island electricity prices, but ask your installer for a site-specific yield estimate rather than assuming south-coast figures apply.",
      },
      {
        q: "How much does it cost to install solar panels in Puerto de la Cruz?",
        a: "A typical family home (4–6 kWp) costs €6,300–€9,300 installed. Smaller apartment systems run €3,100–€4,700, and larger villas (8–10 kWp+) typically cost €11,800–€16,800, before grants.",
      },
      {
        q: "How much does a solar battery cost in Puerto de la Cruz?",
        a: "A 5–10 kWh lithium battery typically adds €3,400–€5,900 to an installation here. Sometimes more valuable in the north, where lower daytime generation makes storing what you do produce more important.",
      },
    ],
    nearbySlugs: ["la-orotava", "los-realejos", "icod-de-los-vinos"],
  },
  {
    slug: "santa-cruz-de-tenerife",
    name: "Santa Cruz de Tenerife",
    region: "Metro",
    population: "~210,000",
    profile:
      "The island's capital and largest city. Dense urban housing, offices and commercial premises, plus a growing residential rooftop-solar market.",
    metaTitle: "Solar Panels in Santa Cruz de Tenerife | Costs, Savings & Installers 2026",
    metaDescription:
      "Solar panel and battery storage costs for homes and businesses in Santa Cruz de Tenerife. Plus commercial solar guidance for offices, retail and industrial premises. Get a local installer quote.",
    heroIntro:
      "As Tenerife's capital and largest commercial centre, Santa Cruz has a very different solar profile to the resort south. More apartment blocks and offices, and a growing market for commercial solar among daytime businesses.",
    aboutTown:
      "Santa Cruz de Tenerife is the island's administrative and commercial capital, with a dense urban core, port and industrial areas, and residential districts spreading up the surrounding hillsides where detached and semi-detached housing with private roof space becomes more common. It has a smaller proportion of foreign residents than the southern resort towns, but a much larger base of businesses. Offices, retail, logistics and light industry. For which commercial solar can be a strong fit.",
    climateNote:
      "Santa Cruz sits in a transitional microclimate. Generally sunnier and drier than Puerto de la Cruz or La Laguna, though not quite matching the consistently dry conditions of the far south. Solar yield here tends to fall between the two extremes.",
    costEstimate: {
      small: "€3,000–€4,600 for a 2–3 kWp apartment or small business system",
      medium: "€6,200–€9,200 for a 4–6 kWp house or small office system",
      large: "€12,000–€20,000+ for larger residential systems or small-to-medium commercial installations (system sizing varies significantly for businesses. Get a site-specific quote)",
      batteryAdd: "€3,400–€5,900 for residential; commercial battery storage is quoted per project",
    },
    savingsNote:
      "Residential savings are broadly in line with the island-wide 60–80% range. For businesses that operate primarily during daylight hours. Offices, retail, light industry. A high share of generation is used directly, which tends to produce faster commercial payback than businesses with evening-heavy demand.",
    permitsNote:
      "Santa Cruz's ayuntamiento processes both residential and commercial solar permits; commercial installations may also require additional health-and-safety and structural sign-off depending on building type. Apartment residents will need comunidad de vecinos approval as elsewhere.",
    localFaqs: [
      {
        q: "Is solar worth it for a business in Santa Cruz de Tenerife?",
        a: "Often yes, particularly for offices, retail and light-industrial premises that consume most of their electricity during opening hours. That daytime-heavy usage pattern is exactly when solar generation peaks, so a high proportion of output is used directly rather than exported at the lower surplus rate.",
      },
      {
        q: "How much does a commercial solar installation cost in Santa Cruz?",
        a: "Costs vary significantly with system size and site complexity. Small commercial systems can start from a similar range to a large residential install (€12,000–€20,000+), while larger industrial or multi-unit installations require a site-specific quote based on roof space, consumption profile and grid connection.",
      },
      {
        q: "How much does it cost to install residential solar panels in Santa Cruz?",
        a: "A typical family home (4–6 kWp) costs €6,200–€9,200 installed; smaller apartment systems run €3,000–€4,600, in line with the island-wide range, adjusted slightly for the city's transitional microclimate.",
      },
    ],
    nearbySlugs: ["la-laguna", "el-rosario", "candelaria", "tacoronte"],
  },
  {
    slug: "la-laguna",
    name: "San Cristóbal de La Laguna",
    region: "Metro",
    population: "~157,000",
    profile:
      "A UNESCO World Heritage university city with a cooler, cloudier microclimate than the coast, and a substantial international student and academic community.",
    metaTitle: "Solar Panels in La Laguna, Tenerife | Costs, Savings & Installers 2026",
    metaDescription:
      "Solar panel costs and realistic savings for La Laguna, Tenerife, including how the city's cooler upland climate affects payback. Plus FAQs and local installer matching.",
    heroIntro:
      "La Laguna sits higher and cooler than the coastal resort towns, with more cloud and rain across the year. Solar still pays off here, but expectations need adjusting from south-coast marketing figures.",
    aboutTown:
      "Tenerife's second city and former capital, La Laguna is a UNESCO World Heritage site with a large university population and a significant number of long-term foreign residents drawn to its historic centre and milder, cooler climate compared with the coast. Housing ranges from historic townhouses in the protected old town (where solar installation may face additional heritage restrictions) to more modern developments in the surrounding districts.",
    climateNote:
      "Sitting at higher altitude than Santa Cruz just below it, La Laguna has a noticeably cooler, cloudier and wetter climate. More in line with northern Tenerife than the dry south. Solar yield is typically 15–25% lower than the far south of the island, which should be reflected in any savings estimate for a La Laguna property.",
    costEstimate: {
      small: "€3,100–€4,700 for a 2–3 kWp apartment or townhouse system",
      medium: "€6,300–€9,400 for a 4–6 kWp house system",
      large: "€11,900–€16,900 for an 8–10 kWp+ larger property system",
      batteryAdd: "€3,400–€5,900 to add a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Expect savings toward the lower end of the island-wide 60–80% range given La Laguna's cooler, cloudier climate. Still a worthwhile investment given high island electricity costs, but get a shaded/orientation-specific estimate rather than assuming south-coast performance.",
    permitsNote:
      "If your property is within La Laguna's UNESCO-protected historic centre (casco histórico), solar installation may face additional heritage/aesthetic restrictions on visible panel placement. Check with the ayuntamiento's heritage department before committing to a design. Properties outside the historic core follow the standard Canarian permitting process.",
    localFaqs: [
      {
        q: "Can I install solar panels on a historic property in La Laguna's old town?",
        a: "It's possible but subject to additional heritage rules given the UNESCO World Heritage status of La Laguna's historic centre, panel placement, visibility from the street, and mounting method may all be restricted. Check with the ayuntamiento's heritage/patrimonio department before finalising a design, and use an installer experienced with protected buildings.",
      },
      {
        q: "Does solar work well in La Laguna given the cooler, cloudier climate?",
        a: "Yes, though yield is typically 15–25% lower than the far south of Tenerife due to more cloud cover and cooler temperatures at La Laguna's higher altitude. It's still a sound investment given high island electricity prices. Just ask for a site-specific estimate rather than assuming south-coast figures.",
      },
      {
        q: "How much does it cost to install solar panels in La Laguna?",
        a: "A typical family home (4–6 kWp) costs €6,300–€9,400 installed, with smaller systems from €3,100–€4,700 and larger properties €11,900–€16,900, before any applicable grants.",
      },
    ],
    nearbySlugs: ["santa-cruz-de-tenerife", "el-rosario", "tacoronte"],
  },
  {
    slug: "la-orotava",
    name: "La Orotava",
    region: "North",
    population: "~42,000",
    profile:
      "A historic hillside town above Puerto de la Cruz, with grand old properties, a strong farming valley, and a growing rural/expat property market.",
    metaTitle: "Solar Panels in La Orotava, Tenerife | Costs & Savings 2026",
    metaDescription:
      "Solar panel costs, savings and FAQs for La Orotava, Tenerife, including guidance for historic properties and the fertile Orotava Valley. Get matched with a local installer.",
    heroIntro:
      "La Orotava sits higher up the valley than Puerto de la Cruz below it, with a similar cloud pattern but often more usable roof space thanks to larger traditional properties and rural plots.",
    aboutTown:
      "Famous for its historic centre, Canarian architecture and the fertile Orotava Valley running down to the coast, La Orotava has a mix of grand old townhouses, modern developments on its outskirts, and rural fincas further up the valley. Many foreign buyers here are drawn to larger plots and traditional properties rather than the resort-style apartments common on the coast.",
    climateNote:
      "La Orotava shares the north coast's cloudier tendency, including periodic \"panza de burro\" low cloud, and sits at a higher, cooler elevation than Puerto de la Cruz. Solar yield is typically similar to or slightly below Puerto de la Cruz. Plan for roughly 10-20% less than south-coast towns.",
    costEstimate: {
      small: "€3,100–€4,700 for a 2–3 kWp system",
      medium: "€6,300–€9,400 for a 4–6 kWp family home system",
      large: "€11,900–€17,000 for a large property or finca system (8–10 kWp+)",
      batteryAdd: "€3,400–€5,900 for a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Expect savings toward the lower-to-middle of the island-wide 60–80% range from panels alone, similar to Puerto de la Cruz, given the shared north-coast cloud pattern.",
    permitsNote:
      "Properties in La Orotava's protected historic centre may face additional heritage restrictions on visible solar installations, similar to La Laguna. Check with the ayuntamiento's heritage department. Rural fincas outside the historic core generally follow the standard permitting process, though grid-connection distance can be a bigger factor than permits for isolated plots.",
    localFaqs: [
      {
        q: "How much does it cost to install solar panels in La Orotava?",
        a: "A typical family home (4–6 kWp) costs €6,300–€9,400 installed, with larger properties or fincas (8–10 kWp+) running €11,900–€17,000, before grants.",
      },
      {
        q: "Can I install solar panels on a historic property in La Orotava's town centre?",
        a: "Possibly, but check with the ayuntamiento's heritage department first. Properties in the protected historic centre may face restrictions on visible panel placement, similar to rules in La Laguna's old town.",
      },
      {
        q: "Does solar work well for rural fincas in the Orotava Valley?",
        a: "Yes, and larger rural plots often have more usable roof or ground-mount space than coastal apartments. Though if your finca is a long way from the grid, ask your installer to compare grid-tied costs against an off-grid or hybrid system.",
      },
    ],
    nearbySlugs: ["puerto-de-la-cruz", "los-realejos", "icod-de-los-vinos"],
  },
  {
    slug: "guia-de-isora",
    name: "Guía de Isora",
    region: "West",
    population: "~22,000",
    profile:
      "A fast-growing west-coast municipality anchored by the Alcalá and Playa San Juan resort areas, with strong sun and newer housing developments.",
    metaTitle: "Solar Panels in Guía de Isora, Tenerife | Costs & Savings 2026",
    metaDescription:
      "Solar panel costs, savings and FAQs for Guía de Isora, Tenerife, including its resort areas Alcalá and Playa San Juan. Get matched with a vetted local installer.",
    heroIntro:
      "Guía de Isora's west-coast location gives it some of the most reliable sun on the island, and its newer housing stock. Including around Alcalá and Playa San Juan. Is generally well suited to straightforward solar installation.",
    aboutTown:
      "Guía de Isora runs from the hillside municipal centre down to the coastal developments of Alcalá and Playa San Juan, an area that's grown quickly with newer villa and townhouse developments popular with foreign buyers and holiday-let investors. Modern build quality generally means straightforward roof access and structural suitability for solar.",
    climateNote:
      "Guía de Isora sits within Tenerife's dry, sunny west/south-west climate zone, similar to Adeje and Costa Adeje. Minimal cloud interference and strong, consistent solar yield year-round.",
    costEstimate: {
      small: "€3,200–€4,800 for a 2–3 kWp system",
      medium: "€6,500–€9,600 for a 4–6 kWp family home system",
      large: "€12,200–€17,200 for a large villa system (8–10 kWp+)",
      batteryAdd: "€3,500–€6,000 for a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Given the strong, consistent west-coast sun, expect savings toward the higher end of the island-wide 60–80% range from panels alone, similar to Adeje and Costa Adeje.",
    permitsNote:
      "Guía de Isora's ayuntamiento processes solar permits under the standard Canarian rules; most local installers include this in their service. Newer developments in Alcalá and Playa San Juan are typically managed by a comunidad de vecinos, so factor in community approval time.",
    localFaqs: [
      {
        q: "How much does it cost to install solar panels in Guía de Isora?",
        a: "A typical family home (4–6 kWp) costs €6,500–€9,600 installed, with larger villas (8–10 kWp+) running €12,200–€17,200, before grants.",
      },
      {
        q: "Is solar a good investment for a holiday-let villa in Alcalá or Playa San Juan?",
        a: "Often yes, strong, consistent west-coast sun and newer, well-specified properties make for good solar economics, particularly where daytime pool and cooling loads during guest stays absorb a high share of generation directly.",
      },
      {
        q: "How much does a solar battery cost in Guía de Isora?",
        a: "A 5–10 kWh lithium battery typically adds €3,500–€6,000 to a system here. Worth evaluating if evening air-conditioning or appliance use makes up a large share of your consumption.",
      },
    ],
    nearbySlugs: ["santiago-del-teide", "adeje", "costa-adeje"],
  },
  {
    slug: "santiago-del-teide",
    name: "Santiago del Teide",
    region: "West",
    population: "~12,000",
    profile:
      "A quieter west-coast municipality including Puerto de Santiago and Los Gigantes, popular with retirees and long-term foreign residents seeking a less built-up alternative to Costa Adeje.",
    metaTitle: "Solar Panels in Santiago del Teide, Tenerife | Costs & Savings 2026",
    metaDescription:
      "Solar panel costs, savings and FAQs for Santiago del Teide, Tenerife, including Puerto de Santiago and Los Gigantes. Get matched with a vetted local installer.",
    heroIntro:
      "Santiago del Teide, including the coastal areas of Puerto de Santiago and Los Gigantes, shares the dry, sunny west-coast climate that makes solar such a strong investment on this side of the island.",
    aboutTown:
      "Quieter and less densely developed than Costa Adeje, Santiago del Teide's coastal areas around Puerto de Santiago and the dramatic Los Gigantes cliffs attract a significant long-term foreign resident population drawn to the more relaxed pace. Housing includes villas, townhouses and apartment complexes, many with strong roof access for solar.",
    climateNote:
      "Part of the same dry west-coast microclimate zone as Guía de Isora and Adeje, with minimal cloud cover and strong, reliable solar yield across the year.",
    costEstimate: {
      small: "€3,100–€4,700 for a 2–3 kWp system",
      medium: "€6,400–€9,400 for a 4–6 kWp family home system",
      large: "€12,000–€17,000 for a large villa system (8–10 kWp+)",
      batteryAdd: "€3,400–€5,900 for a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Consistent with the strong west-coast profile, expect 65–80% bill reductions from panels alone, similar to neighbouring Guía de Isora and Adeje.",
    permitsNote:
      "Handled under the standard Canarian self-consumption process via the local ayuntamiento; apartment owners in Puerto de Santiago or Los Gigantes complexes will need comunidad de vecinos sign-off.",
    localFaqs: [
      {
        q: "How much does it cost to install solar panels in Santiago del Teide?",
        a: "A typical family home (4–6 kWp) costs €6,400–€9,400 installed, with larger villas (8–10 kWp+) running €12,000–€17,000, before grants.",
      },
      {
        q: "Is solar worth it in Los Gigantes or Puerto de Santiago?",
        a: "Yes, these areas share the dry, sunny west-coast climate that makes solar particularly effective on this side of Tenerife, with savings typically in the 65–80% range from panels alone.",
      },
      {
        q: "Do apartment owners in Los Gigantes need community approval for solar?",
        a: "Yes, if the building is managed by a comunidad de vecinos. Roof space is a shared element, so raise it at a community meeting before committing to an installer.",
      },
    ],
    nearbySlugs: ["guia-de-isora", "icod-de-los-vinos", "adeje"],
  },
  {
    slug: "icod-de-los-vinos",
    name: "Icod de los Vinos",
    region: "North",
    population: "~24,000",
    profile:
      "A historic north-coast wine-growing town, home to the famous Drago Milenario tree, with a smaller but established foreign resident community.",
    metaTitle: "Solar Panels in Icod de los Vinos, Tenerife | Costs & Savings 2026",
    metaDescription:
      "Solar panel costs, savings and FAQs for Icod de los Vinos, Tenerife. Realistic figures for the north coast's cloudier climate. Get matched with a local installer.",
    heroIntro:
      "Icod de los Vinos sits on Tenerife's cloudier north coast, so solar still works well here but with different expectations than the sunnier south and west.",
    aboutTown:
      "Known for its historic centre, vineyards and the ancient Drago Milenario tree, Icod de los Vinos has a mix of traditional Canarian housing in town and newer developments toward the coast, with an established but smaller international community compared with the southern resorts.",
    climateNote:
      "Like Puerto de la Cruz and La Orotava, Icod sits in the north coast's cloudier climate zone, with more frequent low cloud than the south. Expect solar yield roughly 10–20% below south-coast towns.",
    costEstimate: {
      small: "€3,000–€4,600 for a 2–3 kWp system",
      medium: "€6,200–€9,200 for a 4–6 kWp family home system",
      large: "€11,700–€16,700 for a large property system (8–10 kWp+)",
      batteryAdd: "€3,300–€5,800 for a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Expect savings toward the lower-to-middle of the island-wide 60–80% range from panels alone, in line with the north coast's cloudier profile.",
    permitsNote:
      "Standard Canarian self-consumption permitting applies via the local ayuntamiento; properties in the historic centre should check for any heritage considerations before finalising panel placement.",
    localFaqs: [
      {
        q: "How much does it cost to install solar panels in Icod de los Vinos?",
        a: "A typical family home (4–6 kWp) costs €6,200–€9,200 installed, with larger properties (8–10 kWp+) running €11,700–€16,700, before grants.",
      },
      {
        q: "Does solar work well in Icod de los Vinos given the north-coast climate?",
        a: "Yes, though expect yield roughly 10–20% below south-coast towns due to more frequent cloud cover. Still a solid investment given high island electricity prices, but get a site-specific estimate.",
      },
    ],
    nearbySlugs: ["puerto-de-la-cruz", "la-orotava", "santiago-del-teide"],
  },
  {
    slug: "candelaria",
    name: "Candelaria",
    region: "Metro",
    population: "~28,000",
    profile:
      "A coastal town just south of Santa Cruz, best known as a religious pilgrimage site, with a mix of long-term residents and commuter households.",
    metaTitle: "Solar Panels in Candelaria, Tenerife | Costs & Savings 2026",
    metaDescription:
      "Solar panel costs, savings and FAQs for Candelaria, Tenerife. A coastal town near Santa Cruz with strong solar potential. Get matched with a local installer.",
    heroIntro:
      "Candelaria's coastal position just south of Santa Cruz gives it good sun exposure, and its mix of housing types. From apartments to detached homes. Covers most solar scenarios.",
    aboutTown:
      "Best known for its basilica and pilgrimage tradition, Candelaria functions partly as a commuter town for Santa Cruz, with housing ranging from seafront apartments to detached homes further inland toward the hills. It has a smaller international community than the southern resort towns but a steadily growing interest in solar as electricity costs rise.",
    climateNote:
      "Candelaria sits in a transitional climate zone similar to Santa Cruz. Generally sunnier and drier than the far north, though not matching the consistently dry conditions of the deep south.",
    costEstimate: {
      small: "€3,000–€4,600 for a 2–3 kWp system",
      medium: "€6,200–€9,200 for a 4–6 kWp family home system",
      large: "€11,700–€16,700 for a large property system (8–10 kWp+)",
      batteryAdd: "€3,300–€5,800 for a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Savings are broadly in line with the island-wide 60–80% range, similar to Santa Cruz given the shared transitional microclimate.",
    permitsNote:
      "Candelaria's ayuntamiento processes solar permits under the standard Canarian rules; apartment residents need comunidad de vecinos approval, as elsewhere on the island.",
    localFaqs: [
      {
        q: "How much does it cost to install solar panels in Candelaria?",
        a: "A typical family home (4–6 kWp) costs €6,200–€9,200 installed, with larger properties (8–10 kWp+) running €11,700–€16,700, before grants.",
      },
      {
        q: "Is solar worth it for a Candelaria apartment?",
        a: "It can be, though as with most apartment buildings you'll need comunidad de vecinos approval first. Ask your installer about autoconsumo colectivo if an individual system isn't practical for your building.",
      },
    ],
    nearbySlugs: ["santa-cruz-de-tenerife", "guimar", "el-rosario"],
  },
  {
    slug: "guimar",
    name: "Güímar",
    region: "South",
    population: "~19,000",
    profile:
      "A quieter east-coast municipality known for its pyramids and agricultural valley, with a smaller expat community and larger rural plots.",
    metaTitle: "Solar Panels in Güímar, Tenerife | Costs & Savings 2026",
    metaDescription:
      "Solar panel costs, savings and FAQs for Güímar, Tenerife, including its rural valley properties. Get matched with a vetted local installer.",
    heroIntro:
      "Güímar's mix of coastal and rural valley properties, combined with good sun exposure, makes it a solid but often overlooked option for solar in eastern Tenerife.",
    aboutTown:
      "Known for the Güímar Pyramids and its agricultural valley, Güímar has a quieter, less touristy character than the southern resort towns, with a mix of coastal apartments and larger rural properties inland. Foreign residents here are often drawn to larger plots and a slower pace of life compared with Costa Adeje or Los Cristianos.",
    climateNote:
      "Güímar sits on the drier eastern side of the island, benefiting from decent sun exposure, though slightly less consistently dry than the far south around Arona and Adeje.",
    costEstimate: {
      small: "€3,100–€4,700 for a 2–3 kWp system",
      medium: "€6,300–€9,300 for a 4–6 kWp family home system",
      large: "€11,800–€16,800 for a large property or rural finca system (8–10 kWp+)",
      batteryAdd: "€3,400–€5,900 for a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Typical savings fall within the island-wide 60–80% range from panels alone, with rural properties sometimes able to install larger systems thanks to more available roof or ground-mount space.",
    permitsNote:
      "Standard Canarian permitting applies via Güímar's ayuntamiento; rural fincas should also confirm grid-connection distance and capacity with the installer early, since this can affect both cost and design more than permitting does.",
    localFaqs: [
      {
        q: "How much does it cost to install solar panels in Güímar?",
        a: "A typical family home (4–6 kWp) costs €6,300–€9,300 installed, with larger rural properties (8–10 kWp+) running €11,800–€16,800, before grants.",
      },
      {
        q: "Is solar a good option for rural properties in the Güímar valley?",
        a: "Often yes, larger plots frequently allow bigger systems and more flexible panel placement than coastal apartments, though it's worth checking grid connection distance and capacity with your installer, especially for more remote fincas.",
      },
    ],
    nearbySlugs: ["candelaria", "granadilla-de-abona", "el-rosario"],
  },
  {
    slug: "granadilla-de-abona",
    name: "Granadilla de Abona",
    region: "South",
    population: "~46,000",
    profile:
      "A large southern municipality stretching from the airport area to the coast at El Médano, with a strong wind/kitesurf expat community and growing residential development.",
    metaTitle: "Solar Panels in Granadilla de Abona & El Médano, Tenerife | Costs 2026",
    metaDescription:
      "Solar panel costs, savings and FAQs for Granadilla de Abona and El Médano, Tenerife. Get matched with a vetted local installer.",
    heroIntro:
      "Granadilla de Abona, including the popular coastal town of El Médano, sits in the dry southern climate zone and has a growing international community drawn by watersports and lower property prices than Costa Adeje.",
    aboutTown:
      "Granadilla de Abona is one of Tenerife's largest municipalities by area, running from the Tenerife South airport zone down to the coastal town of El Médano, well known internationally for windsurfing and kitesurfing. Its resident mix includes long-term expats, remote workers and a growing number of holiday-let owners, with housing ranging from modern apartment developments to detached homes.",
    climateNote:
      "Granadilla shares the dry, sunny climate of the far south, similar to Arona and Adeje, with strong and consistent solar yield. Though El Médano is also known for strong winds, worth mentioning to your installer for mounting specification.",
    costEstimate: {
      small: "€3,000–€4,700 for a 2–3 kWp system",
      medium: "€6,200–€9,300 for a 4–6 kWp family home system",
      large: "€11,700–€16,800 for a large property system (8–10 kWp+)",
      batteryAdd: "€3,400–€5,800 for a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Consistent with the strong southern sun profile, expect 60–80% savings from panels alone, similar to Arona and San Miguel de Abona.",
    permitsNote:
      "Standard Canarian self-consumption permitting applies via Granadilla's ayuntamiento; if you're near the airport flight path or in a protected coastal area, check with your installer whether any additional restrictions apply to your specific plot.",
    localFaqs: [
      {
        q: "How much does it cost to install solar panels in El Médano or Granadilla de Abona?",
        a: "A typical family home (4–6 kWp) costs €6,200–€9,300 installed, with larger properties (8–10 kWp+) running €11,700–€16,800, before grants.",
      },
      {
        q: "Does El Médano's wind affect solar panel installation?",
        a: "It can affect mounting specification. Installers experienced in the area typically use wind-rated mounting systems for coastal El Médano properties, so mention your exact location when getting quotes.",
      },
      {
        q: "Is solar worth it for a holiday-let property in El Médano?",
        a: "Often yes, particularly given strong, consistent southern sun. Get a quote based on your actual booking and consumption pattern rather than assuming standard residential savings apply.",
      },
    ],
    nearbySlugs: ["san-miguel-de-abona", "arona", "guimar"],
  },
  {
    slug: "el-rosario",
    name: "El Rosario",
    region: "Metro",
    population: "~18,000",
    profile:
      "A hillside municipality above Santa Cruz, including the mountain village of La Esperanza, with a mixed residential and semi-rural character.",
    metaTitle: "Solar Panels in El Rosario, Tenerife | Costs & Savings 2026",
    metaDescription:
      "Solar panel costs, savings and FAQs for El Rosario, Tenerife, including La Esperanza. Get matched with a vetted local installer.",
    heroIntro:
      "El Rosario's hillside position above Santa Cruz means more varied microclimates than the coast. Solar still works, but altitude and cloud cover matter more here than in most other Tenerife towns.",
    aboutTown:
      "El Rosario stretches from the outskirts of Santa Cruz up into the forested hills around La Esperanza, giving it a cooler, greener character than the coastal towns. Housing is a mix of suburban developments closer to Santa Cruz and more rural properties higher up, popular with residents wanting space and a cooler climate within commuting distance of the capital.",
    climateNote:
      "As altitude increases toward La Esperanza, cloud cover and rainfall increase too. Parts of El Rosario sit within or above the belt of cloud that regularly covers the Anaga and central highlands. Lower, coast-facing parts of the municipality perform more like Santa Cruz; higher areas should expect meaningfully reduced solar yield, so get a site-specific assessment.",
    costEstimate: {
      small: "€3,100–€4,700 for a 2–3 kWp system",
      medium: "€6,300–€9,400 for a 4–6 kWp family home system",
      large: "€11,900–€16,900 for a large property system (8–10 kWp+)",
      batteryAdd: "€3,400–€5,900 for a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Savings vary more within El Rosario than most Tenerife towns depending on altitude and local cloud cover. Lower areas near Santa Cruz should expect savings similar to the city; higher areas around La Esperanza should plan conservatively and get a site survey.",
    permitsNote:
      "Standard Canarian permitting applies via El Rosario's ayuntamiento; rural or forested properties should also check any environmental or land-use restrictions that can apply near protected highland areas.",
    localFaqs: [
      {
        q: "Does solar work well in La Esperanza or higher parts of El Rosario?",
        a: "It can, but yield is typically lower than coastal areas due to more cloud cover and cooler temperatures at altitude. Get a site-specific assessment rather than assuming Santa Cruz-level performance.",
      },
      {
        q: "How much does it cost to install solar panels in El Rosario?",
        a: "A typical family home (4–6 kWp) costs €6,300–€9,400 installed, with larger properties (8–10 kWp+) running €11,900–€16,900, before grants. Though get a local yield estimate given the municipality's varied altitude.",
      },
    ],
    nearbySlugs: ["santa-cruz-de-tenerife", "la-laguna", "candelaria"],
  },
  {
    slug: "tacoronte",
    name: "Tacoronte",
    region: "North",
    population: "~24,000",
    profile:
      "A north-coast wine-region town near La Laguna, with a mix of long-term residents and a smaller foreign community than the resort areas.",
    metaTitle: "Solar Panels in Tacoronte, Tenerife | Costs & Savings 2026",
    metaDescription:
      "Solar panel costs, savings and FAQs for Tacoronte, Tenerife. Get matched with a vetted local installer.",
    heroIntro:
      "Tacoronte sits in Tenerife's north-coast wine region, with a similar cloudier climate to La Laguna and Puerto de la Cruz, but often larger properties with good roof space.",
    aboutTown:
      "Known for its vineyards and the Denominación de Origen Tacoronte-Acentejo wine region, Tacoronte has a mix of traditional Canarian housing and newer developments, with a smaller international community than the southern resorts but a steady base of long-term foreign residents drawn to the area's rural character and proximity to La Laguna and Santa Cruz.",
    climateNote:
      "Tacoronte shares the north coast's cloudier, cooler climate profile similar to La Laguna, with solar yield typically 15–25% below the far south of the island.",
    costEstimate: {
      small: "€3,100–€4,700 for a 2–3 kWp system",
      medium: "€6,300–€9,400 for a 4–6 kWp family home system",
      large: "€11,900–€16,900 for a large property system (8–10 kWp+)",
      batteryAdd: "€3,400–€5,900 for a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Expect savings toward the lower end of the island-wide 60–80% range from panels alone, in line with the north coast's cloudier, cooler profile.",
    permitsNote:
      "Standard Canarian permitting applies via Tacoronte's ayuntamiento; rural properties in the wine region typically have good roof or ground-mount flexibility, but confirm grid connection details with your installer.",
    localFaqs: [
      {
        q: "How much does it cost to install solar panels in Tacoronte?",
        a: "A typical family home (4–6 kWp) costs €6,300–€9,400 installed, with larger properties (8–10 kWp+) running €11,900–€16,900, before grants.",
      },
      {
        q: "Does solar work well in Tacoronte given the north-coast climate?",
        a: "Yes, though expect yield 15–25% below the far south of Tenerife due to more cloud cover. Still worthwhile given high island electricity costs, but get a site-specific estimate.",
      },
    ],
    nearbySlugs: ["la-laguna", "los-realejos", "santa-cruz-de-tenerife"],
  },
  {
    slug: "los-realejos",
    name: "Los Realejos",
    region: "North",
    population: "~37,000",
    profile:
      "A north-coast town neighbouring Puerto de la Cruz, with a mix of traditional housing and newer developments, and steep terrain offering varied roof orientations.",
    metaTitle: "Solar Panels in Los Realejos, Tenerife | Costs & Savings 2026",
    metaDescription:
      "Solar panel costs, savings and FAQs for Los Realejos, Tenerife. Get matched with a vetted local installer.",
    heroIntro:
      "Los Realejos sits right beside Puerto de la Cruz and shares its cloudier north-coast climate, but its steep terrain means orientation matters even more than usual when planning a system here.",
    aboutTown:
      "Bordering Puerto de la Cruz to the west, Los Realejos combines a historic centre with newer residential development spreading up the steep hillside toward La Orotava valley. The terrain here is notably steeper than most Tenerife towns, which affects both roof orientation options and, in some cases, ground-mount feasibility.",
    climateNote:
      "Los Realejos shares Puerto de la Cruz's north-coast cloud pattern, including periodic \"panza de burro\" low cloud, expect solar yield roughly 10–20% below the south coast, with the steep local terrain making orientation assessment particularly important.",
    costEstimate: {
      small: "€3,100–€4,700 for a 2–3 kWp system",
      medium: "€6,300–€9,400 for a 4–6 kWp family home system",
      large: "€11,900–€16,900 for a large property system (8–10 kWp+)",
      batteryAdd: "€3,400–€5,900 for a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Savings are typically toward the lower-to-middle of the island-wide 60–80% range, similar to Puerto de la Cruz, with actual yield heavily dependent on your specific roof's orientation given the steep local terrain.",
    permitsNote:
      "Standard Canarian permitting applies via the local ayuntamiento; given the steep terrain, a proper site survey matters more here than in flatter towns. Insist on one before agreeing a system size or price.",
    localFaqs: [
      {
        q: "How much does it cost to install solar panels in Los Realejos?",
        a: "A typical family home (4–6 kWp) costs €6,300–€9,400 installed, with larger properties (8–10 kWp+) running €11,900–€16,900, before grants.",
      },
      {
        q: "Does the steep terrain in Los Realejos affect solar panel installation?",
        a: "Yes, roof orientation varies more here than in flatter towns, so a proper site survey matters more than usual. Ask your installer for a shading and orientation assessment specific to your property before finalising a quote.",
      },
    ],
    nearbySlugs: ["puerto-de-la-cruz", "la-orotava", "tacoronte"],
  },
  {
    slug: "san-miguel-de-abona",
    name: "San Miguel de Abona",
    region: "South",
    population: "~24,000",
    profile:
      "A southern municipality spanning hillside villages and the coastal resort area of Costa del Silencio, with strong sun and a growing residential expat base.",
    metaTitle: "Solar Panels in San Miguel de Abona, Tenerife | Costs & Savings 2026",
    metaDescription:
      "Solar panel costs, savings and FAQs for San Miguel de Abona, Tenerife, including Costa del Silencio. Get matched with a vetted local installer.",
    heroIntro:
      "San Miguel de Abona spans hillside farming villages and the coastal Costa del Silencio area, and benefits from the same strong, dry southern climate as its better-known neighbours Arona and Granadilla.",
    aboutTown:
      "San Miguel de Abona's municipality includes the traditional hillside town centre and agricultural areas, plus the coastal development around Costa del Silencio near the airport. It's attracted a growing number of long-term foreign residents seeking value compared with Costa Adeje while staying close to the south's amenities and airport.",
    climateNote:
      "San Miguel de Abona sits within the dry southern climate zone shared with Arona and Granadilla de Abona, giving strong, consistent solar yield with minimal cloud interference.",
    costEstimate: {
      small: "€3,000–€4,700 for a 2–3 kWp system",
      medium: "€6,200–€9,200 for a 4–6 kWp family home system",
      large: "€11,700–€16,700 for a large property system (8–10 kWp+)",
      batteryAdd: "€3,400–€5,800 for a 5–10 kWh lithium battery",
    },
    savingsNote:
      "Consistent with the strong southern sun profile, expect 60–80% savings from panels alone, similar to Arona and Granadilla de Abona.",
    permitsNote:
      "Standard Canarian permitting applies via San Miguel de Abona's ayuntamiento; Costa del Silencio apartment owners should factor in comunidad de vecinos approval as elsewhere on the coast.",
    localFaqs: [
      {
        q: "How much does it cost to install solar panels in San Miguel de Abona?",
        a: "A typical family home (4–6 kWp) costs €6,200–€9,200 installed, with larger properties (8–10 kWp+) running €11,700–€16,700, before grants.",
      },
      {
        q: "Is solar worth it in Costa del Silencio?",
        a: "Yes, it shares the strong, dry southern climate of Arona and Granadilla de Abona, so expect savings in the 60–80% range from panels alone, similar to other southern coastal towns.",
      },
    ],
    nearbySlugs: ["granadilla-de-abona", "arona", "los-cristianos"],
  },
];

export function getTownBySlug(slug: string): TownContent | undefined {
  return towns.find((t) => t.slug === slug);
}
