"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/DynamicIcon";
import { BookConsultationPageData } from "@/lib/types";

export default function BookConsultationClient({ data }: { data: BookConsultationPageData }) {
  return (
    <div className="w-full bg-[#fdfdfd] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Form) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col">
            
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-[#d89f4b] font-bold text-sm tracking-widest uppercase mb-4">
                <DynamicIcon name="calendar-clock" className="w-5 h-5" />
                {data.header.subtitle}
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif lg:text-[56px] font-bold text-[#1a283c] leading-[1.1] mb-5">
                <span className="block mb-1">{data.header.titleDark}</span>
                <span className="text-[#d89f4b]">{data.header.titleGold}</span>
              </h2>
              <div className="w-16 h-1 bg-[#d89f4b] mb-6"></div>
              <p className="text-slate-500 text-base leading-relaxed">
                {data.header.description}
              </p>
            </div>

            {/* Form Box */}
            <div className="bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-sm p-6 sm:p-8">
              <h3 className="font-bold text-[#1a283c] text-lg mb-6">{data.form.title}</h3>
              
              <form className="flex flex-col gap-4">
                
                {/* Full Name */}
                <div className="flex items-stretch border border-slate-200 rounded-sm overflow-hidden h-12 focus-within:border-[#d89f4b] transition-colors">
                  <div className="w-12 bg-slate-50 flex items-center justify-center shrink-0 border-r border-slate-200 text-[#d89f4b]">
                    <DynamicIcon name="user" className="w-5 h-5" />
                  </div>
                  <input type="text" placeholder={data.form.fields.fullName.placeholder} className="flex-1 bg-white px-4 text-sm focus:outline-none text-slate-700" required />
                </div>

                {/* Email Address */}
                <div className="flex items-stretch border border-slate-200 rounded-sm overflow-hidden h-12 focus-within:border-[#d89f4b] transition-colors">
                  <div className="w-12 bg-slate-50 flex items-center justify-center shrink-0 border-r border-slate-200 text-[#d89f4b]">
                    <DynamicIcon name="mail" className="w-5 h-5" />
                  </div>
                  <input type="email" placeholder={data.form.fields.email.placeholder} className="flex-1 bg-white px-4 text-sm focus:outline-none text-slate-700" required />
                </div>

                {/* Phone Number */}
                <div className="flex items-stretch border border-slate-200 rounded-sm overflow-hidden h-12 focus-within:border-[#d89f4b] transition-colors">
                  <div className="w-12 bg-slate-50 flex items-center justify-center shrink-0 border-r border-slate-200 text-[#d89f4b]">
                    <DynamicIcon name="phone" className="w-5 h-5" />
                  </div>
                  <input type="tel" placeholder={data.form.fields.phone.placeholder} className="flex-1 bg-white px-4 text-sm focus:outline-none text-slate-700" required />
                </div>

                {/* Area of Practice */}
                <div className="flex items-stretch border border-slate-200 rounded-sm overflow-hidden h-12 focus-within:border-[#d89f4b] transition-colors">
                  <div className="w-12 bg-slate-50 flex items-center justify-center shrink-0 border-r border-slate-200 text-[#d89f4b]">
                    <DynamicIcon name="briefcase" className="w-5 h-5" />
                  </div>
                  <select className="flex-1 bg-white px-4 text-sm focus:outline-none text-slate-500 appearance-none cursor-pointer" required defaultValue="">
                    <option value="" disabled hidden>{data.form.fields.practiceArea.placeholder}</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="family">Family Law</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="civil">Civil Litigation</option>
                    <option value="other">Other</option>
                  </select>
                  {/* Custom Arrow */}
                  <div className="absolute right-10 flex items-center h-12 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-stretch border border-slate-200 rounded-sm overflow-hidden h-12 focus-within:border-[#d89f4b] transition-colors">
                  <div className="w-12 bg-slate-50 flex items-center justify-center shrink-0 border-r border-slate-200 text-[#d89f4b]">
                    <DynamicIcon name="calendar" className="w-5 h-5" />
                  </div>
                  <input type="date" className="flex-1 bg-white px-4 text-sm focus:outline-none text-slate-500" required />
                </div>

                {/* Time */}
                <div className="flex items-stretch border border-slate-200 rounded-sm overflow-hidden h-12 focus-within:border-[#d89f4b] transition-colors">
                  <div className="w-12 bg-slate-50 flex items-center justify-center shrink-0 border-r border-slate-200 text-[#d89f4b]">
                    <DynamicIcon name="clock" className="w-5 h-5" />
                  </div>
                  <select className="flex-1 bg-white px-4 text-sm focus:outline-none text-slate-500 appearance-none cursor-pointer" required defaultValue="">
                    <option value="" disabled hidden>{data.form.fields.time.placeholder}</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 7 PM)</option>
                  </select>
                  <div className="absolute right-10 flex items-center h-12 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>

                {/* Case Brief */}
                <div className="flex items-stretch border border-slate-200 rounded-sm overflow-hidden focus-within:border-[#d89f4b] transition-colors">
                  <div className="w-12 bg-slate-50 flex items-start pt-3 justify-center shrink-0 border-r border-slate-200 text-[#d89f4b]">
                    <DynamicIcon name="file-text" className="w-5 h-5" />
                  </div>
                  <textarea placeholder={data.form.fields.caseBrief.placeholder} rows={4} className="flex-1 bg-white p-4 text-sm focus:outline-none text-slate-700 resize-y min-h-[100px]" required></textarea>
                </div>

                {/* Submit */}
                <button type="submit" className="w-full mt-2 h-14 bg-[#0b1320] text-white font-bold text-sm tracking-widest uppercase rounded-sm flex items-center justify-center gap-3 hover:bg-[#152336] transition-colors group">
                  {data.form.submitText}
                  <DynamicIcon name="arrow-right" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secure Note */}
                <div className="flex items-center justify-center gap-2 mt-3 text-slate-400">
                  <DynamicIcon name="lock" className="w-4 h-4" />
                  <span className="text-xs font-medium">{data.form.secureText}</span>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column (Image & Info Box) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col">
            
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[240px] sm:h-[300px] lg:h-[360px] rounded-sm overflow-hidden shadow-lg border border-slate-100"
            >
              <Image 
                src="/law_firm_reception.svg" // Using reception as a fallback since legal_advice.jpg might not exist
                alt="Legal Advice" 
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Info Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0b1320] rounded-sm p-8 mt-6 shadow-[6px_6px_0px_0px_#d89f4b]"
            >
              <div className="flex flex-col gap-8">
                {data.infoSection.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-[#d89f4b]/5 border border-[#d89f4b]/20 flex items-center justify-center shrink-0">
                      <DynamicIcon name={benefit.icon} className="w-6 h-6 text-[#d89f4b]" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-white font-bold text-base mb-1">{benefit.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
}
