"use client";

import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { DynamicIcon } from "@/components/DynamicIcon";
import { BreadcrumbPath, BreadcrumbBannerProps } from "@/lib/types";

export const BreadcrumbBanner: React.FC<BreadcrumbBannerProps> = ({ title, paths }) => {
  return (
    <section className="relative w-full bg-[#182236] pt-24 pb-20 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Graphics */}
      
      {/* Top Left Golden Lines */}
      <div className="absolute top-0 left-0 w-[400px] sm:w-[600px] h-full pointer-events-none opacity-40">
        <svg viewBox="0 0 1000 600" preserveAspectRatio="none" className="w-full h-full absolute top-0 left-0">
          <path d="M0,0 Q200,300 400,600 M-50,0 Q150,300 350,600 M-100,0 Q100,300 300,600 M-150,0 Q50,300 250,600 M-200,0 Q0,300 200,600 M-250,0 Q-50,300 150,600 M-300,0 Q-100,300 100,600" stroke="#d89f4b" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Top Right Golden Curve */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#d89f4b] rounded-bl-full translate-x-1/3 -translate-y-1/3 opacity-90 pointer-events-none"></div>

      {/* Bottom Right Golden Lines */}
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[600px] h-full pointer-events-none opacity-40">
        <svg viewBox="0 0 1000 600" preserveAspectRatio="none" className="w-full h-full absolute bottom-0 right-0 scale-x-[-1] scale-y-[-1]">
          <path d="M0,0 Q200,300 400,600 M-50,0 Q150,300 350,600 M-100,0 Q100,300 300,600 M-150,0 Q50,300 250,600 M-200,0 Q0,300 200,600 M-250,0 Q-50,300 150,600 M-300,0 Q-100,300 100,600" stroke="#d89f4b" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Dotted Vertical Line on Right */}
      <div className="absolute right-[10%] sm:right-[20%] top-1/2 -translate-y-1/2 flex flex-col gap-4 pointer-events-none opacity-80">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#d89f4b]"></div>
        ))}
      </div>

      {/* Triangles on Bottom Left */}
      <div className="absolute bottom-10 left-[10%] sm:left-[20%] flex gap-2 pointer-events-none opacity-90">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[14px] border-l-[#d89f4b] border-b-[10px] border-b-transparent"></div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center px-4"
      >
        {/* Pill Breadcrumb */}
        <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2 mb-6 shadow-md">
          <DynamicIcon name="gavel" className="w-4 h-4 text-slate-500 transform -scale-x-100" />
          <div className="flex items-center text-[12px] font-bold tracking-wider text-[#1a283c]">
            {paths.map((path, idx) => (
              <React.Fragment key={idx}>
                <Link href={path.href} className="hover:text-[#d89f4b] transition-colors">
                  {path.name.toUpperCase()}
                </Link>
                {idx < paths.length - 1 && <span className="mx-2 text-slate-400">/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl md:text-6xl text-white font-bold tracking-tight">
          {title}
        </h1>
      </motion.div>
    </section>
  );
};
