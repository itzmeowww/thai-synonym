import { Google_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Nav from "@/components/navigation/nav";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/navigation/footer";

const googleSans = Google_Sans({ subsets: ['latin'], variable: '--font-sans' });


const BASE_URL = 'https://thai-synonym.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ค้นหาคำไวพจน์ภาษาไทย",
    template: "%s | คำไวพจน์ภาษาไทย",
  },
  description: "เครื่องมือค้นหาคำไวพจน์ภาษาไทยออนไลน์ ค้นหาคำที่มีความหมายเหมือนกัน เช่น นก เต่า ต้นไม้ และอื่น ๆ อีกมากมาย",
  keywords: ["คำไวพจน์", "ไวพจน์", "ภาษาไทย", "คำพ้องความหมาย", "synonym", "Thai synonym"],
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: BASE_URL,
    siteName: "คำไวพจน์ภาษาไทย",
    title: "ค้นหาคำไวพจน์ภาษาไทย",
    description: "เครื่องมือค้นหาคำไวพจน์ภาษาไทยออนไลน์ ค้นหาคำที่มีความหมายเหมือนกัน",
  },
  twitter: {
    card: "summary",
    title: "ค้นหาคำไวพจน์ภาษาไทย",
    description: "เครื่องมือค้นหาคำไวพจน์ภาษาไทยออนไลน์ ค้นหาคำที่มีความหมายเหมือนกัน",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={cn("antialiased", googleSans.variable)}
    >
      <body>
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
          <Toaster />

        </ThemeProvider>
      </body>
    </html>
  )
}
