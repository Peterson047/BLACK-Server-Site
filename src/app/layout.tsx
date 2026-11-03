import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://black-mp.vps-kinghost.net'),
  title: 'BLACK Multiplayer | Play Online & Dedicated Server Browser',
  description: "Play Criterion's tactical shooter BLACK (2006) online on PC. Dedicated server browser, download links, and setup guide.",
  keywords: ['BLACK', 'BLACK Multiplayer', 'BLACK PC Port', 'BLACK Dedicated Server', 'BLACK 2006', 'Criterion Games', 'Team Deathmatch'],
  openGraph: {
    title: 'BLACK Multiplayer | Tactical PC Port Online',
    description: "Play Criterion's tactical shooter BLACK (2006) online on PC with 60+ FPS, native Vulkan, mouse and keyboard or controller support.",
    url: 'https://black-mp.vps-kinghost.net',
    siteName: 'BLACK Multiplayer',
    images: [
      {
        url: '/img/cover_mp.png',
        width: 1280,
        height: 720,
        alt: 'BLACK Multiplayer Cover',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLACK Multiplayer | Play Online',
    description: "Play Criterion's tactical shooter BLACK (2006) online on PC. Dedicated server browser and setup guide.",
    images: ['/img/cover_mp.png'],
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
          href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
