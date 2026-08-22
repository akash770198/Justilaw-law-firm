"use client";

import React from "react";
import { JobItem } from "@/lib/types";
import { DynamicIcon } from "@/app/components/DynamicIcon";

export const CareerDetailClient: React.FC<{ job: JobItem }> = ({ job }) => {
  return (
    <div className="w-full bg-[#fdfdfd] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Main Details) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Header Block */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6">
              <div className="w-20 h-20 bg-[#0b1320] flex items-center justify-center rounded-sm flex-shrink-0">
                <DynamicIcon name="scales" className="w-10 h-10 text-[#d89f4b]" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1a283c]">
                  {job.title}
                </h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <DynamicIcon name="briefcase" className="w-4 h-4" />
                    {job.company || "JUSTILAW Legal Partners"}
                  </div>
                  <span className="text-slate-300">|</span>
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

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-slate-200 py-6">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fdfaf5] flex items-center justify-center flex-shrink-0 text-[#d89f4b]">
                  <DynamicIcon name="map-pin" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-900 font-bold mb-0.5">Location</p>
                  <p className="text-sm text-slate-500">{job.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fdfaf5] flex items-center justify-center flex-shrink-0 text-[#d89f4b]">
                  <DynamicIcon name="briefcase" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-900 font-bold mb-0.5">Job Type</p>
                  <p className="text-sm text-slate-500">{job.type.split(',')[0]}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fdfaf5] flex items-center justify-center flex-shrink-0 text-[#d89f4b]">
                  <DynamicIcon name="wallet" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-900 font-bold mb-0.5">Salary</p>
                  <p className="text-sm text-slate-500">{job.salary}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fdfaf5] flex items-center justify-center flex-shrink-0 text-[#d89f4b]">
                  <DynamicIcon name="users" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-900 font-bold mb-0.5">Department</p>
                  <p className="text-sm text-slate-500">{job.department}</p>
                </div>
              </div>

            </div>

            {/* Overview */}
            {job.overview && (
              <div className="flex flex-col gap-4 pt-2">
                <h3 className="font-serif text-2xl font-bold text-[#1a283c]">Job Overview</h3>
                <div className="w-full h-px bg-slate-200"></div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mt-2">
                  {job.overview}
                </p>
              </div>
            )}

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-2xl font-bold text-[#1a283c]">Key Responsibilities</h3>
                <div className="w-full h-px bg-slate-200"></div>
                <ul className="flex flex-col gap-3 mt-2">
                  {job.responsibilities.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d89f4b] flex-shrink-0 mt-2"></div>
                      <span className="text-slate-600 leading-relaxed text-sm sm:text-base">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Education */}
            {job.education && job.education.length > 0 && (
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-2xl font-bold text-[#1a283c]">Educational Requirements</h3>
                <div className="w-full h-px bg-slate-200"></div>
                <ul className="flex flex-col gap-3 mt-2">
                  {job.education.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d89f4b] flex-shrink-0 mt-2"></div>
                      <span className="text-slate-600 leading-relaxed text-sm sm:text-base">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Experience */}
            {job.experienceReq && job.experienceReq.length > 0 && (
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-2xl font-bold text-[#1a283c]">Experience</h3>
                <div className="w-full h-px bg-slate-200"></div>
                <ul className="flex flex-col gap-3 mt-2">
                  {job.experienceReq.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d89f4b] flex-shrink-0 mt-2"></div>
                      <span className="text-slate-600 leading-relaxed text-sm sm:text-base">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills */}
            {job.skills && job.skills.length > 0 && (
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-2xl font-bold text-[#1a283c]">Skills & Competencies</h3>
                <div className="w-full h-px bg-slate-200"></div>
                <ul className="flex flex-col gap-3 mt-2">
                  {job.skills.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d89f4b] flex-shrink-0 mt-2"></div>
                      <span className="text-slate-600 leading-relaxed text-sm sm:text-base">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-24">
            
            {/* Job Summary */}
            {job.summary && (
              <div className="bg-[#fcfaf8] border border-slate-200 p-8 rounded-sm shadow-sm flex flex-col">
                <h3 className="font-serif text-[22px] font-bold text-[#1a283c] mb-6">Job Summary</h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <DynamicIcon name="calendar" className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div className="flex flex-1 items-center justify-between">
                      <span className="text-slate-700 font-bold text-sm">Expiration</span>
                      <span className="text-slate-500 text-sm">{job.summary.expiration}</span>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-100"></div>
                  
                  <div className="flex items-center gap-4">
                    <DynamicIcon name="users" className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div className="flex flex-1 items-center justify-between">
                      <span className="text-slate-700 font-bold text-sm">Vacancy</span>
                      <span className="text-slate-500 text-sm">{job.summary.vacancy}</span>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-100"></div>

                  <div className="flex items-center gap-4">
                    <DynamicIcon name="briefcase" className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div className="flex flex-1 items-center justify-between">
                      <span className="text-slate-700 font-bold text-sm">Experience</span>
                      <span className="text-slate-500 text-sm">{job.summary.experience}</span>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-100"></div>

                  <div className="flex items-center gap-4">
                    <DynamicIcon name="graduation-cap" className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div className="flex flex-1 items-center justify-between">
                      <span className="text-slate-700 font-bold text-sm">Education</span>
                      <span className="text-slate-500 text-sm">{job.summary.education}</span>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-100"></div>

                  <div className="flex items-center gap-4">
                    <DynamicIcon name="user" className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div className="flex flex-1 items-center justify-between">
                      <span className="text-slate-700 font-bold text-sm">Gender</span>
                      <span className="text-slate-500 text-sm">{job.summary.gender}</span>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-100"></div>

                  <div className="flex items-center gap-4">
                    <DynamicIcon name="calendar" className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div className="flex flex-1 items-center justify-between">
                      <span className="text-slate-700 font-bold text-sm">Posted On</span>
                      <span className="text-slate-500 text-sm">{job.summary.postedOn}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Apply Form */}
            <div className="bg-[#fcfaf8] border border-slate-200 p-8 rounded-sm shadow-sm flex flex-col">
              <h3 className="font-serif text-[22px] font-bold text-[#1a283c] mb-6">Apply for this Position</h3>
              
              <form className="flex flex-col gap-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-[#d89f4b]/50 transition-colors placeholder:text-slate-400"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-[#d89f4b]/50 transition-colors placeholder:text-slate-400"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-[#d89f4b]/50 transition-colors placeholder:text-slate-400"
                  required
                />
                
                {/* Select Dropdown */}
                <div className="relative">
                  <select 
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-[#d89f4b]/50 transition-colors text-slate-500 appearance-none"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled hidden>Experience (Years)</option>
                    <option value="0-2">0 - 2 Years</option>
                    <option value="2-5">2 - 5 Years</option>
                    <option value="5-10">5 - 10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>

                {/* File Upload */}
                <div className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm flex items-center relative overflow-hidden">
                   <div className="flex-1 text-sm text-slate-400 whitespace-nowrap overflow-hidden text-ellipsis">
                     Upload Resume (PDF/DOC)
                   </div>
                   <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" required />
                   <div className="flex items-center gap-2">
                     <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-sm border border-slate-200 cursor-pointer pointer-events-none">Choose file</span>
                     <span className="text-slate-400 text-xs pointer-events-none truncate max-w-[80px]">No file chosen</span>
                   </div>
                </div>

                <textarea 
                  placeholder="Cover Letter (Optional)" 
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-[#d89f4b]/50 transition-colors placeholder:text-slate-400 resize-y"
                ></textarea>

                <button 
                  type="submit"
                  className="w-full bg-[#c48d3e] hover:bg-[#b07c33] text-white font-bold text-sm tracking-wide py-3.5 rounded-sm transition-colors mt-2"
                >
                  Submit Application
                </button>
                
                <div className="flex items-center gap-2 mt-2">
                   <DynamicIcon name="lock" className="w-3.5 h-3.5 text-slate-400" />
                   <span className="text-xs text-slate-500">Your information is secure and confidential.</span>
                </div>
              </form>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
