"use client";

import HeroSectionPage from "@/components/Homepage/hero-section";
import CategorySection from "@/components/Homepage/category-section";


export default function Home() {
  return (
    <div className="relative mx-auto max-w-7xl ">
      <HeroSectionPage />
      <CategorySection />
    </div>
  );
}


