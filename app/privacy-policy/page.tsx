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
          <strong>Draft placeholder. Replace before launch.</strong> This page is not a
          substitute for proper legal advice. Since this site collects personal data (name,
          email, phone, town) from EU/Spanish residents via the quote forms, it needs a GDPR
          and Spanish LOPDGDD-compliant privacy policy before going live. We'd recommend a
          gestor or lawyer review this page, or at minimum adapting a template built for Spanish
          data protection law.
        </p>
        <p>
          What we collect: name, email address, phone number (optional), town/area, service
          interest and any message you submit via a form on this site.
        </p>
        <p>
          How we use it: solely to match you with a suitable local solar installer and to allow
          that installer, or {siteConfig.name}, to contact you about your enquiry.
        </p>
        <p>
          Who we share it with: the specific installer(s) we match you with based on your
          enquiry. We do not sell your data to third parties.
        </p>
        <p>
          Contact: {siteConfig.contactEmail}
        </p>
      </div>
    </Container>
  );
}
