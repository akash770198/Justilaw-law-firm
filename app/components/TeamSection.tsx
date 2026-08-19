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
    transition: { duration: 0.6 },
  },
};

interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
}

interface TeamData {
  tagline: string;
  headingDark: string;
  headingGold: string;
  description: string;
  members: TeamMember[];
  button: {
    text: string;
    href: string;
    icon: string;
  };
}

export const TeamSection: React.FC<{ data: TeamData; hideButton?: boolean }> = ({ data, hideButton }) => {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 text-[#d89f4b] mb-4">
            <div className="h-[1px] w-10 bg-[#d89f4b]" />
            <h3 className="font-bold text-[13px] tracking-widest uppercase">{data.tagline}</h3>
            <div className="h-[1px] w-10 bg-[#d89f4b]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight mb-6">
            <div className="text-[#111827] mb-2">{data.headingDark}</div>
            <div className="text-[#d89f4b] relative inline-block">
              {data.headingGold}
              <div className="h-[2px] w-12 bg-[#d89f4b] mx-auto mt-4" />
            </div>
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed text-center max-w-2xl mx-auto font-medium">
            {data.description}
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10"
        >
          {data.members.map((member) => (
            <motion.div variants={itemVariants} key={member.id} className="group flex flex-col bg-white border border-slate-100 shadow-sm rounded-md overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] bg-slate-100 overflow-hidden">
                <Image
                  src={member.image.src}
                  alt={member.image.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-[#faf9f7]">
                <h4 className="font-serif font-bold text-[#111827] text-xl sm:text-[22px] mb-2">
                  {member.name}
                </h4>
                <div className="text-[#d89f4b] text-[13px] font-bold tracking-widest uppercase mb-4">
                  {member.title}
                </div>
                <div className="w-8 h-[2px] bg-[#d89f4b] mb-5" />
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        {!hideButton && data.button && (
          <div className="flex justify-center">
            <a
              href={data.button.href}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#d89f4b] bg-white text-[#d89f4b] font-bold text-[13px] tracking-widest uppercase px-8 py-4 hover:bg-[#d89f4b] hover:text-white transition-colors duration-300 group"
            >
              {data.button.text}
              <DynamicIcon name={data.button.icon} className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
