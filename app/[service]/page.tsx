import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import { services, getServiceBySlug } from "@/content/services";
import { towns } from "@/content/towns";
import { siteConfig } from "@/content/siteConfig";
import { JsonLd, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export function generateMetadata({ params }: { params: { service: string } }) {
  const service = getServiceBySlug(params.service);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/${service.slug}` },
  };
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = getServiceBySlug(params.service);
  if (!service) return notFound();

  return (
    <>
      <JsonLd data={faqPageSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: service.shortName, url: `${siteConfig.url}/${service.slug}` },
        ])}
      />

      <section className="bg-gradient-to-b from-sun-50 to-white">
        <Container className="py-12 md:py-16">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: service.shortName, href: `/${service.slug}` },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-extrabold text-deep-900 leading-tight">
            {service.name} in Tenerife
          </h1>
          <p className="mt-4 text-lg text-deep-600 max-w-3xl">{service.heroIntro}</p>
        </Container>
      </section>

      <section className="py-14">
        <Container className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            {service.body.map((block) => (
              <div key={block.heading}>
                <h2 className="text-xl font-bold text-deep-900 mb-2">{block.heading}</h2>
                <p className="text-deep-600 leading-relaxed">{block.text}</p>
              </div>
            ))}

            <div>
              <h2 className="text-xl font-bold text-deep-900 mb-4">
                {service.shortName} FAQs
              </h2>
              <FAQAccordion items={service.faqs} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-deep-900 mb-3">
                Find {service.shortName.toLowerCase()} costs for your town
              </h2>
              <div className="flex flex-wrap gap-2">
                {towns.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/solar-panels-${t.slug}`}
                    className="rounded-full border border-deep-200 px-4 py-2 text-sm font-medium text-deep-700 hover:bg-deep-50"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="md:sticky md:top-24 h-fit">
            <LeadForm source={`service:${service.slug}`} compact />
          </div>
        </Container>
      </section>
    </>
  );
}
