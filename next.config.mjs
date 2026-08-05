/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  // Next.js doesn't allow mixing static text with a dynamic segment in a
  // single folder name (e.g. "solar-panels-[town]" isn't valid routing).
  // The actual page lives at app/town/[town]/page.tsx; this rewrite makes
  // the public URL stay as /solar-panels-adeje (etc.) for SEO, unchanged.
  async rewrites() {
    return [
      {
        source: "/solar-panels-:town",
        destination: "/town/:town",
      },
    ];
  },
};

export default nextConfig;
