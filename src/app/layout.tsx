import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header'
import { Providers } from './providers'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amboss - Lightning Network Marketplace",
  description: "Explore and trade Lightning Network channels on Amboss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
