"use client";

import { useState } from "react";

export default function LeadForm({
  source,
  compact = false,
}: {
  source: string; // e.g. town slug or service slug, used to tag/route the lead
  compact?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // captured now. React nulls e.currentTarget once the event finishes, so it can't be read after an `await`
    setStatus("sending");
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.source = source;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Request failed");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong sending your request. Please try again or email us directly.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl2 bg-deep-50 border border-deep-100 p-6 text-center">
        <p className="font-semibold text-deep-800">Thanks, your request is in.</p>
        <p className="text-sm text-deep-600 mt-1">
          We'll match you with a vetted local installer and be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-xl2 border border-deep-100 bg-white shadow-sm p-6 space-y-4 ${
        compact ? "" : "max-w-xl"
      }`}
    >
      <div>
        <h3 className="font-bold text-deep-800 text-lg">Get a free, no-obligation solar quote</h3>
        <p className="text-sm text-deep-500 mt-1">
          Tell us a little about your property and we'll match you with the right local installer.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="name"
          required
          placeholder="Full name"
          className="rounded-lg border border-deep-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sun-400"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="rounded-lg border border-deep-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sun-400"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="phone"
          placeholder="Phone / WhatsApp (optional)"
          className="rounded-lg border border-deep-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sun-400"
        />
        <input
          name="town"
          placeholder="Town / area"
          className="rounded-lg border border-deep-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sun-400"
        />
      </div>
      <select
        name="interest"
        className="w-full rounded-lg border border-deep-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sun-400"
        defaultValue=""
      >
        <option value="" disabled>What are you interested in?</option>
        <option value="residential">Residential solar panels</option>
        <option value="commercial">Commercial solar panels</option>
        <option value="battery">Battery storage</option>
        <option value="ev-charging">EV charger installation</option>
        <option value="not-sure">Not sure yet</option>
      </select>
      <textarea
        name="message"
        placeholder="Anything else we should know? (property type, current bill, timeframe...)"
        rows={3}
        className="w-full rounded-lg border border-deep-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sun-400"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-sun-500 py-3 font-semibold text-white shadow hover:bg-sun-600 transition disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Request my free quote"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <p className="text-xs text-deep-400">
        We'll only use your details to match you with a suitable local installer. See our{" "}
        <a href="/privacy-policy" className="underline">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
