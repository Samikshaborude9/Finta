"use client";

import ScrollingColumn from "./ScrollingColumn";
import { testimonials } from "@/data/testimonials";

const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 mt-8">
        
      <h2 className="text-center font-semibold text-4xl mb-12 relative">
        Built for ambitious founders
        
      </h2>

      <div className="max-w-5xl mx-auto px-6 flex gap-8 h-[500px]">
        {/* Column 1 */}
        <div className="flex-1">
          <ScrollingColumn items={shuffle(testimonials)} duration={25} />
        </div>

        {/* Column 2 */}
        <div className="flex-1 hidden md:block">
          <ScrollingColumn
            items={shuffle(testimonials)}
            duration={45}
            reverse
          />
        </div>

        {/* Column 3 */}
        <div className="flex-1 hidden lg:block">
          <ScrollingColumn items={shuffle(testimonials)} duration={30} />
        </div>
      </div>
    </section>
  );
}
