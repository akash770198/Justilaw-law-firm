"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SitemapPageData } from "@/lib/types";
import { DynamicIcon } from "@/components/DynamicIcon";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function SitemapClient({ data }: { data: SitemapPageData }) {
  return (
    <section className="w-full bg-[#fdfdfd] py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center mb-16"
        >
          <h2 className="text-[#1a283c] font-bold text-lg md:text-xl tracking-[0.2em] uppercase mb-4">
            {data.subtitle}
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-16 md:w-24 h-[1px] bg-[#d89f4b]"></div>
            <DynamicIcon name={data.icon} className="w-8 h-8 text-[#d89f4b]" />
            <div className="w-16 md:w-24 h-[1px] bg-[#d89f4b]"></div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {data.categories.map((category) => (
            <motion.div 
              key={category.id} 
              variants={itemVariants}
              className="bg-white rounded-md border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 p-8 relative overflow-hidden flex flex-col h-full"
            >
              {/* Background Number */}
              <div className="absolute top-4 right-4 text-[80px] font-serif font-bold text-slate-50 opacity-50 select-none pointer-events-none leading-none">
                {category.id}
              </div>

              {/* Card Header */}
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#1a283c] flex items-center justify-center flex-shrink-0">
                  <DynamicIcon name={category.icon} className="w-6 h-6 text-[#d89f4b]" />
                </div>
                <h3 className="font-bold text-[#1a283c] text-sm md:text-[15px] uppercase tracking-wider leading-tight pt-2">
                  {category.title}
                </h3>
              </div>

              {/* Links List */}
              <ul className="flex flex-col gap-4 relative z-10 mt-2 flex-grow">
                {category.links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      href={link.href}
                      className="group flex items-start gap-3"
                    >
                      {/* Orange Dot */}
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d89f4b] flex-shrink-0 mt-2 group-hover:scale-125 transition-transform"></div>
                      <span className="text-[#1a283c] font-medium text-[15px] group-hover:text-[#d89f4b] transition-colors leading-relaxed">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
