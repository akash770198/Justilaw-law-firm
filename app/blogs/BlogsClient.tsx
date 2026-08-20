"use client";

import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "@/app/components/DynamicIcon";

export function BlogsClient({ data }: { data: any }) {
  if (!data) return null;

  return (
    <div className="bg-[#fcfaf7] w-full py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#d89f4b]"></div>
            <div className="flex items-center gap-2 text-[#d89f4b] font-medium tracking-wider text-sm uppercase">
              <DynamicIcon name={data.sectionHeader?.taglineIcon || "gavel"} className="w-4 h-4" />
              <span>{data.sectionHeader?.tagline || "OUR BLOG"}</span>
            </div>
            <div className="w-12 h-[1px] bg-[#d89f4b]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c1626] mb-2 font-serif">
            {data.sectionHeader?.headingDark || "Latest News & Articles"}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#d89f4b] mb-6 font-serif italic">
            {data.sectionHeader?.headingGold || "From Our Blog"}
          </h3>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-gray-300"></div>
            <DynamicIcon name={data.sectionHeader?.headingIcon || "scales"} className="w-6 h-6 text-[#d89f4b]" />
            <div className="w-16 h-[1px] bg-gray-300"></div>
          </div>
          <p className="text-gray-600">
            {data.sectionHeader?.description || "Stay informed with our latest legal insights, updates, and expert advice on issues that matter to you."}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items?.map((post: any) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md group flex flex-col hover:shadow-xl transition-all duration-300">
              {/* Image Section */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#0c1626] text-white px-3 py-1.5 text-xs font-semibold flex items-center gap-2 rounded-sm shadow-sm z-10">
                  <DynamicIcon name={post.categoryIcon || "briefcase"} className="w-3.5 h-3.5 text-[#d89f4b]" />
                  {post.category}
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-0 left-0 bg-[#d89f4b] text-white px-4 py-2 text-sm font-medium flex items-center gap-2 z-10">
                  <DynamicIcon name={post.dateIcon || "clock"} className="w-4 h-4" />
                  {post.date}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold text-[#0c1626] mb-3 group-hover:text-[#d89f4b] transition-colors font-serif leading-snug">
                  <Link href={post.link || "#"}>
                    {post.title}
                  </Link>
                </h4>
                <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                  {post.description}
                </p>

                {/* Author Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#d89f4b] transition-colors">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#0c1626]">{post.author.name}</div>
                      <div className="text-xs text-gray-500">{post.author.role}</div>
                    </div>
                  </div>
                  <Link href={post.link || "#"} className="flex items-center gap-2 text-sm font-medium text-[#d89f4b] group-hover:text-[#0c1626] transition-colors">
                    Read More
                    <DynamicIcon name="arrow-right" className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
