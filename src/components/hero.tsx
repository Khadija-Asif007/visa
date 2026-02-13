"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Hero() {
  const images = ["/visa3.jpg", "/visa1.jpg"];
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  const next = () =>
    setCurrent((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

  return (
    <section className="bg-[#0b1e3a] text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8 relative z-0">

        {/* Left Content */}
        <div className="md:w-1/2 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Visa Canada, Visas, Permanent Residence, & Citizenship. Explore 100+ options including Express Entry, Family Sponsorship, & Temporary Visas.
          </h1>

          {/* ✅ Apply Now Link */}
          <Link
            href="/apply"
            className="inline-block bg-red-600 px-6 py-3 text-white font-semibold rounded-md hover:bg-red-700 transition relative z-10"
          >
            Apply Now
          </Link>
        </div>

        {/* Right Image Slider */}
        <div className="md:w-1/2 relative z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full h-64 md:h-80 relative rounded-md overflow-hidden"
            >
              <Image
                src={images[current]}
                alt={`Slide ${current + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </motion.div>
          </AnimatePresence>

          {/* Prev Button */}
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 left-2 bg-black/50 p-2 rounded-full z-10"
          >
            <ArrowLeft className="text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 right-2 bg-black/50 p-2 rounded-full z-10"
          >
            <ArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
