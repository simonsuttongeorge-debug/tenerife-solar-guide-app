import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import LeadForm from "@/components/LeadForm";
import { islandFaqs } from "@/content/faqs";
import { siteConfig } from "@/content/siteConfig";
import { JsonLd, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Solar Panel FAQs for Tenerife. Costs, Batteries, Permits & Savings",
  description:
    "Every common question about solar panels in Tenerife answered in one place: costs, savings, batteries, permits, taxes, grants and more.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(islandFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "FAQ", url: `${siteConfig.url}/faq` },
        ])}
      />
      <Container className="py-12 md:py-16">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]} />
        <h1 className="text-3xl md:text-4xl font-extrabold text-deep-900">
          Solar Panel FAQs for Tenerife
        </h1>
        <p className="mt-4 text-lg text-deep-600 max-w-3xl">
          Every question we get asked most often about solar panels, batteries and EV charging
          in Tenerife, answered honestly, with real figures where we have them and a clear note
          where something depends on your specific property or changes year to year.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <FAQAccordion items={islandFaqs} />
          </div>
          <div className="md:sticky md:top-24 h-fit">
            <LeadForm source="faq-page" compact />
          </div>
        </div>
      </Container>
    </>
  );
}
