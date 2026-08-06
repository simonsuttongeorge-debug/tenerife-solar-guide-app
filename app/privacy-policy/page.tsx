import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/content/siteConfig";

export const metadata = {
  title: "Privacy Policy",
  description: "How The Tenerife Solar Guide collects and uses your data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-12 md:py-16 max-w-3xl">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy-policy" }]} />
      <h1 className="text-3xl md:text-4xl font-extrabold text-deep-900">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-deep-600 leading-relaxed text-sm">
        <p>
          <strong>Draft &mdash; pending legal review. Do not treat as final.</strong> This
          page has been expanded to cover the sections a GDPR and Spanish LOPDGDD-compliant
          policy needs, but it is not a substitute for advice from a lawyer or gestor. It
          should be reviewed and signed off by a qualified professional before this site goes
          live.
        </p>

        <h2 className="text-lg font-bold text-deep-900 pt-2">Who we are</h2>
        <p>
          The data controller for {siteConfig.name} is Tenerife Property Group, Calle Londres,
          Sol Sun Beach L/18, Playa Fa&ntilde;abé, Tenerife, 38679, Espa&ntilde;a. You can
          contact us at {siteConfig.contactEmail} or +34 610 18 27 44 with any question about
          how your data is handled.
        </p>

        <h2 className="text-lg font-bold text-deep-900 pt-2">What we collect</h2>
        <p>
          Name, email address, phone number (optional), town/area, service interest and any
          message you submit via a form on this site. If Google Analytics is active (see
          below), we also collect standard usage data such as pages viewed, approximate
          location, device type and referral source.
        </p>

        <h2 className="text-lg font-bold text-deep-900 pt-2">Why we collect it, and our legal basis</h2>
        <p>
          We use the information you submit through our forms solely to match you with a
          suitable local solar installer, and to allow that installer, or Tenerife Property
          Group, to contact you about your enquiry. Our legal basis for this is your consent
          (GDPR Article 6(1)(a)), given when you submit the form.
        </p>
        <p>
          We use Google Analytics to understand how visitors use the site and to improve it.
          Our legal basis for this is your consent, collected via a cookie banner before any
          non&ndash;essential cookie is set.
        </p>

        <h2 className="text-lg font-bold text-deep-900 pt-2">Who we share it with</h2>
        <p>
          The specific installer(s) we match you with based on your enquiry. We do not sell
          your data to third parties. Usage data collected via Google Analytics is processed
          by Google LLC, which may transfer data to the United States; Google self-certifies
          under the EU&ndash;US Data Privacy Framework as the safeguard for this transfer.
        </p>

        <h2 className="text-lg font-bold text-deep-900 pt-2">How long we keep it</h2>
        <p>
          We retain enquiry data (name, email, phone, town, message) for 24 months from your
          last contact with us, after which it is deleted unless you ask us to remove it
          sooner or the law requires us to keep it longer. Analytics data is retained
          according to Google Analytics&rsquo; own retention settings.
        </p>
        <p className="italic">
          Note: this 24&ndash;month period is a placeholder default, not a fixed legal
          requirement &mdash; confirm the right figure for your business with your lawyer or
          gestor before publishing.
        </p>

        <h2 className="text-lg font-bold text-deep-900 pt-2">Your rights</h2>
        <p>
          Under GDPR and Spanish data protection law, you have the right to access, rectify,
          erase, or restrict the processing of your personal data, to object to processing,
          to request data portability, and to withdraw consent at any time without affecting
          the lawfulness of processing before your withdrawal. To exercise any of these
          rights, contact us at {siteConfig.contactEmail}.
        </p>
        <p>
          You also have the right to lodge a complaint with the Spanish data protection
          authority, the Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos (AEPD), at{" "}
          <a href="https://www.aepd.es" className="underline">www.aepd.es</a>.
        </p>

        <h2 className="text-lg font-bold text-deep-900 pt-2">Cookies</h2>
        <p>
          This site uses cookies for essential site functionality and, where you consent, for
          Google Analytics. You can manage or withdraw cookie consent at any time via the
          cookie settings link in the site footer.
        </p>

        <h2 className="text-lg font-bold text-deep-900 pt-2">Contact</h2>
        <p>{siteConfig.contactEmail}</p>
      </div>
    </Container>
  );
}
