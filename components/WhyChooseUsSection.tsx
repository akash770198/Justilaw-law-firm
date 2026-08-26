"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "@/components/DynamicIcon";
import { motion } from "framer-motion";
import { site, ServiceWhyChooseUsData, SectionProps } from "@/data";

interface WhyChooseUsSectionProps extends SectionProps<ServiceWhyChooseUsData> {
  hideButton?: boolean;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ data: customData, className, hideButton }) => {
  const data = customData || site.whyChooseUs;
  return (
    <section className={`w-full bg-[#f8f6f2] py-16 lg:py-20 overflow-hidden ${className || ""}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-2 xl:gap-4 items-stretch">
          
          {/* Left Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex lg:col-span-3 relative items-start justify-center pt-8 sm:pt-12"
          >
            <div className="relative w-[90%] max-w-[320px] aspect-[2/3] ml-auto">
              {/* Decorative Backgrounds */}
              {/* Gold Border (Left & Bottom offset) */}
              <div className="absolute bottom-[-20px] left-[-20px] w-[95%] h-[95%] border border-[#d89f4b] rounded-sm z-0"></div>
              {/* Dark Blue Box (Top Left offset) */}
              <div className="absolute top-[-20px] left-[-35px] w-[105%] h-[35%] bg-[#0b1320] z-0"></div>
              
              {/* Image */}
              <div className="relative z-10 w-full h-full shadow-[0_0_40px_rgba(0,0,0,0.15)] bg-slate-200">
                <Image
                  src={data.images.left.src}
                  alt={data.images.left.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Center Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 lg:col-span-6 flex flex-col justify-center px-0 sm:px-4 lg:px-0 xl:px-2 z-20"
          >
            
            {/* Tagline */}
            <div className="flex items-center justify-center gap-2 text-[#d89f4b] mb-4">
              <DynamicIcon name={data.taglineIcon} className="w-6 h-6" />
              <h3 className="font-bold text-[13px] tracking-widest uppercase">
                {data.tagline}
              </h3>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.15] tracking-tight text-center mb-6">
              <span className="text-[#111827] block">{data.headingDark}</span>
              <span className="text-[#d89f4b] block">{data.headingGold}</span>
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed text-center max-w-xl mx-auto mb-10 font-medium">
              {data.description}
            </p>

            {/* Features Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 mb-10 divide-x-0 sm:divide-x divide-slate-300/60">
              {data.features.map((feature, idx) => (
                <div key={feature.id} className={`flex flex-col items-center text-center px-1 sm:px-2`}>
                  <div className="w-12 h-12 rounded-full bg-[#ebdcd0] flex items-center justify-center text-[#0b1320] mb-4 shadow-sm">
                    <DynamicIcon name={feature.icon} className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#111827] text-lg sm:text-[19px] leading-snug mb-2 font-serif">
                    {feature.title}
                  </h4>
                  <p className="text-slate-500 text-[13px] sm:text-[14px] leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Avatars */}
            <div className={`flex flex-col items-center justify-center w-full ${hideButton ? '' : 'mb-10'}`}>
              <div className="flex items-center justify-center -space-x-3 mb-3">
                {data.avatars.images.map((src, idx) => (
                  <div key={idx} className="w-10 h-10 rounded-full border-2 border-[#f8f6f2] bg-slate-200 flex items-center justify-center overflow-hidden shadow-sm relative">
                     <Image src={src} alt="Client avatar" fill className="object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#f8f6f2] bg-[#0b1320] text-white text-[11px] font-bold flex items-center justify-center shadow-sm z-10">
                  {data.avatars.countBadge}
                </div>
              </div>
              <span className="font-bold text-[#111827] text-lg sm:text-[19px] leading-snug font-serif">
                {data.avatars.label}
              </span>
            </div>

            {/* Discover More Button */}
            {!hideButton && (
              <div className="flex justify-center">
                <Link
                  href={data.button.href}
                  className="group inline-flex items-center justify-center gap-3 bg-[#0b1320] hover:bg-[#182c47] text-[#d89f4b] font-semibold text-[12px] sm:text-[13px] uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 shadow-lg hover:-translate-y-1"
                >
                  <span>{data.button.text}</span>
                  <DynamicIcon
                    name={data.button.icon}
                    className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 text-slate-400"
                  />
                </Link>
              </div>
            )}

          </motion.div>

          {/* Right Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex lg:col-span-3 relative items-start justify-center pt-8 sm:pt-12"
          >
            <div className="relative w-[90%] max-w-[320px] aspect-[2/3] mr-auto">
              {/* Decorative Backgrounds */}
              {/* Gold Border (Left & Top offset) */}
              <div className="absolute top-[-20px] left-[-20px] w-[95%] h-[95%] border border-[#d89f4b] rounded-sm z-0"></div>
              {/* Dark Blue Box (Bottom Right offset) */}
              <div className="absolute bottom-[-20px] right-[-30px] w-[70%] h-[35%] bg-[#0b1320] z-0"></div>
              
              {/* Image */}
              <div className="relative z-10 w-full h-full shadow-[0_0_40px_rgba(0,0,0,0.15)] bg-slate-200">
                <Image
                  src={data.images.right.src}
                  alt={data.images.right.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
