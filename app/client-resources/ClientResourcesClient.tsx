"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { ClientResourcesData } from "@/lib/types";

export const ClientResourcesClient: React.FC<{ data: ClientResourcesData }> = ({ data }) => {
  return (
    <div className="w-full">
      
      {/* 1. Hero Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.2] text-[#1a283c]">
                {data.hero.titleDark} <span className="text-[#d89f4b]">{data.hero.titleGold}</span>
              </h1>
              {/* Golden Line */}
              <div className="w-16 h-1 bg-[#d89f4b] mt-6"></div>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
              {data.hero.description}
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full max-w-[700px] mx-auto aspect-[16/9] rounded-lg overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
              <Image 
                src={data.hero.image} 
                alt="Client Resources" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Browse by Practice Area */}
      <section className="w-full bg-[#f8f6f2] border-t border-slate-100 py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c]">{data.practiceAreas.title}</h2>
            <Link href="/practice-areas" className="hidden sm:flex items-center gap-2 text-[#d89f4b] font-semibold text-sm tracking-wide hover:opacity-80 transition-opacity">
              View All Areas <DynamicIcon name="arrow-right" className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {data.practiceAreas.items.map((area, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                key={idx}
                className="flex flex-col items-center justify-center text-center p-6 bg-white border border-slate-200 rounded-lg hover:border-[#d89f4b] hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-full bg-[#f5efe6] flex items-center justify-center text-[#1a283c] group-hover:text-[#d89f4b] transition-colors mb-4 border border-slate-100">
                  <DynamicIcon name={area.icon} className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h4 className="text-[13px] font-bold text-[#1a283c] leading-tight">
                  {area.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Resources */}
      <section className="w-full bg-slate-50 py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c]">{data.featuredResources.title}</h2>
            <Link href="#" className="hidden sm:flex items-center gap-2 text-[#d89f4b] font-semibold text-sm tracking-wide hover:opacity-80 transition-opacity">
              View All Resources <DynamicIcon name="arrow-right" className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.featuredResources.items.map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={item.id}
                className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image & Badge */}
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-[#1a283c] text-white text-[10px] font-bold tracking-widest px-3 py-1.5 uppercase rounded-sm">
                    {item.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif font-bold text-xl text-[#1a283c] mb-3 leading-snug group-hover:text-[#d89f4b] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  
                  {/* Footer (Meta & Link) */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
                      <DynamicIcon 
                        name={item.type === "WEBINAR" ? "play-circle" : (item.meta.includes("DOC") ? "file-text" : "clipboard-check")} 
                        className="w-4 h-4" 
                      />
                      {item.meta}
                    </div>
                    <Link href={item.linkHref} className="text-[#d89f4b] font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all">
                      {item.linkText} <DynamicIcon name="arrow-right" className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Latest Insights */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c]">{data.latestInsights.title}</h2>
            <Link href="/news-media" className="hidden sm:flex items-center gap-2 text-[#d89f4b] font-semibold text-sm tracking-wide hover:opacity-80 transition-opacity">
              View All Insights <DynamicIcon name="arrow-right" className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.latestInsights.items.map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={item.id}
                className="flex flex-col group cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden mb-5">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white text-[#d89f4b] text-[10px] font-bold tracking-widest px-3 py-1.5 uppercase rounded-sm shadow-sm">
                    {item.type}
                  </div>
                </div>
                {/* Title */}
                <h3 className="font-serif font-bold text-lg text-[#1a283c] mb-4 leading-snug group-hover:text-[#d89f4b] transition-colors flex-grow">
                  {item.title}
                </h3>
                {/* Meta */}
                <div className="flex items-center gap-4 text-slate-500 text-xs font-semibold mb-4">
                  <span className="flex items-center gap-1.5">
                    <DynamicIcon name="calendar" className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <DynamicIcon name="clock" className="w-3.5 h-3.5" />
                    {item.readTime}
                  </span>
                </div>
                {/* Link */}
                <Link href={item.linkHref} className="text-[#d89f4b] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <DynamicIcon name="arrow-right" className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tools & Templates */}
      <section className="w-full bg-[#f8f6f2] border-t border-slate-100 py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c]">{data.toolsTemplates.title}</h2>
            <Link href="#" className="hidden sm:flex items-center gap-2 text-[#d89f4b] font-semibold text-sm tracking-wide hover:opacity-80 transition-opacity">
              View All Tools & Templates <DynamicIcon name="arrow-right" className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.toolsTemplates.items.map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={item.id}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:border-[#d89f4b] hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-[#1a283c] group-hover:bg-[#1a283c] group-hover:text-white transition-colors mb-6 border border-slate-100">
                  <DynamicIcon name={item.icon} className="w-6 h-6 stroke-[1.5]" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-[#1a283c] text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">{item.description}</p>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
                    <span className="text-[#1a283c]">{item.format}</span>
                    <span>•</span>
                    <span>{item.size}</span>
                  </div>
                  <Link href={item.linkHref} className="text-[#d89f4b] font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all">
                    Download <DynamicIcon name="arrow-right" className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
