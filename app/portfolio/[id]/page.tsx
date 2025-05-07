"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Logo from "@/components/logo"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { projectData, projectsArray } from "@/lib/projects"

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
  return projectData[id]?.name || ""
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const router = useRouter()
  
  // Use useState with a function to initialize the state, avoiding direct use of params.id
  const [currentId, setCurrentId] = useState<number>(() => {
    try {
      const idString = params.id?.split("-")[0] || "1"
      return Number.parseInt(idString)
    } catch (e) {
      return 1 // Default to first project if parsing fails
    }
  })
  
  // Update currentId when params.id changes
  useEffect(() => {
    if (params.id) {
      try {
        const idString = params.id.split("-")[0]
        setCurrentId(Number.parseInt(idString))
      } catch (e) {
        setCurrentId(1) // Default to first project if parsing fails
      }
    }
  }, [params.id])
  
  const [project, setProject] = useState({
    id: 1, // Will be updated by effect
    name: "",
    description: "A comprehensive design project showcasing UX/UI skills and product thinking.",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    details:
      "This project involved extensive user research, wireframing, prototyping, and visual design. The goal was to create an intuitive and engaging user experience that meets both user needs and business objectives.",
    role: "Lead Designer",
    duration: "3 months",
    year: "2023",
    processDetails: [] as string[],
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
    fallback: "/placeholder.svg?height=800&width=1200",
  })

  // Total number of projects (from our centralized data source)
  const totalProjects = projectsArray.length

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
    // Get the selected project from our shared data
    const selectedProject = projectData[currentId];

    if (selectedProject) {
      // Create folder-friendly project name
      const projectFolder = selectedProject.name.toLowerCase().replace(/\s+/g, "-");
      
      // Update the project images with project-specific images if available
      const projectSpecificImages = {
        main: `/projects/${projectFolder}/main.jpg`,
        secondary: [
          `/projects/${projectFolder}/feature1.jpg`,
          `/projects/${projectFolder}/feature2.jpg`,
          `/projects/${projectFolder}/feature3.jpg`,
          `/projects/${projectFolder}/feature4.jpg`,
          `/projects/${projectFolder}/feature5.jpg`,
        ],
      }

      setProject((prev) => ({
        ...prev,
        id: selectedProject.id,
        name: selectedProject.name,
        description: selectedProject.description,
        category: selectedProject.category,
        imageUrl: `/projects/${projectFolder}/hero.jpg`,
        images: projectSpecificImages,
        // Add dynamic project details
        details: selectedProject.details || prev.details,
        role: selectedProject.role || prev.role,
        duration: selectedProject.duration || prev.duration,
        year: selectedProject.year || prev.year,
        processDetails: selectedProject.processDetails || [
          "The design process began with extensive user research to understand the target audience's needs and pain points. This informed the creation of user personas and journey maps, which guided the wireframing and prototyping phases.",
          "Multiple iterations of the design were tested with users to refine the experience. The final design was implemented in collaboration with the development team, ensuring that the vision was executed accurately."
        ],
        // Save a placeholder fallback based on the project name
        fallback: `/placeholder.svg?height=800&width=1200&text=${selectedProject.name.replace(/\s+/g, "+")}`,
      }))
    }

    // Get names of previous and next projects for navigation
    const prevProjectName = projectData[prevId]?.name || `Project ${prevId}`
    const nextProjectName = projectData[nextId]?.name || `Project ${nextId}`

    setAdjacentProjects({
      prev: { id: prevId, name: prevProjectName },
      next: { id: nextId, name: nextProjectName },
    })

    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [currentId, prevId, nextId]) // Re-run when currentId changes

  // Log image paths for debugging
  useEffect(() => {
    console.log("Current project images:", {
      hero: project.imageUrl,
      main: project.images.main,
      secondary: project.images.secondary
    });
  }, [project]);

  return (
    <main className="min-h-screen bg-white text-black">
      {/* White header variant */}
      <header className="container mx-auto px-4 py-8 flex justify-between items-center bg-white text-blue-950 border-b border-gray-200">
        <Navbar variant="white" />
      </header>
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center mb-8 hover:opacity-70 transition-opacity text-blue-950 hover-glitch"
        >
          <ArrowLeft className="mr-2 h-4 w-4 text-blue-950" />
          Back
        </button>
        <div className="w-full mx-auto">
          <div className="text-3xl md:text-4xl font-medium mb-4 text-blue-950">{project.name}</div>
          <p className="text-xl text-blue-950 mb-8">{project.description}</p>
          <div className="mb-12 overflow-hidden group cursor-pointer rounded-6xl">
            <div className="relative pt-[75%] rounded-6xl overflow-hidden w-full h-full">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.name}
                width={1600}
                height={1200}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-6xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = project.fallback || `/placeholder.svg?height=800&width=1200&text=${project.name.replace(/\s+/g, "+")}`;
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-sm text-blue-950 mb-1">ROLE</div>
              <p className="text-blue-950">{project.role}</p>
            </div>
            <div>
              <div className="text-sm text-blue-950 mb-1">DURATION</div>
              <p className="text-blue-950">{project.duration}</p>
            </div>
            <div>
              <div className="text-sm text-blue-950 mb-1">YEAR</div>
              <p className="text-blue-950">{project.year}</p>
            </div>
          </div>
          <div className="space-y-6 text-lg text-blue-950">
            <p>{project.details}</p>
            {project.processDetails && project.processDetails.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
          {/* Project Images Grid - Updated asymmetrical layout without containers */}
          <div className="mt-16 grid grid-cols-12 gap-4">
            {/* Top row */}
            <div className="col-span-12 md:col-span-8 overflow-hidden rounded-6xl border border-slate-200">
              <div className="relative pt-[62.5%] rounded-6xl overflow-hidden w-full h-full">
                <Image
                  src={project.images.main || "/placeholder.svg"}
                  alt={`${project.name} main view`}
                  width={800}
                  height={500}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-6xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `/placeholder.svg?height=500&width=800&text=${project.name.replace(/\s+/g, "+")}+Main`;
                  }}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 overflow-hidden rounded-6xl border border-slate-200">
              <div className="relative pt-[125%] rounded-6xl overflow-hidden w-full h-full">
                <Image
                  src={project.images.secondary[0] || "/placeholder.svg"}
                  alt={`${project.name} detail view`}
                  width={400}
                  height={500}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-6xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `/placeholder.svg?height=500&width=400&text=${project.name.replace(/\s+/g, "+")}+Feature`;
                  }}
                />
              </div>
            </div>

            {/* Bottom row */}
            <div className="col-span-12 md:col-span-4 overflow-hidden rounded-6xl border border-slate-200">
              <div className="relative pt-[125%] rounded-6xl overflow-hidden w-full h-full">
                <Image
                  src={project.images.secondary[1] || "/placeholder.svg"}
                  alt={`${project.name} detail view`}
                  width={400}
                  height={500}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-6xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `/placeholder.svg?height=500&width=400&text=${project.name.replace(/\s+/g, "+")}+Search`;
                  }}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 overflow-hidden rounded-6xl border border-slate-200">
              <div className="relative pt-[37.5%] rounded-6xl overflow-hidden w-full h-full">
                <Image
                  src={project.images.secondary[2] || "/placeholder.svg"}
                  alt={`${project.name} overview`}
                  width={800}
                  height={300}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-6xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `/placeholder.svg?height=300&width=800&text=${project.name.replace(/\s+/g, "+")}+Settings`;
                  }}
                />
              </div>
            </div>
          </div>

          {/* Additional Project Images - Second asymmetrical grid */}
          <div className="mt-8 grid grid-cols-12 gap-4">
            {/* Additional images */}
            <div className="col-span-12 md:col-span-6 overflow-hidden rounded-6xl border border-slate-200">
              <div className="relative pt-[66.7%] rounded-6xl overflow-hidden w-full h-full">
                <Image
                  src={project.images.secondary[3] || "/placeholder.svg"}
                  alt={`${project.name} additional view`}
                  width={600}
                  height={400}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-6xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `/placeholder.svg?height=400&width=600&text=${project.name.replace(/\s+/g, "+")}+Profile`;
                  }}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 overflow-hidden rounded-6xl border border-slate-200">
              <div className="relative pt-[66.7%] rounded-6xl overflow-hidden w-full h-full">
                <Image
                  src={project.images.secondary[4] || "/placeholder.svg"}
                  alt={`${project.name} additional view`}
                  width={600}
                  height={400}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-6xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `/placeholder.svg?height=400&width=600&text=${project.name.replace(/\s+/g, "+")}+Overview`;
                  }}
                />
              </div>
            </div>
          </div>
          {/* Project showcase section with Like button */}
          <div className="mt-24 py-16 bg-white text-black text-center">
            <LikeButton projectId={project.id} />
            <div className="text-3xl font-bold mb-2">{project.name}</div>
            <p className="text-md max-w-2xl mx-auto">{project.description}</p>
          </div>
          {/* Project Navigation */}
          <div className="mt-16 flex justify-between items-center py-6 border-t border-b border-gray-200 bg-white text-black">
            <button
              onClick={() => navigateToProject(prevId, adjacentProjects.prev.name)}
              className="flex items-center space-x-2 group hover:text-gray-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-sm text-gray-500">Previous</div>
                <div className="font-medium hover-glitch">{adjacentProjects.prev.name}</div>
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
                      projectId === currentId ? "bg-black scale-125" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to ${projectName}`}
                  />
                )
              })}
            </div>

            <button
              onClick={() => navigateToProject(nextId, adjacentProjects.next.name)}
              className="flex items-center space-x-2 group hover:text-gray-600 transition-colors"
            >
              <div className="text-right">
                <div className="text-sm text-gray-500">Next</div>
                <div className="font-medium hover-glitch">{adjacentProjects.next.name}</div>
              </div>
              <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
