"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar({ variant = "default" }: { variant?: "default" | "white" }) {
  const pathname = usePathname()
  const isWhiteVariant = variant === "white"

  const navItems = [
    { name: "PORTFOLIO", path: "/" },
    { name: "PLAYGROUND", path: "/playground" },
    { name: "MORE ABOUT ME", path: "/info" },
  ]

  return (
    <nav className="flex space-x-8 text-xs">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`group relative pb-1 hover-glitch ${
            pathname === item.path
              ? `after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-${isWhiteVariant ? 'black' : 'white'}`
              : "hover:opacity-70 transition-opacity"
          } ${isWhiteVariant ? 'text-black' : 'text-white'}`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
