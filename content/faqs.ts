import { FAQItem } from "./types";

// Island-wide FAQ bank. Used on the homepage FAQ hub and the /faq page.
// Town pages have their own localFaqs (in towns.ts) that reference the same
// facts but phrased around that specific town, for long-tail search coverage.
export const islandFaqs: FAQItem[] = [
  {
    q: "How much does it cost to install solar panels in Tenerife?",
    a: "A typical residential system in Tenerife costs €1.50–€1.75 per watt installed. Around 20–30% more than equivalent mainland Spain projects, mainly because of shipping, import logistics and a smaller pool of installers. A small apartment system (2–3 kWp) usually runs €3,000–€5,000, an average family home (4–6 kWp) €6,000–€10,000, and a large villa with high consumption (8–10 kWp+) €12,000–€18,000 before any grants are applied.",
  },
  {
    q: "How long does it take for solar panels to pay for themselves in Tenerife?",
    a: "Most residential installations in Tenerife pay back in 5–7 years, making it one of the fastest-payback provinces in Spain. That's thanks to over 2,800 hours of sunshine a year and electricity prices of €0.20–0.28/kWh (island grids are isolated and more expensive than the mainland). Available IRPF tax deductions and IBI reductions specifically for self-consumption installations can shorten payback further. Panels themselves are typically warrantied for 25 years, so most of that lifespan is pure savings after payback.",
  },
  {
    q: "How much can I save on my electricity bill with solar panels?",
    a: "Typical savings are 60–80% of your electricity bill with panels alone, rising to 90%+ if you add battery storage so you can use your own stored energy in the evening instead of buying it back from the grid at night rates.",
  },
  {
    q: "Do solar panels still work on cloudy or hazy (calima) days?",
    a: "Yes. Panels generate electricity from diffuse daylight, not just direct sun, so cloudy days typically reduce output by 20–40% rather than stopping generation. Tenerife's annual average sunshine is high enough that this has a limited effect on yearly savings, though Saharan dust events (calima) can temporarily reduce output further and are also a reason to factor in periodic panel cleaning.",
  },
  {
    q: "What's the best angle and direction for solar panels in Tenerife?",
    a: "For fixed-mount systems, roughly 25° tilt facing south gives the best year-round yield in Tenerife's latitude. East/west-facing roofs still work well and are common on the island, just with a slightly flatter production curve across the day rather than a single midday peak.",
  },
  {
    q: "Do I need a battery, or is grid feed-in enough?",
    a: "It depends on your usage pattern. Without a battery you're on 'compensación de excedentes' (surplus compensation): power you don't use during the day is exported to the grid and credited on your bill at roughly €0.04–0.10 per kWh. Power you use directly from your own panels is worth far more. Around €0.15–0.18 per kWh in avoided purchase cost. If a lot of your household consumption happens in the evening, a battery captures that difference and can push total savings above 90%. If you're mostly home and using appliances during the day, a battery may not be worth the extra cost yet.",
  },
  {
    q: "What is compensación de excedentes and how does it work?",
    a: "It's Spain's simplified surplus-compensation scheme for self-consumption installations up to 100kW. Any solar power you generate but don't use yourself is exported to the grid, and your utility credits you for it on your monthly bill at a rate set by your contract. Typically €0.04–0.10 per kWh, well below the retail price you'd otherwise pay. It's not the same as a full feed-in tariff or 'selling back' at retail price.",
  },
  {
    q: "Can I go fully off-grid in Tenerife?",
    a: "Technically yes, with enough battery capacity and sometimes a backup generator, but for most homes connected to the grid it's rarely the most cost-effective option. Grid-tied with self-consumption and surplus compensation gives better economics for the vast majority of properties. Off-grid tends to make more sense for remote fincas or rural plots without an existing or affordable grid connection.",
  },
  {
    q: "Do I need a building permit (licencia de obra) to install solar panels in Tenerife?",
    a: "In many parts of Spain a building permit is required for self-consumption solar, though the exact requirement varies by autonomous community and, locally, by ayuntamiento (town council). In practice, most installers in Tenerife handle the permit and crane-permit paperwork on your behalf as part of the installation package. But it's worth confirming this is included in any quote you receive, and checking with your specific ayuntamiento if your property has any listed or protected status.",
  },
  {
    q: "What's the legal process to sell surplus energy back to the grid in Tenerife?",
    a: "After installation, your installer needs to complete the 'legalización' process, registering the installation with the relevant industry authority and your electricity company so you're recognised as a self-consumption generator eligible for surplus compensation. Until this is completed you can use the power you generate, but you won't be credited for anything exported to the grid.",
  },
  {
    q: "Do I need permission from my community of owners (comunidad de vecinos) to install solar panels?",
    a: "If you live in an apartment block or a property governed by a comunidad de vecinos, yes. You'll generally need approval from the community, since roof space and building exterior are shared elements. Spanish law has made this easier in recent years for self-consumption specifically, but it's still worth raising it at a community meeting early, and asking your installer whether 'autoconsumo colectivo' (collective self-consumption, where several neighbours share one installation and split the generation) is a better fit for your building.",
  },
  {
    q: "What taxes apply to solar panels in the Canary Islands?",
    a: "The Canary Islands use IGIC instead of mainland Spain's IVA, and IGIC's general rate is 7% versus 21% IVA. A real saving on goods and services generally, including solar equipment and installation, since we couldn't find solar-specific goods listed under IGIC's separate 0% category (which is reserved for items like basic foodstuffs, books and medicines). Worth knowing separately: residential electricity bills themselves are taxed at 0% IGIC for homes with up to 10kW contracted power. That's a genuine 0% rate, but it applies to your electricity supply, not to buying panels. On top of both of these, self-consumption installations can separately qualify for IRPF tax deductions and IBI reductions. See the grants question below.",
  },
  {
    q: "What grants or subsidies are available for solar panels in Tenerife?",
    a: "Available support has included EU recovery-fund grants covering a portion of installation costs, IRPF income tax deductions (historically around 10% for single-family homes and 20% for communities of owners, subject to annual caps), and local IBI (property tax) reductions of 30–50% for a number of years after installation, plus reductions in ICIO (the construction tax) in some municipalities. Funding windows open and close, and rules change year to year, so always check current availability with your installer or your ayuntamiento before assuming a specific grant applies. Don't rely on last year's figures.",
  },
  {
    q: "Do solar panels increase a property's resale value in Tenerife?",
    a: "Industry data points to a typical uplift, often cited in the 4–8% range, and an improved energy performance certificate (EPC) rating, which is increasingly something buyers and renters actively check for. Treat specific percentage figures as directional rather than guaranteed. Actual impact depends on the local market, property type and how the buyer values running costs versus purchase price.",
  },
  {
    q: "Is solar required for holiday rental (vivienda vacacional) licences in Tenerife?",
    a: "Canarian holiday-rental regulation has included requirements around solar water heating for tourist properties 'where technically and legally possible.' Requirements can change and are specific to property type and location, so if you're licensing a holiday let, verify the current requirement directly with your ayuntamiento or a local gestor before assuming compliance.",
  },
  {
    q: "How often do solar panels need cleaning in Tenerife?",
    a: "More often than in mainland climates, mainly because of Saharan dust (calima) and salt air near the coast, both of which can reduce output if left to build up. Many installers offer a periodic cleaning and inspection service. Worth asking about when you get a quote, especially for coastal properties.",
  },
  {
    q: "What warranty should I expect on panels and inverters?",
    a: "Reputable panels typically carry 25-year performance warranties and 10–12 year product warranties; inverters are usually warrantied for 5–12 years depending on brand and whether you pay for an extension. Always ask your installer for the manufacturer warranty documents directly rather than relying on a verbal assurance.",
  },
  {
    q: "Can I finance a solar installation instead of paying upfront?",
    a: "Many installers on the island offer financing or payment-plan options, and some banks offer 'green loans' with preferential rates for renewable energy home improvements. Terms vary significantly by installer and lender, so it's worth comparing at least two financing offers alongside the headline installation price.",
  },
  {
    q: "Is solar worth it for a business or commercial property in Tenerife?",
    a: "Commercial solar in Tenerife benefits from the same high sun hours and elevated island electricity prices as residential, and businesses that consume most of their power during daylight opening hours. Retail, hospitality, offices, light industry. Tend to see the strongest returns, since they use a high proportion of what they generate directly rather than exporting it at the lower surplus rate.",
  },
  {
    q: "What's the payback period for commercial solar in Tenerife?",
    a: "Commercial systems generally follow the same principle as residential: the more of your own generation you consume directly during the day, the faster the payback. On the mainland and internationally, commercial solar payback commonly falls in a 4–9 year range depending on system size and usage; Tenerife's higher electricity costs and strong irradiance tend to push toward the faster end of that range for businesses with good daytime consumption, though this should be confirmed with a site-specific quote rather than assumed.",
  },
];
