"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Navbar from "@/components/navbar"
import Logo from "@/components/logo"

interface Experiment {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  category: string;
  link?: string;
}

export default function PlaygroundPage() {
  // Example experimental projects data
  const experiments: Experiment[] = [
    {
      id: 1,
      title: "3D Product Visualization",
      imageUrl: "/placeholder.svg?height=720&width=1280&text=3D+Visualization",
      description: "Exploring immersive 3D product visualization techniques using WebGL and Three.js to create interactive product experiences",
      category: "3D & WebGL"
    },
    {
      id: 2,
      title: "AI-Assisted Design Tool",
      imageUrl: "/placeholder.svg?height=720&width=1280&text=AI+Design+Tool",
      description: "Prototype of a design tool that leverages machine learning to enhance creative workflows and automate repetitive design tasks",
      category: "AI & Machine Learning"
    },
    {
      id: 3,
      title: "Gestural Navigation Concept",
      imageUrl: "/placeholder.svg?height=720&width=1280&text=Gestural+Navigation",
      description: "Exploring intuitive gesture-based navigation patterns for touch interfaces that feel natural and responsive",
      category: "Interaction Design"
    },
    {
      id: 4,
      title: "Experimental Typography",
      imageUrl: "/placeholder.svg?height=720&width=1280&text=Typography+Experiments",
      description: "Pushing the boundaries of digital typography through creative coding and dynamic text animations",
      category: "Typography & Motion"
    },
    {
      id: 5,
      title: "Voice UI Prototype",
      imageUrl: "/placeholder.svg?height=720&width=1280&text=Voice+UI",
      description: "Experimental voice user interface patterns for conversational applications and smart device interactions",
      category: "Voice & Audio"
    },
    {
      id: 6,
      title: "Generative Art Project",
      imageUrl: "/placeholder.svg?height=720&width=1280&text=Generative+Art",
      description: "Algorithmic art pieces created using creative coding techniques and mathematical principles",
      category: "Generative Art"
    },
    {
      id: 7,
      title: "AR Interface Concepts",
      imageUrl: "/placeholder.svg?height=720&width=1280&text=AR+Interface",
      description: "Augmented reality interface concepts that blend digital elements seamlessly with the physical world",
      category: "AR & Spatial Computing"
    },
    {
      id: 8,
      title: "Data Visualization Experiments",
      imageUrl: "/placeholder.svg?height=720&width=1280&text=Data+Visualization",
      description: "Interactive data visualization experiments that make complex information accessible and engaging",
      category: "Data Visualization"
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openCarousel = (index: number) => {
    setSelectedIndex(index);
  };

  const closeCarousel = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? experiments.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === experiments.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const goToSlide = (index: number) => {
    setSelectedIndex(index);
  };

  const currentExperiment = selectedIndex !== null ? experiments[selectedIndex] : null;

  return (
    <div className="min-h-screen bg-[#050510] relative">
      {/* Header with navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <Logo />
          <Navbar />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-3xl font-light mb-12 text-center">Experimental Work & Side Projects</div>
        
        {/* Asymmetrical Grid Layout - First Grid */}
        <div className="grid grid-cols-12 gap-4 mb-8">
          {/* Top row */}
          <div 
            className="col-span-12 md:col-span-8 overflow-hidden rounded-6xl border border-slate-700 cursor-pointer group"
            onClick={() => openCarousel(0)}
          >
            <div className="relative h-[445px] md:h-auto md:pt-[64%] rounded-6xl overflow-hidden w-full">
              <Image
                src={experiments[0].imageUrl}
                alt={experiments[0].title}
                width={800}
                height={500}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `/placeholder.svg?height=500&width=800&text=${experiments[0].title.replace(/\s+/g, "+")}`;
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs text-white uppercase tracking-wider mb-2">{experiments[0].category}</span>
                <h3 className="text-xl font-medium text-white mb-2">{experiments[0].title}</h3>
                <p className="text-white text-sm line-clamp-2">{experiments[0].description}</p>
              </div>
            </div>
          </div>
          <div 
            className="col-span-12 md:col-span-4 overflow-hidden rounded-6xl border border-slate-700 cursor-pointer group"
            onClick={() => openCarousel(1)}
          >
            <div className="relative h-[445px] md:h-auto md:pt-[130%] rounded-6xl overflow-hidden w-full">
              <Image
                src={experiments[1].imageUrl}
                alt={experiments[1].title}
                width={400}
                height={500}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `/placeholder.svg?height=500&width=400&text=${experiments[1].title.replace(/\s+/g, "+")}`;
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs text-white uppercase tracking-wider mb-2">{experiments[1].category}</span>
                <h3 className="text-xl font-medium text-white mb-2">{experiments[1].title}</h3>
                <p className="text-white text-sm line-clamp-2">{experiments[1].description}</p>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div 
            className="col-span-12 md:col-span-4 overflow-hidden rounded-6xl border border-slate-700 cursor-pointer group"
            onClick={() => openCarousel(2)}
          >
            <div className="relative h-[445px] md:h-auto md:pt-[138%] rounded-6xl overflow-hidden w-full">
              <Image
                src={experiments[2].imageUrl}
                alt={experiments[2].title}
                width={400}
                height={500}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `/placeholder.svg?height=500&width=400&text=${experiments[2].title.replace(/\s+/g, "+")}`;
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs text-white uppercase tracking-wider mb-2">{experiments[2].category}</span>
                <h3 className="text-xl font-medium text-white mb-2">{experiments[2].title}</h3>
                <p className="text-white text-sm line-clamp-2">{experiments[2].description}</p>
              </div>
            </div>
          </div>
          <div 
            className="col-span-12 md:col-span-8 overflow-hidden rounded-6xl border border-slate-700 cursor-pointer group"
            onClick={() => openCarousel(3)}
          >
            <div className="relative h-[445px] md:h-auto md:pt-[68%] rounded-6xl overflow-hidden w-full">
              <Image
                src={experiments[3].imageUrl}
                alt={experiments[3].title}
                width={800}
                height={300}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `/placeholder.svg?height=300&width=800&text=${experiments[3].title.replace(/\s+/g, "+")}`;
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs text-white uppercase tracking-wider mb-2">{experiments[3].category}</span>
                <h3 className="text-xl font-medium text-white mb-2">{experiments[3].title}</h3>
                <p className="text-white text-sm line-clamp-2">{experiments[3].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Asymmetrical Grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Two equal columns */}
          <div 
            className="col-span-12 md:col-span-6 overflow-hidden rounded-6xl border border-slate-700 cursor-pointer group"
            onClick={() => openCarousel(4)}
          >
            <div className="relative h-[445px] md:h-auto md:pt-[66.7%] rounded-6xl overflow-hidden w-full">
              <Image
                src={experiments[4].imageUrl}
                alt={experiments[4].title}
                width={600}
                height={400}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `/placeholder.svg?height=400&width=600&text=${experiments[4].title.replace(/\s+/g, "+")}`;
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs text-white uppercase tracking-wider mb-2">{experiments[4].category}</span>
                <h3 className="text-xl font-medium text-white mb-2">{experiments[4].title}</h3>
                <p className="text-white text-sm line-clamp-2">{experiments[4].description}</p>
              </div>
            </div>
          </div>
          <div 
            className="col-span-12 md:col-span-6 overflow-hidden rounded-6xl border border-slate-700 cursor-pointer group"
            onClick={() => openCarousel(5)}
          >
            <div className="relative h-[445px] md:h-auto md:pt-[66.7%] rounded-6xl overflow-hidden w-full">
              <Image
                src={experiments[5].imageUrl}
                alt={experiments[5].title}
                width={600}
                height={400}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `/placeholder.svg?height=400&width=600&text=${experiments[5].title.replace(/\s+/g, "+")}`;
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs text-white uppercase tracking-wider mb-2">{experiments[5].category}</span>
                <h3 className="text-xl font-medium text-white mb-2">{experiments[5].title}</h3>
                <p className="text-white text-sm line-clamp-2">{experiments[5].description}</p>
              </div>
            </div>
          </div>

          {/* Bottom row - different layout */}
          <div 
            className="col-span-12 md:col-span-7 overflow-hidden rounded-6xl border border-slate-700 cursor-pointer group"
            onClick={() => openCarousel(6)}
          >
            <div className="relative h-[445px] md:h-auto md:pt-[57%] rounded-6xl overflow-hidden w-full">
              <Image
                src={experiments[6].imageUrl}
                alt={experiments[6].title}
                width={700}
                height={400}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `/placeholder.svg?height=400&width=700&text=${experiments[6].title.replace(/\s+/g, "+")}`;
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs text-white uppercase tracking-wider mb-2">{experiments[6].category}</span>
                <h3 className="text-xl font-medium text-white mb-2">{experiments[6].title}</h3>
                <p className="text-white text-sm line-clamp-2">{experiments[6].description}</p>
              </div>
            </div>
          </div>
          <div 
            className="col-span-12 md:col-span-5 overflow-hidden rounded-6xl border border-slate-700 cursor-pointer group"
            onClick={() => openCarousel(7)}
          >
            <div className="relative h-[445px] md:h-auto md:pt-[80%] rounded-6xl overflow-hidden w-full">
              <Image
                src={experiments[7].imageUrl}
                alt={experiments[7].title}
                width={500}
                height={400}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `/placeholder.svg?height=400&width=500&text=${experiments[7].title.replace(/\s+/g, "+")}`;
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs text-white uppercase tracking-wider mb-2">{experiments[7].category}</span>
                <h3 className="text-xl font-medium text-white mb-2">{experiments[7].title}</h3>
                <p className="text-white text-sm line-clamp-2">{experiments[7].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Modal */}
      {selectedIndex !== null && currentExperiment && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeCarousel}
            className="absolute top-6 right-6 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-20"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Fullscreen image container */}
          <div className="relative w-full h-full">
            {/* Main image - fullscreen */}
            <div className="relative w-full h-full">
              <Image
                src={currentExperiment.imageUrl}
                alt={currentExperiment.title}
                fill
                className="object-cover"
                priority
              />
              
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
                <span className="text-sm text-white/80 uppercase tracking-wider mb-2 inline-block">
                  {currentExperiment.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white">
                  {currentExperiment.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
                  {currentExperiment.description}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 group z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 group z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Carousel indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {experiments.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex 
                      ? "bg-white scale-125" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute bottom-8 right-8 text-white/70 z-20">
              {selectedIndex + 1} / {experiments.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
