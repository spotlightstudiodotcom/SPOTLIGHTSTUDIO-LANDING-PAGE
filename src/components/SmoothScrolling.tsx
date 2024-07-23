"use client";
import React from 'react';
import useLenis from '../app/lib/useLenis';

export function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useLenis();
  return (
    <div>
      {children}
    </div>
  );
}

export default SmoothScrolling;
