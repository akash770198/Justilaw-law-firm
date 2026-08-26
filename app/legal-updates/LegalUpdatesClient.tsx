"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "@/components/DynamicIcon";
import { motion } from "framer-motion";
import { LegalUpdateItem, LegalUpdatesData } from "@/lib/types";

export const LegalUpdatesClient: React.FC<{ data: LegalUpdatesData }> = ({ data }) => {
  const [activeFilter, setActiveFilter] = useState("All Updates");
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  // Additional categories for the dropdown
  const moreCategories = ["Family Law", "Real Estate", "Intellectual Property"];

  return (
    <section className="w-full bg-[#fdfdfd] py-12 py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {data.filters?.map((filter, idx) => {
            const isMore = filter.toLowerCase().includes("more");
            // The "More" button is considered active if the activeFilter is one of the moreCategories
            const isActive = (!isMore && (filter === activeFilter || (idx === 0 && activeFilter === ""))) || (isMore && moreCategories.includes(activeFilter));
            
            if (isMore) {
              return (
                <div key={idx} className="relative">
                  <button
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded text-[13px] sm:text-sm font-semibold transition-colors duration-200 shadow-sm border ${
                      isActive || isMoreOpen
                        ? "bg-[#182c40] text-white border-[#182c40]"
                        : "bg-white text-slate-600 border-slate-200 hover:border-[#182c40] hover:text-[#182c40]"
                    }`}
                  >
                    <span>{isActive ? activeFilter : filter}</span>
                    <DynamicIcon name="chevron-down" className={`w-4 h-4 ml-1 opacity-60 transition-transform ${isMoreOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isMoreOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsMoreOpen(false)}></div>
                      <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-slate-200 rounded shadow-xl z-20 overflow-hidden flex flex-col py-1">
                        {moreCategories.map((cat, cIdx) => (
                          <button
                            key={cIdx}
                            onClick={() => {
                              setActiveFilter(cat);
                              setIsMoreOpen(false);
                            }}
                            className={`px-4 py-2.5 text-left text-[13px] font-semibold transition-colors ${
                              activeFilter === cat ? "bg-slate-50 text-[#182c40]" : "text-slate-600 hover:bg-slate-50 hover:text-[#182c40]"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            }
            
            return (
              <button
                key={idx}
                onClick={() => setActiveFilter(filter)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded text-[13px] sm:text-sm font-semibold transition-colors duration-200 shadow-sm border ${
                  isActive
                    ? "bg-[#182c40] text-white border-[#182c40]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#182c40] hover:text-[#182c40]"
                }`}
              >
                <span>{filter}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items?.filter(item => activeFilter === "All Updates" || activeFilter === "" || item.category === activeFilter).map((item, idx) => (
            <motion.div 
              key={item.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-md overflow-hidden flex flex-col group hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full aspect-[3/2] overflow-hidden">
                <Image 
                  src={item.image || "/Case_study/case-study-gavel-high-quality.svg"} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Category */}
                <div className="text-[#d89f4b] text-[11px] font-bold tracking-wider uppercase mb-3">
                  {item.category}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a283c] leading-snug mb-4 group-hover:text-[#d89f4b] transition-colors">
                  <Link href={`/legal-updates/${item.slug || '#'}`}>
                    {item.title}
                  </Link>
                </h3>

                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs text-slate-500 font-medium mb-5">
                  <div className="flex items-center gap-1.5">
                    <DynamicIcon name="calendar" className="w-3.5 h-3.5 text-[#d89f4b]" />
                    <span>{item.date}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                  <div className="flex items-center gap-1.5">
                    <DynamicIcon name="user" className="w-3.5 h-3.5 text-[#d89f4b]" />
                    <span>{item.author}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                  <div className="flex items-center gap-1.5">
                    <DynamicIcon name="clock" className="w-3.5 h-3.5 text-[#d89f4b]" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                {/* Read More Link */}
                <Link 
                  href={`/legal-updates/${item.slug || '#'}`}
                  className="inline-flex items-center gap-2 text-[13px] font-bold text-[#1a283c] hover:text-[#d89f4b] transition-colors uppercase tracking-wide mt-auto group/link"
                >
                  <span>READ MORE</span>
                  <DynamicIcon name="arrow-right" className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-16">
          <button className="w-10 h-10 flex items-center justify-center rounded bg-[#182c40] text-white text-sm font-semibold shadow-sm transition-colors hover:bg-[#0c1626]">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded bg-white border border-slate-200 text-slate-600 text-sm font-semibold transition-colors hover:border-[#182c40] hover:text-[#182c40]">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded bg-white border border-slate-200 text-slate-600 text-sm font-semibold transition-colors hover:border-[#182c40] hover:text-[#182c40]">
            3
          </button>
          <span className="px-2 text-slate-400">..</span>
          <button className="w-10 h-10 flex items-center justify-center rounded bg-white border border-slate-200 text-slate-600 text-sm font-semibold transition-colors hover:border-[#182c40] hover:text-[#182c40]">
            10
          </button>
          <button className="h-10 px-4 flex items-center justify-center gap-2 rounded bg-white border border-slate-200 text-slate-600 text-sm font-semibold transition-colors hover:border-[#182c40] hover:text-[#182c40] ml-2">
            <span>Next</span>
            <DynamicIcon name="arrow-right" className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
