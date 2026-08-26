"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/DynamicIcon";
import { site, ServicePracticeAreasData, SectionProps } from "@/data";

export const PracticeAreasSection: React.FC<SectionProps<ServicePracticeAreasData>> = ({ data: customData, className }) => {
  const data = customData || site.practiceAreas;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
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

  return (
    <section className={`bg-[#fdfbf9] py-16 lg:py-20 relative overflow-hidden ${className || ""}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex flex-col items-center justify-center mb-4">
            <DynamicIcon name={data.sectionIcon} className="w-10 h-10 text-[#d89f4b] mb-4" />
            <div className="flex items-center gap-3 text-[#d89f4b]">
              <div className="h-[1px] w-6 bg-[#d89f4b]/50" />
              <span className="font-bold text-[13px] tracking-widest uppercase">{data.sectionTitle}</span>
              <div className="h-[1px] w-6 bg-[#d89f4b]/50" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight text-[#1a283c] mb-6 tracking-tight">
            {data.headingDark} <span className="text-[#d89f4b]">{data.headingGold}</span>
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {data.areas.map((area) => (
            <motion.div 
              key={area.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 group flex flex-col h-full border border-slate-100"
            >
              {/* Top Content */}
              <div className="p-8 pb-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#fdfaf6] border border-slate-100 flex items-center justify-center shadow-sm">
                    <DynamicIcon name={area.icon} className="w-6 h-6 text-[#1a283c]" />
                  </div>
                  {/* Number */}
                  <div className="w-12 h-12 rounded-full bg-[#fdfaf6] flex items-center justify-center">
                    <span className="text-[#d89f4b] font-bold text-lg">{area.id}</span>
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-[#1a283c] mb-3 group-hover:text-[#d89f4b] transition-colors">
                  {area.title}
                </h3>
                
                <div className="w-10 h-[2px] bg-[#d89f4b] mb-4"></div>
                
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Bottom Image */}
              <div className="relative aspect-[3/2] w-full mt-auto">
                <Image
                  src={area.image.src}
                  alt={area.image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a283c]/60 to-transparent"></div>
                
                {/* Action Button */}
                <Link 
                  href={area.link}
                  className="absolute bottom-0 left-0 w-14 h-14 bg-[#1a283c] hover:bg-[#d89f4b] transition-colors flex items-center justify-center z-10"
                >
                  <DynamicIcon name="arrow-right" className="w-5 h-5 text-white" />
                </Link>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
