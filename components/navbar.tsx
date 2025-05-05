"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Logo from "./logo"

export default function Navbar({ variant = "default" }: { variant?: "default" | "white" }) {
  const pathname = usePathname()
  const isWhiteVariant = variant === "white"
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Close menu when clicking outside or changing route
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-menu="true"]') && !target.closest('[data-menu-button="true"]')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])
  
  const navItems = [
    { name: "PORTFOLIO", path: "/" },
    { name: "PLAYGROUND", path: "/playground" },
    { name: "MORE ABOUT ME", path: "/info" },
  ]
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Mobile sidebar menu
  const MobileSidebar = () => (
    <div className="w-full flex justify-between items-center">
      {/* Logo on the left */}
      <Logo />
      
      {/* Menu button on the right */}
      <button 
        onClick={toggleMenu} 
        data-menu-button="true"
        className="relative z-50"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className={`w-6 h-6 ${isWhiteVariant ? 'text-black' : 'text-white'}`} />
        ) : (
          <Menu className={`w-6 h-6 ${isWhiteVariant ? 'text-black' : 'text-white'}`} />
        )}
      </button>
      
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      
      {/* Sidebar */}
      <div 
        data-menu="true"
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white/90 backdrop-blur-2xl text-black p-8 z-[100] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-12">
          <Logo />
        </div>
        <nav className="flex flex-col space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`group text-lg relative pb-1 hover-glitch ${
                pathname === item.path
                  ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black"
                  : "hover:opacity-70 transition-opacity"
              } text-black`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )

  // Desktop navbar
  const DesktopNavbar = () => (
    <div className="w-full flex justify-between items-center">
      {/* Logo on the left */}
      <Logo />
      
      {/* Navigation links on the right */}
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
    </div>
  )

  return isMobile ? <MobileSidebar /> : <DesktopNavbar />
}
