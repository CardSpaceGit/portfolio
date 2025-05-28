import type { Metadata } from "next"
import { mtnBrighterSans } from "../fonts"

export const metadata: Metadata = {
  title: "Project Detail",
  description: "Portfolio project detail page",
}

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
    </>
  )
}
