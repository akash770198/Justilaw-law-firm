"use client";

import React from "react";
import Link from "next/link";
import { CareerPageData } from "@/lib/types";
import { DynamicIcon } from "@/components/DynamicIcon";

export default function CareerClient({ data }: { data: CareerPageData }) {
  return (
    <div className="w-full bg-[#fdfdfd] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c] mb-4">
            {data.header.titleDark} <span className="text-[#d89f4b]">{data.header.titleGold}</span> {data.header.titleSuffix}
          </h2>
          <div className="w-20 h-0.5 bg-[#d89f4b] mb-6"></div>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
            {data.header.description}
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {data.jobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-white border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-sm relative group overflow-hidden flex flex-col hover:border-[#d89f4b]/30 transition-colors"
            >
              
              {/* Top Section */}
              <div className="p-8 sm:p-10 pb-6 relative">
                
                {/* Decorative Top Left Banner */}
                <div className="absolute top-0 left-6 sm:left-10 w-[72px] h-[92px] bg-[#0b1320] flex items-center justify-center rounded-b-sm z-10 shadow-lg">
                   <div className="absolute -left-[6px] top-0 w-0 h-0 border-t-[6px] border-t-transparent border-r-[6px] border-r-[#050a11]"></div>
                   <DynamicIcon name="scales" className="w-10 h-10 text-[#d89f4b]" />
                   {/* Pointed bottom effect for ribbon */}
                   <div className="absolute -bottom-3 left-0 w-full flex">
                      <div className="w-1/2 h-3 bg-[#0b1320]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}></div>
                      <div className="w-1/2 h-3 bg-[#0b1320]" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}></div>
                   </div>
                </div>

                {/* Bookmark Icon */}
                <div className="absolute top-8 right-8 sm:right-10 text-slate-300 group-hover:text-[#d89f4b] transition-colors cursor-pointer">
                  <DynamicIcon name="bookmark" className="w-6 h-6" />
                </div>

                {/* Title & Badge */}
                <div className="pl-[92px] sm:pl-[104px]">
                  <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-[#1a283c] mb-2 pr-8 leading-tight">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[#d89f4b] font-bold text-sm tracking-wide">
                      {job.type}
                    </span>
                  </div>
                  
                  {/* Department & Verification */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-slate-500 text-sm">
                    <span>{job.department}</span>
                    <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                      <div className="w-4 h-4 rounded-full border border-[#d89f4b] flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-[#d89f4b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      Verified Opportunity
                    </div>
                  </div>
                </div>
              </div>

              {/* Metadata Grid */}
              <div className="px-8 sm:px-10 pb-8 mt-auto">
                <div className="border-t border-slate-100 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    
                    {/* Location */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#fdfaf5] flex items-center justify-center flex-shrink-0 text-[#d89f4b]">
                        <DynamicIcon name="map-pin" className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Location:</p>
                        <p className="text-sm font-bold text-[#1a283c]">{job.location}</p>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#fdfaf5] flex items-center justify-center flex-shrink-0 text-[#d89f4b]">
                        <DynamicIcon name="briefcase" className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Experience:</p>
                        <p className="text-sm font-bold text-[#1a283c]">{job.experience}</p>
                      </div>
                    </div>

                    {/* Salary */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#fdfaf5] flex items-center justify-center flex-shrink-0 text-[#d89f4b]">
                        <DynamicIcon name="wallet" className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Salary:</p>
                        <p className="text-sm font-bold text-[#1a283c]">{job.salary}</p>
                      </div>
                    </div>

                    {/* Deadline */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#fdfaf5] flex items-center justify-center flex-shrink-0 text-[#d89f4b]">
                        <DynamicIcon name="calendar" className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Deadline:</p>
                        <p className="text-sm font-bold text-[#1a283c]">{job.deadline}</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Apply Button */}
                <div className="mt-8">
                  <Link 
                    href={`/career/${job.id}`}
                    className="inline-flex items-center text-[#d89f4b] font-bold text-sm tracking-widest uppercase hover:text-[#c48d3e] transition-colors group/btn"
                  >
                    Apply Now 
                    <span className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
