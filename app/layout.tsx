import React from 'react';
import './globals.css';

export const metadata = {
  title: 'आधुनिक प्रचार प्रसार | Aadhunik Prachar Prasar',
  description: 'लखनऊ स्थित अग्रणी राजनीतिक संचार, क्रिएटिव मीडिया और डिजिटल विज्ञापन कंपनी।',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
