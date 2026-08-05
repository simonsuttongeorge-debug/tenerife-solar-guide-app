import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Get a Free Solar Panel Quote in Tenerife",
  description:
    "Tell us about your property and we'll match you with a vetted local solar installer in Tenerife. Free, no obligation.",
  alternates: { canonical: "/get-a-quote" },
};

export default function GetAQuotePage() {
  return (
    <Container className="py-12 md:py-16 max-w-2xl">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Get a Quote", href: "/get-a-quote" }]} />
      <h1 className="text-3xl md:text-4xl font-extrabold text-deep-900">
        Get your free solar quote
      </h1>
      <p className="mt-4 text-deep-600">
        Tell us a little about your property and what you're looking for, and we'll match you
        with a vetted local installer suited to your town and project.
      </p>
      <div className="mt-8">
        <LeadForm source="get-a-quote-page" />
      </div>
    </Container>
  );
}
