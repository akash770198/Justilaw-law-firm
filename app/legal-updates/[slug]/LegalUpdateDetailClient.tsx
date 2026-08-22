"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { motion } from "framer-motion";

export const LegalUpdateDetailClient: React.FC<{ data: any, slug: string }> = ({ data, slug }) => {
  const { content, sidebar } = data;

  return (
    <section className="w-full bg-[#fdfdfd] py-16 sm:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Main Content (Left) */}
          <article className="flex-1 w-full flex flex-col">
            
            {/* Category */}
            <div className="text-[#d89f4b] text-[11px] font-bold tracking-wider uppercase mb-4">
              {content.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c] leading-[1.2] mb-6">
              {content.title}
            </h1>

            {/* Top Description */}
            <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-6">
              {content.description}
            </p>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-slate-500 font-medium mb-10 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <DynamicIcon name="calendar" className="w-4 h-4 text-[#d89f4b]" />
                <span>{content.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <DynamicIcon name="user" className="w-4 h-4 text-[#d89f4b]" />
                <span>{content.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <DynamicIcon name="clock" className="w-4 h-4 text-[#d89f4b]" />
                <span>{content.readTime}</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden mb-10">
              <Image 
                src={content.image || "/Case_study/case-study-gavel-high-quality.svg"} 
                alt={content.title} 
                fill 
                className="object-cover"
                priority 
              />
            </div>

            {/* Body Text */}
            <div className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-12">
              <p>{content.body}</p>
            </div>

            {/* Sections (Numbered List) */}
            <div className="flex flex-col gap-6">
              {content.sections?.map((section: any, idx: number) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                  {/* Number Badge */}
                  <div className="w-14 h-14 shrink-0 rounded flex items-center justify-center bg-[#faf5ee] text-[#d89f4b] font-serif text-xl font-bold shadow-sm">
                    {section.id}
                  </div>
                  
                  {/* Section Content */}
                  <div className="flex flex-col flex-1 pt-1">
                    <h3 className="font-serif text-2xl font-bold text-[#1a283c] mb-3">
                      {section.title}
                    </h3>
                    
                    {section.description && (
                      <p className="text-slate-600 text-[15px] leading-relaxed">
                        {section.description}
                      </p>
                    )}
                    
                    {section.bullets && (
                      <ul className="flex flex-col gap-3 mt-1">
                        {section.bullets.map((bullet: any, bIdx: number) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#d89f4b] mt-2 shrink-0"></div>
                            <p className="text-slate-600 text-[15px] leading-relaxed">
                              <strong className="text-[#1a283c] font-semibold">{bullet.label}:</strong> {bullet.text}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
          </article>


          {/* Sidebar (Right) */}
          <aside className="w-full lg:w-[360px] shrink-0 flex flex-col gap-8">
            
            {/* Related Posts Widget */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#1a283c] mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#d89f4b]">
                {sidebar.relatedPosts.title}
              </h3>
              
              <div className="flex flex-col gap-6">
                {sidebar.relatedPosts.items.map((post: any, idx: number) => (
                  <Link href={post.href} key={idx} className="flex items-center gap-4 group">
                    <div className="relative w-20 h-20 shrink-0 rounded overflow-hidden">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h4 className="text-[#1a283c] font-bold text-sm leading-snug mb-2 group-hover:text-[#d89f4b] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <span className="text-slate-400 text-[11px] font-medium tracking-wide">
                        {post.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <Link 
                href={sidebar.relatedPosts.button.href}
                className="w-full mt-8 flex items-center justify-center gap-2 py-3.5 bg-slate-50 hover:bg-slate-100 text-[#1a283c] font-bold text-[13px] uppercase tracking-wide rounded border border-slate-100 transition-colors group/btn"
              >
                <span>{sidebar.relatedPosts.button.text}</span>
                <DynamicIcon name="arrow-right" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Need Help Widget */}
            <div className="bg-[#faf7f2] border border-[#f0eadd] rounded-lg p-8 sm:p-10 flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#0c1626] text-[#d89f4b] flex items-center justify-center mb-6 shadow-md">
                <DynamicIcon name={sidebar.helpWidget.icon} className="w-8 h-8" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-[#1a283c] leading-tight mb-4 whitespace-pre-line">
                {sidebar.helpWidget.title}
              </h3>
              
              <div className="w-8 h-0.5 bg-[#d89f4b] mb-5"></div>
              
              <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
                {sidebar.helpWidget.description}
              </p>
              
              <Link 
                href={sidebar.helpWidget.button.href}
                className="w-full flex items-center justify-center gap-2 bg-[#0c1626] hover:bg-[#1a283c] text-white py-3.5 rounded font-medium text-sm transition-colors shadow-md group/help"
              >
                <span>{sidebar.helpWidget.button.text}</span>
                <DynamicIcon name="arrow-right" className="w-4 h-4 text-[#d89f4b] group-hover/help:translate-x-1 transition-transform" />
              </Link>
            </div>

          </aside>

        </div>

      </div>
    </section>
  );
};
