
import Header from '@/components/Header';
import './globals.css';
import React from "react"
import type { Metadata } from 'next'
import Footer from '@/components/Footer';
import ThemeProvider from './ThemeProvider'
export const metadata: Metadata = {
  title: 'Layout',
  description: 'Welcome to Next.js',
  icons: [{ rel: "icon", url: "/strapi-.svg" }]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider attribute="class">
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}