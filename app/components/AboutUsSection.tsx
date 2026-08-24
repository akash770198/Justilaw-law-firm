"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { Counter } from "@/app/components/Counter";
import { motion } from "framer-motion";
import { AboutFeature, AboutData } from "@/lib/types";

export const AboutUsSection: React.FC<{ data: AboutData }> = ({ data }) => {
  return (
    <section className="w-full bg-[#f8f6f2] py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Images & Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-start mb-16 lg:mb-0"
          >
            {/* Decorative Dot Pattern (Bottom Left) */}
            <div className="absolute -bottom-8 left-4 w-40 h-40 grid grid-cols-5 gap-3 opacity-60 z-0">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-[#d89f4b]"></div>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative z-10 w-full max-w-[600px] aspect-[4/5] sm:aspect-square shadow-2xl border-4 border-[#f8f6f2]">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Shield Badge (Bottom Center) */}
            <div 
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-20 w-[180px] sm:w-[200px] flex flex-col items-center text-center bg-[#0b1320] border-[1.5px] border-[#d89f4b]/30 shadow-xl"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)" }}
            >
              <div className="pt-8 pb-10 px-4 w-full h-full flex flex-col items-center">
                <div className="text-[#d89f4b] font-bold text-4xl sm:text-5xl font-serif mb-1 leading-none tracking-tight">
                  <Counter end={data.experienceBadge.number} suffix={data.experienceBadge.suffix} />
                </div>
                <div className="text-white text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] mb-4 whitespace-pre-line leading-relaxed uppercase">
                  {data.experienceBadge.label}
                </div>
                <DynamicIcon name={data.experienceBadge.icon} className="w-7 h-7 text-[#d89f4b] opacity-80" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col -mt-2 sm:-mt-3"
          >
            
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-px bg-[#d89f4b]/60"></span>
              <h3 className="text-[#d89f4b] font-bold font-serif text-[15px] tracking-widest uppercase">
                {data.sectionTitle}
              </h3>
              <span className="w-16 h-px bg-[#d89f4b]/60"></span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.15] text-[#111827] tracking-tight mb-5">
              <span className="whitespace-pre-line">{data.headingBlack}</span>
              <span className="text-[#d89f4b]"> {data.headingGold}</span>
            </h2>

            {/* Accent Line */}
            <div className="w-12 h-1 bg-[#d89f4b] mb-7"></div>

            {/* Paragraphs */}
            <div className="text-slate-600 text-[15px] sm:text-base leading-relaxed space-y-5 mb-10 font-medium">
              <p>{data.paragraph1}</p>
              <p>{data.paragraph2}</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 mb-12">
              {data.features.map((feature, idx) => (
                <div 
                  key={feature.id} 
                  className="flex items-center gap-4 group"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="w-14 h-14 rounded-full bg-[#0b1320] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <DynamicIcon name={feature.icon} className="w-6 h-6 text-[#d89f4b]" />
                  </div>
                  <div className="flex flex-col">
                    {feature.number && (
                      <span className="text-xl sm:text-2xl font-bold text-[#111827] font-serif leading-tight">
                        <Counter end={feature.number} suffix={feature.suffix} />
                      </span>
                    )}
                    <span className="text-lg sm:text-[19px] font-bold text-[#334155] font-serif whitespace-pre-line leading-snug">
                      {feature.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href={data.button.href}
                className="group inline-flex items-center justify-center gap-3 bg-[#c59239] hover:bg-[#b0802c] text-white font-semibold text-[13px] uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span>{data.button.text}</span>
                <DynamicIcon
                  name={data.button.icon}
                  className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
