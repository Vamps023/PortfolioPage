import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail, Phone, Palette } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Integrated Photo */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background gradient overlay */}
        <div className="absolute inset-0  from-black via-black/90 to-transparent z-10"></div>

        {/* Photo background with fade effect */}
        <div className="absolute right-0 top-0 w-full h-full lg:w-1/3 overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1716150100804.jpg-B9HtwdkKiiDbacnpz1OalncFT03jxF.jpeg"
            alt="Swapnil Nare"
            fill
            className="object-cover object-center opacity-40 lg:opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/40 to-black"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 lg:px-16 w-full relative z-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Swapnil</span> <span className="text-[#FF4500]">Nare</span>
            </h2>
            <p className="text-2xl text-zinc-300 mb-8">Technical Artist</p>
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
            {/* Featured Project */}
            <Link href="/projects/buggy" className="group lg:col-span-2 lg:row-span-2">
              <div className="relative overflow-hidden rounded-lg aspect-[16/9] lg:aspect-[16/10]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1.jpg-KWZwWjPlY3ofzCgCIo4WDBU0MAu99P.jpeg"
                  alt="Game Ready Buggy"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Buggy (Game Ready)</h3>
                  <p className="text-zinc-300 text-sm">UE5 Environment and Vehicle Asset</p>
                </div>
              </div>
            </Link>

            <Link href="/projects/buggy-technical-breakdown" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-14.jpg-Ey3eyiRAPRfpspaauC9I7HP7ovP6Xg.jpeg"
                  alt="Buggy Technical Breakdown"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Buggy Technical Breakdown</h3>
                  <p className="text-zinc-300 text-sm">Modeling & Texturing Process</p>
                </div>
              </div>
            </Link>

            <Link href="/projects/deadpool-bust" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-2%20%282%29.jpg-QW5MPsfQj70nCdJJw9aRgIrY4VtIEA.jpeg"
                  alt="Deadpool 3D Bust"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Deadpool 3D Bust</h3>
                  <p className="text-zinc-300 text-sm">3D Print-Ready Character Bust</p>
                </div>
              </div>
            </Link>

            <Link href="/projects/wasteland-sheriff" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-artboard-1.jpg-iWiuSFYm6iD6vccDkCzwVZErB8kf5N.jpeg"
                  alt="Wasteland Sheriff"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Wasteland Sheriff</h3>
                  <p className="text-zinc-300 text-sm">Valorant Fan Art - Game Weapon</p>
                </div>
              </div>
            </Link>

            <Link href="/projects/prop-blowtorch" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-render1.jpg-UkG2aKcOIk6a9zYjMf8md9lK8HrT31.jpeg"
                  alt="Vintage Blowtorch"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Vintage Blowtorch</h3>
                  <p className="text-zinc-300 text-sm">Game-Ready Prop Model</p>
                </div>
              </div>
            </Link>

            {/* <Link href="/projects/monarch" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Monarch: Legacy of Monsters"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Monarch: Legacy of Monsters</h3>
                  <p className="text-zinc-300 text-sm">Asset and Technical Artist</p>
                </div>
              </div>
            </Link> */}

            <Link href="/projects/antman" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-screenshot-2023-05-16-154557.jpg-FEFroaW7oNqspjD0Bgwyi4JlVUAaEL.jpeg"
                  alt="Ant-Man and the Wasp: Quantumania"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Ant-Man and the Wasp: Quantumania</h3>
                  <p className="text-zinc-300 text-sm">Environment Props Artist</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Tools Section */}
      <section className="py-20 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-[#FF4500]">Technical Tools</span>
          </h2>

          <div className="mb-12">
            <p className="text-xl text-center text-zinc-300 max-w-3xl mx-auto">
              Specialized tools and plugins I've developed to enhance workflows for technical artists and 3D
              professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-lg overflow-hidden group hover:bg-zinc-800 transition-all duration-300 hover:translate-y-[-5px]">
              <div className="p-8">
                <div className="w-16 h-16 bg-[#FF4500]/20 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF4500"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Model Validator</h3>
                <p className="text-zinc-400 mb-4">
                  Real-time mesh validation tool for Blender that streamlines workflow by seamlessly validating meshes
                  during the modeling process.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-zinc-800 px-3 py-1 rounded-full">Python</span>
                  <span className="text-xs bg-zinc-800 px-3 py-1 rounded-full">Blender</span>
                </div>
                <a
                  href="https://github.com/Vamps023/ModelValidator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-[#FF4500] hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg overflow-hidden group hover:bg-zinc-800 transition-all duration-300 hover:translate-y-[-5px]">
              <div className="p-8">
                <div className="w-16 h-16 bg-[#FF4500]/20 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF4500"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Blender Unigine Exporter</h3>
                <p className="text-zinc-400 mb-4">
                  Specialized tool for exporting mesh files from Blender directly to Unigine, maintaining material
                  properties and optimizing workflow.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-zinc-800 px-3 py-1 rounded-full">Python</span>
                  <span className="text-xs bg-zinc-800 px-3 py-1 rounded-full">Blender</span>
                  <span className="text-xs bg-zinc-800 px-3 py-1 rounded-full">Unigine</span>
                </div>
                <a
                  href="https://github.com/Vamps023/blenderUnigine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-[#FF4500] hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://github.com/Vamps023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#FF4500] text-white rounded-lg hover:bg-[#FF5722] transition-colors"
            >
              View All GitHub Projects
            </a>
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
          <p className="text-zinc-400">© {new Date().getFullYear()} Swapnil Nare. All rights reserved.</p>
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
  logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHgqV6XmICSPg/company-logo_100_100/company-logo_100_100/0/1704211861157/groupesogeclair_logo?e=1750291200&v=beta&t=_516khQ9I8_hPw-ODo1YOlHAyNiXqKw1F5ZIhsBdbUA",
  description:
    `Real-Time Simulation Environment Projects
    • Created simulation environments for bus and train training using Blender and UNIGINE
    • Designed and modeled buildings, roads, foliage, and props
    • Applied high-quality textures with Photoshop for consistent visuals
    • Optimized scenes with LODs and light baking for performance and realism
    • Developed add-ons for Blender and UNIGINE to streamline workflows
    • Used Geometry Nodes for procedural and scalable assets
    • Optimized assets for real-time rendering with reduced poly counts and improved UV layouts
    • Implemented PBR workflows for realistic materials
    • Resolved pipeline issues for seamless collaboration
    • Designed asset pipelines with automated versioning and management tools`,
},
{
  title: "Asset Artist",
  year: "May 2022 - May 2023",
  role: "Artist - Asset",
  company: "MPC",
  logo: "https://media.licdn.com/dms/image/v2/D4E0BAQH3G1T3TIn9nA/company-logo_100_100/company-logo_100_100/0/1697042590342/mpcvfx_logo?e=1750291200&v=beta&t=fEhawbC3uW16yh7Xes30etxmHLXWoHxOmFh80x6VmIM",
  description:
    "Notable Projects\n\n" +
    "• Ant-Man and the Wasp: Quantumania\n" +
    "  - Contributed as a Prop and Environment Artist\n" +
    "  - Focused on high-quality asset creation and optimization for VFX pipelines\n\n" +
    "• An Atlas Netflix Film\n" +
    "  - Served as a Technical Artist\n" +
    "  - Specialized in pipeline automation and asset optimization\n" +
    "  - Ensured seamless integration between DCC tools and rendering engines\n\n" +
    "• Monarch: Legacy of Monsters\n" +
    "  - Worked as an Environment Artist and Technical Artist\n" +
    "  - Combined artistic skills with technical expertise to create detailed environments\n" +
    "  - Streamlined workflows for efficient production\n\n" +
    "Key Technical Artist Contributions\n\n" +
    "• Developed custom Python scripts to automate repetitive tasks and enhance pipeline efficiency\n" +
    "• Debugged and resolved technical issues related to material setups, asset imports/exports, and rendering pipelines\n" +
    "• Collaborated closely with developers and artists to bridge the gap between art and technology, ensuring smooth production workflows",
},
{
  title: "3D Artist",
  year: "Jan 2020 - Mar 2022",
  role: "3D Artist",
  company: "BOP Consultancy and Services",
  logo: "https://media.licdn.com/dms/image/v2/C510BAQF4QAFc8j8hOA/company-logo_100_100/company-logo_100_100/0/1630575271638?e=1750291200&v=beta&t=Ts42Sz8z9T5uT57jLFdMRVoszU1JvwdWfTI0FUu67aI",
  description:
    "• Created architectural visualizations and product designs for client presentations\n" +
    "• Optimized 3D models for real-time applications and marketing materials\n" +
    "• Developed efficient workflows for asset creation and management\n" +
    "• Collaborated with design teams to meet project requirements and deadlines",
},
{
  title: "3D Artist",
  year: "Jun 2019 - Oct 2019",
  role: "3D Artist",
  company: "XECO",
  logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGaEL7Tzt2tlQ/company-logo_100_100/company-logo_100_100/0/1631304157243?e=1750291200&v=beta&t=rTwnwQaZHDX3cy--YLuLYf_D4XU2RENfEM-fsAXOGJ0",
  description:
    "• Assisted in troubleshooting 3D modeling issues efficiently and promptly\n" +
    "• Developed detailed 3D models based on conceptual sketches and specifications\n" +
    "• Organized storyboards to visualize scenes and design realistic graphics for movies and animated visuals\n" +
    "• Contributed to the project Aychu (a TV series that got stalled)\n" +
    "• Specialized in real-time applications and interactive experiences\n" +
    "• Implemented efficient asset creation pipelines",
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

