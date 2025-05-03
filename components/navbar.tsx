"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

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
          className={`relative pb-1 ${
            pathname === item.path
              ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white"
              : "hover:opacity-70 transition-opacity"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
