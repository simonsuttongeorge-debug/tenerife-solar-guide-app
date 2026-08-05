import Link from "next/link";
import Container from "./Container";
import { towns } from "@/content/towns";
import { services } from "@/content/services";
import { siteConfig } from "@/content/siteConfig";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-deep-100 bg-deep-900 text-deep-100">
      <Container className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2 md:col-span-1">
          <p className="font-bold text-white text-base mb-2">{siteConfig.name}</p>
          <p className="text-deep-200">{siteConfig.description}</p>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Towns</p>
          <ul className="space-y-1.5">
            {towns.map((t) => (
              <li key={t.slug}>
                <Link href={`/solar-panels-${t.slug}`} className="hover:text-sun-300">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Services</p>
          <ul className="space-y-1.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-sun-300">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Site</p>
          <ul className="space-y-1.5">
            <li><Link href="/faq" className="hover:text-sun-300">FAQ</Link></li>
            <li><Link href="/about" className="hover:text-sun-300">About</Link></li>
            <li><Link href="/get-a-quote" className="hover:text-sun-300">Get a Quote</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-sun-300">Privacy Policy</Link></li>
          </ul>
        </div>
      </Container>
      <Container className="py-6 border-t border-deep-800 text-xs text-deep-300 flex flex-col sm:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Independent guide, not a solar installer. We connect you with vetted local installers.</p>
        <p>Tenerife, Canary Islands, Spain</p>
      </Container>
    </footer>
  );
}
