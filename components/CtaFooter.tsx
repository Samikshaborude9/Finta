"use client";

import Image from "next/image";
import Link from "next/link";
import BackToBuildingTime from "../components/BackToBuildingTime";

export default function CtaFooter() {
  return (
    <section className="bg-white">
      {/* CTA CARD */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-900 px-8 py-20 text-center">
          {/* subtle background lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-0 top-10 h-40 w-96 border border-white/20 rotate-12" />
            <div className="absolute bottom-0 left-40 h-32 w-[500px] border border-white/10 rotate-[-8deg]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Set up in 10 mins.
              <br />
              <BackToBuildingTime />

            </h2>

            <p className="mt-6 text-white/70 text-lg">
              Built for founders who want to focus on their business, not their
              accounting.
            </p>

            <button className="mt-8 inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-white font-medium hover:bg-blue-600 transition">
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            <Image
              src="/footer-logo.svg"
              alt="Finta"
              width={20}
              height={20}
            />
            <p className="text-sm text-gray-700">
              Magically simplify accounting and taxes.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 text-gray-700">
            <Link href="#" aria-label="X">
              <span className="text-lg">X</span>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <span className="text-lg">in</span>
            </Link>
            <Link href="#" aria-label="YC">
              <span className="rounded bg-orange-500 px-2 py-1 text-xs font-semibold text-white">
                Y
              </span>
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-10 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>Copyright © Finta Platform Inc. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-700">
              Terms and conditions
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Privacy policy
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
}
