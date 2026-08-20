"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/app/components/DynamicIcon";

interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

interface ServicesData {
  sectionTitle: string;
  sectionIcon: string;
  headingWhite: string;
  headingGold: string;
  description: string;
  cards: ServiceCard[];
  viewAllButton: {
    text: string;
    href: string;
    icon: string;
  };
}

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export const ServicesSection: React.FC<{ data: ServicesData }> = ({ data }) => {
  return (
    <section className="relative w-full bg-[#08101a] py-16 lg:py-20 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d89f4b]/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-5">
            <span className="w-10 h-px bg-[#d89f4b]/50"></span>
            <div className="flex items-center gap-2 text-[#d89f4b]">
              <DynamicIcon name={data.sectionIcon} className="w-5 h-5" />
              <h3 className="font-bold font-serif text-[15px] tracking-widest uppercase">
                {data.sectionTitle}
              </h3>
            </div>
            <span className="w-10 h-px bg-[#d89f4b]/50"></span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] text-white tracking-tight mb-6">
            {data.headingWhite} <br className="hidden sm:block" />
            <span className="text-[#d89f4b]">{data.headingGold}</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-400 text-[15px] sm:text-base leading-relaxed max-w-2xl font-light">
            {data.description}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {data.cards.map((card) => (
            <motion.div 
              key={card.id} 
              variants={itemVariants}
              className="bg-[#0c1624] border border-[#1a283c] hover:border-[#d89f4b]/50 rounded-md p-8 sm:p-10 flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-black/40"
            >
              <div className="w-20 h-20 rounded-full border border-[#1e2d42] bg-[#08101a] flex items-center justify-center text-[#d89f4b] mb-7 group-hover:border-[#d89f4b] transition-colors duration-300">
                <DynamicIcon name={card.icon} className="w-8 h-8" />
              </div>
              
              <h4 className="text-xl sm:text-2xl font-bold text-white font-serif tracking-wide mb-4">
                {card.title}
              </h4>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-light group-hover:text-slate-300 transition-colors">
                {card.description}
              </p>
              
              <Link
                href={card.linkHref}
                className="flex items-center gap-2 text-[#d89f4b] text-sm font-semibold tracking-wider hover:text-white transition-colors duration-300"
              >
                {card.linkText}
                <DynamicIcon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href={data.viewAllButton.href}
            className="group inline-flex items-center justify-center gap-3 bg-transparent hover:bg-[#182c47]/30 text-[#d89f4b] hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded border border-[#d89f4b]/50 hover:border-[#d89f4b] transition-all duration-300"
          >
            <span>{data.viewAllButton.text}</span>
            <DynamicIcon
              name={data.viewAllButton.icon}
              className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
