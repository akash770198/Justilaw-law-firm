"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/DynamicIcon";

export const BlogDetailClient: React.FC<{ data: any }> = ({ data }) => {
  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              {/* Main Image */}
              <div className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[21/9] relative rounded-lg overflow-hidden mb-8">
                <Image 
                  src={data.hero.mainImage} 
                  alt={data.hero.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Metadata Bar */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-10 border-b border-gray-200 pb-6 mb-8 text-slate-500 font-medium text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <DynamicIcon name={data.hero.authorIcon} className="w-5 h-5 text-[#d89f4b]" />
                  <span className="text-[#111827]">{data.hero.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DynamicIcon name={data.hero.commentsIcon} className="w-5 h-5 text-[#d89f4b]" />
                  <span className="text-[#111827]">{data.hero.comments}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DynamicIcon name={data.hero.dateIcon} className="w-5 h-5 text-[#d89f4b]" />
                  <span className="text-[#111827]">{data.hero.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DynamicIcon name={data.hero.categoryIcon} className="w-5 h-5 text-[#d89f4b]" />
                  <span className="text-[#111827]">{data.hero.category}</span>
                </div>
              </div>

              {/* Title & Divider */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[32px] sm:text-[40px] font-bold text-[#0a1422] leading-tight mb-5">
                {data.hero.title}
              </h1>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-8"></div>

              {/* Content 1 */}
              <div className="text-slate-600 space-y-6 leading-relaxed mb-12">
                {data.content1?.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Specialized Counsel Section */}
              {data.specializedCounsel && (
                <div className="mb-12">
                  <h3 className="font-serif text-[28px] font-bold text-[#0a1422] mb-4">
                    {data.specializedCounsel.title}
                  </h3>
                  <div className="w-12 h-[2px] bg-[#d89f4b] mb-6"></div>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {data.specializedCounsel.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                    {data.specializedCounsel.points.map((point: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-4 border-b border-gray-100 pb-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#d89f4b] bg-transparent flex-shrink-0">
                          <DynamicIcon name={data.specializedCounsel.pointIcon} className="w-4 h-4 text-[#d89f4b]" />
                        </div>
                        <span className="text-slate-700 font-medium text-sm">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Blockquote */}
                  <div className="bg-[#fffdf8] border border-[#f0e6d2] p-8 rounded relative overflow-hidden">
                    <div className="absolute -bottom-8 -right-8 opacity-5">
                      <DynamicIcon name="scales" className="w-48 h-48 text-[#d89f4b]" />
                    </div>
                    <div className="relative z-10 flex gap-4">
                      <DynamicIcon name="quote" className="w-10 h-10 text-[#d89f4b] flex-shrink-0 rotate-180" />
                      <div>
                        <p className="text-slate-700 italic leading-relaxed mb-4">
                          {data.specializedCounsel.quote.text}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="w-6 h-[1px] bg-[#d89f4b]"></div>
                          <span className="text-[#0a1422] font-semibold">{data.specializedCounsel.quote.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Protecting Interests Section */}
              {data.protectingInterests && (
                <div>
                  <h3 className="font-serif text-[28px] font-bold text-[#0a1422] mb-4">
                    {data.protectingInterests.title}
                  </h3>
                  <div className="w-12 h-[2px] bg-[#d89f4b] mb-6"></div>
                  <div className="text-slate-600 space-y-6 leading-relaxed">
                    {data.protectingInterests.content.map((p: string, i: number) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Recent News Widget */}
            {data.sidebar?.recentNews && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#0a1422] rounded-lg p-8"
              >
                <h4 className="font-serif text-[22px] font-bold text-white mb-4">Recent News</h4>
                <div className="w-12 h-[2px] bg-[#d89f4b] mb-8"></div>
                
                <div className="space-y-6">
                  {data.sidebar.recentNews.map((news: any, idx: number) => (
                    <div key={idx} className="flex gap-4 border-b border-gray-800 pb-6 last:border-0 last:pb-0">
                      <div className="w-20 h-20 rounded bg-gray-800 relative overflow-hidden flex-shrink-0">
                        <Image src={news.image} alt={news.title} fill className="object-cover" />
                      </div>
                      <div>
                        <Link href={news.link} className="text-white font-medium text-[15px] leading-snug hover:text-[#d89f4b] transition-colors line-clamp-2 mb-2">
                          {news.title}
                        </Link>
                        <div className="flex items-center gap-2 text-[#d89f4b] text-sm">
                          <DynamicIcon name="clock" className="w-4 h-4" />
                          <span>{news.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link href="/blogs" className="mt-8 block w-full py-3 border border-[#d89f4b] text-[#d89f4b] font-semibold text-[13px] tracking-wider text-center uppercase hover:bg-[#d89f4b] hover:text-white transition-colors duration-300">
                  View All News &rarr;
                </Link>
              </motion.div>
            )}

            {/* Need Legal Assistance CTA */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#0a1422] rounded-lg p-8 relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full border border-gray-700 flex items-center justify-center mb-6 relative z-10">
                <DynamicIcon name="scales" className="w-10 h-10 text-[#d89f4b]" />
              </div>
              <h4 className="font-serif text-[22px] font-bold text-white mb-4 relative z-10">
                Need Legal<br />Assistance?
              </h4>
              <div className="w-12 h-[2px] bg-[#d89f4b] mb-6 relative z-10"></div>
              <p className="text-slate-400 text-[15px] mb-8 relative z-10 leading-relaxed">
                Our experienced legal team is here to help you with reliable and effective legal solutions.
              </p>
              <Link href="/contact" className="bg-[#d89f4b] text-white px-8 py-3 font-semibold text-[13px] tracking-wider uppercase hover:bg-white hover:text-[#0a1422] transition-colors duration-300 relative z-10 flex items-center justify-center w-full gap-2">
                Contact Us <DynamicIcon name="arrow-right" className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Categories Widget */}
            {data.sidebar?.categories && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm"
              >
                <h4 className="font-serif text-[22px] font-bold text-[#0a1422] mb-4">Categories</h4>
                <div className="w-12 h-[2px] bg-[#d89f4b] mb-8"></div>
                
                <div className="space-y-4">
                  {data.sidebar.categories.map((cat: any, idx: number) => (
                    <Link key={idx} href={cat.link} className="flex items-center justify-between group py-2">
                      <div className="flex items-center gap-3">
                        <DynamicIcon name={cat.icon} className="w-4 h-4 text-[#d89f4b]" />
                        <span className="text-slate-600 font-medium group-hover:text-[#d89f4b] transition-colors">{cat.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};
