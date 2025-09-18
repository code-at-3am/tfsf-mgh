import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Courgette } from "next/font/google";
import "../../globals.css";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Lang } from "@/common/types";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const courgette = Courgette({
  weight: "400",
  variable: "--font-courgette",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: '#fff'
}

interface RootLayoutProps {
  children: ReactNode,
  params: Promise<{ lang: string }>
}

export default async function RootLayout({ children, params }: Readonly<RootLayoutProps>) {
  const { lang } = await params
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${courgette.variable} antialiased`}
      >
        <Header lang={lang as Lang} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
