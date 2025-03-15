import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">


      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-8 lg:p-16 flex items-center">
          <h1 className="text-7xl lg:text-9xl font-bold text-zinc-800">Welcome </h1>
        </div>
        <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-2">Swapnil Nare</h2>
          <p className="text-lg text-zinc-400 uppercase tracking-wider">3D Environment And Technical Artist</p>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 px-8 lg:px-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-zinc-800 mb-6">About Me</h2>
        <p className="text-lg text-zinc-300 leading-relaxed max-w-4xl">
          I am a 3D artist with over three years of experience working in the VFX and game industry. I am proficient in a variety of software tools, including Maya, ZBrush, Substance Painter, Unreal Engine, Blender, and Photoshop. I am a creative and motivated problem solver, and I always strive for excellence in every project I work on. My strong attention to detail allows me to produce high-quality work that meets and exceeds expectations.
        </p>
      </section>
      
      {/* Portfolio Title */}
      <section className="py-16 px-4 lg:px-16">
        <h2 className="text-6xl lg:text-8xl font-bold text-[#FF4500]">PORTFOLIO</h2>
      </section>
      {/* Portfolio Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-3 gap-1 px-4 lg:px-16">
        <Link href="/projects/buggy" className="col-span-2 row-span-2 relative group overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1.jpg-KWZwWjPlY3ofzCgCIo4WDBU0MAu99P.jpeg"
            alt="Game Ready Buggy"
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xl font-bold">BUGGY (GAME READY)</span>
          </div>
        </Link>
        <Link href="/projects/monarch" className="relative group overflow-hidden">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Monarch: Legacy of Monsters"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <span className="text-xl font-bold text-center px-4">MONARCH: LEGACY OF MONSTERS</span>
          </div>
        </Link>
        <Link href="/projects/antman" className="relative group overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-screenshot-2023-05-16-154557.jpg-FEFroaW7oNqspjD0Bgwyi4JlVUAaEL.jpeg"
            alt="Ant-Man and the Wasp: Quantumania"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <span className="text-xl font-bold text-center px-4">ANT-MAN AND THE WASP: QUANTUMANIA</span>
          </div>
        </Link>
        <Link href="/projects/blowtorch" className="relative group overflow-hidden">
          <Image
            src="https://pic.surf/usmn"
            alt="Vintage Blowtorch"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <span className="text-xl font-bold text-center px-4">VINTAGE BLOWTORCH</span>
          </div>
        </Link>
      </section>

      {/* Work Experience */}
      <section className="py-16 px-4 lg:px-16">
        <h2 className="text-2xl font-bold mb-8">WORK EXPERIENCE</h2>

        <div className="space-y-8">
          {workExperiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 border-b border-zinc-800 pb-8">
              <div className="w-full md:w-1/5">
                <Image
                  src={exp.image || "/placeholder.svg"}
                  alt={exp.role}
                  width={50}
                  height={50}
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="w-full md:w-3/4 space-y-2">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-zinc-400">
                  <div>
                    <p className="text-zinc-500">Year</p>
                    <p>{exp.year}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500">Role</p>
                    <p>{exp.role}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500">Company</p>
                    <p>{exp.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 px-4 lg:px-16">
        <h2 className="text-2xl font-bold text-[#FF4500] mb-8">CERTIFICATES</h2>

        <div className="space-y-8">
          {certificates.map((cert, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#FF4500]"></div>
                {index < certificates.length - 1 && <div className="w-0.5 h-24 bg-zinc-700"></div>}
              </div>
              <div>
                <p className="text-zinc-400">{cert.year}</p>
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-zinc-500">{cert.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-4 lg:px-16">
        <h2 className="text-2xl font-bold text-[#FF4500] mb-8">GRADUATED</h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#FF4500]"></div>
                {index < education.length - 1 && <div className="w-0.5 h-24 bg-zinc-700"></div>}
              </div>
              <div>
                <p className="text-zinc-400">{edu.year}</p>
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-sm text-zinc-500">{edu.degree}</p>
                <p className="text-xs text-zinc-600 mt-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4 lg:px-16">
        <h2 className="text-2xl font-bold text-[#FF4500] mb-8">HARD SKILLS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                <span>Proficient in Unreal Engine</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                <span>Environment art creation / hard surface</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                <span>Mastery of asset optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                <span>Texture creation using real-time shaders</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                <span>Lighting, staging, composition</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                <span>Excellent capacity to bring ideas to life</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                <span>Skilled in all phases of performance optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                <span>Experience with procedural content creation</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                <span>Expertise in Substance Painter and Designer</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                <span>Production of cinematic and game trailers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 lg:px-16 text-center">
        <p className="text-xl">Thanks for watching!</p>
      </footer>
    </main>
  )
}

// Sample data
const workExperiences = [
  {
    title: "3D Environment Artist",
    year: "Dec 2023 - Present",
    role: "Engineering Support Associate",
    company: "SOGECLAIR",
    image: "https://pic.surf/qb9",
  },
  {
    title: "Asset Artist",
    year: "May 2022 - May 2023",
    role: "Artist - Asset",
    company: "MPC",
    image: "https://pic.surf/i3f0",
  },
  {
    title: "3D Artist",
    year: "Jan 2020 - Mar 2022",
    role: "3D Artist",
    company: "BOP Consultancy and Services",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "3D Artist",
    year: "Jun 2019 - Oct 2019",
    role: "3D Artist",
    company: "XECO",
    image: "/placeholder.svg?height=150&width=200",
  },
]
const certificates = [
  {
    year: "2022",
    title: "Modeling",
    institution: "Technicolor Group",
  },
]

const education = [
  {
    year: "2016-2019",
    institution: "Frameboxx",
    degree: "BSc in Animation, Modeling",
    description: "Specialized in 3D animation and modeling techniques",
  },
]
