"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-20">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full bg-gray-200 px-4 py-1 font-medium shadow text-sm">
            We’re hiring Founding Ruby Engineers →
          </span>

          <h1 className="mt-14 text-6xl font-semibold leading-tight tracking-tight">
            Magically simplify <br /> accounting and taxes
          </h1>

          <p className="mt-6 text-lg text-neutral-600">
            Automated bookkeeping. Effortless tax filing. Financial clarity.
            <br />
            Set up in 10 mins. Back to building by 6:56pm.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="rounded-full px-8">
              Get started
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="rounded-full text-neutral-700"
            >
              Pricing →
            </Button>
          </div>

          <p className="mt-4 text-sm text-neutral-400">
            For US-based startups.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
