import { Google_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Nav from "@/components/navigation/nav";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/navigation/footer";

const googleSans = Google_Sans({ subsets: ['latin'], variable: '--font-sans' });


export const metadata: Metadata = {
  title: "ค้นหาคำไวพจน์",
  description: "ค้นหาคำไวพจน์ นก เต่า ต้นไม้ และอื่น ๆ อีกมากมาย",
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
