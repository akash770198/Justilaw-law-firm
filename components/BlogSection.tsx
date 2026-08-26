"use client";

import React from "react";
import Image from "next/image";
import { DynamicIcon } from "@/components/DynamicIcon";
import { motion } from "framer-motion";
import { site, ServiceBlogData, SectionProps } from "@/data";

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
export const BlogSection: React.FC<SectionProps<ServiceBlogData>> = ({ data: customData, className }) => {
  const data = customData || site.blog;
  return (
    <section className={`w-full bg-[#f8f6f2] py-16 lg:py-20 ${className || ""}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-[#d89f4b] mb-4">
            <DynamicIcon name={data.taglineIcon} className="w-5 h-5" />
            <h3 className="font-bold text-[13px] tracking-widest uppercase">{data.tagline}</h3>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.15] tracking-tight mb-6">
            <div className="text-[#111827] mb-2">{data.headingDark}</div>
            <div className="text-[#d89f4b] relative inline-block">
              {data.headingGold}
              <div className="flex items-center justify-center gap-3 mt-5">
                <div className="h-[1px] w-12 bg-[#d89f4b]" />
                <DynamicIcon name={data.headingIcon} className="w-6 h-6 text-[#d89f4b]" />
                <div className="h-[1px] w-12 bg-[#d89f4b]" />
              </div>
            </div>
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed text-center max-w-2xl mx-auto font-medium mt-6">
            {data.description}
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
        >
          {data.items.map((item) => (
            <motion.div
              variants={itemVariants}
              key={item.id}
              className="group flex flex-col bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] rounded-md overflow-hidden hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 relative"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Category Badge */}
                <div className="absolute top-5 left-5 bg-[#0b1320] text-white flex items-center gap-2 px-3 py-1.5 rounded shadow-lg text-[11px] font-bold tracking-widest uppercase z-10">
                  <DynamicIcon name={item.categoryIcon} className="w-3.5 h-3.5 text-[#d89f4b]" />
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="pt-10 pb-6 px-6 sm:px-8 flex flex-col flex-grow bg-white relative z-0">
                {/* Date Badge (Moved out of Image Container) */}
                <div className="absolute -top-5 left-6 bg-[#d89f4b] text-white flex items-center gap-2 px-4 py-2 rounded shadow-lg text-[13px] font-bold z-20">
                  <DynamicIcon name={item.dateIcon} className="w-4 h-4" />
                  {item.date}
                </div>

                <h4 className="font-serif font-bold text-[#111827] text-[22px] sm:text-[24px] leading-[1.3] mb-4 hover:text-[#d89f4b] transition-colors cursor-pointer">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-slate-100 mb-6" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 relative rounded-full overflow-hidden border border-slate-200">
                      <Image
                        src={item.author.avatar}
                        alt={item.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-[#111827] font-bold text-[14px] mb-0.5">{item.author.name}</div>
                      <div className="text-slate-500 text-[13px]">{item.author.role}</div>
                    </div>
                  </div>

                  <a
                    href={item.link}
                    className="flex items-center gap-1.5 text-[#d89f4b] font-bold text-[14px] hover:text-[#c48d3e] transition-colors group/link"
                  >
                    Read More
                    <DynamicIcon
                      name="arrow-right"
                      className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <div className="flex justify-center">
          <a
            href={data.button.href}
            className="inline-flex items-center justify-center gap-2 bg-[#0b1320] text-[#d89f4b] font-bold text-[13px] tracking-widest uppercase px-8 py-4 rounded hover:bg-[#152336] transition-colors duration-300 group"
          >
            {data.button.text}
            <DynamicIcon
              name={data.button.icon}
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
