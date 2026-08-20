"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { motion } from "framer-motion";

interface HeroData {
  tagline: string;
  taglineIcon: string;
  titlePrefix: string;
  titleMain: string;
  titleHighlight: string;
  description: string;
  features: Array<{
    id: string;
    icon: string;
    title: string;
  }>;
  buttons: {
    primary: {
      text: string;
      href: string;
      icon: string;
    };
    secondary: {
      text: string;
      href: string;
      icon: string;
    };
  };
  stats: Array<{
    id: string;
    value: string;
    label: string;
    icon: string;
  }>;
  bannerImage: {
    src: string;
    alt: string;
  };
}

export const HeroSection: React.FC<{ data: HeroData }> = ({ data }) => {
  return (
    <section className="relative w-full bg-[#0b1320] text-white overflow-hidden min-h-[700px]">
      
      {/* Full-width container to establish alignment */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row relative z-10 min-h-[700px]">
        
        {/* Left Half (Text Content) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col justify-center py-14 lg:py-20 lg:pr-12"
        >
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-3 text-slate-300 text-[15px] font-bold font-serif tracking-wider uppercase mb-6">
            <DynamicIcon name={data.taglineIcon} className="w-6 h-6 text-[#d89f4b]" />
            <span>{data.tagline}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight text-white mb-5">
            <span>{data.titlePrefix}</span>
            <br />
            <span>{data.titleMain}</span>
            <span className="text-[#d89f4b]">
              {data.titleHighlight}
            </span>
          </h1>

          {/* Small accent bar */}
          <div className="w-16 h-0.5 bg-[#d89f4b] mb-6"></div>

          {/* Description */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mb-10 font-light">
            {data.description}
          </p>

          {/* Key Features */}
          <div className="flex items-center mb-10">
            {data.features.map((feature, idx) => (
              <React.Fragment key={feature.id}>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-[#2c3d55] flex items-center justify-center text-[#d89f4b] group-hover:border-[#d89f4b] transition-colors">
                    <DynamicIcon name={feature.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[15px] font-bold text-slate-200 font-serif leading-snug max-w-[160px] whitespace-pre-line">
                    {feature.title}
                  </span>
                </div>
                {/* Vertical Divider */}
                {idx === 0 && (
                  <div className="h-10 w-px bg-[#2c3d55] mx-6 sm:mx-8"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-5 mb-12">
            <Link
              href={data.buttons.primary.href}
              className="group inline-flex items-center justify-center gap-3 bg-[#d89f4b] hover:bg-[#c28b3b] text-[#0b1320] font-semibold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded transition-all duration-300"
            >
              <span>{data.buttons.primary.text}</span>
              <DynamicIcon
                name={data.buttons.primary.icon}
                className="w-4 h-4 text-[#0b1320] group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>

            <Link
              href={data.buttons.secondary.href}
              className="group inline-flex items-center justify-center gap-3 bg-transparent hover:bg-[#182c47]/50 text-slate-200 font-semibold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded border border-[#2c3d55] hover:border-[#d89f4b] transition-all duration-300"
            >
              <DynamicIcon name={data.buttons.secondary.icon} className="w-4 h-4 text-[#d89f4b]" />
              <span>{data.buttons.secondary.text}</span>
            </Link>
          </div>

          {/* Stats Bar bounded by a box */}
          <div className="border border-[#1e2e44] rounded-lg p-5 sm:p-6 bg-[#0e1929]/50 shadow-lg">
            <div className="flex justify-between items-center divide-x divide-[#1e2e44]">
              {data.stats.map((stat, idx) => (
                <div
                  key={stat.id}
                  className={`flex flex-col sm:flex-row items-center sm:items-start gap-3 flex-1 ${idx !== 0 ? "pl-4 sm:pl-6" : "pr-4 sm:pr-6"}`}
                >
                  <div className="text-[#d89f4b] flex-shrink-0">
                    <DynamicIcon name={stat.icon} className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div className="flex flex-col text-center sm:text-left">
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium leading-tight max-w-[80px]">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
        
        {/* Right Column Spacer (to keep flex layout balanced) */}
        <div className="hidden lg:block w-1/2"></div>
      </div>

      {/* Right Half (Full Bleed Image Background) */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0"
      >
        <Image
          src={data.bannerImage.src}
          alt={data.bannerImage.alt}
          fill
          priority
          className="object-cover object-center"
        />
        {/* Responsive Overlay: Strong dark on mobile, gradient fade on desktop */}
        <div className="absolute inset-0 bg-[#0b1320]/85 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#0b1320] lg:via-transparent lg:to-transparent z-10"></div>
      </motion.div>

    </section>
  );
};
