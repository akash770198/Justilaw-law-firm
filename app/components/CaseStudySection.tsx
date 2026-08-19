"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "./DynamicIcon";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

interface CaseStudyItem {
  id: string;
  src: string;
  alt: string;
  location: string;
  title: string;
}

interface CaseStudyData {
  tagline: string;
  taglineIcon: string;
  headingDark: string;
  headingGold: string;
  items: CaseStudyItem[];
}

export const CaseStudySection: React.FC<{ data: CaseStudyData }> = ({ data }) => {
  return (
    <section className="w-full bg-white py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-[#d89f4b] mb-4">
            <DynamicIcon name={data.taglineIcon} className="w-6 h-6" />
            <h3 className="font-bold text-[13px] tracking-widest uppercase">
              {data.tagline}
            </h3>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight">
            <span className="text-[#111827] mr-3">{data.headingDark}</span>
            <span className="text-[#d89f4b]">{data.headingGold}</span>
          </h2>
        </div>

        {/* 4-Column Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {data.items.map((item) => (
            <motion.div variants={itemVariants} key={item.id} className="relative w-full aspect-[3/4] overflow-hidden group shadow-lg bg-slate-100 rounded-md">
              
              {/* Background Image */}
              <Image 
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Overlay (appears on hover) */}
              <div className="absolute inset-0 bg-[#0b1320]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Hover Circle Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="bg-[#111827] w-[85%] max-w-[240px] aspect-square rounded-full flex flex-col items-center justify-center text-white text-center p-6 shadow-2xl relative">
                  
                  {/* Location Pin */}
                  <div className="flex items-center justify-center gap-2 text-[#d89f4b] mb-3">
                    <DynamicIcon name="map-pin" className="w-4 h-4" />
                    <span className="text-[12px] font-semibold tracking-wide uppercase">{item.location}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold leading-tight mb-6 px-2">
                    {item.title}
                  </h3>
                  
                  {/* Gold Button */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#d89f4b] rounded-full flex items-center justify-center text-white shadow-[0_4px_14px_rgba(216,159,75,0.4)] cursor-pointer hover:bg-[#c48d3e] transition-colors">
                    <DynamicIcon name="arrow-up-right" className="w-5 h-5" />
                  </div>
                  
                </div>
              </div>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
