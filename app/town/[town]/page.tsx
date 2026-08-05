import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import StatCard from "@/components/StatCard";
import { towns, getTownBySlug } from "@/content/towns";
import { services } from "@/content/services";
import { siteConfig } from "@/content/siteConfig";
import { JsonLd, faqPageSchema, localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return towns.map((t) => ({ town: t.slug }));
}

export function generateMetadata({ params }: { params: { town: string } }) {
  const town = getTownBySlug(params.town);
  if (!town) return {};
  return {
    title: town.metaTitle,
    description: town.metaDescription,
    alternates: { canonical: `/solar-panels-${town.slug}` },
  };
}

export default function TownPage({ params }: { params: { town: string } }) {
  const town = getTownBySlug(params.town);
  if (!town) return notFound();

  const nearby = town.nearbySlugs
    .map((slug) => towns.find((t) => t.slug === slug))
    .filter(Boolean) as typeof towns;

  return (
    <>
      <JsonLd data={faqPageSchema(town.localFaqs)} />
      <JsonLd data={localBusinessSchema(town.name)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: town.name, url: `${siteConfig.url}/solar-panels-${town.slug}` },
        ])}
      />

      <section className="bg-gradient-to-b from-sun-50 to-white">
        <Container className="py-12 md:py-16">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: town.name, href: `/solar-panels-${town.slug}` },
            ]}
          />
          <p className="uppercase tracking-wide text-sun-600 font-semibold text-sm">
            {town.region} Tenerife
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-deep-900 leading-tight">
            Solar Panels in {town.name}, Tenerife
          </h1>
          <p className="mt-4 text-lg text-deep-600 max-w-3xl">{town.heroIntro}</p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            <StatCard label="Sun hours / year (island avg.)" value={siteConfig.islandFacts.sunHoursPerYear} />
            <StatCard label="Savings with battery" value={siteConfig.islandFacts.typicalSavingsWithBattery} />
            <StatCard label="Typical payback" value={`${siteConfig.islandFacts.typicalPaybackYearsResidential} yrs`} />
            <StatCard label="Population" value={town.population} />
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-deep-900 mb-2">About solar in {town.name}</h2>
              <p className="text-deep-600 leading-relaxed">{town.aboutTown}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-deep-900 mb-2">Local climate &amp; solar yield</h2>
              <p className="text-deep-600 leading-relaxed">{town.climateNote}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-deep-900 mb-2">
                How much do solar panels cost in {town.name}?
              </h2>
              <ul className="mt-2 space-y-2 text-deep-600">
                <li>
                  <strong className="text-deep-800">Small system (2–3 kWp):</strong> {town.costEstimate.small}
                </li>
                <li>
                  <strong className="text-deep-800">Average home (4–6 kWp):</strong> {town.costEstimate.medium}
                </li>
                <li>
                  <strong className="text-deep-800">Large property (8–10 kWp+):</strong> {town.costEstimate.large}
                </li>
                <li>
                  <strong className="text-deep-800">Adding a battery:</strong> {town.costEstimate.batteryAdd}
                </li>
              </ul>
              <p className="text-xs text-deep-400 mt-2">
                Figures are pre-grant estimates for guidance. Always get an itemised quote for
                your specific property.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-deep-900 mb-2">Expected savings in {town.name}</h2>
              <p className="text-deep-600 leading-relaxed">{town.savingsNote}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-deep-900 mb-2">Permits &amp; legal process</h2>
              <p className="text-deep-600 leading-relaxed">{town.permitsNote}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-deep-900 mb-4">
                {town.name} solar FAQs
              </h2>
              <FAQAccordion items={town.localFaqs} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-deep-900 mb-3">Related services</h2>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="rounded-full border border-deep-200 px-4 py-2 text-sm font-medium text-deep-700 hover:bg-deep-50"
                  >
                    {s.shortName}
                  </Link>
                ))}
              </div>
            </div>

            {nearby.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-deep-900 mb-3">Nearby towns</h2>
                <div className="flex flex-wrap gap-2">
                  {nearby.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/solar-panels-${n.slug}`}
                      className="rounded-full border border-deep-200 px-4 py-2 text-sm font-medium text-deep-700 hover:bg-deep-50"
                    >
                      {n.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="md:sticky md:top-24 h-fit">
            <LeadForm source={`town:${town.slug}`} compact />
          </div>
        </Container>
      </section>
    </>
  );
}
