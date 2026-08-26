"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { DynamicIcon } from "@/components/DynamicIcon";
import { FAQ, ServiceDetail, Props } from "@/lib/types";

export const ServiceDetailClient: React.FC<Props> = ({ slug, data, allServices, contactInfo }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(2); // Default open to the 3rd item as per design

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 10);
    return () => clearTimeout(timer);
  }, [slug]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 lg:gap-12">
        
        {/* Left Sidebar */}
        <div className="flex flex-col gap-8">
          
          {/* All Services Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden border border-gray-200 shadow-sm"
          >
            <div className="p-8 pt-6 pb-8 bg-[#0b1320] text-white">
              <DynamicIcon name="scales" className="w-16 h-16 text-[#d89f4b] mb-4" />
              <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-wide">All Services</h3>
              <div className="w-12 h-[3px] bg-[#d89f4b] mt-5"></div>
            </div>
            <div className="flex flex-col bg-white">
              {allServices.map((service, index) => {
                const isActive = service.link.includes(`/services/${slug}`);
                return (
                  <Link 
                    key={index} 
                    href={service.link}
                    className={`px-8 py-[22px] border-b border-gray-100 flex items-center justify-between 
transition-colors ${
                      isActive ? "bg-[#d89f4b] text-white" : "text-[#0b1320] hover:bg-gray-50"
                    } last:border-b-0`}
                  >
                    <span className="font-medium text-[16px]">{service.title}</span>
                    <DynamicIcon name="arrow-right" className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Solution CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#1a283c] rounded-lg overflow-hidden relative lg:mt-[30px]"
          >
            <div className="p-8 relative z-10 max-w-[90%]">
              <h3 className="font-serif text-[28px] font-bold text-white leading-snug mb-5">
                Get A Free Quick Solution Of Problem
              </h3>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-6"></div>
              <p className="text-slate-300 text-[15px] leading-relaxed mb-12">
                Our experienced attorneys are here to listen and provide the right legal solution for you.
              </p>
              <Link 
                href="/#contact"
                className="inline-flex items-center gap-2 bg-[#d89f4b] hover:bg-[#c48e3a] text-white px-3 py-2.5 font-medium text-sm transition-colors rounded"
              >
                Contact Us
                <DynamicIcon name="arrow-right" className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Spacer to push box height down */}
            <div className="h-[220px] w-full"></div>

            {/* Lawyer Image Overlay */}
            <div className="absolute bottom-0 right-0 w-full h-[360px] flex justify-end pointer-events-none z-0 overflow-visible">
              <div className="relative w-[320px] h-full translate-x-14">
                <Image 
                  src="/Prac_areas/Service_detail/lawyer_crossed_arms.svg" 
                  alt="Lawyer" 
                  fill 
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#fdfbf9] border border-slate-100 rounded-lg p-8 flex flex-col gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f3ede5] flex items-center justify-center shrink-0">
                <DynamicIcon name="phone-call" className="w-4 h-4 text-[#1a283c]" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Call Us</p>
                <p className="font-bold text-[#1a283c]">{contactInfo.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f3ede5] flex items-center justify-center shrink-0">
                <DynamicIcon name="mail" className="w-4 h-4 text-[#1a283c]" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Email Us</p>
                <p className="font-bold text-[#1a283c]">{contactInfo.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f3ede5] flex items-center justify-center shrink-0">
                <DynamicIcon name="map-pin" className="w-4 h-4 text-[#1a283c]" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Office Location</p>
                <p className="font-bold text-[#1a283c] text-sm leading-relaxed max-w-[150px]">{contactInfo.location}</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Main Content Area */}
        <div className="flex flex-col gap-10">
          
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-lg overflow-hidden"
          >
            <Image 
              src={data.heroImage} 
              alt={data.title} 
              fill 
              className="object-cover"
            />
          </motion.div>

          {/* Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c] mb-6">
              {data.title}
            </h1>
            <p className="text-slate-600 leading-relaxed">
              {data.description}
            </p>
          </motion.div>

          {/* Feature Highlight */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-6 pt-6"
          >
            <div className="w-16 h-16 rounded-full bg-[#fdfaf6] border border-[#d89f4b]/20 flex items-center justify-center shrink-0">
              <DynamicIcon name={data.feature.icon} className="w-8 h-8 text-[#d89f4b]" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#d89f4b] mb-3">
                {data.feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {data.feature.description}
              </p>
            </div>
          </motion.div>

          {/* Why Choose Our ProCounsel? */}
          <div className="pt-6">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-2xl font-bold text-[#1a283c] mb-6"
            >
              {data.whyChooseUs.title}
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.whyChooseUs.cards.map((card, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#fdfbf9] border border-slate-100 p-6 rounded-lg flex gap-4 items-start shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-[#f3ede5] flex items-center justify-center shrink-0">
                    <DynamicIcon name={card.icon} className="w-5 h-5 text-[#1a283c]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a283c] text-sm mb-2">{card.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Few Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 items-start pt-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-100"
            >
              <Image 
                src={data.benefits.image} 
                alt="Benefits" 
                fill 
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-2xl font-bold text-[#1a283c] mb-4">
                {data.benefits.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {data.benefits.description}
              </p>
              <ul className="flex flex-col gap-3">
                {data.benefits.list.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#d89f4b] flex items-center justify-center shrink-0">
                      <DynamicIcon name="shield-check" className="w-3 h-3 text-white" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* FAQs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-8 flex flex-col gap-3 w-full"
          >
            {data.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-lg overflow-hidden transition-colors ${isOpen ? "border-[#d89f4b]" : "border-slate-100 bg-[#fdfbf9]"}`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className={`w-full flex items-center justify-between p-5 text-left transition-colors ${isOpen ? "bg-[#d89f4b] text-white" : "text-[#1a283c] hover:bg-slate-50"}`}
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-medium text-sm w-6 shrink-0">0{index + 1}</span>
                      <span className="font-medium text-sm pr-4">{faq.question}</span>
                    </div>
                    {isOpen ? (
                      <span className="text-xl font-light shrink-0">-</span>
                    ) : (
                      <span className="text-xl font-light shrink-0">+</span>
                    )}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#fdfbf9]"
                      >
                        <div className="p-6 pl-[84px] text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </div>
  );
};
