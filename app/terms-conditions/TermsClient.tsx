"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TermsConditionsPageData } from "@/lib/types";
import { DynamicIcon } from "@/components/DynamicIcon";
import siteData from "@/data";

export const TermsClientComponent: React.FC<{ data: TermsConditionsPageData }> = ({ data }) => {
  const cta = data.sidebar?.cta ?? {
    title: "Questions About These Terms?",
    description: "Our legal team is available to clarify any provision in this document.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  };
  const contact = siteData.footer.contact;

  return (
    <section className="relative w-full bg-[#fdfdfd] py-16 lg:py-20 overflow-hidden">
      <div className="absolute left-0 top-1/4 w-[400px] h-[600px] opacity-[0.03] pointer-events-none">
        <Image src="/building_pillars.svg" alt="Pillars" fill className="object-contain object-left" />
      </div>
      <div className="absolute right-0 top-0 w-[500px] h-[700px] opacity-[0.03] pointer-events-none">
        <Image src="/lady_of_justice.svg" alt="Lady of Justice" fill className="object-contain object-right-top" />
      </div>

      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 text-[#d89f4b] font-bold text-sm tracking-widest uppercase mb-4">
                <DynamicIcon name="scales" className="w-5 h-5" />
                {data.header.subtitle ?? "LEGAL NOTICE"}
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif lg:text-[56px] font-bold text-[#1a283c] leading-[1.1] tracking-tight mb-5">
                {data.header.titleDark} <span className="text-[#d89f4b]">{data.header.titleGold}</span>
              </h2>
              <div className="w-16 h-1 bg-[#d89f4b] mb-8"></div>

              <div className="inline-flex items-center gap-2 bg-[#fcfaf8] border border-[#d89f4b]/20 rounded-sm px-4 py-2 mb-6">
                <DynamicIcon name="clock" className="w-4 h-4 text-[#d89f4b]" />
                <span className="text-[#1a283c] font-bold text-sm">{data.header.lastUpdated}</span>
              </div>

              <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                {data.header.intro}
              </p>
            </motion.div>

            <div className="flex flex-col">
              {data.terms.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 py-8 border-b border-slate-200 last:border-b-0"
                >
                  <div className="w-16 shrink-0 flex items-center sm:justify-end">
                    <span className="font-serif text-3xl font-bold text-[#d89f4b]">
                      {item.id}
                    </span>
                  </div>

                  <div className="hidden sm:block w-px h-16 bg-[#d89f4b]/20 shrink-0"></div>

                  <div className="flex-1">
                    <h3 className="text-[#1a283c] font-bold text-[17px] mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-[15px] leading-relaxed">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
            <div className="bg-[#fcfaf8] border border-[#d89f4b]/20 p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border border-[#d89f4b] flex items-center justify-center text-[#d89f4b] mb-4 bg-white shadow-sm">
                <DynamicIcon name="mail" className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1a283c] mb-3">
                {cta.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {cta.description}
              </p>
              <Link
                href={cta.buttonLink}
                className="w-full inline-flex items-center justify-center px-8 py-3.5 bg-[#08101a] text-white font-bold text-sm tracking-wide rounded-sm hover:bg-[#d89f4b] transition-colors group"
              >
                {cta.buttonText}
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-sm p-8">
              <h3 className="font-serif font-bold text-xl text-[#1a283c] mb-6">Firm Contact</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center shrink-0 text-[#d89f4b]">
                    <DynamicIcon name="phone" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[#1a283c] font-bold text-sm mb-1">{contact.phone}</p>
                    <p className="text-slate-500 text-sm">Call our office</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center shrink-0 text-[#d89f4b]">
                    <DynamicIcon name="mail" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[#1a283c] font-bold text-sm mb-1">{contact.email}</p>
                    <p className="text-slate-500 text-sm">Email our team</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center shrink-0 text-[#d89f4b]">
                    <DynamicIcon name="clock" className="w-5 h-5" />
                  </div>
                  <div>
                    {contact.hours.split("\n").map((line) => (
                      <p key={line} className="text-slate-500 text-sm leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
