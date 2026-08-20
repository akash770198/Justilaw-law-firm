"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/app/components/DynamicIcon";

interface IndustryDetailData {
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  aboutSection: {
    icon: string;
    title: string;
    description: string;
  };
  supportSection: {
    title: string;
    items: {
      number: string;
      icon: string;
      title: string;
      description: string;
    }[];
  };
}

export const IndustryDetailClient: React.FC<{ data: IndustryDetailData }> = ({ data }) => {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* Left */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex flex-col items-start"
            >
              <h3 className="font-bold text-[13px] tracking-widest uppercase text-[#d89f4b] mb-4">
                {data.subtitle}
              </h3>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#1a283c] mb-6">
                {data.title}
              </h2>
              <div className="w-16 h-[2px] bg-[#d89f4b] mb-6"></div>
              
              <h4 className="text-xl md:text-2xl font-serif font-bold text-[#1a283c] mb-4">
                {data.tagline}
              </h4>
              <p className="text-slate-500 text-base leading-relaxed">
                {data.description}
              </p>
            </motion.div>
            
            {/* Right */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 pt-2"
            >
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <Image src={data.image || "/law_firm_bg.jpg"} alt={data.title} fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      {data.aboutSection && (
        <section className="bg-white pb-16 lg:pb-24">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8"
            >
              {/* Left Icon Area - Aligned with navy blocks below */}
              <div className="w-full md:w-[220px] flex-shrink-0 flex justify-center">
                <div className="flex items-center justify-center w-[130px] h-[130px] rounded-full bg-[#1a283c] shadow-lg">
                  <DynamicIcon name={data.aboutSection.icon} className="w-14 h-14 text-[#d89f4b]" />
                </div>
              </div>
              
              {/* Vertical Divider (desktop only) */}
              <div className="hidden md:block w-[1px] h-40 bg-slate-300"></div>

              {/* Right Text */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#1a283c] mb-4">
                  {data.aboutSection.title}
                </h3>
                <div className="text-slate-500 text-[15px] sm:text-base leading-relaxed whitespace-pre-line">
                  {data.aboutSection.description}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 3. Support Cards Section */}
      {data.supportSection && (
        <section className="bg-white pb-20 lg:pb-32">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a283c] mb-6">
                {data.supportSection.title}
              </h2>
              <div className="w-16 h-[2px] bg-[#d89f4b] mx-auto"></div>
            </motion.div>

            <div className="w-full space-y-4">
              {data.supportSection.items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col sm:flex-row bg-white rounded-md overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all group"
                >
                  {/* Navy Left Block */}
                  <div className="bg-[#1a283c] w-full sm:w-[220px] flex-shrink-0 flex items-center justify-between px-10 py-6">
                    <span className="text-white/90 font-semibold text-2xl">
                      {item.number}
                    </span>
                    <DynamicIcon name={item.icon} className="w-10 h-10 text-[#d89f4b] group-hover:scale-110 transition-transform" />
                  </div>
                  
                  {/* White Right Block */}
                  <div className="p-6 md:p-8 flex-grow">
                    <h3 className="font-serif text-[22px] font-bold text-[#1a283c] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-[14px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      )}
    </>
  );
};
