"use client";

import React from "react";
import Image from "next/image";
import { DynamicIcon } from "./DynamicIcon";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface Step {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Banner {
  icon: string;
  textDark: string;
  textGold: string;
  description: string;
  image: string;
}

interface OurApproachData {
  sectionIcon: string;
  sectionTitle: string;
  headingDark: string;
  headingGold: string;
  description: string;
  steps: Step[];
  banner: Banner;
}

interface OurApproachSectionProps {
  data: OurApproachData;
}

export const OurApproachSection: React.FC<OurApproachSectionProps> = ({ data }) => {
  return (
    <section className="bg-white py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="text-[#d89f4b] mb-4">
            <DynamicIcon name={data.sectionIcon} className="w-10 h-10 mx-auto" />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#d89f4b]"></div>
            <span className="text-[13px] font-bold text-[#d89f4b] uppercase tracking-[0.15em]">
              {data.sectionTitle}
            </span>
            <div className="w-12 h-[1px] bg-[#d89f4b]"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#1a283c] mb-6">
            {data.headingDark} <span className="text-[#d89f4b]">{data.headingGold}</span>
          </h2>
          <p className="text-slate-500 text-[15px] max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* Steps Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-4 xl:gap-6 mb-16 w-full"
        >
          {data.steps.map((step, idx) => (
            <React.Fragment key={idx}>
              {/* Step Card */}
              <motion.div variants={itemVariants} className="relative flex-1 bg-white rounded-xl border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] pt-14 pb-8 px-6 flex flex-col items-center text-center w-full max-w-[300px] lg:max-w-none hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-shadow">
                {/* Overlapping Icon Circle */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#fdfaf6] border border-slate-100 shadow-sm flex items-center justify-center">
                  <DynamicIcon name={step.icon} className="w-7 h-7 text-[#1a283c]" />
                </div>
                
                {/* Step Content */}
                <span className="text-[#d89f4b] font-bold text-sm mb-2">{step.id}</span>
                <h4 className="font-serif text-[#1a283c] font-bold text-lg mb-3">{step.title}</h4>
                <div className="w-8 h-[2px] bg-[#d89f4b] mb-4"></div>
                <p className="text-slate-500 text-[13px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Connecting Chevron (Hidden on mobile) */}
              {idx < data.steps.length - 1 && (
                <div className="hidden lg:flex flex-col justify-center h-full mt-16 text-[#d89f4b] px-1 xl:px-2 flex-shrink-0">
                  <DynamicIcon name="chevron-right" className="w-6 h-6" />
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-xl border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row items-center"
        >
          
          {/* Banner Content (Left/Middle) */}
          <div className="flex-1 p-8 md:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Icon & Title */}
            <div className="flex items-center gap-6 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                <DynamicIcon name={data.banner.icon} className="w-8 h-8 text-[#1a283c]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1a283c] leading-tight">
                {data.banner.textDark} <br />
                {data.banner.textGold}
              </h3>
            </div>

            {/* Vertical Divider (Hidden on mobile) */}
            <div className="hidden lg:block w-[2px] h-16 bg-[#d89f4b]/30 self-center"></div>

            {/* Description */}
            <p className="text-slate-500 text-[15px] leading-relaxed text-center lg:text-left self-center">
              {data.banner.description}
            </p>
          </div>

          {/* Banner Image (Right) */}
          <div className="w-full md:w-[350px] lg:w-[450px] h-[250px] md:h-auto relative flex-shrink-0">
            <Image 
              src={data.banner.image} 
              alt="Banner Image" 
              fill 
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
