"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { motion } from "framer-motion";
import { CaseStudyDetailData } from "@/lib/types";

export const CaseStudyDetailClient: React.FC<{ data: CaseStudyDetailData }> = ({ data }) => {
  return (
    <div className="w-full bg-white">
      
      {/* 1. Hero Feature Card Section */}
      <section className="pt-12 sm:pt-16 pb-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-2xl overflow-hidden shadow-2xl bg-[#0b1320] border border-slate-800 grid grid-cols-1 lg:grid-cols-2"
          >
            {/* Left Image */}
            <div className="relative w-full min-h-[360px] sm:min-h-[420px] lg:min-h-full">
              <Image 
                src={data.image || "/Case_study/case-study-gavel-high-quality.svg"} 
                alt={data.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Dark Navy Block */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#0b1320]">
              <div>
                {/* Tagline */}
                <div className="flex items-center gap-2 text-[#d89f4b] mb-4">
                  <DynamicIcon name={data.taglineIcon || "gavel"} className="w-5 h-5" />
                  <h3 className="font-bold text-[13px] tracking-widest uppercase">
                    {data.tagline || "CASE STUDY"}
                  </h3>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.2] tracking-tight text-white mb-4">
                  {data.title}
                </h1>

                {/* Gold Accent Bar */}
                <div className="w-12 h-0.5 bg-[#d89f4b] mb-6"></div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
                  {data.heroDescription}
                </p>
              </div>

              {/* Bottom Meta Row */}
              <div className="border-t border-slate-800 pt-6 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Date */}
                <div className="flex items-center gap-3">
                  <DynamicIcon name="calendar" className="w-7 h-7 text-[#d89f4b] flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">{data.meta?.date || "23 Jan, 2026"}</div>
                    <div className="text-xs text-slate-400">Date</div>
                  </div>
                </div>

                {/* Client */}
                <div className="flex items-center gap-3">
                  <DynamicIcon name="user" className="w-7 h-7 text-[#d89f4b] flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">{data.meta?.client || "Mr. LexVersa"}</div>
                    <div className="text-xs text-slate-400">Client</div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3">
                  <DynamicIcon name="check-circle" className="w-7 h-7 text-[#d89f4b] flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">{data.meta?.status || "Completed"}</div>
                    <div className="text-xs text-slate-400">Status</div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content & Sidebar Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          
          {/* Left Sidebar Column */}
          <aside className="w-full lg:w-[360px] flex-shrink-0 space-y-8">
            
            {/* Project Details Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-slate-100"
            >
              <h3 className="font-serif text-2xl font-bold text-[#1a283c] mb-2">
                {data.projectDetails?.title || "Project Details"}
              </h3>
              <div className="w-10 h-0.5 bg-[#d89f4b] mb-6"></div>

              {/* Details List */}
              <div className="space-y-6">
                
                {/* Client */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#faf6ee] text-[#d89f4b] flex items-center justify-center flex-shrink-0">
                    <DynamicIcon name="user" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">Client</div>
                    <div className="text-sm font-bold text-[#1a283c]">{data.projectDetails?.client}</div>
                  </div>
                </div>

                {/* Category */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#faf6ee] text-[#d89f4b] flex items-center justify-center flex-shrink-0">
                    <DynamicIcon name="tag" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">Category</div>
                    <div className="text-sm font-bold text-[#1a283c]">{data.projectDetails?.category}</div>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#faf6ee] text-[#d89f4b] flex items-center justify-center flex-shrink-0">
                    <DynamicIcon name="calendar" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">Date</div>
                    <div className="text-sm font-bold text-[#1a283c]">{data.projectDetails?.date}</div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#faf6ee] text-[#d89f4b] flex items-center justify-center flex-shrink-0">
                    <DynamicIcon name="file-check" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">Status</div>
                    <div className="text-sm font-bold text-green-600">{data.projectDetails?.status}</div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#faf6ee] text-[#d89f4b] flex items-center justify-center flex-shrink-0">
                    <DynamicIcon name="map-pin" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">Address</div>
                    <div className="text-sm font-bold text-[#1a283c]">{data.projectDetails?.address}</div>
                  </div>
                </div>

              </div>

              {/* Share Case Study */}
              <div className="border-t border-slate-100 pt-6 mt-8">
                <h4 className="font-bold text-sm text-[#1a283c] mb-3">
                  {data.projectDetails?.shareText || "Share Case Study"}
                </h4>
                <div className="flex items-center gap-2">
                  {data.projectDetails?.socials?.map((social, idx) => (
                    <Link
                      key={idx}
                      href={social.url || "#"}
                      aria-label={`Share on ${social.name}`}
                      className="w-9 h-9 rounded bg-[#b88646] hover:bg-[#9e6f33] text-white flex items-center justify-center transition-colors shadow-sm"
                    >
                      <DynamicIcon name={social.icon} className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>

            </motion.div>

            {/* CTA Dark Box */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-[#0c1626] rounded-2xl p-8 text-white overflow-hidden shadow-xl border border-slate-800"
            >
              {/* Background Image: weighing_scale.svg covered with current blue filter */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <Image 
                  src="/weighing_scale.svg" 
                  alt="Weighing Scale Background" 
                  fill 
                  className="object-cover object-right-bottom opacity-40 filter contrast-125 brightness-110"
                />
                <div className="absolute inset-0 bg-[#0c1626]/60 mix-blend-multiply"></div>
              </div>

              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold leading-tight mb-2">
                  {data.ctaBox?.title || "Have a Similar Legal Challenge?"}
                </h3>
                <div className="w-10 h-0.5 bg-[#d89f4b] mb-4"></div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {data.ctaBox?.description || "Our experienced legal team is here to help you achieve the best possible outcome."}
                </p>
                <Link
                  href={data.ctaBox?.buttonHref || "/contact"}
                  className="inline-flex items-center justify-center gap-2 bg-[#d89f4b] hover:bg-[#c48d3e] text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-all shadow-md group"
                >
                  <span>{data.ctaBox?.buttonText || "Contact Our Expert"}</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>

          </aside>

          {/* Right Main Content Column */}
          <main className="flex-1 space-y-12">
            
            {/* 1. Case Overview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c] mb-4">
                {data.caseOverview?.title || "Case Overview"}
              </h2>
              <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed mb-8">
                {data.caseOverview?.description}
              </p>
              <div className="w-full h-px bg-slate-100"></div>
            </motion.div>

            {/* 2. Practice Area */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c] mb-2">
                {data.practiceArea?.title || "Practice Area"}
              </h2>
              <div className="w-12 h-0.5 bg-[#d89f4b] mb-6"></div>

              {/* Subheading with circular icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#faf5ee] border border-[#e8dfd0] flex items-center justify-center text-[#d89f4b] flex-shrink-0">
                  <DynamicIcon name={data.practiceArea?.icon || "gavel"} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a283c]">
                    {data.practiceArea?.subtitle}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                    {data.practiceArea?.description}
                  </p>
                </div>
              </div>

              {/* 10-Item 2-Column Checklist Box */}
              <div className="bg-[#fcfaf6] rounded-xl p-6 sm:p-8 border border-[#f0eae0] mt-6 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
                  {data.practiceArea?.checklist?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <DynamicIcon name="check-circle" className="w-5 h-5 text-[#b88646] flex-shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {data.practiceArea?.followUp}
              </p>
            </motion.div>

            {/* 3. Case Outcome */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c] mb-2">
                {data.caseOutcome?.title || "Case Outcome"}
              </h2>
              <div className="w-12 h-0.5 bg-[#d89f4b] mb-6"></div>

              {/* Subheading with circular scales icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#faf5ee] border border-[#e8dfd0] flex items-center justify-center text-[#d89f4b] flex-shrink-0">
                  <DynamicIcon name={data.caseOutcome?.icon || "scales"} className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a283c]">
                    {data.caseOutcome?.subtitle}
                  </h3>
                  <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                    {data.caseOutcome?.paragraphs?.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote Callout Box */}
              <div className="bg-[#fcfaf6] rounded-xl p-6 sm:p-8 border border-[#f0eae0] mt-8 flex items-start gap-4">
                <DynamicIcon name="quote" className="w-10 h-10 text-[#d89f4b] flex-shrink-0 mt-1" />
                <blockquote className="font-serif text-base sm:text-lg italic text-slate-800 leading-relaxed">
                  {data.caseOutcome?.quote}
                </blockquote>
              </div>

            </motion.div>

          </main>

        </div>
      </section>

    </div>
  );
};
