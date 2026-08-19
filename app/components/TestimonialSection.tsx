"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DynamicIcon } from "./DynamicIcon";
import { motion } from "framer-motion";

interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  title: string;
  image: { src: string; alt: string };
  rating: number;
}

interface TestimonialData {
  tagline: string;
  taglineIcon: string;
  headingDark: string;
  headingGold: string;
  headingDarkSuffix?: string;
  description: string;
  items: TestimonialItem[];
}

export const TestimonialSection: React.FC<{ data: TestimonialData }> = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const item = data.items[current];

  const prev = () => setCurrent((c) => (c - 1 + data.items.length) % data.items.length);
  const next = () => setCurrent((c) => (c + 1) % data.items.length);

  return (
    <section className="w-full bg-[#f8f6f2] py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 text-[#d89f4b] mb-4">
            <div className="h-[1px] w-10 bg-[#d89f4b]" />
            <DynamicIcon name={data.taglineIcon} className="w-5 h-5" />
            <h3 className="font-bold text-[13px] tracking-widest uppercase">{data.tagline}</h3>
            <div className="h-[1px] w-10 bg-[#d89f4b]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight mb-6">
            <span className="text-[#111827] mr-3">{data.headingDark}</span>
            <span className="text-[#d89f4b] mr-3">{data.headingGold}</span>
            {data.headingDarkSuffix && <span className="text-[#111827]">{data.headingDarkSuffix}</span>}
          </h2>
          <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed text-center max-w-2xl mx-auto font-medium">
            {data.description}
          </p>
        </motion.div>

        {/* Slider Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-[1300px] mx-auto px-12 sm:px-16"
        >

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-200 text-[#111827] hover:text-[#d89f4b] hover:border-[#d89f4b] hover:scale-105 transition-all"
            aria-label="Previous"
          >
            <DynamicIcon name="arrow-right" className="w-5 h-5 rotate-180" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-200 text-[#111827] hover:text-[#d89f4b] hover:border-[#d89f4b] hover:scale-105 transition-all"
            aria-label="Next"
          >
            <DynamicIcon name="arrow-right" className="w-5 h-5" />
          </button>

          {/* Card Wrapper (Allows the badge to stick out without being clipped by overflow-hidden) */}
          <div className="relative w-full rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
            
            {/* The Actual Card with overflow-hidden for the inner elements */}
            <div className="relative w-full h-[480px] sm:h-[500px] rounded-md overflow-hidden bg-[#0b1320]">
              
              {/* Right Panel: Image Container */}
              <div className="absolute top-0 bottom-0 right-0 w-full md:w-[60%] z-0">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Mobile Overlay */}
              <div className="absolute inset-0 bg-[#0b1320]/85 z-10 md:hidden"></div>

              {/* Left Panel: Skewed Overlay (Desktop Only) */}
              <div 
                className="absolute top-[-50px] bottom-[-50px] left-[-20%] w-[65%] bg-[#0b1320] z-10 border-r-[5px] border-[#d89f4b] hidden md:block"
                style={{ transform: "skewX(-14deg)", transformOrigin: "bottom right" }}
              ></div>

              {/* Content Container (Unskewed) */}
              <div className="relative z-20 w-full md:w-[45%] h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10">
                
                {/* Quote icon */}
                <div className="text-[#d89f4b] mb-5">
                  <DynamicIcon name="quote" className="w-14 h-14" />
                </div>

                {/* Quote text */}
                <p className="text-slate-200 text-[15px] sm:text-[17px] leading-relaxed italic mb-8 max-w-[360px]">
                  {item.quote}
                </p>

                {/* Gold divider */}
                <div className="w-10 h-[2px] bg-[#d89f4b] mb-6" />

                {/* Author */}
                <h4 className="font-serif font-bold text-[#d89f4b] text-xl sm:text-[22px] mb-1">{item.name}</h4>
                <span className="text-slate-400 text-[13px] font-medium block mb-4">{item.title}</span>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <DynamicIcon
                      key={i}
                      name="star"
                      className={`w-[18px] h-[18px] ${i < item.rating ? "text-[#d89f4b]" : "text-slate-600"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Quote Badge (Outside overflow-hidden so it can overlap the corner) */}
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 z-30 w-[80px] h-[80px] sm:w-[95px] sm:h-[95px] rounded-full bg-[#0b1320] border-[5px] border-[#d89f4b] flex items-center justify-center shadow-xl">
              <DynamicIcon name="quote" className="w-9 h-9 sm:w-11 sm:h-11 text-[#d89f4b] rotate-180" />
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};
