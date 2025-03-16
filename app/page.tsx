import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail, Phone, Palette } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Photo background with fade effect */}
      <div className="absolute right-0 top-0 w-full h-[90vh] lg:w-2/5 overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1716150100804.jpg-B9HtwdkKiiDbacnpz1OalncFT03jxF.jpeg"
            alt="Swapnil Nare"
            width={10}
            height={10}
            className="object-cover opacity-40 lg:opacity-60 w-full h-full"
            priority
            style={{
              objectFit: 'cover',
              objectPosition: '30% 50%' // Adjust these values to position the photo
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/40 to-black"></div>
        </div>
      {/* Hero Section with Integrated Photo */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 lg:px-16 w-full relative z-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Swapnil</span> <span className="text-[#FF4500]">Nare</span>
            </h2>
            <p className="text-2xl text-zinc-300 mb-8">3D Environment And Technical Artist</p>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10">
              Passionate 3D artist with over three years of professional experience in the VFX and game industry. My
              journey has taken me through various roles at prestigious companies, where I've contributed to
              high-profile projects including Marvel's Ant-Man and the Wasp: Quantumania and Monarch: Legacy of
              Monsters.
            </p>
            <div className="flex gap-4">
              <Link
                href="/blog"
                className="px-8 py-3 bg-[#FF4500] text-white rounded-lg hover:bg-[#FF5722] transition-colors"
              >
                View Blog
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 lg:px-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-[#FF4500]">Portfolio</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/projects/buggy" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1.jpg-KWZwWjPlY3ofzCgCIo4WDBU0MAu99P.jpeg"
                  alt="Game Ready Buggy"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Buggy (Game Ready)</h3>
                  <p className="text-zinc-300 text-sm">UE5 Environment and Vehicle Asset</p>
                </div>
              </div>
            </Link>

            <Link href="/projects/monarch" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Monarch: Legacy of Monsters"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Monarch: Legacy of Monsters</h3>
                  <p className="text-zinc-300 text-sm">Asset and Technical Artist</p>
                </div>
              </div>
            </Link>

            <Link href="/projects/antman" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-screenshot-2023-05-16-154557.jpg-FEFroaW7oNqspjD0Bgwyi4JlVUAaEL.jpeg"
                  alt="Ant-Man and the Wasp: Quantumania"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Ant-Man and the Wasp: Quantumania</h3>
                  <p className="text-zinc-300 text-sm">Environment Props Artist</p>
                </div>
              </div>
            </Link>

            <Link href="#" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Kill Zone"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Kill Zone</h3>
                  <p className="text-zinc-300 text-sm">Environment Design</p>
                </div>
              </div>
            </Link>

            <Link href="#" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Pit Stop"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Pit Stop</h3>
                  <p className="text-zinc-300 text-sm">3D Environment</p>
                </div>
              </div>
            </Link>

            <Link href="#" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Environment Art"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Environment Art</h3>
                  <p className="text-zinc-300 text-sm">Various Projects</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-[#FF4500]">Work Experience</span>
          </h2>

          <div className="space-y-12">
            {workExperiences.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/4 flex justify-center">
                  <div className="w-32 h-32 relative rounded-lg overflow-hidden bg-zinc-800 p-4">
                    <Image src={exp.logo || "/placeholder.svg"} alt={exp.company} fill className="object-contain p-2" />
                  </div>
                </div>
                <div className="w-full md:w-3/4 space-y-4">
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <div className="flex flex-wrap gap-x-8 gap-y-2 text-zinc-400">
                    <div>
                      <p className="text-[#FF4500]">Period</p>
                      <p>{exp.year}</p>
                    </div>
                    <div>
                      <p className="text-[#FF4500]">Role</p>
                      <p>{exp.role}</p>
                    </div>
                    <div>
                      <p className="text-[#FF4500]">Company</p>
                      <p>{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-zinc-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates & Education */}
      <section className="py-20 px-4 lg:px-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Certificates */}
            <div>
              <h2 className="text-3xl font-bold mb-12 text-center lg:text-left">
                <span className="text-[#FF4500]">Certificates</span>
              </h2>

              <div className="space-y-8">
                {certificates.map((cert, index) => (
                  <div key={index} className="flex items-start gap-6 bg-zinc-800 p-6 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-[#FF4500] flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-zinc-400">{cert.year}</p>
                      <h3 className="text-xl font-semibold">{cert.title}</h3>
                      <p className="text-zinc-500">{cert.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-12 text-center lg:text-left">
                <span className="text-[#FF4500]">Education</span>
              </h2>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-6 bg-zinc-800 p-6 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-[#FF4500] flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-zinc-400">{edu.year}</p>
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                      <p className="text-zinc-500">{edu.degree}</p>
                      <p className="text-zinc-400 mt-2">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-[#FF4500]">Get In Touch</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="https://www.linkedin.com/in/swapnilnare/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 p-8 rounded-lg flex flex-col items-center hover:bg-zinc-800 transition-all hover:translate-y-[-5px]"
            >
              <Linkedin className="w-12 h-12 text-[#0A66C2] mb-4" />
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <p className="text-zinc-400 text-sm text-center mt-2">Connect with me professionally</p>
            </a>

            <a
              href="https://www.artstation.com/vamps23"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 p-8 rounded-lg flex flex-col items-center hover:bg-zinc-800 transition-all hover:translate-y-[-5px]"
            >
              <Palette className="w-12 h-12 text-[#13AFF0] mb-4" />
              <h3 className="text-xl font-semibold">ArtStation</h3>
              <p className="text-zinc-400 text-sm text-center mt-2">View my portfolio</p>
            </a>

            <a
              href="mailto:Swapnilnare007@gmail.com"
              className="bg-zinc-900 p-8 rounded-lg flex flex-col items-center hover:bg-zinc-800 transition-all hover:translate-y-[-5px]"
            >
              <Mail className="w-12 h-12 text-[#EA4335] mb-4" />
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-zinc-400 text-sm text-center mt-2">Swapnilnare007@gmail.com</p>
            </a>

            <a
              href="tel:+918766569006"
              className="bg-zinc-900 p-8 rounded-lg flex flex-col items-center hover:bg-zinc-800 transition-all hover:translate-y-[-5px]"
            >
              <Phone className="w-12 h-12 text-[#4CAF50] mb-4" />
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-zinc-400 text-sm text-center mt-2">+91 8766569006</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 lg:px-16 text-center border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-zinc-400"> 2025 Swapnil Nare. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/swapnilnare/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#FF4500] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.artstation.com/vamps23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#FF4500] transition-colors"
            >
              <Palette className="w-5 h-5" />
            </a>
            <a href="mailto:Swapnilnare007@gmail.com" className="text-zinc-400 hover:text-[#FF4500] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+918766569006" className="text-zinc-400 hover:text-[#FF4500] transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Sample data with real company logos
const workExperiences = [
  {
    title: "3D Environment Artist",
    year: "Dec 2023 - Present",
    role: "Engineering Support Associate",
    company: "SOGECLAIR",
    logo: "https://www.sogeclair.com/wp-content/uploads/2022/03/logo-sogeclair-white.svg",
    description:
      "Creating and optimizing 3D environment assets for engineering simulations and visualizations. Collaborating with engineering teams to ensure accurate representation of complex systems.",
  },
  {
    title: "Asset Artist",
    year: "May 2022 - May 2023",
    role: "Artist - Asset",
    company: "MPC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/MPC_Film_Logo.svg/1200px-MPC_Film_Logo.svg.png",
    description:
      "Worked on high-profile projects including Marvel's Ant-Man and the Wasp: Quantumania, creating environment props and assets. Collaborated with VFX teams to ensure seamless integration of assets.",
  },
  {
    title: "3D Artist",
    year: "Jan 2020 - Mar 2022",
    role: "3D Artist",
    company: "BOP Consultancy and Services",
    logo: "/placeholder.svg?height=150&width=200",
    description:
      "Developed 3D models and environments for architectural visualizations and product designs. Created realistic renderings for client presentations and marketing materials.",
  },
  {
    title: "3D Artist",
    year: "Jun 2019 - Oct 2019",
    role: "3D Artist",
    company: "XECO",
    logo: "/placeholder.svg?height=150&width=200",
    description:
      "Created 3D assets and environments for various commercial projects. Focused on optimizing assets for real-time applications and interactive experiences.",
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
  },
]
