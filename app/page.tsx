"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import Navbar from "@/components/navbar"
import Logo from "@/components/logo"
import ProjectFilter from "@/components/project-filter"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"

// Background Cells Component
interface BackgroundCellsProps {
  children?: React.ReactNode
  className?: string
}

const BackgroundCells = ({ children, className }: BackgroundCellsProps) => {
  return (
    <div className={cn("relative h-screen w-screen flex justify-center overflow-hidden", className)}>
      <BackgroundCellCore />
      {children && <div className="relative z-50 pointer-events-none select-none w-full">{children}</div>}
    </div>
  )
}

const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      })
    }
  }

  const size = 300
  return (
    <div ref={ref} onMouseMove={handleMouseMove} className="h-full w-full absolute inset-0">
      <div className="absolute h-[20rem] w-full inset-0 overflow-hidden">
        <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-[#050510] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
        <div
          className="absolute inset-0 z-20 bg-transparent w-full"
          style={{
            maskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-blue-600 relative z-[100]" />
        </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
      </div>
    </div>
  )
}

interface PatternProps {
  className?: string
  cellClassName?: string
}

const Pattern = ({ className, cellClassName }: PatternProps) => {
  const x = new Array(47).fill(0)
  const y = new Array(30).fill(0)
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]))
  const [clickedCell, setClickedCell] = useState<[number, number] | null>(null)
  const controls = useAnimation()

  const handleCellClick = useCallback((rowIdx: number, colIdx: number) => {
    setClickedCell([rowIdx, colIdx])
  }, [])

  useEffect(() => {
    if (clickedCell) {
      const [rowIdx, colIdx] = clickedCell
      matrix.forEach((row, i) => {
        row.forEach((_, j) => {
          const distance = Math.sqrt(Math.pow(rowIdx - i, 2) + Math.pow(colIdx - j, 2))
          controls.start({
            opacity: [0, 1 - distance * 0.1, 0],
            transition: { duration: distance * 0.2 },
          })
        })
      })
    }
  }, [clickedCell, controls, matrix])

  return (
    <div className={cn("flex flex-row relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div key={`matrix-row-${rowIdx}`} className="flex flex-col relative z-20 border-b">
          {row.map((column, colIdx) => {
            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn("bg-transparent border-l border-b border-neutral-600", cellClassName)}
                onClick={() => handleCellClick(rowIdx, colIdx)}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  animate={controls}
                  className="bg-[rgba(14,165,233,0.3)] h-12 w-12"
                />
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

function GlitchingTitle() {
  const [isFirstTitle, setIsFirstTitle] = useState(true)
  const [displayText, setDisplayText] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const firstTitle = ["Product", "", "Designer"]
  const secondTitle = ["AI", "UX", "", "Engineer"]

  const currentTitle = isFirstTitle ? firstTitle : secondTitle

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping && !isDeleting) {
      // Typing effect
      if (currentIndex < currentTitle.length) {
        const word = currentTitle[currentIndex]
        const currentLength = displayText[currentIndex]?.length || 0

        if (currentLength < word.length) {
          timeout = setTimeout(() => {
            setDisplayText((prev) => {
              const newText = [...prev]
              newText[currentIndex] = word.substring(0, currentLength + 1)
              return newText
            })
          }, 100) // Typing speed
        } else {
          // Move to next word
          timeout = setTimeout(() => {
            setCurrentIndex((prev) => prev + 1)
          }, 200)
        }
      } else {
        // All words typed
        setIsComplete(true) // Set complete when typing is finished
        timeout = setTimeout(() => {
          setIsComplete(false) // Turn off glitch when starting to delete
          setIsDeleting(true)
          setCurrentIndex(currentTitle.length - 1)
        }, 3000) // Increased pause before deleting to give more time for the glitch effect
      }
    } else if (isDeleting) {
      // Deleting effect
      if (currentIndex >= 0) {
        const currentLength = displayText[currentIndex]?.length || 0

        if (currentLength > 0) {
          timeout = setTimeout(() => {
            setDisplayText((prev) => {
              const newText = [...prev]
              newText[currentIndex] = newText[currentIndex].substring(0, currentLength - 1)
              return newText
            })
          }, 50) // Deleting speed (faster than typing)
        } else {
          // Move to previous word
          timeout = setTimeout(() => {
            setCurrentIndex((prev) => prev - 1)
          }, 100)
        }
      } else {
        // All words deleted
        timeout = setTimeout(() => {
          setIsFirstTitle((prev) => !prev)
          setIsDeleting(false)
          setCurrentIndex(0)
          setDisplayText([])
        }, 500)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentTitle, currentIndex, displayText, isDeleting, isTyping, isFirstTitle])

  return (
    <>
      {currentTitle.map((word, index) => {
        const displayWord = displayText[index] || ""
        const isCurrentWord = index === currentIndex

        return (
          <span
            key={index}
            className={`${isComplete ? "glitch-text" : ""} relative font-titling text-gray-300 inline-block ${
              isCurrentWord && !isDeleting ? "after:content-['|'] after:ml-1 after:animate-blink" : ""
            }`}
            data-text={displayWord}
          >
            {displayWord}
          </span>
        )
      })}
    </>
  )
}

type FilterCategory = "Mobile Applications" | "Desktop Applications" | "Branding"

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("Mobile Applications")
  const [showFilter, setShowFilter] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)

  // Updated projects data with all 15 projects
  const projects = [
    // Mobile Applications (9)
    {
      id: 1,
      name: "WanderMap",
      tagline: "Explore like a local, anywhere in the world.",
      description:
        "A location-based travel companion that offers personalized recommendations, offline maps, and hidden gems curated by locals. WanderMap helps travelers discover authentic experiences beyond typical tourist attractions.",
      imageUrl: "images/projects/wandermap/main.jpg",
      category: "Mobile Applications" as const,
    },
    {
      id: 2,
      name: "MealPrep Pro",
      tagline: "Meal planning simplified for busy professionals.",
      description:
        "An all-in-one meal planning app that generates personalized weekly meal plans based on dietary preferences, creates shopping lists, and provides step-by-step cooking instructions with time-saving batch preparation techniques.",
      imageUrl: "/images/projects/mealprep/main.jpg",
      category: "Mobile Applications" as const,
    },
    {
      id: 3,
      name: "FocusFlow",
      tagline: "Master your productivity, one focused session at a time.",
      description:
        "A productivity app combining the Pomodoro technique with flow state science, helping users achieve deep work through customized focus sessions, ambient soundscapes, and distraction blocking.",
      imageUrl: "/images/projects/focusflow/main.jpg",
      category: "Mobile Applications" as const,
    },
    {
      id: 4,
      name: "PocketClinic",
      tagline: "Healthcare in your pocket, anytime, anywhere.",
      description:
        "A telemedicine platform connecting patients with healthcare providers for virtual consultations, prescription management, and health monitoring through an intuitive mobile interface.",
      imageUrl: "/images/projects/pocketclinic/main.jpg",
      category: "Mobile Applications" as const,
    },
    {
      id: 5,
      name: "GreenThumb",
      tagline: "Your personal plant care assistant.",
      description:
        "A plant care companion app that identifies plants through image recognition, provides care schedules, troubleshoots common issues, and connects users with a community of plant enthusiasts.",
      imageUrl: "/images/projects/greenthumb/main.jpg",
      category: "Mobile Applications" as const,
    },
    {
      id: 6,
      name: "BudgetBuddy",
      tagline: "Making financial freedom achievable.",
      description:
        "A personal finance app that automatically categorizes expenses, provides visual spending insights, and offers personalized recommendations to help users reach their financial goals.",
      imageUrl: "/images/projects/budgetbuddy/main.jpg",
      category: "Mobile Applications" as const,
    },
    {
      id: 7,
      name: "FitSync",
      tagline: "Personalized fitness, perfectly synchronized.",
      description:
        "A fitness tracking app that adapts workouts based on user progress, available equipment, and recovery needs, while synchronizing with wearable devices for comprehensive health monitoring.",
      imageUrl: "/images/projects/fitsync/main.jpg",
      category: "Mobile Applications" as const,
    },
    {
      id: 8,
      name: "NightSky",
      tagline: "The universe in your hands.",
      description:
        "An augmented reality astronomy app that identifies celestial objects when pointing your phone at the sky, provides information about stars, planets, and constellations, and notifies users of upcoming astronomical events.",
      imageUrl: "/images/projects/nightsky/main.jpg",
      category: "Mobile Applications" as const,
    },
    {
      id: 9,
      name: "LinguaLeap",
      tagline: "Language learning that fits your life.",
      description:
        "An adaptive language learning app that uses AI to create personalized lesson plans, incorporates speech recognition for pronunciation feedback, and integrates learning opportunities into daily activities.",
      imageUrl: "/images/projects/lingualeap/main.jpg",
      category: "Mobile Applications" as const,
    },

    // Desktop Applications (4)
    {
      id: 10,
      name: "StudioFlow",
      tagline: "Creative workflow management for design teams.",
      description:
        "A comprehensive project management platform for creative teams that streamlines asset management, feedback cycles, and approval processes while integrating with popular design tools.",
      imageUrl: "/placeholder.svg?height=600&width=500&text=StudioFlow+Desktop",
      category: "Desktop Applications" as const,
    },
    {
      id: 11,
      name: "CodeCanvas",
      tagline: "Where coding meets visual thinking.",
      description:
        "An innovative IDE that combines traditional coding with visual programming elements, making software development more intuitive and accessible for both beginners and experienced developers.",
      imageUrl: "/placeholder.svg?height=600&width=500&text=CodeCanvas+Desktop",
      category: "Desktop Applications" as const,
    },
    {
      id: 12,
      name: "DataLoom",
      tagline: "Weaving complex data into clear insights.",
      description:
        "A powerful data visualization and analysis tool that transforms complex datasets into interactive dashboards and reports without requiring advanced technical skills.",
      imageUrl: "/placeholder.svg?height=600&width=500&text=DataLoom+Desktop",
      category: "Desktop Applications" as const,
    },
    {
      id: 13,
      name: "SoundScape",
      tagline: "Professional audio production made accessible.",
      description:
        "A digital audio workstation designed for podcasters, musicians, and content creators that simplifies complex audio editing tasks while maintaining professional-grade output quality.",
      imageUrl: "/placeholder.svg?height=600&width=500&text=SoundScape+Desktop",
      category: "Desktop Applications" as const,
    },

    // Branding (2)
    {
      id: 14,
      name: "EcoEssence",
      tagline: "Sustainable branding for conscious businesses.",
      description:
        "A complete brand identity system for an eco-friendly product line, including logo design, sustainable packaging guidelines, color palette, typography, and marketing materials that emphasize environmental responsibility.",
      imageUrl: "/placeholder.svg?height=600&width=500&text=EcoEssence+Branding",
      category: "Branding" as const,
    },
    {
      id: 15,
      name: "TechNexus",
      tagline: "Bridging humanity and technology through design.",
      description:
        "A comprehensive rebranding project for a technology conglomerate, creating a cohesive visual language across diverse product lines while positioning the brand at the intersection of cutting-edge innovation and human-centered design.",
      imageUrl: "/placeholder.svg?height=600&width=500&text=TechNexus+Branding",
      category: "Branding" as const,
    },
  ]

  // Filter projects based on active category
  const filteredProjects = projects.filter((project) => project.category === activeFilter)

  // Handle scroll to show filter
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 300) {
        setShowFilter(true)
      } else {
        setShowFilter(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle filter change
  const handleFilterChange = (category: FilterCategory) => {
    setActiveFilter(category)
    // Scroll to projects section if not already there
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#050510]">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Logo />
        <Navbar />
      </div>

      {/* Hero section with background effect */}
      <BackgroundCells className="bg-[#050510] w-screen mx-auto">
        <div className="flex-1 flex flex-col justify-between min-h-[calc(100vh-90px)] container mx-auto">
          {/* Main content area */}
          <div className="flex items-center justify-center flex-grow">
            <div className="flex flex-col items-center text-center max-w-3xl px-4 pointer-events-auto">
              {/* Fixed height container for the glitching title */}
              <div className="text-9xl md:text-9xl font-light tracking-tight flex gap-3 mb-4 h-32 md:h-40">
                <GlitchingTitle />
              </div>

              {/* Static text container */}
              <div className="static md:w-[800px]">
                <div className="text-3xl md:text-5xl font-light text-gray-300 mb-6">
                  An Experience Product Designer — Based in South Africa
                </div>
                <p className="text-xl md:text-xl text-gray-400 leading-relaxed">
                  Imagination opens the door to remarkable experiences—enabling the creation of solutions that are
                  simple yet powerful, surpassing expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Links - Full width at bottom of landing screen */}
          <div className="w-full py-8 mt-8 pointer-events-auto">
            <div className="w-full border-t border-gray-800 pt-8">
              <div className="container mx-auto flex justify-center space-x-16 md:space-x-24">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative pb-1 uppercase tracking-wider text-xs md:text-xs hover:opacity-80 transition-opacity after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white hover-glitch"
                >
                  Dribbble
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative pb-1 uppercase tracking-wider text-xs md:text-xs hover:opacity-80 transition-opacity after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white hover-glitch"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative pb-1 uppercase tracking-wider text-xs md:text-xs hover:opacity-80 transition-opacity after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white hover-glitch"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </BackgroundCells>

      {/* Filter section that appears on scroll */}
      <div
        className={`sticky h-20 top-0 z-20 bg-[#050510]/40 backdrop-blur-2xl transition-all duration-500 ${
          showFilter ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto">
          <ProjectFilter onFilterChange={handleFilterChange} activeFilter={activeFilter} />
        </div>
      </div>

      {/* Projects section - 2 COLUMN GRID LAYOUT */}
      <div ref={projectsRef} className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {filteredProjects.map((project) => (
            <Link
              href={`/portfolio/${project.id}`}
              key={project.id}
              className="group block relative overflow-hidden rounded-[48px] h-[600px] w-full"
            >
              {/* Image */}
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.name}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                // The object-cover property ensures images with different aspect ratios still look good
                // For best performance, use actual image dimensions that match your design
              />

              {/* Overlay content - visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-white uppercase tracking-wider mb-3 inline-block hover-glitch">
                    {project.category}
                  </span>
                  <div className="text-2xl font-medium mb-3 text-white hover-glitch">
                    {project.name}
                  </div>
                  <p className="text-white mb-4 line-clamp-3 hover-glitch">
                    {project.tagline}
                  </p>
                  <p className="text-white text-sm mb-4 line-clamp-2 hover-glitch">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center text-white border-b border-white pb-1 group-hover:pl-2 transition-all duration-300 hover-glitch">
                    View Project <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Full-width white background section with mission statement */}
      <div className="w-full bg-white text-black py-24 mt-24">
        <div className="container mx-auto px-4">
          <div className="text-4xl md:text-6xl lg:text-7xl max-w-5xl mx-auto text-center leading-tight">
            We create interfaces. Guided by insights. Designed with intention. Made for humans. To generate real value.
          </div>
        </div>
      </div>
    </main>
  )
}
