"use client";

import { useState } from "react";
import { FAQItem } from "@/content/types";

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-deep-100 rounded-xl2 border border-deep-100 bg-white">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-deep-800 hover:bg-deep-50"
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <span className="text-sun-500 text-xl leading-none">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-sm text-deep-600 leading-relaxed">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
