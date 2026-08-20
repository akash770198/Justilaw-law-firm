"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface CaseStudyItem {
  id: string;
  src: string;
  alt: string;
  location: string;
  title: string;
  link?: string;
}

interface CaseStudiesPageData {
  tagline: string;
  taglineIcon: string;
  headingDark: string;
  headingGold: string;
  items: CaseStudyItem[];
}

export const CaseStudiesClient: React.FC<{ data: CaseStudiesPageData }> = ({ data }) => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-[#d89f4b] mb-3">
            <DynamicIcon name={data.taglineIcon || "gavel"} className="w-5 h-5" />
            <h3 className="font-bold text-[13px] tracking-widest uppercase">
              {data.tagline}
            </h3>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
            <span className="text-[#1a283c] block sm:inline mr-0 sm:mr-3">{data.headingDark}</span>
            <span className="text-[#d89f4b] block sm:inline">{data.headingGold}</span>
          </h2>
        </div>

        {/* 8-Card Case Studies Grid (4 columns x 2 rows) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {data.items.map((item) => (
            <motion.div 
              variants={itemVariants} 
              key={item.id} 
              className="relative w-full aspect-[3/4] overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 bg-slate-100 rounded-sm"
            >
              {/* Background Image */}
              <Image 
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Overlay (Appears on Hover) */}
              <div className="absolute inset-0 bg-[#0b1320]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Centered Circular Badge (Hover Effect) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-10">
                <div className="bg-[#101c2e] w-[85%] max-w-[240px] aspect-square rounded-full flex flex-col items-center justify-center text-white text-center p-5 shadow-2xl relative border border-white/10">
                  
                  {/* Location Pin & Tag */}
                  <div className="flex items-center justify-center gap-1.5 text-[#d89f4b] mb-2">
                    <DynamicIcon name="map-pin" className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-200">
                      {item.location}
                    </span>
                  </div>
                  
                  {/* Case Study Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight px-2 text-white mb-2">
                    {item.title}
                  </h3>
                  
                  {/* Gold Action Arrow Button */}
                  <Link 
                    href={item.link || "#"}
                    aria-label={`View case study: ${item.title}`}
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 bg-[#d89f4b] rounded-full flex items-center justify-center text-white shadow-[0_4px_14px_rgba(216,159,75,0.4)] cursor-pointer hover:bg-[#c48d3e] transition-colors"
                  >
                    <DynamicIcon name="arrow-up-right" className="w-5 h-5" />
                  </Link>
                  
                </div>
              </div>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
