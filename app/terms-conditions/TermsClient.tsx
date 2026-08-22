"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TermsConditionsPageData } from "@/lib/types";

export const TermsClientComponent: React.FC<{ data: TermsConditionsPageData }> = ({ data }) => {
  return (
    <section className="relative w-full bg-[#fdfdfd] flex flex-col items-center py-16 lg:py-24 overflow-hidden">
      
      {/* Background Watermarks */}
      <div className="absolute left-0 top-1/4 w-[400px] h-[600px] opacity-[0.03] pointer-events-none">
        <Image src="/building_pillars.svg" alt="Pillars" fill className="object-contain object-left" />
      </div>
      <div className="absolute right-0 top-0 w-[500px] h-[700px] opacity-[0.03] pointer-events-none">
        <Image src="/lady_of_justice.svg" alt="Lady of Justice" fill className="object-contain object-right-top" />
      </div>

      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c] leading-[1.15] tracking-tight mb-5">
            {data.header.titleDark} <span className="text-[#d89f4b]">{data.header.titleGold}</span>
          </h2>
          <div className="w-16 h-1 bg-[#d89f4b] mb-8"></div>
          
          <p className="text-[#1a283c] font-bold mb-6">
            {data.header.lastUpdated}
          </p>
          <p className="text-slate-600 leading-relaxed text-base">
            {data.header.intro}
          </p>
        </motion.div>

        {/* Terms List */}
        <div className="flex flex-col">
          {data.terms.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 py-8 border-b border-slate-200 last:border-b-0"
            >
              {/* Number */}
              <div className="w-16 shrink-0 flex items-center sm:justify-end">
                <span className="font-serif text-3xl font-bold text-[#d89f4b]">
                  {item.id}
                </span>
              </div>
              
              {/* Divider */}
              <div className="hidden sm:block w-px h-16 bg-[#d89f4b]/20 shrink-0"></div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-[#1a283c] font-bold text-[17px] mb-2">{item.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
