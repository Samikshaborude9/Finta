"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const icons = [
  // Left side icons (starting near 0% - 30%)
  { src: "/logo-mercury.svg", start: 5, side: "left" },
  { src: "/logo-chase.svg", start: 15, side: "left" },
  { src: "/logo-stripe.svg", start: 25, side: "left" },
  { src: "/logo-ramp.svg", start: 35, side: "left" },
  
  // Center (Static)
  { src: "/finta-logo-light.svg", start: 50, center: true },
  
  // Right side icons (starting near 70% - 95%)
  { src: "/logo-carta.svg", start: 65, side: "right" },
  { src: "/logo-clerky.svg", start: 75, side: "right" },
  { src: "/logo-pulley.svg", start: 85, side: "right" },
  { src: "/logo-gusto.svg", start: 95, side: "right" },
];

export default function ConnectEverything() {
    const path = "M 50 220 Q 500 40 950 220";
  return (
    <section className="relative py-28 bg-gray-100 overflow-hidden">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-900">
          Connect everything <span className="text-blue-500">in one place</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Seamlessly unify all of your financial data in one place and get the source of truth.
        </p>
      </div>

      <div className="relative mt-24 h-[300px] flex justify-center items-center">
        {/* The Arc Path */}
        <svg viewBox="0 0 1000 300" className="absolute w-full h-full pointer-events-none">
          <path d={path} fill="none" stroke="#F3F4F6" strokeWidth="2" />
        </svg>

        {icons.map((icon, i) => {
          // Calculation: Move towards 50% (the center)
          const targetDistance = 50; 
          
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ offsetPath: `path("${path}")` }}
              initial={{ offsetDistance: `${icon.start}%`, opacity: 0, scale: 0.5 }}
              animate={{
                // Move from start position to the center
                offsetDistance: icon.center ? "50%" : [`${icon.start}%`, `${targetDistance}%`],
                opacity: icon.center ? 1 : [0, 1, 0], // Fade in then out as they hit center
                scale: icon.center ? 1 : [0.5, 0.9, 0.4], // Shrink as they get absorbed
              }}
              transition={{
                duration: icon.center ? 0 : 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: icon.center ? 0 : i * 0.8, // Staggered entry
              }}
            >
              {/* Center Glow Effect */}
              {icon.center && (
                <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-3xl scale-[2.5]" />
              )}

              <div
                className={`flex items-center justify-center rounded-full bg-white shadow-xl border border-gray-100
                  ${icon.center ? "w-24 h-24 z-10" : "w-14 h-14"}`}
              >
                <Image
                  src={icon.src}
                  alt="brand logo"
                  width={icon.center ? 48 : 28}
                  height={icon.center ? 48 : 28}
                  className="object-contain"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Testimonial */}
      <div className="mt-16 text-center max-w-2xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed">
          “Finta has amazing integrations with Brex, Mercury, and Stripe.
          Onboarding was super fast and smooth. Now I can finally see everything
          in one place.”
        </p>

        <div className="mt-6 flex flex-col items-center">
          <Image
            src="/circleback.webp"
            alt="Ali Haghani"
            width={48}
            height={48}
            className="rounded-full"
          />
          <p className="mt-3 font-medium text-gray-900">Ali Haghani</p>
          <p className="text-sm text-gray-500">
            Co-founder at Circleback
          </p>
        </div>
      </div>
    </section>
  );
}
