"use client"
import { cn } from "@/lib/utils"

type FilterCategory = "Mobile Applications" | "Desktop Applications" | "Branding"

interface ProjectFilterProps {
  onFilterChange: (category: FilterCategory) => void
  activeFilter: FilterCategory
}

export default function ProjectFilter({ onFilterChange, activeFilter }: ProjectFilterProps) {
  const categories: FilterCategory[] = ["Mobile Applications", "Desktop Applications", "Branding"]

  return (
    <div className="flex justify-center space-x-4 sm:space-x-12 sm:mx-16 py-6 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={cn(
            "text-white text-md font-light relative pb-2 transition-all duration-300",
            activeFilter === category
              ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white"
              : "opacity-70 hover:opacity-100",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
