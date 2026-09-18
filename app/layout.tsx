import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SpeakNSolve | Online speaking, writing and reasoning classes',
  description:
    'SpeakNSolve helps children build confident speaking, creative writing, vocabulary and logical reasoning skills through live classes, workshops, resources and progress tracking.',
  openGraph: {
    title: 'SpeakNSolve',
    description:
      'Live online courses, demos, workshops and learning portals for confident speakers and creative thinkers.',
    images: ['/speaknsolve-hero.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
