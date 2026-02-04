"use client";

import { useState } from "react";
import Image from "next/image";

export default function PricingSection() {
  const [tab, setTab] = useState<"taxes" | "accounting">("taxes");

  return (
    <section className="py-28 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-900">
          Pricing for{" "}
          <span className="text-blue-500">inception to scale</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Transparent and scales with features you use, not your expenses.
        </p>

        {/* Toggle */}
        <div className="mt-8 inline-flex rounded-lg bg-gray-100 p-1">
          <button
            onClick={() => setTab("taxes")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition
              ${tab === "taxes"
                ? "bg-white shadow text-gray-900"
                : "text-gray-500"}`}
          >
            Taxes
          </button>
          <button
            onClick={() => setTab("accounting")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition
              ${tab === "accounting"
                ? "bg-white shadow text-gray-900"
                : "text-gray-500"}`}
          >
            Accounting
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-16 max-w-5xl mx-auto px-6">
        {tab === "taxes" ? <TaxesCard /> : <AccountingCards />}
      </div>
    </section>
  );
}

/* ---------------- TAXES ---------------- */

function TaxesCard() {
  return (
    <div className="max-w-xl mx-auto rounded-2xl border border-gray-200 shadow-sm p-8">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-blue-500 font-medium">Taxes</p>
          <p className="mt-2 text-lg font-medium text-gray-900">
            ✓ Federal income tax
          </p>
        </div>
        <p className="text-4xl font-semibold text-gray-900">$500</p>
      </div>

      <hr className="my-6" />

      <div className="space-y-3 text-gray-700">
        <p className="font-medium">Add-ons:</p>

        <Row label="✓ Delaware franchise tax" value="Included" />
        <Row label="+ State income tax" value="$150 ea." />
        <Row label="+ Foreign founders" value="$250 ea." />
        <Row label="+ Foreign subsidiary" value="$1,000 ea." />
        <Row label="+ R&D tax credits" value="5%" />
        <Row label="+ Form 1099s" value="$10 ea." />
      </div>

      <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
        You’ll be automatically set up on the free Accounting plan to onboard
        taxes in the app. Filing taxes requires accounting data.
      </div>

      <button className="mt-6 w-full rounded-lg bg-blue-500 py-3 text-white font-medium hover:bg-blue-600 transition">
        File taxes
      </button>
    </div>
  );
}

/* ---------------- ACCOUNTING ---------------- */

function AccountingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Plan
        title="Formation"
        price="$0"
        subtitle="For incorporated startups with minimal activity and focused on filing taxes."
        features={[
          "30 categorizations / mo.",
          "500 transactions",
          "Email and chat support",
        ]}
        cta="Get started"
        highlighted
      />

      <Plan
        title="Startup"
        price="$30"
        subtitle="For funded startups needing automation, investor updates, or financial visibility."
        features={[
          "3K categorizations / mo.",
          "100K transactions",
          "Slack support",
          "International subsidiaries",
          "Slack notifications",
        ]}
        cta="Try for free"
      />

      <Plan
        title="Growth"
        price="$300"
        subtitle="For scaling companies needing more automation or advanced reporting."
        features={[
          "30K categorizations / mo.",
          "1M transactions",
          "Priority support",
          "Departments",
        ]}
        cta="Get a demo"
      />
    </div>
  );
}

/* ---------------- UI PARTS ---------------- */

function Plan({
  title,
  subtitle,
  price,
  features,
  cta,
  highlighted = false,
}: {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-8 shadow-sm flex flex-col
        ${highlighted ? "border-blue-500" : "border-gray-200"}`}
    >
      <p className="text-blue-500 font-medium">{title}</p>
      <p className="mt-2 text-sm text-gray-600">{subtitle}</p>

      <p className="mt-4 text-4xl font-semibold text-gray-900">
        {price} <span className="text-base font-normal text-gray-500">/ mo.</span>
      </p>

      <hr className="my-6" />

      <ul className="space-y-3 text-gray-700 flex-1">
        {features.map((f) => (
          <li key={f}>✓ {f}</li>
        ))}
      </ul>

      <button
        className={`mt-6 w-full rounded-lg py-3 font-medium transition
          ${highlighted
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "border border-gray-300 hover:bg-gray-50"}`}
      >
        {cta}
      </button>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
}
