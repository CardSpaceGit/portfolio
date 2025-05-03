"use client"

import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Logo from "@/components/logo"

interface Experiment {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  link?: string;
  featured?: boolean;
}

export default function PlaygroundPage() {
  // Example experimental projects data
  const experiments: Experiment[] = [
    {
      id: 1,
      title: "3D Product Visualization",
      imageUrl: "/placeholder.svg?height=600&width=800&text=3D+Visualization",
      description: "Exploring immersive 3D product visualization techniques using WebGL and Three.js",
      link: "https://example.com/3d-viz",
      featured: true
    },
    {
      id: 2,
      title: "AI-Assisted Design Tool",
      imageUrl: "/placeholder.svg?height=600&width=600&text=AI+Design+Tool",
      description: "Prototype of a design tool that leverages machine learning to enhance creative workflows"
    },
    {
      id: 3,
      title: "Gestural Navigation Concept",
      imageUrl: "/placeholder.svg?height=600&width=600&text=Gestural+Navigation",
      description: "Exploring intuitive gesture-based navigation patterns for touch interfaces"
    },
    {
      id: 4,
      title: "Experimental Typography",
      imageUrl: "/placeholder.svg?height=600&width=600&text=Typography+Experiments",
      description: "Pushing the boundaries of digital typography through creative coding",
      link: "https://example.com/typography"
    },
    {
      id: 5,
      title: "Voice UI Prototype",
      imageUrl: "/placeholder.svg?height=600&width=600&text=Voice+UI",
      description: "Experimental voice user interface patterns for conversational applications"
    },
    {
      id: 6,
      title: "Generative Art Project",
      imageUrl: "/placeholder.svg?height=600&width=600&text=Generative+Art",
      description: "Algorithmic art pieces created using creative coding techniques",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#050510]">
      {/* Header with navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <Logo />
          <Navbar />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-3xl font-light mb-12">Experimental Work & Side Projects</div>
        
        {/* Grid of experiments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiments.map((experiment) => (
            <div
              key={experiment.id}
              className={`rounded-xl overflow-hidden h-96 relative group ${
                experiment.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Image with overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 z-10"></div>
              <Image
                src={experiment.imageUrl}
                alt={experiment.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Content overlay */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="text-xl">{experiment.title}</div>
                <p className="text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {experiment.description}
                </p>
                {experiment.link && (
                  <a
                    href={experiment.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
