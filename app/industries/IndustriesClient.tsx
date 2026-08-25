"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { IndustryItem, IndustriesData } from "@/lib/types";

export const IndustriesClient: React.FC<{ data: IndustriesData }> = ({ data }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col items-start lg:-mt-1"
            >
              {/* Hero Titles */}

              <div className="flex items-center gap-3 text-[#d89f4b] mb-4">
                <DynamicIcon name="landmark" className="w-5 h-5" />
                <span className="font-bold text-[13px] tracking-widest uppercase">{data.hero.subtitle}</span>
              </div>
              <div className="mb-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.2] tracking-tight text-[#1a283c]">
                  {data.hero.titleDark} <br />
                  <span className="text-[#d89f4b]">{data.hero.titleGold}</span>
                </h2>
                {/* Golden Line */}
                <div className="w-16 h-1 bg-[#d89f4b] mt-6"></div>
              </div>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl">
                {data.hero.description}
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative w-full max-w-[600px] mx-auto aspect-[16/10] rounded-sm overflow-hidden border-l-[6px] border-[#d89f4b] shadow-xl">
                <Image 
                  src={data.hero.image} 
                  alt="Industries Hero" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-[#f8f6f2] py-16 lg:py-20 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c] mb-6">
              {data.industries.title}
            </h2>
            <div className="w-16 h-[2px] bg-[#d89f4b] mx-auto mb-6"></div>
            <p className="text-slate-500 text-[15px] sm:text-base leading-relaxed">
              {data.industries.description}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {data.industries.items.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-white rounded-xl border border-slate-100 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 flex flex-col h-full group items-center text-center"
              >
                <div className="w-[84px] h-[84px] rounded-full bg-[#fbf6ef] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DynamicIcon name={item.icon} className="w-10 h-10 text-[#d89f4b]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1a283c] mb-3">
                  {item.title}
                </h3>
                <div className="w-10 h-[2px] bg-[#d89f4b] mb-4" />
                <p className="text-slate-500 text-[14px] leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>
                <Link href={item.link} className="inline-flex items-center gap-2 text-[#d89f4b] font-bold text-[13px] hover:text-[#1a283c] transition-colors mt-auto uppercase tracking-wider">
                  Learn More <DynamicIcon name="arrow-right" className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#fcfaf6] rounded-xl border border-[#d89f4b]/20 shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-6 lg:gap-8">
              <div className="w-20 h-20 rounded-full border border-[#d89f4b]/30 flex flex-shrink-0 items-center justify-center bg-white shadow-sm">
                <DynamicIcon name={data.cta.icon} className="w-10 h-10 text-[#d89f4b]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1a283c] mb-2">
                  {data.cta.title}
                </h3>
                <p className="text-slate-500 text-[15px]">
                  {data.cta.description}
                </p>
              </div>
            </div>
            <a 
              href={data.cta.button.href}
              className="inline-flex items-center justify-center gap-3 bg-[#1a283c] text-white px-8 py-4 rounded-md font-bold text-[13px] tracking-widest uppercase hover:bg-[#d89f4b] transition-colors flex-shrink-0 shadow-lg hover:shadow-xl"
            >
              {data.cta.button.text}
              <DynamicIcon name="arrow-right" className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};
