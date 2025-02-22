import React from 'react';
import { FlipWords } from '@/app/ui/flip-words';

export function TextHeroSection() {
  const words = ['IDENTIDADE VISUAL', 'WEB DESIGN', 'NAMING', 'DESENVOLVIMENTO', 'SEO'];
  return (
    <div className="flex items-center justify-center px-4">
      <div className="mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Somos focados em criar<br></br>{' '}
        <FlipWords className="max-w-prose text-nowrap text-center" words={words} />
      </div>
    </div>
  );
}
