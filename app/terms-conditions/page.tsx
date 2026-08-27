import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import { TermsClientComponent } from "./TermsClient";
import siteData from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | JustiLaw Legal Partners",
  description: "Read the Terms & Conditions of JustiLaw Legal Partners.",
};

export default function TermsConditionsPage() {
  const data = siteData.termsConditionsPage;

  return (
    <main className="min-h-screen flex flex-col bg-[#fdfdfd]">
      <Header data={siteData.header} />
      <BreadcrumbBanner
        title="Terms & Conditions"
        paths={[
          { name: "HOME", href: "/" },
          { name: "TERMS & CONDITIONS", href: "/terms-conditions" },
        ]}
      />
      
      <TermsClientComponent data={data} />
      
      <Footer data={siteData.footer} />
    </main>
  );
}
