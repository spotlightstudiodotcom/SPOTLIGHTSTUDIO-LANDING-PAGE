import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { cn } from "./lib/utils"; 
import "./globals.css";
import { ThemeProvider } from "./context/Context";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.studiospotlight.com.br"),
  title: "Spotlight Studio | Criação de Sites, Marketing Digital e SEO",
  description: "Spotlight Studio é um estúdio digital especializado em criação de sites, marketing digital, SEO, design e branding. Transformamos sua presença online com soluções personalizadas.",
  authors: [
    {
      name: "Spotlight Studio",
      url: "https://www.studiospotlight.com.br/",
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-48x48.ico",
    apple: "/apple-touch-icon.ico",
  },
  keywords: [
    "Spotlight Studio",
    "Criação de Sites",
    "Marketing Digital",
    "SEO",
    "Design",
    "Desenvolvimento Web",
    "Branding",
    "Naming",
    "Performance",
    "Estúdio Digital",
    "Agência Digital",
  ],
  openGraph: {
    title: "Spotlight Studio | Criação de Sites, Marketing Digital e SEO",
    description:
      "Spotlight Studio é um estúdio digital especializado em criação de sites, marketing digital, SEO, design e branding. Transformamos sua presença online com soluções personalizadas.",
    url: "https://www.studiospotlight.com.br/",
    siteName: "Spotlight Studio",
    images: [
      {
        url: "https://www.studiospotlight.com.br/spotlight-logo.png",
        width: 250,
        height: 150,
        alt: "Spotlight Studio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  assets : "/spotlight-logo.png",
  alternates : {
    canonical : "https://www.studiospotlight.com.br/",
    languages : {
      "pt-BR" : "/",
    }
  }

};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(openSans.className, "bg-black")}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
