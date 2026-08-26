"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/DynamicIcon";
import { OfficeLocationPageData, OfficeItem } from "@/lib/types";

export default function OfficeLocationClient({ data }: { data: OfficeLocationPageData }) {
  const [activeMapUrl, setActiveMapUrl] = useState<string>(data.offices[0]?.mapUrl || "");

  return (
    <div className="w-full bg-[#fdfdfd] pb-20">
      
      {/* Top Hero Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-[#d89f4b] font-bold text-sm tracking-widest uppercase mb-4">
              <DynamicIcon name="map-pin" className="w-5 h-5" />
              {data.header.subtitle}
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c] mb-4">
              {data.header.titleDark} <span className="text-[#d89f4b]">{data.header.titleGold}</span>
            </h2>
            <div className="w-20 h-0.5 bg-[#d89f4b] mb-6"></div>
            
            <p className="text-slate-500 text-base leading-relaxed">
              {data.header.description}
            </p>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[16/9] lg:aspect-[2/1] rounded-sm overflow-hidden shadow-lg border border-slate-100"
          >
            <Image 
              src={data.heroImage} 
              alt="Office Reception" 
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Offices Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.offices.map((office, idx) => (
            <motion.div 
              key={office.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-slate-100 rounded-sm p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:border-[#d89f4b]/30 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Top: Icon + Address */}
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-full bg-[#fdfaf5] border border-[#d89f4b]/20 flex items-center justify-center shrink-0 group-hover:bg-[#d89f4b] group-hover:text-white transition-colors">
                  <DynamicIcon name="landmark" className="w-7 h-7 text-[#d89f4b] group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col pt-1">
                  <h3 className="font-bold text-[#1a283c] text-lg mb-1">{office.city}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed whitespace-pre-line">
                    {office.address}
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-3 mt-auto mb-8">
                <div className="flex items-center gap-3">
                  <DynamicIcon name="phone" className="w-4 h-4 text-[#d89f4b]" />
                  <span className="text-slate-500 text-sm font-medium">{office.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <DynamicIcon name="mail" className="w-4 h-4 text-[#d89f4b]" />
                  <span className="text-slate-500 text-sm font-medium">{office.email}</span>
                </div>
              </div>

              {/* Link */}
              <button 
                onClick={() => {
                  setActiveMapUrl(office.mapUrl);
                  // Scroll to map smoothly
                  document.getElementById("interactive-map")?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="text-[#d89f4b] font-bold text-[13px] flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest text-left"
              >
                Get Directions <DynamicIcon name="arrow-right" className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div id="interactive-map" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[500px] lg:h-[600px] rounded-sm overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center group shadow-md">
          
          {/* Iframe */}
          <iframe 
            src={activeMapUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(80%) contrast(1.1) brightness(1.05)" }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 z-10 transition-all duration-500 group-hover:filter-none"
            title="Interactive Office Map"
          ></iframe>
          
          {/* Fallback Loader */}
          <div className="w-8 h-8 border-2 border-slate-300 border-t-[#d89f4b] rounded-full animate-spin absolute z-0"></div>

          {/* Overlapping 'Find Us' Card */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 w-[280px] sm:w-[320px] bg-white rounded-sm shadow-xl p-6 sm:p-8 z-20 border border-slate-100">
            <h3 className="font-serif text-[26px] font-bold text-[#1a283c] mb-2">Find Us</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Use the map to find our office locations near you.
            </p>
            <ul className="flex flex-col">
              {data.offices.map((office) => (
                <li key={`map-nav-${office.id}`}>
                  <button 
                    onClick={() => setActiveMapUrl(office.mapUrl)}
                    className={`flex items-center gap-3 py-4 border-b border-slate-100 last:border-0 w-full text-left transition-colors ${activeMapUrl === office.mapUrl ? 'text-[#d89f4b]' : 'text-[#1a283c] hover:text-[#d89f4b]'}`}
                  >
                    <DynamicIcon name="map-pin" className={`w-5 h-5 shrink-0 ${activeMapUrl === office.mapUrl ? 'text-[#d89f4b]' : 'text-slate-400'}`} />
                    <span className="font-bold text-[15px]">{office.city}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
}
