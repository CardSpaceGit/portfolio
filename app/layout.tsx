import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import "./globals.css"
import { mtnBrighterSans } from "./fonts"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Product Design Portfolio",
  description: "A minimalist product design portfolio",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={`${mtnBrighterSans.variable} bg-[#050510] text-white min-h-screen`}
        suppressHydrationWarning
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
