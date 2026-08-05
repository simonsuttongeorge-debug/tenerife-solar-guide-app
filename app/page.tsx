import Link from "next/link";
import Container from "@/components/Container";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import StatCard from "@/components/StatCard";
import { towns } from "@/content/towns";
import { services } from "@/content/services";
import { islandFaqs } from "@/content/faqs";
import { siteConfig } from "@/content/siteConfig";
import { JsonLd, faqPageSchema, localBusinessSchema } from "@/lib/schema";

export const metadata = {
  title: "Solar Panels in Tenerife. Costs, Savings & Local Installers (2026)",
  description:
    "The most complete independent guide to solar panels, batteries and EV charging in Tenerife. Real costs and savings for every town, honest FAQs, and free matching with vetted local installers.",
  alternates: { canonical: "/" },
};

const homeFaqs = islandFaqs.slice(0, 8);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema(homeFaqs)} />
      <JsonLd data={localBusinessSchema("Tenerife")} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sun-50 to-white">
        <Container className="py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-wide text-sun-600 font-semibold text-sm mb-3">
              Tenerife, Canary Islands
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deep-900 leading-tight">
              The independent guide to solar panels in Tenerife
            </h1>
            <p className="mt-5 text-lg text-deep-600">
              Real 2026 costs, honest savings estimates, permits and FAQs for every town on the
              island, plus a free, no-obligation match with a vetted local installer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="rounded-full bg-sun-500 px-6 py-3 font-semibold text-white shadow hover:bg-sun-600 transition"
              >
                Get my free quote
              </a>
              <a
                href="#towns"
                className="rounded-full border border-deep-200 px-6 py-3 font-semibold text-deep-700 hover:bg-deep-50 transition"
              >
                Find my town
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Hours of sunshine / year" value={siteConfig.islandFacts.sunHoursPerYear} />
            <StatCard label="Typical bill savings" value={siteConfig.islandFacts.typicalSavingsRange} />
            <StatCard label="Savings with battery storage" value={siteConfig.islandFacts.typicalSavingsWithBattery} />
            <StatCard label="Typical residential payback" value={`${siteConfig.islandFacts.typicalPaybackYearsResidential} yrs`} />
          </div>
        </Container>
      </section>

      {/* Why Tenerife */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-deep-900">
            Why solar makes unusually good sense in Tenerife
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm text-deep-600">
            <div className="rounded-xl2 border border-deep-100 p-5">
              <p className="font-semibold text-deep-800 mb-1">Exceptional sun, low variation</p>
              <p>
                Over {siteConfig.islandFacts.sunHoursPerYear} hours of sunshine a year and far less
                seasonal swing than mainland Spain. Winter production typically stays at
                65–75% of summer output.
              </p>
            </div>
            <div className="rounded-xl2 border border-deep-100 p-5">
              <p className="font-semibold text-deep-800 mb-1">Higher electricity prices</p>
              <p>
                The Canary Islands run isolated electrical grids, disconnected from mainland
                Spain, which keeps residential rates around €0.20–0.28/kWh. Higher than the
                peninsula, and exactly what makes self-generated power so valuable here.
              </p>
            </div>
            <div className="rounded-xl2 border border-deep-100 p-5">
              <p className="font-semibold text-deep-800 mb-1">Grants &amp; tax deductions for solar</p>
              <p>
                Self-consumption installations can qualify for {siteConfig.islandFacts.solarIncentives} . 
                on top of the savings from lower bills. Funding windows and exact rates change
                year to year, so always confirm what's currently available with your installer.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Towns */}
      <section id="towns" className="py-16 bg-deep-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-deep-900">
            Solar panel guides for every town in Tenerife
          </h2>
          <p className="mt-3 text-deep-600 max-w-2xl">
            Costs, expected savings, permit rules and local FAQs vary meaningfully from the dry
            south coast to the cloudier north and the cooler uplands. Find your town below for
            numbers specific to where you actually live.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {towns.map((t) => (
              <Link
                key={t.slug}
                href={`/solar-panels-${t.slug}`}
                className="rounded-xl2 border border-deep-100 bg-white p-5 hover:shadow-md hover:border-sun-300 transition"
              >
                <p className="font-bold text-deep-800">{t.name}</p>
                <p className="text-xs uppercase tracking-wide text-sun-600 mt-0.5">{t.region} Tenerife</p>
                <p className="text-sm text-deep-500 mt-2">{t.profile}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-deep-900">Solar services across Tenerife</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="rounded-xl2 border border-deep-100 p-5 hover:shadow-md hover:border-sun-300 transition"
              >
                <p className="font-bold text-deep-800">{s.shortName}</p>
                <p className="text-sm text-deep-500 mt-2">{s.heroIntro.slice(0, 90)}...</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-deep-50">
        <Container>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-deep-900">
              Frequently asked questions about solar in Tenerife
            </h2>
            <Link href="/faq" className="text-sun-600 font-semibold text-sm hover:underline">
              See all FAQs →
            </Link>
          </div>
          <div className="mt-8">
            <FAQAccordion items={homeFaqs} />
          </div>
        </Container>
      </section>

      {/* Lead form */}
      <section id="quote" className="py-16">
        <Container className="flex flex-col md:flex-row gap-10 items-start justify-between">
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold text-deep-900">
              Get matched with a vetted local installer
            </h2>
            <p className="mt-3 text-deep-600">
              Tell us about your property and what you're looking for. We'll pass your details
              on to the installer best suited to your town and project. Free, and with no
              obligation.
            </p>
          </div>
          <LeadForm source="homepage" />
        </Container>
      </section>
    </>
  );
}
