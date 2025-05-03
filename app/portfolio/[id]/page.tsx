"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Logo from "@/components/logo"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectPageProps {
  params: {
    id: string
  }
}

// Dynamically import react-confetti to avoid SSR issues
const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false })

function LikeButton({ projectId }: { projectId: number }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  // Set up window size for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Initial size
    handleResize()

    // Update on resize
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Check if user has already liked this project
  useEffect(() => {
    const likedProjects = JSON.parse(localStorage.getItem("likedProjects") || "{}")
    if (likedProjects[projectId]) {
      setLiked(true)
    }

    // Get like count from localStorage (in a real app, this would come from a database)
    const projectLikes = JSON.parse(localStorage.getItem(`project_${projectId}_likes`) || "0")
    setLikeCount(projectLikes)
  }, [projectId])

  const handleLike = () => {
    if (liked) return // User already liked this project

    // Update liked state
    setLiked(true)

    // Save to localStorage
    const likedProjects = JSON.parse(localStorage.getItem("likedProjects") || "{}")
    likedProjects[projectId] = true
    localStorage.setItem("likedProjects", JSON.stringify(likedProjects))

    // Update like count
    const newCount = likeCount + 1
    setLikeCount(newCount)
    localStorage.setItem(`project_${projectId}_likes`, JSON.stringify(newCount))

    // Show confetti
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000) // Hide confetti after 5 seconds
  }

  return (
    <>
      {showConfetti && (
        <ReactConfetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={500} />
      )}
      <div className="relative inline-block">
        <button
          onClick={handleLike}
          disabled={liked}
          className={`mx-auto w-16 h-16 ${
            liked ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-700"
          } rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
            liked ? "scale-110" : "transform hover:scale-105"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
            <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
          </svg>
        </button>
        {likeCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {likeCount}
          </div>
        )}
      </div>
      <h2 className="text-center text-2xl font-medium mb-2">{liked ? "Liked!" : "Like"}</h2>
    </>
  )
}

// Helper function to get project name by ID
const getProjectNameById = (id: number): string => {
  const projectData = {
    // Mobile Applications (9)
    1: "WanderMap",
    2: "MealPrep Pro",
    3: "FocusFlow",
    4: "PocketClinic",
    5: "GreenThumb",
    6: "BudgetBuddy",
    7: "FitSync",
    8: "NightSky",
    9: "LinguaLeap",
    // Desktop Applications (4)
    10: "StudioFlow",
    11: "CodeCanvas",
    12: "DataLoom",
    13: "SoundScape",
    // Branding (2)
    14: "EcoEssence",
    15: "TechNexus",
  }

  return projectData[id as keyof typeof projectData] || ""
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const router = useRouter()
  const currentId = Number.parseInt(params.id.split("-")[0])
  const [project, setProject] = useState({
    id: currentId,
    name: "",
    description: "A comprehensive design project showcasing UX/UI skills and product thinking.",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    details:
      "This project involved extensive user research, wireframing, prototyping, and visual design. The goal was to create an intuitive and engaging user experience that meets both user needs and business objectives.",
    role: "Lead Designer",
    duration: "3 months",
    year: "2023",
    images: {
      main: "/placeholder.svg?height=800&width=400&text=App+Screenshot+1",
      secondary: [
        "/placeholder.svg?height=400&width=400&text=App+Screenshot+2",
        "/placeholder.svg?height=400&width=400&text=App+Screenshot+3",
        "/placeholder.svg?height=800&width=400&text=App+Screenshot+4",
        "/placeholder.svg?height=400&width=400&text=App+Screenshot+5",
        "/placeholder.svg?height=400&width=400&text=App+Screenshot+6",
      ],
    },
  })

  // Total number of projects (in a real app, this would come from your data source)
  const totalProjects = 15 // Updated to match the total number of projects

  // Calculate next and previous project IDs
  const nextId = currentId < totalProjects ? currentId + 1 : 1 // Loop back to first project
  const prevId = currentId > 1 ? currentId - 1 : totalProjects // Loop back to last project

  const [adjacentProjects, setAdjacentProjects] = useState({
    prev: { id: prevId, name: "" },
    next: { id: nextId, name: "" },
  })

  // Navigate to next or previous project
  const navigateToProject = (id: number, name: string) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-")
    router.push(`/portfolio/${id}-${slug}`)
  }

  // Fetch project data based on ID
  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll simulate fetching data based on the ID
    const projectData = {
      // Mobile Applications (9)
      1: {
        name: "WanderMap",
        tagline: "Explore like a local, anywhere in the world.",
        description:
          "A location-based travel companion that offers personalized recommendations, offline maps, and hidden gems curated by locals.",
        category: "Mobile Applications",
      },
      2: {
        name: "MealPrep Pro",
        tagline: "Meal planning simplified for busy professionals.",
        description:
          "An all-in-one meal planning app that generates personalized weekly meal plans based on dietary preferences.",
        category: "Mobile Applications",
      },
      3: {
        name: "FocusFlow",
        tagline: "Master your productivity, one focused session at a time.",
        description:
          "A productivity app combining the Pomodoro technique with flow state science, helping users achieve deep work.",
        category: "Mobile Applications",
      },
      4: {
        name: "PocketClinic",
        tagline: "Healthcare in your pocket, anytime, anywhere.",
        description: "A telemedicine platform connecting patients with healthcare providers for virtual consultations.",
        category: "Mobile Applications",
      },
      5: {
        name: "GreenThumb",
        tagline: "Your personal plant care assistant.",
        description:
          "A plant care companion app that identifies plants through image recognition and provides care schedules.",
        category: "Mobile Applications",
      },
      6: {
        name: "BudgetBuddy",
        tagline: "Making financial freedom achievable.",
        description:
          "A personal finance app that automatically categorizes expenses and provides visual spending insights.",
        category: "Mobile Applications",
      },
      7: {
        name: "FitSync",
        tagline: "Personalized fitness, perfectly synchronized.",
        description: "A fitness tracking app that adapts workouts based on user progress and available equipment.",
        category: "Mobile Applications",
      },
      8: {
        name: "NightSky",
        tagline: "The universe in your hands.",
        description:
          "An augmented reality astronomy app that identifies celestial objects when pointing your phone at the sky.",
        category: "Mobile Applications",
      },
      9: {
        name: "LinguaLeap",
        tagline: "Language learning that fits your life.",
        description: "An adaptive language learning app that uses AI to create personalized lesson plans.",
        category: "Mobile Applications",
      },

      // Desktop Applications (4)
      10: {
        name: "StudioFlow",
        tagline: "Creative workflow management for design teams.",
        description:
          "A comprehensive project management platform for creative teams that streamlines asset management.",
        category: "Desktop Applications",
      },
      11: {
        name: "CodeCanvas",
        tagline: "Where coding meets visual thinking.",
        description: "An innovative IDE that combines traditional coding with visual programming elements.",
        category: "Desktop Applications",
      },
      12: {
        name: "DataLoom",
        tagline: "Weaving complex data into clear insights.",
        description:
          "A powerful data visualization and analysis tool that transforms complex datasets into interactive dashboards.",
        category: "Desktop Applications",
      },
      13: {
        name: "SoundScape",
        tagline: "Professional audio production made accessible.",
        description: "A digital audio workstation designed for podcasters, musicians, and content creators.",
        category: "Desktop Applications",
      },

      // Branding (2)
      14: {
        name: "EcoEssence",
        tagline: "Sustainable branding for conscious businesses.",
        description:
          "A complete brand identity system for an eco-friendly product line, including logo design and packaging guidelines.",
        category: "Branding",
      },
      15: {
        name: "TechNexus",
        tagline: "Bridging humanity and technology through design.",
        description:
          "A comprehensive rebranding project for a technology conglomerate, creating a cohesive visual language across diverse product lines while positioning the brand at the intersection of cutting-edge innovation and human-centered design.",
        category: "Branding",
      },
    }

    const selectedProject = projectData[currentId as keyof typeof projectData]

    if (selectedProject) {
      // Update the project images with project-specific images if available
      const projectSpecificImages = {
        main: `/placeholder.svg?height=800&width=400&text=${selectedProject.name.replace(/\s+/g, "+")}+Main`,
        secondary: [
          `/placeholder.svg?height=400&width=400&text=${selectedProject.name.replace(/\s+/g, "+")}+Feature`,
          `/placeholder.svg?height=400&width=400&text=${selectedProject.name.replace(/\s+/g, "+")}+Search`,
          `/placeholder.svg?height=800&width=400&text=${selectedProject.name.replace(/\s+/g, "+")}+Settings`,
          `/placeholder.svg?height=400&width=400&text=${selectedProject.name.replace(/\s+/g, "+")}+Profile`,
          `/placeholder.svg?height=400&width=400&text=${selectedProject.name.replace(/\s+/g, "+")}+Overview`,
        ],
      }

      setProject((prev) => ({
        ...prev,
        name: selectedProject.name,
        description: selectedProject.description,
        category: selectedProject.category,
        imageUrl: `/placeholder.svg?height=800&width=1200&text=${selectedProject.name.replace(/\s+/g, "+")}`,
        images: projectSpecificImages, // Add project-specific images
      }))
    }

    // Get names of previous and next projects for navigation
    const prevProjectName = projectData[prevId as keyof typeof projectData]?.name || `Project ${prevId}`
    const nextProjectName = projectData[nextId as keyof typeof projectData]?.name || `Project ${nextId}`

    setAdjacentProjects({
      prev: { id: prevId, name: prevProjectName },
      next: { id: nextId, name: nextProjectName },
    })

    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [currentId, params.id]) // Re-run when project ID changes

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Logo />
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center mb-8 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </button>
        <div className="w-full mx-auto">
          <div className="text-3xl md:text-4xl font-light mb-4">{project.name}</div>
          <p className="text-xl text-gray-400 mb-8">{project.description}</p>
          <div className="mb-12 overflow-hidden group cursor-pointer">
            <Image
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.name}
              width={1200}
              height={800}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-sm text-gray-400 mb-1">ROLE</div>
              <p>{project.role}</p>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">DURATION</div>
              <p>{project.duration}</p>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">YEAR</div>
              <p>{project.year}</p>
            </div>
          </div>
          <div className="space-y-6 text-lg">
            <p>{project.details}</p>
            <p>
              The design process began with extensive user research to understand the target audience's needs and pain
              points. This informed the creation of user personas and journey maps, which guided the wireframing and
              prototyping phases.
            </p>
            <p>
              Multiple iterations of the design were tested with users to refine the experience. The final design was
              implemented in collaboration with the development team, ensuring that the vision was executed accurately.
            </p>
          </div>
          {/* Project Images Grid - Updated asymmetrical layout without containers */}
          <div className="mt-16 grid grid-cols-12 gap-4">
            {/* Top row */}
            <div className="col-span-12 md:col-span-8 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={project.images.main || "/placeholder.svg"}
                alt={`${project.name} main view`}
                width={800}
                height={500}
                className="w-full h-auto transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="col-span-12 md:col-span-4 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={project.images.secondary[0] || "/placeholder.svg"}
                alt={`${project.name} detail view`}
                width={400}
                height={500}
                className="w-full h-auto transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Bottom row */}
            <div className="col-span-12 md:col-span-4 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={project.images.secondary[1] || "/placeholder.svg"}
                alt={`${project.name} detail view`}
                width={400}
                height={300}
                className="w-full h-auto transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="col-span-12 md:col-span-8 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={project.images.secondary[2] || "/placeholder.svg"}
                alt={`${project.name} overview`}
                width={800}
                height={300}
                className="w-full h-auto transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Additional Project Images - Second asymmetrical grid */}
          <div className="mt-8 grid grid-cols-12 gap-4">
            {/* Additional images */}
            <div className="col-span-12 md:col-span-6 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={project.images.secondary[3] || "/placeholder.svg"}
                alt={`${project.name} additional view`}
                width={600}
                height={400}
                className="w-full h-auto transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="col-span-12 md:col-span-6 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={project.images.secondary[4] || "/placeholder.svg"}
                alt={`${project.name} additional view`}
                width={600}
                height={400}
                className="w-full h-auto transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
          {/* Project showcase section with Like button */}
          <div className="mt-24 py-16 bg-white text-black text-center">
            <LikeButton projectId={project.id} />
            <div className="text-5xl font-bold mb-6">{project.name}</div>
            <p className="text-xl max-w-2xl mx-auto">{project.description}</p>
          </div>
          {/* Project Navigation */}
          <div className="mt-16 flex justify-between items-center py-6 border-t border-b border-gray-800">
            <button
              onClick={() => navigateToProject(prevId, adjacentProjects.prev.name)}
              className="flex items-center space-x-2 group hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-sm text-gray-400">Previous</div>
                <div className="font-medium">{adjacentProjects.prev.name}</div>
              </div>
            </button>

            <div className="hidden md:flex space-x-2">
              {Array.from({ length: totalProjects }).map((_, i) => {
                const projectId = i + 1
                const projectName = getProjectNameById(projectId) || `Project ${projectId}`
                return (
                  <button
                    key={i}
                    onClick={() => navigateToProject(projectId, projectName)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      projectId === currentId ? "bg-white scale-125" : "bg-gray-600 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to ${projectName}`}
                  />
                )
              })}
            </div>

            <button
              onClick={() => navigateToProject(nextId, adjacentProjects.next.name)}
              className="flex items-center space-x-2 group hover:text-gray-300 transition-colors"
            >
              <div className="text-right">
                <div className="text-sm text-gray-400">Next</div>
                <div className="font-medium">{adjacentProjects.next.name}</div>
              </div>
              <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
