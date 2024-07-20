import type { Metadata } from "next";
import { Inter,Open_Sans } from "next/font/google";
import { cn } from "./lib/utils"; 
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "spotlight. | Um estúdio digital que cria sites que não só brilham, mas também performam.",
  description: "Um estúdio digital que cria sites que não só brilham, mas também performam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(openSans.className, "bg-black")}>
        {children}
      </body>
    </html>
  );
}
