import React from "react";
import { FlipWords } from "@/app/ui/flip-words";

export function TextHeroSection() {
  const words = ["INDENTIDADE VISUAL", "WEB DESIGN", "NAMING", "DESENVOLVIMENTO WEB", "SEO"];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="mx-auto font-normal text-neutral-600 dark:text-neutral-400">
         Somos focados em cria<br></br> <FlipWords words={words} />
      </div>
    </div>
  );
}
