import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold">
      <div className="w-10 h-10 relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VPFMVUUdHWksAexuHXf7HnFT8baVSs.png"
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    </Link>
  )
}
