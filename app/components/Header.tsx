"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { TopBarData, NavLink, HeaderData } from "@/lib/types";

export const Header: React.FC<{ data: HeaderData }> = ({ data }) => {
  const { topBar, navbar } = data;
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full select-none z-50 sticky top-0">
      {/* Top Bar with Deep Navy Background */}
      <div className="bg-[#0b1626] text-[#b8c5d6] text-xs sm:text-[13px] border-b border-[#1b2b42] py-2.5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-wrap items-center justify-between gap-3">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-7">
            <a
              href={topBar.phoneHref}
              className="flex items-center gap-2 hover:text-[#c59d5f] transition-colors duration-200"
            >
              <DynamicIcon name="phone" className="w-3.5 h-3.5 text-[#c59d5f]" />
              <span className="tracking-wide font-medium">{topBar.phone}</span>
            </a>
            <span className="hidden sm:inline text-[#2a3d58]">|</span>
            <div className="flex items-center gap-2 text-slate-300">
              <DynamicIcon name="clock" className="w-3.5 h-3.5 text-[#c59d5f]" />
              <span>{topBar.workingHours}</span>
            </div>
            <span className="hidden md:inline text-[#2a3d58]">|</span>
            <a
              href={topBar.emailHref}
              className="hidden md:flex items-center gap-2 hover:text-[#c59d5f] transition-colors duration-200"
            >
              <DynamicIcon name="mail" className="w-3.5 h-3.5 text-[#c59d5f]" />
              <span>{topBar.email}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center w-full sm:w-auto sm:ml-auto pt-1 sm:pt-0">
            <span className="text-slate-400 font-medium text-xs hidden sm:inline mr-3">Follow Us :</span>
            <div className="flex items-center justify-between w-full sm:w-auto sm:gap-3 px-2 sm:px-0">
              {topBar.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-slate-300 hover:text-[#0b1626] hover:bg-[#c59d5f] transition-all duration-200"
                >
                  <DynamicIcon name={social.icon} className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white border-b border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] py-2">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href={navbar.logo.href} className="flex items-center shrink-0 group -ml-3">
            {navbar.logo.imageSrc ? (
                <img 
                  src={navbar.logo.imageSrc} 
                  alt={navbar.logo.name} 
                  className="h-16 sm:h-20 w-auto object-contain"
                />
            ) : (
              <>
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#122238] to-[#0a1320] flex items-center justify-center text-[#d4af37] shadow-md group-hover:scale-105 transition-transform duration-300">
                  <DynamicIcon name={navbar.logo.icon || "scales"} className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-xl sm:text-2xl font-serif font-black tracking-wider text-[#0e1e32]">
                    {navbar.logo.name}
                  </span>
                  <span className="text-[9px] tracking-[0.25em] font-semibold text-[#c59d5f] uppercase -mt-0.5">
                    {navbar.logo.subtitle}
                  </span>
                </div>
              </>
            )}
          </Link>

          {/* Nav Items */}
          <div className="hidden xl:flex items-center gap-7 lg:gap-8 font-medium text-sm text-slate-700">
            {navbar.navLinks.map((link) => {
              const isActive = link.href === pathname;
              return (
                <div key={link.name} className="relative group py-2">
                {link.href ? (
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 transition-colors duration-200 hover:text-[#c59d5f] font-semibold ${
                      isActive ? "text-[#c59d5f]" : "text-black"
                    }`}
                  >
                    {link.name}
                  {link.children && (
                    <DynamicIcon name="chevron-down" className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#c59d5f] transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>
                ) : (
                  <span
                    className={`flex items-center gap-1.5 transition-colors duration-200 hover:text-[#c59d5f] cursor-pointer font-semibold ${
                      isActive ? "text-[#c59d5f]" : "text-black"
                    }`}
                  >
                    {link.name}
                  {link.children && (
                    <DynamicIcon name="chevron-down" className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#c59d5f] transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </span>
                )}

                {link.children && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                    {link.children.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-xs sm:text-sm text-slate-600 hover:bg-amber-50 hover:text-[#a87f3b] transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              );
            })}
          </div>

          {/* Right Action Elements */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Careers Button */}
            <Link
              href={navbar.careersButton.href}
              className="hidden md:inline-flex items-center gap-2 bg-[#be8b4b] hover:bg-[#a97537] text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-md shadow-sm transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5"
            >
              <DynamicIcon name={navbar.careersButton.icon} className="w-4 h-4" />
              <span>{navbar.careersButton.text}</span>
            </Link>

            {/* Quick Call Box */}
            <a
              href={navbar.quickCall.phoneHref}
              className="flex items-center gap-2 sm:gap-3 text-left sm:pl-2 group"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#be8b4b]/15 group-hover:bg-[#be8b4b] text-[#be8b4b] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-inner">
                <DynamicIcon name={navbar.quickCall.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
                  {navbar.quickCall.label}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0e1e32] group-hover:text-[#be8b4b] transition-colors">
                  {navbar.quickCall.phone}
                </span>
              </div>
            </a>
            {/* Mobile Hamburger Button */}
            <button
              className="xl:hidden w-10 h-10 flex items-center justify-center text-[#1a283c] hover:text-[#d89f4b] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <DynamicIcon name={isMobileMenuOpen ? "x" : "menu"} className="w-7 h-7" />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl xl:hidden z-40 max-h-[80vh] overflow-y-auto flex flex-col">
          <div className="flex flex-col py-4 px-6">
            {navbar.navLinks.map((link) => {
              const isActive = link.href === pathname;
              return (
                <div key={link.name} className="flex flex-col border-b border-slate-50 last:border-0 py-1">
                  {link.href ? (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-3 font-medium transition-colors ${
                        isActive ? "text-[#d89f4b]" : "text-slate-700"
                      }`}
                    >
                      <span>{link.name}</span>
                    </Link>
                  ) : (
                    <span
                      className={`flex items-center justify-between py-3 font-medium transition-colors cursor-pointer ${
                        isActive ? "text-[#d89f4b]" : "text-slate-700"
                      }`}
                    >
                      <span>{link.name}</span>
                    </span>
                  )}
                  {link.children && (
                    <div className="flex flex-col pl-4 pb-2 space-y-3 mt-1 border-l-2 border-[#f3ede5]">
                      {link.children.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm text-slate-500 hover:text-[#d89f4b] transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Mobile Action Buttons */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-4">
              <Link
                href={navbar.careersButton.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#be8b4b] text-white font-medium text-sm py-3 rounded-md w-full"
              >
                <DynamicIcon name={navbar.careersButton.icon} className="w-4 h-4" />
                <span>{navbar.careersButton.text}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
