"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "@/components/DynamicIcon";
import { motion } from "framer-motion";
import { ContentSection, RelatedPublication, PublicationDetailData } from "@/lib/types";

export const PublicationDetailClient: React.FC<{ data: PublicationDetailData }> = ({ data }) => {
  return (
    <section className="w-full bg-[#fdfdfd] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Header Area */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <span className="text-[#d89f4b] font-bold text-[11px] sm:text-[12px] tracking-widest uppercase mb-4 block">
                {data.category}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif md:text-[42px] font-bold text-[#1a283c] leading-[1.2] mb-5">
                {data.title}
              </h1>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-6"></div>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                {data.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-[13px] text-slate-600 font-medium border-y border-slate-200 py-4">
                <div className="flex items-center gap-2">
                  <DynamicIcon name="calendar-days" className="w-4 h-4 text-slate-400" />
                  <span>{data.meta.date}</span>
                </div>
                <div className="hidden sm:block w-[1px] h-4 bg-slate-300"></div>
                <div className="flex items-center gap-2">
                  <DynamicIcon name="clock" className="w-4 h-4 text-slate-400" />
                  <span>{data.meta.readTime}</span>
                </div>
                <div className="hidden sm:block w-[1px] h-4 bg-slate-300"></div>
                <div className="flex items-center gap-2">
                  <DynamicIcon name="user" className="w-4 h-4 text-slate-400" />
                  <span>{data.meta.author}</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              className="w-full aspect-[16/9] relative rounded overflow-hidden mb-12"
            >
              <Image src={data.heroImage?.src} alt={data.heroImage?.alt} fill className="object-cover" priority />
            </motion.div>

            {/* Content Sections */}
            <div className="flex flex-col gap-10">
              {data.content?.map((section, idx) => (
                <motion.div 
                  key={idx}
                  id={`section-${idx}`}
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                >
                  <h3 className="font-serif text-2xl font-bold text-[#1a283c] mb-4">{section.heading}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed whitespace-pre-wrap">
                    {section.text}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* TOC Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="border border-slate-200 rounded p-8 bg-white"
            >
              <h3 className="font-serif text-[22px] font-bold text-[#1a283c] mb-4">{data.sidebar?.tocBox?.title}</h3>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-6"></div>
              <ul className="flex flex-col gap-5 border-l-2 border-slate-100 pl-4">
                {data.sidebar?.tocBox?.items?.map((item, idx) => (
                  <li key={idx} className="relative">
                    {idx === 0 && (
                      <div className="absolute -left-[18px] top-0 bottom-0 w-[2px] bg-[#d89f4b]"></div>
                    )}
                    <a 
                      href={`#section-${idx}`} 
                      className={`text-[13px] leading-snug transition-colors ${idx === 0 ? 'text-[#d89f4b] font-bold' : 'text-slate-600 hover:text-[#d89f4b] font-medium'}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Related Publications Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="border border-slate-200 rounded p-8 bg-white"
            >
              <h3 className="font-serif text-[22px] font-bold text-[#1a283c] mb-4">{data.sidebar?.relatedBox?.title}</h3>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-6"></div>
              <div className="flex flex-col gap-6">
                {data.sidebar?.relatedBox?.items?.map((related, idx) => (
                  <Link key={idx} href={`/publication/${related.slug}`} className="group flex gap-4 items-center border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                    <div className="w-[80px] h-[80px] shrink-0 rounded overflow-hidden relative bg-slate-100">
                      <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-serif text-[13px] font-bold text-[#1a283c] leading-snug mb-2 group-hover:text-[#d89f4b] transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                        <span>{related.date}</span>
                        <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                        <span>{related.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* More Info Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="border border-slate-200 rounded p-8 bg-white"
            >
              <h3 className="font-serif text-[22px] font-bold text-[#1a283c] mb-4">{data.sidebar?.moreInfoBox?.title}</h3>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-6"></div>
              <p className="text-[14px] text-slate-600 mb-6 leading-relaxed">{data.sidebar?.moreInfoBox?.text}</p>
              <Link 
                href="/our-team"
                className="w-full flex items-center justify-center gap-2 py-3 border border-[#d89f4b] rounded text-[#1a283c] font-bold text-[12px] uppercase tracking-widest hover:bg-[#d89f4b] hover:text-white transition-all"
              >
                <span>Contact Our Experts</span>
                <DynamicIcon name="arrow-right" className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
