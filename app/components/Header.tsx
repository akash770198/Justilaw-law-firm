"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DynamicIcon } from "./DynamicIcon";

interface TopBarData {
  phone: string;
  phoneHref: string;
  workingHours: string;
  email: string;
  emailHref: string;
  socials: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
}

interface NavLink {
  name: string;
  href: string;
  active?: boolean;
  dropdown?: Array<{
    name: string;
    href: string;
  }>;
}

interface HeaderData {
  topBar: TopBarData;
  navbar: {
    logo: {
      name: string;
      subtitle: string;
      imageSrc?: string;
      icon?: string;
      href: string;
    };
    navLinks: NavLink[];
    careersButton: {
      text: string;
      href: string;
      icon: string;
    };
    quickCall: {
      label: string;
      phone: string;
      phoneHref: string;
      icon: string;
    };
  };
}

export const Header: React.FC<{ data: HeaderData }> = ({ data }) => {
  const { topBar, navbar } = data;
  const pathname = usePathname();

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
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <span className="text-slate-400 font-medium text-xs hidden sm:inline">Follow Us :</span>
            <div className="flex items-center gap-3">
              {topBar.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-6 h-6 rounded-full flex items-center justify-center text-slate-300 hover:text-[#0b1626] hover:bg-[#c59d5f] transition-all duration-200"
                >
                  <DynamicIcon name={social.icon} className="w-3.5 h-3.5" />
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
          <Link href={navbar.logo.href} className="flex items-center shrink-0 group">
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
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 transition-colors duration-200 hover:text-[#c59d5f] ${
                      isActive ? "text-[#c59d5f] font-semibold" : "text-slate-700"
                    }`}
                  >
                    {link.name}
                  {link.dropdown && (
                    <DynamicIcon name="chevron-down" className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#c59d5f] transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                    {link.dropdown.map((sub) => (
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
              className="flex items-center gap-3 text-left pl-2 group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#be8b4b]/15 group-hover:bg-[#be8b4b] text-[#be8b4b] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-inner">
                <DynamicIcon name={navbar.quickCall.icon} className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
                  {navbar.quickCall.label}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0e1e32] group-hover:text-[#be8b4b] transition-colors">
                  {navbar.quickCall.phone}
                </span>
              </div>
            </a>
          </div>

        </div>
      </nav>
    </header>
  );
};
