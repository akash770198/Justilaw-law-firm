"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { motion } from "framer-motion";
import { EventDetailData } from "@/lib/types";

export const EventDetailClient: React.FC<{ data: EventDetailData }> = ({ data }) => {
  return (
    <section className="w-full bg-[#fdfdfd] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Header Area */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="text-[#d89f4b] font-bold text-xs sm:text-[13px] tracking-widest uppercase mb-4 block">
                {data.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c] leading-[1.15] mb-4">
                {data.title}
              </h1>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-6"></div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a283c] font-bold mb-4">
                {data.subtitle}
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed max-w-3xl">
                {data.description}
              </p>
            </motion.div>

            {/* Info Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-between border-y border-slate-200 py-6"
            >
              {data.infoBar?.map((info, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded flex items-center justify-center bg-[#faf5ee]">
                    <DynamicIcon name={info.icon} className="w-5 h-5 text-[#d89f4b]" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#1a283c] text-[15px] mb-1">{info.title}</span>
                    <span className="block text-slate-500 text-[13px] whitespace-pre-wrap">{info.sub}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              className="w-full aspect-[16/9] relative rounded-md overflow-hidden"
            >
              <Image src={data.heroImage?.src} alt={data.heroImage?.alt} fill className="object-cover" priority />
            </motion.div>

            {/* About the Event */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="font-serif text-2xl font-bold text-[#1a283c] mb-4">{data.about?.title}</h3>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-6"></div>
              <p className="text-slate-600 text-[15px] leading-relaxed">{data.about?.text}</p>
            </motion.div>

            {/* Key Topics */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="font-serif text-2xl font-bold text-[#1a283c] mb-4">{data.keyTopics?.title}</h3>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-6"></div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {data.keyTopics?.items?.map((topic, idx) => (
                  <div key={idx} className="border border-slate-200 rounded p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-[#d89f4b] transition-colors">
                    <DynamicIcon name={topic.icon} className="w-8 h-8 text-[#d89f4b]" />
                    <span className="text-[13px] font-bold text-[#1a283c] leading-snug">{topic.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Who Should Attend */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="font-serif text-2xl font-bold text-[#1a283c] mb-4">{data.whoShouldAttend?.title}</h3>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-6"></div>
              <div className="flex flex-wrap gap-4">
                {data.whoShouldAttend?.items?.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-2.5 px-4 border border-slate-200 rounded text-[13px] font-bold text-[#1a283c] hover:border-[#d89f4b] hover:text-[#d89f4b] transition-colors">
                    <DynamicIcon name={item.icon} className="w-4 h-4 text-slate-400" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Agenda Highlights */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="font-serif text-2xl font-bold text-[#1a283c] mb-4">{data.agenda?.title}</h3>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-6"></div>
              <div className="border border-slate-200 rounded divide-y divide-slate-200">
                {data.agenda?.items?.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center py-4 px-6 hover:bg-slate-50 transition-colors">
                    <div className="sm:w-1/3 text-[14px] font-bold text-[#1a283c] mb-2 sm:mb-0">
                      {item.time}
                    </div>
                    <div className="sm:w-2/3 text-[14px] text-slate-600">
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Event Details Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="bg-[#0c1626] rounded p-8 text-white"
            >
              <h3 className="font-serif text-2xl font-bold mb-4">{data.sidebar?.detailsBox?.title}</h3>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-8"></div>
              <div className="flex flex-col gap-6">
                {data.sidebar?.detailsBox?.items?.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 shrink-0 rounded border border-white/10 flex items-center justify-center bg-white/5">
                      <DynamicIcon name={item.icon} className="w-4 h-4 text-[#d89f4b]" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[12px] font-medium text-slate-400 mb-1">{item.label}</span>
                      <span className="text-[14px] font-bold whitespace-pre-wrap leading-relaxed">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Register Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="border border-slate-200 rounded p-8 bg-white"
            >
              <h3 className="font-serif text-2xl font-bold text-[#1a283c] mb-4">{data.sidebar?.registerBox?.title}</h3>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-6"></div>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-[#1a283c]">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter your full name" className="w-full border border-slate-200 rounded px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#d89f4b]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-[#1a283c]">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="Enter your email address" className="w-full border border-slate-200 rounded px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#d89f4b]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-[#1a283c]">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full border border-slate-200 rounded px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#d89f4b]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-[#1a283c]">Company / Organization <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter your company name" className="w-full border border-slate-200 rounded px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#d89f4b]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-[#1a283c]">Designation <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter your designation" className="w-full border border-slate-200 rounded px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#d89f4b]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-[#1a283c]">Number of Attendees <span className="text-red-500">*</span></label>
                  <select className="w-full border border-slate-200 rounded px-4 py-2.5 text-[13px] bg-white focus:outline-none focus:border-[#d89f4b]">
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3+">3+</option>
                  </select>
                </div>
                <div className="flex items-start gap-3 mt-2 mb-4">
                  <input type="checkbox" id="updates" className="mt-1 w-4 h-4 accent-[#d89f4b]" />
                  <label htmlFor="updates" className="text-[12px] text-slate-500 leading-snug">
                    I agree to receive event updates and communications.
                  </label>
                </div>
                <button type="button" className="w-full bg-[#c8923a] hover:bg-[#b07d2c] text-white py-3.5 rounded font-bold text-[13px] transition-colors flex items-center justify-center gap-2">
                  <span>Register Now</span>
                  <DynamicIcon name="arrow-right" className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Why Attend Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="border border-slate-200 rounded p-8 bg-white"
            >
              <h3 className="font-serif text-2xl font-bold text-[#1a283c] mb-4">{data.sidebar?.whyAttendBox?.title}</h3>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-6"></div>
              <ul className="flex flex-col gap-4">
                {data.sidebar?.whyAttendBox?.items?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <DynamicIcon name="check-circle" className="w-5 h-5 text-[#d89f4b] shrink-0 mt-0.5" />
                    <span className="text-[14px] text-slate-600 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* More Info Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="border border-slate-200 rounded p-8 bg-[#faf5ee]"
            >
              <h3 className="font-serif text-xl font-bold text-[#1a283c] mb-3">{data.sidebar?.moreInfoBox?.title}</h3>
              <div className="w-10 h-[2px] bg-[#d89f4b] mb-5"></div>
              <p className="text-[14px] text-slate-600 mb-6 leading-relaxed">{data.sidebar?.moreInfoBox?.text}</p>
              <Link 
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 border border-[#d89f4b] rounded text-[#d89f4b] font-bold text-[12px] uppercase tracking-widest hover:bg-[#d89f4b] hover:text-white transition-all"
              >
                <span>Contact Us</span>
                <DynamicIcon name="arrow-right" className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
