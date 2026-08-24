"use client";

import React from "react";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { BottomHighlight } from "@/lib/types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const BottomHighlights: React.FC<{ items: BottomHighlight[] }> = ({ items }) => {
  return (
    <section className="w-full bg-[#f5efe6] py-10 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center lg:justify-between divide-y lg:divide-y-0 lg:divide-x divide-[#d8cfc0]/40"
      >
        {items.map((item, idx) => (
          <motion.div
            variants={itemVariants}
            key={item.id}
            className={`flex items-center justify-start gap-8 lg:gap-5 w-full py-6 lg:py-0 ${idx === 0 ? "lg:pr-8" : idx === items.length - 1 ? "lg:pl-8 lg:pr-0" : "lg:px-8"}`}
          >
            <div className="w-[52px] h-[52px] rounded-full bg-[#0b1320] text-[#d89f4b] flex items-center justify-center flex-shrink-0">
              <DynamicIcon name={item.icon} className="w-[22px] h-[22px]" />
            </div>
            <h2 className="text-[15px] lg:text-[14px] font-semibold text-[#111827] font-sans leading-[1.4] max-w-[220px] lg:max-w-[120px]">
              {item.title}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
