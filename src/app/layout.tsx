import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { cn } from './lib/utils';
import './globals.css';
import { ThemeProvider } from './context/Context';
import { GoogleTagManager } from '@next/third-parties/google';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.studiospotlight.com.br'),
  title: 'Spotlight Studio | Soluções Digitais Otimizadas',
  description:
    'Spotlight Studio - Seu Parceiro de Soluções Digitais: Especialistas em design de sites, marketing digital, SEO, branding e muito mais. Eleve sua presença online com nossas soluções personalizadas.',
  authors: [
    {
      name: 'Spotlight Studio',
      url: 'https://www.studiospotlight.com.br/',
    },
  ],
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
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
    icon: '/favicon.ico',
    shortcut: '/favicon-48x48.ico',
    apple: '/apple-touch-icon.ico',
  },
  keywords: [
    "Spotlight Studio", "web design", "marketing digital", "SEO", "design de sites", "web development", "agencia digital"
  ],
  openGraph: {
    title: 'Spotlight Studio | Soluções Digitais Otimizadas',
    description:
      'Spotlight Studio - Seu Parceiro de Soluções Digitais: Especialistas em design de sites, marketing digital, SEO, branding e muito mais. Eleve sua presença online com nossas soluções personalizadas.',
    url: 'https://www.studiospotlight.com.br/',
    siteName: 'Spotlight Studio',
    images: [
      {
        url: 'https://www.studiospotlight.com.br/spotlight-logo.png',
        width: 250,
        height: 150,
        alt: 'Spotlight Studio',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  assets: '/spotlight-logo.png',
  alternates: {
    canonical: 'https://www.studiospotlight.com.br/',
    languages: {
      'pt-BR': '/',
    },
  },
};

export const viewport = {
  width: 'device-width',
  type: 'responsive',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <GoogleTagManager gtmId="GTM-T4MMFMXL" />
      <body className={cn(outfit.className, 'min-w-80 bg-black')}>
        <ThemeProvider>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-T4MMFMXL"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
