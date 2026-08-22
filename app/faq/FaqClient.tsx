"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaqPageData } from "@/lib/types";

export const FaqClient: React.FC<{ data: FaqPageData }> = ({ data }) => {
  const [openId, setOpenId] = useState<string | null>("03"); // Default open ID like mockup

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full bg-[#fdfdfd] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (FAQ List) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            
            {/* Header Content */}
            <div className="mb-12">
              <div className="flex items-center gap-2 text-[#d89f4b] font-bold text-sm tracking-widest uppercase mb-4">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/>
                </svg>
                FAQs
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif lg:text-[56px] font-bold leading-[1.1] text-[#1a283c] mb-6">
                {data.header.titleDark} <span className="text-[#d89f4b]">{data.header.titleGold}</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                {data.header.description}
              </p>
            </div>

            {/* Accordion List */}
            <div className="flex flex-col gap-4">
              {data.items.map((item) => {
                const isOpen = openId === item.id;
                
                return (
                  <div 
                    key={item.id} 
                    className={`border transition-all duration-300 rounded-sm overflow-hidden ${
                      isOpen ? 'border-[#d89f4b]' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className={`w-full flex items-center justify-between p-5 sm:p-6 transition-colors ${
                        isOpen ? 'bg-[#d89f4b] text-white' : 'bg-white text-[#1a283c]'
                      }`}
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className={`font-serif text-lg sm:text-xl font-bold ${
                          isOpen ? 'text-white' : 'text-[#1a283c]'
                        }`}>
                          {item.id}
                        </span>
                        <span className="font-bold text-left text-sm sm:text-base">
                          {item.question}
                        </span>
                      </div>
                      
                      {/* Plus/Minus Icon */}
                      <div className="flex-shrink-0 ml-4">
                        <span className="text-2xl font-light leading-none">
                          {isOpen ? '−' : '+'}
                        </span>
                      </div>
                    </button>
                    
                    {/* Accordion Body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="bg-[#f9fafb]"
                        >
                          <div className="p-5 sm:p-6 sm:pl-16 text-slate-500 leading-relaxed text-sm sm:text-base border-t border-slate-100">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column (Sidebar Images & CTA) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
            
            {/* Image 1 */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-slate-100 bg-[#f5efe6]">
              <Image
                src={data.sidebar.images[0].src}
                alt={data.sidebar.images[0].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-slate-100">
              <Image
                src={data.sidebar.images[1].src}
                alt={data.sidebar.images[1].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* CTA Box */}
            <div className="bg-[#fcfaf8] border border-[#d89f4b]/20 p-8 rounded-lg shadow-sm mt-2 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border border-[#d89f4b] flex items-center justify-center text-[#d89f4b] mb-4 bg-white shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  <path d="M9 9h.01"></path>
                  <path d="M12 9h.01"></path>
                  <path d="M15 9h.01"></path>
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1a283c] mb-3">
                {data.sidebar.cta.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {data.sidebar.cta.description}
              </p>
              <Link 
                href={data.sidebar.cta.buttonLink}
                className="w-full inline-flex items-center justify-center px-8 py-3.5 bg-[#08101a] text-white font-bold text-sm tracking-wide rounded-sm hover:bg-[#d89f4b] transition-colors group"
              >
                {data.sidebar.cta.buttonText}
                <svg 
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
