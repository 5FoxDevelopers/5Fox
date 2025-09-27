import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "next-themes"

import { Suspense } from "react"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "5fox - IT Services & Solutions",
  description:
    "Transform your business with innovative IT solutions. Web development, mobile apps, cloud services, cybersecurity, and more.",
    icons: {
    icon: '/5Fox.jpg',
    shortcut: '/5Fox.jpg',
    apple: '/5Fox.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
          <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <Navbar/>
            {children}
            <Footer/>
          </ThemeProvider>
          <Analytics />
        </Suspense>

      </body>
    </html>
  )
}
