"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { TeamMemberDetail } from "@/lib/types";

export const TeamDetailClient: React.FC<{ member: TeamMemberDetail }> = ({ member }) => {
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Split name for styling
  const nameParts = member.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  const handleDownloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${firstName} ${lastName}
ORG:JUSTILAW
TITLE:${member.title || ""}
TEL;TYPE=WORK,VOICE:${member.phone || ""}
EMAIL;TYPE=PREF,INTERNET:${member.email || ""}
URL:${member.linkedin || ""}
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${firstName}_${lastName}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full bg-[#faf9f7] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-10 lg:gap-16">
          
          {/* Left Column (Image & Sidebar) */}
          <div className="flex flex-col gap-10 lg:gap-16">
            {/* Image Container */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/5] overflow-hidden rounded-md shadow-lg"
            >
              <Image
                src={member.image.src}
                alt={member.image.alt}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 350px"
              />
            </motion.div>

            {/* Sidebar Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 md:p-10 border border-slate-100 shadow-sm rounded-md flex flex-col gap-10"
            >
              {/* Practice Areas */}
              <div>
                <h3 className="font-serif text-[#111827] text-xl font-bold mb-4">
                  Practice Areas
                </h3>
                <div className="w-12 h-[2px] bg-[#d89f4b] mb-6" />
                <ul className="flex flex-col">
                  {member.practiceAreas?.map((area, idx) => (
                    <li key={idx} className="flex items-center gap-4 py-3 border-b border-slate-100 last:border-0">
                      <DynamicIcon name="scales" className="w-5 h-5 text-[#d89f4b] flex-shrink-0" />
                      <span className="text-[#111827] font-medium text-[15px]">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div>
                <h3 className="font-serif text-[#111827] text-xl font-bold mb-4">
                  Education
                </h3>
                <div className="w-12 h-[2px] bg-[#d89f4b] mb-6" />
                <div className="flex flex-col gap-6">
                  {member.education?.map((edu, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center flex-shrink-0 text-[#d89f4b] shadow-sm">
                        <DynamicIcon name="graduation-cap" className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[#111827] font-bold text-[15px] mb-1">{edu.degree}</div>
                        <div className="text-slate-600 text-[14px]">{edu.school}</div>
                        <div className="text-slate-500 text-[13px] mt-1">{edu.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bar Admissions */}
              <div>
                <h3 className="font-serif text-[#111827] text-xl font-bold mb-4">
                  Bar Admissions
                </h3>
                <div className="w-12 h-[2px] bg-[#d89f4b] mb-6" />
                <ul className="flex flex-col gap-3">
                  {member.barAdmissions?.map((bar, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#d89f4b] flex items-center justify-center flex-shrink-0 text-white">
                        <DynamicIcon name="check" className="w-3 h-3" />
                      </div>
                      <span className="text-[#111827] font-medium text-[14px]">{bar}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Hero Content & Main Details) */}
          <div className="flex flex-col gap-10 lg:gap-16">
            
            {/* Hero Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">
                <span className="text-[#111827]">{firstName} </span>
                <span className="text-[#d89f4b]">{lastName}</span>
              </h1>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[2px] bg-[#d89f4b]" />
                <span className="text-[#d89f4b] font-bold text-[13px] tracking-widest uppercase">
                  {member.title}
                </span>
              </div>

              <p className="text-slate-600 text-[16px] leading-relaxed max-w-3xl mb-10">
                {member.description}
              </p>

              {/* Contact Card */}
              <div className="flex flex-col xl:flex-row xl:items-center justify-start bg-white p-6 md:p-8 border border-slate-100 rounded-md shadow-sm mb-10 w-full overflow-hidden">
                
                {/* Phone */}
                <div className="flex items-center gap-3 pb-4 xl:pb-0 xl:pr-8 w-full xl:w-auto border-b xl:border-b-0 xl:border-r border-slate-100">
                  <div className="w-12 h-12 bg-[#fcf3e6] rounded-full flex items-center justify-center flex-shrink-0 text-[#d89f4b]">
                    <DynamicIcon name="phone" className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[#111827] font-bold text-[15px] truncate" title={member.phone}>{member.phone}</div>
                    <div className="text-slate-500 text-[13px]">Call Us</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 py-4 xl:py-0 xl:px-8 w-full xl:w-auto border-b xl:border-b-0 xl:border-r border-slate-100">
                  <div className="w-12 h-12 bg-[#fcf3e6] rounded-full flex items-center justify-center flex-shrink-0 text-[#d89f4b]">
                    <DynamicIcon name="mail" className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[#111827] font-bold text-[15px] truncate" title={member.email}>{member.email}</div>
                    <div className="text-slate-500 text-[13px]">Email Us</div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3 pt-4 xl:pt-0 xl:pl-8 w-full xl:w-auto">
                  <div className="w-12 h-12 bg-[#fcf3e6] rounded-full flex items-center justify-center flex-shrink-0 text-[#d89f4b]">
                    <DynamicIcon name="linkedin" className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[#111827] font-bold text-[15px] truncate" title={member.linkedin}>{member.linkedin}</div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              {member.actionButtons && member.actionButtons.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {member.actionButtons.map((btn, idx) => {
                    const baseClasses = "inline-flex items-center justify-center gap-2 font-bold text-[13px] tracking-widest px-8 py-4 transition-colors duration-300";
                    const primaryClasses = "bg-[#111827] text-white hover:bg-[#d89f4b]";
                    const secondaryClasses = "border-2 border-[#d89f4b] text-[#d89f4b] hover:bg-[#d89f4b] hover:text-white";
                    const classes = `${baseClasses} ${btn.style === "primary" ? primaryClasses : secondaryClasses}`;

                    if (btn.isDownload) {
                      return (
                        <button key={idx} className={classes} onClick={handleDownloadVCard}>
                          {btn.text}
                          <DynamicIcon name={btn.icon} className="w-4 h-4" />
                        </button>
                      );
                    }
                    
                    return (
                      <Link key={idx} href={btn.href || "#"} className={classes}>
                        {btn.text}
                        <DynamicIcon name={btn.icon} className="w-4 h-4" />
                      </Link>
                    );
                  })}
                </div>
              )}
            </motion.div>

            {/* Main Details Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-8 md:p-12 border border-slate-100 shadow-sm rounded-md"
            >
              {/* About */}
              <div className="mb-12">
                <h3 className="font-serif text-[#111827] text-2xl font-bold mb-6">
                  About {firstName}
                </h3>
                <div className="w-12 h-[2px] bg-[#d89f4b] mb-6" />
                <p className="text-slate-600 text-[16px] leading-relaxed">
                  {member.about}
                </p>
              </div>

              {/* Experience */}
              <div className="mb-12">
                <h3 className="font-serif text-[#111827] text-2xl font-bold mb-6">
                  Experience
                </h3>
                <div className="w-12 h-[2px] bg-[#d89f4b] mb-8" />
                <div className="flex flex-col border-l-2 border-slate-100 pl-6 space-y-10">
                  {member.experience?.map((exp, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[31px] top-1 w-3 h-3 bg-[#d89f4b] rounded-full ring-4 ring-white" />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div>
                          <h4 className="text-[#111827] font-bold text-[16px] mb-1">{exp.role}</h4>
                          <div className="text-[#d89f4b] font-medium text-[15px] mb-1">{exp.company}</div>
                          <div className="text-slate-500 text-[14px]">{exp.duration}</div>
                        </div>
                        <div className="text-slate-600 text-[15px] leading-relaxed border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                          {exp.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Affiliations */}
              <div>
                <h3 className="font-serif text-[#111827] text-2xl font-bold mb-6">
                  Professional Affiliations
                </h3>
                <div className="w-12 h-[2px] bg-[#d89f4b] mb-8" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {member.affiliations?.map((aff, idx) => (
                    <div key={idx} className="border border-slate-100 p-6 flex flex-col items-center justify-center text-center gap-4 rounded-md hover:border-[#d89f4b] transition-colors duration-300">
                      <DynamicIcon name={aff.icon || "award"} className="w-12 h-12 text-[#111827]" />
                      <span className="text-[#111827] font-bold text-[14px] leading-tight mt-2">{aff.title}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
