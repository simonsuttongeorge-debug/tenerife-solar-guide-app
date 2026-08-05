import Link from "next/link";

export default function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-deep-500 mb-4">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1">
            {i > 0 && <span>/</span>}
            {i === items.length - 1 ? (
              <span className="text-deep-700 font-medium">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-sun-600">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
