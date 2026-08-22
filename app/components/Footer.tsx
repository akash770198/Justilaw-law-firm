"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { FooterLink, FooterSocial, FooterData } from "@/lib/types";

export const Footer: React.FC<{ data: FooterData }> = ({ data }) => {
  return (
    <footer className="w-full bg-[#08101a] pt-20 text-slate-300">
      
      {/* Upper Footer Area */}
      <div className="relative w-full overflow-hidden">
        
        {/* Background Image Wrapper (Aligns with content width) */}
        <div className="absolute inset-0 max-w-[1440px] mx-auto pointer-events-none z-0">
          <div 
            className="absolute bottom-0 left-4 sm:left-6 lg:left-8 w-[400px] md:w-[800px] h-[500px] opacity-15"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse at left bottom, black 20%, transparent 70%)",
              maskImage: "radial-gradient(ellipse at left bottom, black 20%, transparent 70%)"
            }}
          >
            <Image
              src={data.leftImage.src}
              alt={data.leftImage.alt}
              fill
              className="object-contain object-left-bottom"
            />
          </div>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
            
            {/* Column 1: Logo & Description */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block mb-6 -ml-3">
              <img 
                src={data.logo.src} 
                alt={data.logo.name || "Logo"} 
                className="h-16 sm:h-20 w-auto object-contain object-left"
              />
            </Link>
            <p className="text-[14px] leading-relaxed max-w-sm border-l-2 border-slate-700/50 pl-4 py-1">
              {data.description}
            </p>
          </div>

          {/* Column 2: Our Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[15px] uppercase tracking-wider mb-6 pb-4 border-b border-[#1a283c] relative inline-block w-full">
              OUR SERVICES
              <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#d89f4b]"></span>
            </h4>
            <ul className="flex flex-col space-y-4">
              {data.services.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="group flex items-center justify-between text-[14px] hover:text-[#d89f4b] transition-colors border-b border-[#1a283c] pb-3">
                    {item.name}
                    <DynamicIcon name="chevron-right" className="w-3.5 h-3.5 text-[#d89f4b] opacity-70 group-hover:opacity-100 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[15px] uppercase tracking-wider mb-6 pb-4 border-b border-[#1a283c] relative inline-block w-full">
              QUICK LINKS
              <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#d89f4b]"></span>
            </h4>
            <ul className="flex flex-col space-y-4">
              {data.quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="group flex items-center justify-between text-[14px] hover:text-[#d89f4b] transition-colors border-b border-[#1a283c] pb-3">
                    {item.name}
                    <DynamicIcon name="chevron-right" className="w-3.5 h-3.5 text-[#d89f4b] opacity-70 group-hover:opacity-100 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[15px] uppercase tracking-wider mb-6 pb-4 border-b border-[#1a283c] relative inline-block w-full">
              RESOURCES
              <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#d89f4b]"></span>
            </h4>
            <ul className="flex flex-col space-y-4">
              {data.resources.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="group flex items-center justify-between text-[14px] hover:text-[#d89f4b] transition-colors border-b border-[#1a283c] pb-3">
                    {item.name}
                    <DynamicIcon name="chevron-right" className="w-3.5 h-3.5 text-[#d89f4b] opacity-70 group-hover:opacity-100 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Get in Touch & Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-[15px] uppercase tracking-wider mb-6 pb-4 border-b border-[#1a283c] relative inline-block w-full">
              GET IN TOUCH
              <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#d89f4b]"></span>
            </h4>
            
            <div className="flex flex-col space-y-5 mb-10">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full border border-[#d89f4b]/30 bg-[#0b1320] flex items-center justify-center flex-shrink-0">
                  <DynamicIcon name="map-pin" className="w-3.5 h-3.5 text-[#d89f4b]" />
                </div>
                <p className="text-[13px] leading-relaxed whitespace-pre-line">{data.contact.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#d89f4b]/30 bg-[#0b1320] flex items-center justify-center flex-shrink-0">
                  <DynamicIcon name="phone" className="w-3.5 h-3.5 text-[#d89f4b]" />
                </div>
                <p className="text-[13px]">{data.contact.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#d89f4b]/30 bg-[#0b1320] flex items-center justify-center flex-shrink-0">
                  <DynamicIcon name="mail" className="w-3.5 h-3.5 text-[#d89f4b]" />
                </div>
                <p className="text-[13px]">{data.contact.email}</p>
              </div>
              <div className="flex items-start gap-3 border-b border-[#1a283c] pb-6">
                <div className="mt-1 w-8 h-8 rounded-full border border-[#d89f4b]/30 bg-[#0b1320] flex items-center justify-center flex-shrink-0">
                  <DynamicIcon name="clock" className="w-3.5 h-3.5 text-[#d89f4b]" />
                </div>
                <p className="text-[13px] leading-relaxed whitespace-pre-line">{data.contact.hours}</p>
              </div>
            </div>

            {/* Newsletter */}
            <h4 className="text-white font-bold text-[15px] uppercase tracking-wider mb-4">
              {data.newsletter.title}
            </h4>
            <p className="text-[13px] leading-relaxed mb-4">
              {data.newsletter.description}
            </p>
            <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={data.newsletter.placeholder} 
                className="w-full bg-[#0b1320] border border-[#1a283c] text-white text-[13px] py-3.5 pl-4 pr-14 focus:outline-none focus:border-[#d89f4b]/50 transition-colors rounded-sm"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-0 bottom-0 px-4 bg-[#d89f4b] text-white hover:bg-[#c48d3e] transition-colors flex items-center justify-center rounded-r-sm"
              >
                <DynamicIcon name="paper-plane" className="w-4 h-4" />
              </button>
            </form>
          </div>
          </div>
        </div>
      </div> {/* End Upper Footer Area */}

      {/* Footer Bottom Bar Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="border-t border-[#d89f4b]/30 py-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          
          {/* Left: Copyright */}
          <div className="text-[13px] text-slate-400 order-2 md:order-1">
            {data.copyright}
          </div>

          {/* Center: Branding Logo Mark */}
          <div className="flex items-center gap-3 order-1 md:order-2 border-l border-r border-[#1a283c] px-6">
            <DynamicIcon name="scales" className="w-8 h-8 text-[#d89f4b]" />
            <div className="flex flex-col">
              <span className="text-[#d89f4b] font-bold text-[14px]">{data.centerText.title}</span>
              <span className="text-white text-[13px]">{data.centerText.subtitle}</span>
            </div>
          </div>

          {/* Right: Socials */}
          <div className="flex items-center gap-4 order-3">
            <span className="text-[#d89f4b] font-bold text-[14px] mr-2">Follow Us</span>
            {data.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                aria-label={social.name}
                className="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center text-slate-300 hover:text-[#d89f4b] hover:border-[#d89f4b] transition-all"
              >
                <DynamicIcon name={social.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};
