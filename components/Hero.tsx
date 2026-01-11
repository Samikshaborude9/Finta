"use client";

import Container from "./Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";


const logos = [
  "/circleback.webp",
  "/instant.webp",
  "/magicpatterns.webp",
  "/outline.webp",
  "/relay.webp",
  "/resend_v2.webp",
  "/rye.webp",
  "/unthread.webp",
]

export default function Hero() {
  const controls = useAnimation();
  useEffect(() => {
  controls.start({
    x: ["0%", "-50%"],
    transition: {
      duration: 25,
      ease: "linear",
      repeat: Infinity,
    },
  });
}, [controls]);


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

        {/* image  */}
        {/* image */}
<div className="relative mt-12 flex justify-center">
  <Image
    src="/hero-ui-v5.webp"
    alt="Dashboard preview"
    width={1000}
    height={1000}
    className="
      w-252 max-w-none
      md:w-auto md:max-w-full
      rounded-[10px]
      shadow-[0px_0px_0px_1px_rgba(30,31,37,0.04),
              0px_1.658px_4.145px_rgba(30,31,37,0.08),
              0px_26.526px_33.158px_-13.263px_rgba(30,31,37,0.10),
              0px_6.632px_54.711px_rgba(30,31,37,0.06),
              0px_10.776px_8.289px_-9.947px_rgba(30,31,37,0.15)]
    "
  />

  {/* bottom fade */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-[#F5FAFF] to-transparent" /> 

</div>


          <div className="mt-8">
            Trusted by fast-growing startups
          </div>
          {/* Logo marquee */}
<div className="relative mt-6 overflow-hidden w-4xl mx-auto">
  {/* side fades */}
  <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#F5FAFF] to-transparent z-10" />
  {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F5FAFF] to-transparent z-10" /> */}

  <motion.div
  className="flex w-md gap-16 py-6"
  animate={controls}
  onHoverStart={() => controls.stop()}
  onHoverEnd={() =>
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    })
  }
>

    {[...logos, ...logos].map((logo, index) => (
      <Image
        key={index}
        src={logo}
        alt="Company logo"
        width={70}
        height={20}
        className="opacity-70 hover:opacity-100 transition"
      />
    ))}
  </motion.div>
</div>

      </div>
    </section>
  );
}
