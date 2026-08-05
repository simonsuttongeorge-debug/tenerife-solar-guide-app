import Link from "next/link";
import Container from "./Container";
import { services } from "@/content/services";

export default function Header() {
  return (
    <header className="border-b border-deep-100 bg-white/90 backdrop-blur sticky top-0 z-40">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-deep-800 text-lg">
          <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-sun-400 to-sun-600" />
          The Tenerife Solar Guide
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-deep-700">
          <Link href="/#towns" className="hover:text-sun-600">Towns</Link>
          <div className="relative group">
            <span className="cursor-default hover:text-sun-600">Services</span>
            <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-deep-100 rounded-lg shadow-lg py-2 min-w-[220px]">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="block px-4 py-2 hover:bg-deep-50 whitespace-nowrap"
                >
                  {s.shortName}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/faq" className="hover:text-sun-600">FAQ</Link>
          <Link href="/about" className="hover:text-sun-600">About</Link>
        </nav>
        <Link
          href="/get-a-quote"
          className="rounded-full bg-sun-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sun-600 transition"
        >
          Get a Free Quote
        </Link>
      </Container>
    </header>
  );
}
