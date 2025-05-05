import Link from "next/link"
import Image from "next/image"

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const logoSrc = variant === "dark" ? "/logo_dark.png" : "/logo_light.png"
  
  return (
    <Link href="/" className="text-2xl font-bold">
      <div className="w-10 h-10 relative">
        <Image
          src={logoSrc}
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    </Link>
  )
}
