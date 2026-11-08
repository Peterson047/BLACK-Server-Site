import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Analytics } from '@vercel/analytics/next';

export const viewport: Viewport = {
  themeColor: '#f59e0b',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://black-mp.vps-kinghost.net'),
  title: {
    default: 'BLACK Multiplayer | Servidor Dedicado Oficial & Port PC Nativo',
    template: '%s | BLACK Multiplayer',
  },
  description: "O clássico FPS visceral da Criterion Games (2006) rodando nativamente no Windows x86-64 sem emuladores. Servidor dedicado oficial 24/7 no Brasil, 60+ FPS Vulkan, suporte a controles de Xbox/PlayStation com vibração e mira no mouse.",
  applicationName: 'BLACK Multiplayer',
  authors: [{ name: 'Peterson Alves (Peterson047)' }],
  generator: 'Next.js',
  keywords: [
    'BLACK',
    'BLACK Multiplayer',
    'BLACK PC Port',
    'BLACK Dedicated Server',
    'BLACK 2006',
    'Criterion Games',
    'Team Deathmatch',
    'BLACK FPS',
    'BLACK Xbox PC',
    'BLACK Mod Online',
    'BLACK-XBERecomp',
    'BLACK-Coop'
  ],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
  openGraph: {
    title: 'BLACK Multiplayer | Tactical PC Port Online',
    description: "Jogue o clássico BLACK (2006) online no PC com servidor dedicado 24/7, renderizador Vulkan 1.2+ a 60+ FPS, partidas automáticas e suporte a controle/mouse.",
    url: 'https://black-mp.vps-kinghost.net',
    siteName: 'BLACK Multiplayer',
    images: [
      {
        url: '/img/cover_mp.png',
        width: 1280,
        height: 720,
        alt: 'BLACK Multiplayer - Official Server & PC Port',
        type: 'image/png',
      },
    ],
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLACK Multiplayer | PC Port Online & Dedicated Server',
    description: "Play Criterion Games' tactical shooter BLACK (2006) online on PC with 60+ FPS, native Vulkan, dedicated server, and mouse/controller support.",
    images: ['/img/cover_mp.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Teko:wght@500;700&family=Inter:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4197921130218486"
          crossOrigin="anonymous"
        />
        {/* Schema.org VideoGame Structured Data for Google Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoGame',
              name: 'BLACK Multiplayer',
              description: 'Native PC x86-64 Multiplayer Port and Dedicated Server for Criterion Games BLACK (2006).',
              genre: ['First-Person Shooter', 'Tactical Shooter', 'Multiplayer'],
              gamePlatform: ['PC', 'Windows'],
              operatingSystem: 'Windows 10, Windows 11',
              url: 'https://black-mp.vps-kinghost.net',
              image: 'https://black-mp.vps-kinghost.net/img/cover_mp.png',
            }),
          }}
        />
      </head>
      <body className="tactical-grid min-h-screen relative selection:bg-amber-500 selection:text-black">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
