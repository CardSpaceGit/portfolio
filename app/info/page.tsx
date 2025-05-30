import Navbar from "@/components/navbar"
import Logo from "@/components/logo"

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-[#050510]">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Logo />
        <Navbar />
      </header>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-3xl font-light mb-8">About Me</div>
          <div>
            <p className="mb-6">
              I specialize in building inclusive digital products that seamlessly connect human needs with business goals. With over 8 years of experience, I believe in the power of design to transform products from merely functional to truly delightful.
            </p>
            <p className="mb-6">
              My approach draws on a deep commitment to understanding user behavior, continuous research, and crafting solutions that balance aesthetics with practicality. I've had the privilege of working with diverse teams across various sectors, from fintech to transportation, bringing a wealth of perspective to each project.
            </p>
          </div>

          <div className="text-2xl font-light mt-12 mb-8">Experience</div>
          <div className="space-y-10">
            <div>
              <div className="font-medium">Senior Product Designer (UX/UI) - nCino Inc formerly DocFox</div>
              <div className="text-gray-400 text-sm mb-2">Mar 2019 - Present</div>
              <p>
                Leading UX/UI initiatives for fintech compliance software. Conducting user research, creating wireframes, and developing high-fidelity prototypes. Collaborating with cross-functional teams to ensure seamless integration of design and development.
              </p>
            </div>
            <div>
              <div className="font-medium">Senior Product Designer (UX/UI) - Whereismytransport (Retrenched)</div>
              <div className="text-gray-400 text-sm mb-2">Jan 2017 - Feb 2019</div>
              <p>
                Designed user experiences for public transportation mapping software. Created user flows, wireframes, and visual designs for mobile applications. Collaborated with engineering and product teams to implement design solutions.
              </p>
            </div>
            <div>
              <div className="font-medium">Senior Product Designer (UX/UI) - Basalt Technologies</div>
              <div className="text-gray-400 text-sm mb-2">Jan 2015 - Dec 2016</div>
              <p>
                Designed interfaces for enterprise software applications. Conducted user testing and implemented design thinking methodologies to improve product usability.
              </p>
            </div>
          </div>

          <div className="text-2xl font-light mt-12 mb-4">Contact</div>
          <div className="mb-24">
            <p className="mb-6">
              Feel free to reach out to me at <a href="mailto:contact@example.com" className="underline">contact@example.com</a> or connect with me on <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
