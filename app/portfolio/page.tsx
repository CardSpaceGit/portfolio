import Navbar from "@/components/navbar"
import Logo from "@/components/logo"
import ProjectCard from "@/components/project-card"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "UX/UI Design",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Product Design",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Brand Identity",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Logo />
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}
