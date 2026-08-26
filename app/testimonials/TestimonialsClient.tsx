"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { DynamicIcon } from "@/components/DynamicIcon";
import { TestimonialsPageData } from "@/lib/types";


// Testimonial
export const TestimonialsClientComponent: React.FC<{ data: TestimonialsPageData }> = ({ data }) => {
  const [activeFilter, setActiveFilter] = useState("All Testimonials");

  const filteredTestimonials = activeFilter === "All Testimonials" 
    ? data.items 
    : data.items.filter(item => item.category === activeFilter);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      
      {/* Header text */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c] mb-4"
        >
          {data.header.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 text-base sm:text-lg leading-relaxed"
        >
          {data.header.subtitle}
        </motion.p>
      </div>

      {/* Categories Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16"
      >
        {data.categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2.5 rounded text-sm sm:text-base font-semibold transition-all duration-300 border ${
              activeFilter === category
                ? "bg-[#d89f4b] border-[#d89f4b] text-white shadow-md shadow-[#d89f4b]/20"
                : "bg-white border-slate-200 text-slate-600 hover:border-[#d89f4b] hover:text-[#d89f4b]"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredTestimonials.map((testimonial, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              key={testimonial.id}
              className="bg-white border border-slate-100 rounded-xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:border-[#d89f4b]/30 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Quote Icon */}
              <div className="text-[#d89f4b] mb-6">
                <DynamicIcon name="quote" className="w-10 h-10 opacity-80" />
              </div>

              {/* Quote Text */}
              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed flex-grow mb-8">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-slate-100 mb-6 group-hover:bg-[#d89f4b]/20 transition-colors"></div>

              {/* Author Profile */}
              <div className="flex items-center gap-4">
                {/* Image (Circular) */}
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 group-hover:border-[#d89f4b]/30 transition-colors relative bg-slate-50">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Name, Role & Stars */}
                <div className="flex flex-col">
                  <h4 className="font-serif font-bold text-[#1a283c] text-lg leading-tight mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm mb-2">
                    {testimonial.role}
                  </p>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#d89f4b]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <DynamicIcon key={i} name="star" className="w-3.5 h-3.5" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Empty State Fallback */}
      {filteredTestimonials.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full py-20 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 text-slate-400 mb-4">
            <DynamicIcon name="quote" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-700 mb-2">No testimonials found</h3>
          <p className="text-slate-500">There are currently no testimonials in this category.</p>
        </motion.div>
      )}

    </div>
  );
};
