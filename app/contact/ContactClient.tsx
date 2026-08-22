"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ContactPageData } from "@/lib/types";
import { DynamicIcon } from "@/app/components/DynamicIcon";

export default function ContactClient({ data, offices }: { data: ContactPageData; offices: any[] }) {
  const [activeMapUrl, setActiveMapUrl] = useState(offices[0]?.mapUrl || data.map.iframeSrc);

  return (
    <div className="w-full bg-[#fdfdfd] relative overflow-hidden">
      
      {/* Subtle Background Statue Image */}
      <div className="absolute top-0 right-0 w-[50%] h-full opacity-10 pointer-events-none z-0">
        <Image 
          src="/lady_justice_hero.jpg" 
          alt="Statue of Justice" 
          fill
          className="object-cover object-center grayscale mix-blend-multiply"
        />
        {/* Gradient fade out to the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfdfd] via-[#fdfdfd]/80 to-transparent"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          
          {/* Left Column (Contact Info) */}
          <div className="flex flex-col gap-10 max-w-xl">
            
            {/* Header section */}
            <div>
              <div className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center mb-6 relative">
                 <div className="absolute inset-0 border border-[#d89f4b] rounded-full scale-105 opacity-50"></div>
                 <DynamicIcon name="scales" className="w-8 h-8 text-[#d89f4b]" />
              </div>
              
              <p className="text-[#d89f4b] font-bold text-sm tracking-[0.2em] uppercase mb-4">
                {data.header.subtitle}
              </p>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c] mb-4">
                {data.header.titleDark} <span className="text-[#d89f4b]">{data.header.titleGold}</span>
              </h2>
              <div className="w-20 h-0.5 bg-[#d89f4b] mb-6"></div>
              
              <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                {data.header.description}
              </p>
            </div>

            {/* Contact Details List */}
            <div className="flex flex-col gap-8 mt-2">
              {data.contactDetails.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#d89f4b] group-hover:bg-[#fdfaf5] transition-colors relative">
                    <div className="absolute inset-0 border border-[#d89f4b] rounded-full scale-110 opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <DynamicIcon name={detail.icon} className="w-6 h-6 text-[#d89f4b]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#1a283c] font-bold text-base mb-1">{detail.text1}</span>
                    <span className="text-slate-500 text-sm">{detail.text2}</span>
                  </div>
                </div>
              ))}
            </div>
            
          </div>

          {/* Right Column (Form) */}
          <div className="relative mt-8 lg:mt-0 lg:ml-12 pr-8 pb-8">
            
            {/* Dark Blue Offset Box */}
            <div className="absolute bottom-0 right-0 w-[90%] h-[90%] bg-[#0b1320] z-0 hidden sm:block rounded-sm">
               {/* Decorative corner lines */}
               <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-[#d89f4b]/30"></div>
            </div>

            {/* Form Container */}
            <div className="bg-white p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative z-10 rounded-sm border border-slate-100">
              
              {/* Decorative Corner Bracket */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#d89f4b] rounded-tr-sm"></div>

              <h3 className="font-serif text-[22px] font-bold text-[#1a283c] mb-6">
                {data.form.titleDark} <span className="text-[#d89f4b]">{data.form.titleGold}</span>
              </h3>

              <form className="flex flex-col gap-5">
                
                {/* Name */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <DynamicIcon name="user" className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full pl-12 pr-4 py-3 bg-transparent border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-[#d89f4b] transition-colors placeholder:text-slate-400 text-slate-700"
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <DynamicIcon name="mail" className="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full pl-12 pr-4 py-3 bg-transparent border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-[#d89f4b] transition-colors placeholder:text-slate-400 text-slate-700"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <DynamicIcon name="phone" className="w-5 h-5" />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full pl-12 pr-4 py-3 bg-transparent border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-[#d89f4b] transition-colors placeholder:text-slate-400 text-slate-700"
                    required
                  />
                </div>

                {/* Subject */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <DynamicIcon name="pen" className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full pl-12 pr-4 py-3 bg-transparent border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-[#d89f4b] transition-colors placeholder:text-slate-400 text-slate-700"
                    required
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <div className="absolute left-4 top-5 text-slate-400">
                    <DynamicIcon name="message-square" className="w-5 h-5" />
                  </div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 bg-transparent border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-[#d89f4b] transition-colors placeholder:text-slate-400 text-slate-700 resize-y"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full mt-2 group relative flex items-stretch h-12 rounded-sm overflow-hidden"
                >
                  <div className="flex-1 bg-[#0b1320] flex items-center justify-center font-bold text-white text-sm tracking-widest uppercase transition-colors group-hover:bg-[#152336]">
                    Send Message
                  </div>
                  <div className="w-16 bg-[#c48d3e] flex items-center justify-center transition-colors group-hover:bg-[#b07c33]">
                    <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </button>

              </form>
            </div>

          </div>

        </div>
      </div>

      {/* Interactive Map Section */}
      <div id="interactive-map" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="w-full h-[500px] lg:h-[600px] bg-slate-100 rounded-sm overflow-hidden shadow-2xl relative flex items-center justify-center group">
          
          {/* Iframe */}
          <iframe 
            src={activeMapUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(80%) contrast(1.1) brightness(1.05)" }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 z-10 transition-all duration-500 group-hover:filter-none"
            title="Interactive Office Map"
          ></iframe>
          
          {/* Fallback Loader */}
          <div className="w-8 h-8 border-2 border-slate-300 border-t-[#d89f4b] rounded-full animate-spin absolute z-0"></div>

          {/* Overlapping 'Find Us' Card */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 w-[280px] sm:w-[320px] bg-white rounded-sm shadow-xl p-6 sm:p-8 z-20 border border-slate-100">
            <h3 className="font-serif text-[26px] font-bold text-[#1a283c] mb-2">Find Us</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Use the map to find our office locations near you.
            </p>
            <ul className="flex flex-col">
              {offices.map((office: any) => (
                <li key={`map-nav-${office.id}`}>
                  <button 
                    onClick={() => setActiveMapUrl(office.mapUrl)}
                    className={`flex items-center gap-3 py-4 border-b border-slate-100 last:border-0 w-full text-left transition-colors ${activeMapUrl === office.mapUrl ? 'text-[#d89f4b]' : 'text-[#1a283c] hover:text-[#d89f4b]'}`}
                  >
                    <DynamicIcon name="map-pin" className={`w-5 h-5 shrink-0 ${activeMapUrl === office.mapUrl ? 'text-[#d89f4b]' : 'text-slate-400'}`} />
                    <span className="font-bold text-[15px]">{office.city}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
}
