"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { motion } from "framer-motion";
import { NewsMediaItem, NewsMediaData } from "@/lib/types";

export const NewsMediaClient: React.FC<{ data: NewsMediaData }> = ({ data }) => {
  return (
    <section className="w-full bg-[#fdfdfd] py-16 sm:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {data.items?.map((item, idx) => (
            <motion.div 
              key={item.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 flex flex-col group hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 h-full"
            >
              {/* Logo Box */}
              <div className="w-full h-24 sm:h-28 flex items-center justify-center mb-6 px-4 py-2">
                <div className="relative w-full h-full">
                  <Image 
                    src={item.logo} 
                    alt="News Media Logo" 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-[#1a283c] leading-snug mb-6 flex-grow group-hover:text-[#d89f4b] transition-colors line-clamp-3">
                  <Link href={`/news-media/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>

                {/* Footer / Meta */}
                <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-[13px] text-slate-500 font-medium">
                    <DynamicIcon name="calendar" className="w-4 h-4 text-[#d89f4b]" />
                    <span>{item.date}</span>
                  </div>
                  
                  <Link 
                    href={`/news-media/${item.slug}`}
                    className="inline-flex items-center gap-2 text-[13px] font-bold text-[#d89f4b] hover:text-[#1a283c] transition-colors group/link mt-1"
                  >
                    <span>Read More</span>
                    <DynamicIcon name="arrow-right" className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
            8
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded bg-white border border-slate-200 text-slate-600 text-sm font-semibold transition-colors hover:border-[#182c40] hover:text-[#182c40] ml-2">
            <DynamicIcon name="chevron-right" className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
