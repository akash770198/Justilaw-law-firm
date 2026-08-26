"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "@/components/DynamicIcon";
import { motion } from "framer-motion";
import { EventItem, EventsData } from "@/lib/types";

export const EventsClient: React.FC<{ data: EventsData }> = ({ data }) => {
  return (
    <section className="w-full bg-[#fdfdfd] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h4 className="text-[#d89f4b] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase mb-4 flex flex-col items-center gap-2">
            <span>{data.sectionTitle}</span>
            <div className="w-12 h-[2px] bg-[#d89f4b]"></div>
          </h4>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c] leading-tight mb-5">
            {data.heading}
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items?.map((item, idx) => (
            <motion.div 
              key={item.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col group hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 h-full"
            >
              {/* Image & Badges */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Top Left Badge */}
                <div className="absolute top-0 left-0 bg-[#0c1626] text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 z-10 shadow-sm">
                  {item.type}
                </div>

                {/* Bottom Left Date Badge */}
                <div className="absolute bottom-4 left-4 bg-[#0c1626] text-white flex flex-col items-center justify-center w-[60px] h-[65px] rounded-sm z-10 shadow-md">
                  <span className="text-xl font-serif font-bold leading-none mb-1">{item.dateBadge.day}</span>
                  <span className="text-[10px] font-bold tracking-widest text-[#d89f4b] uppercase leading-none mb-0.5">{item.dateBadge.month}</span>
                  <span className="text-[10px] font-medium text-slate-300 leading-none">{item.dateBadge.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="font-serif text-[22px] font-bold text-[#1a283c] leading-[1.3] mb-6 group-hover:text-[#d89f4b] transition-colors line-clamp-2">
                  <Link href={`/events/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>

                <div className="flex flex-col gap-3 mb-8 text-[13px] text-slate-600 font-medium mt-auto">
                  {/* Date & Time */}
                  <div className="flex items-start gap-3">
                    <DynamicIcon name="calendar" className="w-[18px] h-[18px] text-[#d89f4b] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item.dateTime}</span>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <DynamicIcon name="map-pin" className="w-[18px] h-[18px] text-[#d89f4b] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item.location}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <Link 
                  href={`/events/${item.slug}`}
                  className="w-full flex items-center justify-center gap-2 py-3 border border-slate-200 rounded text-[#1a283c] font-bold text-[11px] sm:text-xs tracking-widest uppercase transition-colors group-hover:border-[#d89f4b] group-hover:text-[#d89f4b]"
                >
                  <span>View Details</span>
                  <DynamicIcon name="chevron-right" className="w-[14px] h-[14px]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
