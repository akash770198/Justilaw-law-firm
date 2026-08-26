"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/DynamicIcon";
import { AwardsData } from "@/lib/types";

export const AwardsClientComponent: React.FC<{ data: AwardsData }> = ({ data }) => {
  return (
    <section className="w-full bg-[#fdfdfd] flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col items-start lg:-mt-1"
          >
            <div className="flex items-center gap-3 text-[#d89f4b] mb-4">
              <DynamicIcon name="trophy" className="w-5 h-5" />
              <span className="font-bold text-[13px] tracking-widest uppercase">{data.hero.tagline}</span>
            </div>
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.2]">
                <span className="text-[#1a283c] block">{data.hero.titleDark}</span>
                <span className="text-[#d89f4b]">{data.hero.titleGold}</span>
              </h1>
              {/* Golden Line */}
              <div className="w-16 h-1 bg-[#d89f4b] mt-6"></div>
            </div>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              {data.hero.description}
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full max-w-[600px] mx-auto aspect-[16/10] rounded-sm overflow-hidden border-l-[6px] border-[#d89f4b] shadow-xl">
              <Image 
                src={data.hero.image} 
                alt="Awards Trophy and Plaque" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Stats Banner */}
      <div className="w-full bg-[#0a1422] py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
            {data.stats?.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center text-center px-4 py-6 md:py-0"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-[#d89f4b] mb-4">
                  <DynamicIcon name={stat.icon} className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div className="text-white text-3xl sm:text-4xl font-serif font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-300 text-[13px] tracking-widest uppercase font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards Grid Section */}
      <div className="w-full bg-[#f8f6f2]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {data.awards?.map((award, idx) => (
              <motion.div 
                key={award.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="group bg-white border border-slate-200 rounded-lg p-5 flex items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:border-[#d89f4b]/30 transition-all duration-300 cursor-pointer h-full"
              >
                {/* Image Left */}
                <div className="w-[120px] sm:w-[140px] shrink-0 relative aspect-[3/4] bg-slate-50 border border-slate-100 p-2 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <Image 
                    src={award.image} 
                    alt={award.title} 
                    fill 
                    className="object-contain p-2" 
                  />
                </div>

                {/* Content Right */}
                <div className="flex flex-col flex-grow py-2">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1a283c] leading-tight mb-3 group-hover:text-[#d89f4b] transition-colors">
                    {award.title}
                  </h3>
                  <div className="text-[#d89f4b] font-bold text-lg mb-3">
                    {award.year}
                  </div>
                  <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed max-w-[90%]">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
