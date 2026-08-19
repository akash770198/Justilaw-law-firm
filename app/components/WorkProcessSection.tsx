"use client";

import React from "react";
import { DynamicIcon } from "./DynamicIcon";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

interface Step {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface WorkProcessData {
  sectionIcon: string;
  sectionTitle: string;
  headingDark: string;
  headingGold: string;
  steps: Step[];
}

interface WorkProcessSectionProps {
  data: WorkProcessData;
}

export const WorkProcessSection: React.FC<WorkProcessSectionProps> = ({ data }) => {
  return (
    <section className="bg-white py-16 lg:py-20 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-2 mb-4">
            <DynamicIcon name={data.sectionIcon} className="w-5 h-5 text-[#d89f4b] transform -scale-x-100" />
            <span className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.2em]">
              {data.sectionTitle}
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#1a283c]">
            {data.headingDark}{" "}
            <span className="text-[#d89f4b] block mt-2">{data.headingGold}</span>
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative">
          {/* SVG Arrows (Desktop Only) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            {/* Arrow 1 (Step 1 -> 2) Downward curve */}
            <svg className="absolute left-[20%] top-[45%] w-[10%] h-12 text-[#1a283c] overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0,0 Q30,30 60,30 L55,25 M60,30 L55,35" />
            </svg>
            
            {/* Arrow 2 (Step 2 -> 3) Upward curve */}
            <svg className="absolute left-[45%] top-[45%] w-[10%] h-12 text-[#1a283c] overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0,30 Q30,0 60,0 L55,-5 M60,0 L55,5" />
            </svg>

            {/* Arrow 3 (Step 3 -> 4) Downward curve */}
            <svg className="absolute left-[70%] top-[45%] w-[10%] h-12 text-[#1a283c] overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0,0 Q30,30 60,30 L55,25 M60,30 L55,35" />
            </svg>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10"
          >
            {data.steps.map((step, idx) => {
              const isEven = idx % 2 !== 0; // 0-indexed, so idx 1 (Step 02) is even logically
              return (
                <motion.div variants={itemVariants} key={idx} className={`flex flex-col items-center text-center ${isEven ? 'lg:flex-col-reverse lg:mt-12' : ''}`}>
                  
                  {/* Title & Desc (Position depends on stagger) */}
                  <div className={`mb-6 ${isEven ? 'lg:mb-0 lg:mt-6' : ''}`}>
                    <h4 className="text-xl font-serif text-[#1a283c] font-bold mb-3">
                      {step.title}
                    </h4>
                    <p className="text-[14px] text-slate-500 leading-relaxed max-w-[250px] mx-auto">
                      {step.description}
                    </p>
                  </div>

                  {/* Circular Frame */}
                  <div className="relative flex justify-center items-center w-36 h-36 rounded-full border-[12px] border-slate-100 bg-white shadow-[inset_0_0_0_2px_rgba(200,200,200,0.2)]">
                    {/* Icon inside */}
                    <div className="text-[#1a283c]">
                      <DynamicIcon name={step.icon} className="w-10 h-10" />
                    </div>

                    {/* Step Number Badge */}
                    <div className={`absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[12px] font-bold text-[#1a283c] shadow-sm
                      ${isEven ? '-bottom-4' : '-top-4'}
                    `}>
                      {step.id}
                    </div>
                  </div>
                  
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
