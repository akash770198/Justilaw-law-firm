"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { motion } from "framer-motion";
import { PublicationItem, PublicationData } from "@/lib/types";

export const PublicationClient: React.FC<{ data: PublicationData }> = ({ data }) => {
  return (
    <section className="w-full bg-[#fdfdfd] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 max-w-3xl"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c]">
              {data.heading}
            </h2>
            <div className="w-16 h-[2px] bg-[#d89f4b]"></div>
            <p className="text-slate-600 text-[15px] leading-relaxed mt-2">
              {data.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-[13px] font-medium mt-10"
          >
            Showing 1-{data.items.length} of {data.totalResults} results
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {data.items?.map((item, idx) => (
            <motion.div 
              key={item.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col group hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Image & Icon Wrapper */}
              <div className="relative w-full aspect-[16/10] bg-slate-100">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Floating Icon */}
                <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-[#0c1626] border-[4px] border-white flex items-center justify-center z-10 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <DynamicIcon name={item.icon} className="w-5 h-5 text-[#d89f4b]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-10 flex flex-col flex-grow">
                {/* Category */}
                <span className="text-[#d89f4b] font-bold text-[10px] sm:text-[11px] tracking-widest uppercase mb-3 block">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="font-serif text-[20px] font-bold text-[#1a283c] leading-[1.3] mb-4 group-hover:text-[#d89f4b] transition-colors line-clamp-3">
                  <Link href={`/publication/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-[14px] leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>

                <div className="mt-auto flex flex-col gap-5">
                  {/* Meta Info (Date & Read Time) */}
                  <div className="flex items-center gap-6 text-[12px] text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                      <DynamicIcon name="calendar-days" className="w-4 h-4 text-slate-400" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DynamicIcon name="clock" className="w-4 h-4 text-slate-400" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link 
                    href={`/publication/${item.slug}`}
                    className="inline-flex items-center gap-2 text-[#1a283c] font-bold text-[13px] hover:text-[#d89f4b] transition-colors w-fit"
                  >
                    <span>Read More</span>
                    <DynamicIcon name="arrow-right" className="w-4 h-4 text-[#d89f4b]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* End of results */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full text-center mt-12 mb-[-12px] text-slate-800 text-[13px] font-medium"
        >
          End of results
        </motion.div> */}

      </div>
    </section>
  );
};
