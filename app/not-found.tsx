"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  const footerData = (siteData as any).footer;

  return (
    <main className="min-h-screen flex flex-col bg-[#fdfdfd]">
      {/* Header */}
      <Header data={siteData.header} />

      {/* 404 Hero Section */}
      <section className="relative w-full bg-[#08101a] flex-grow flex items-center justify-center py-24 lg:py-32 overflow-hidden border-b border-[#d89f4b]/20">
        
        {/* Background Images (Same as Footer) */}
        <div className="absolute inset-0 max-w-[1440px] mx-auto pointer-events-none z-0">
          {/* Left Building Image */}
          <div 
            className="absolute bottom-0 left-0 sm:left-4 lg:left-8 w-[300px] md:w-[600px] lg:w-[800px] h-full opacity-20"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse at left bottom, black 30%, transparent 70%)",
              maskImage: "radial-gradient(ellipse at left bottom, black 30%, transparent 70%)"
            }}
          >
            <Image
              src={footerData.leftImage.src}
              alt="Courthouse Building"
              fill
              className="object-contain object-left-bottom"
              priority
            />
          </div>

        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-3xl mx-auto">
          {/* 404 Number */}
          <div className="flex items-center justify-center mb-6">
            <h1 className="font-serif text-[120px] sm:text-[160px] lg:text-[200px] leading-none text-[#d89f4b]">
              404
            </h1>
          </div>
          
          {/* Divider with Text */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-[#d89f4b]"></div>
            <span className="text-[#d89f4b] font-bold tracking-[0.2em] text-sm uppercase">Page Not Found</span>
            <div className="w-16 h-px bg-[#d89f4b]"></div>
          </div>

          {/* Main Error Text */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Oops! Looks like you&apos;ve<br className="hidden sm:block" /> taken a wrong turn.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>

          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#d89f4b] text-[#08101a] font-bold text-sm tracking-wide rounded-sm hover:bg-white hover:text-[#08101a] transition-all duration-300 group"
          >
            GO TO HOMEPAGE 
            <svg 
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
