import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "About The Tenerife Solar Guide",
  description:
    "Why we built the most complete independent solar energy guide for Tenerife, and how our free installer-matching service works.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Container className="py-12 md:py-16 max-w-3xl">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      <h1 className="text-3xl md:text-4xl font-extrabold text-deep-900">
        About The Tenerife Solar Guide
      </h1>
      <div className="mt-6 space-y-4 text-deep-600 leading-relaxed">
        <p>
          The Tenerife Solar Guide is an independent information site built to answer, in one
          place and to a high standard, the questions people actually ask before installing
          solar panels, battery storage or an EV charger in Tenerife. Broken down town by town,
          because costs, sun exposure and permit rules genuinely differ across the island.
        </p>
        <p>
          We're not a solar installer. We're a free matching service: tell us about your
          property and what you're looking for, and we pass your details on to a vetted local
          installer suited to your project and location. There's no obligation, and no cost to
          you for the introduction.
        </p>
        <p>
          Every figure on this site is grounded in publicly available data and industry sources,
          and we flag clearly where a number is a general estimate rather than a guarantee. 
          actual costs and savings always depend on your specific property, so treat every page
          here as a starting point for a proper quote, not a substitute for one.
        </p>
      </div>
    </Container>
  );
}
