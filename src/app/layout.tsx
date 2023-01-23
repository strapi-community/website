import Link from "next/link";
import { Inter } from "@next/font/google";
import "./globals.css";
import "../styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/bounty">Bounty</Link>
          <Link href="/showcases">Showcases</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
