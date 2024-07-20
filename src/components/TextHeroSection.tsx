import React from "react";
import { FlipWords } from "@/app/ui/flip-words";

export function TextHeroSection() {
  const words = ["website", "seo", "responsive", "modern"];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        We build
        <FlipWords words={words} /> <br />
        websites with Aceterni
      </div>
    </div>
  );
}
