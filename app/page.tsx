import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, ExternalLink, Github, Linkedin, Mail, Phone, Palette, Sparkles } from "lucide-react"

const featuredProjects = [
  {
    href: "/projects/buggy",
    title: "Buggy (Game Ready)",
    subtitle: "UE5 environment scene and vehicle asset built for presentation and breakdown.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1.jpg-KWZwWjPlY3ofzCgCIo4WDBU0MAu99P.jpeg",
    featured: true,
  },
  {
    href: "/projects/buggy-technical-breakdown",
    title: "Buggy Technical Breakdown",
    subtitle: "Modeling, texturing, and technical decision-making.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-14.jpg-Ey3eyiRAPRfpspaauC9I7HP7ovP6Xg.jpeg",
    featured: false,
  },
  {
    href: "/projects/deadpool-bust",
    title: "Deadpool 3D Bust",
    subtitle: "Print-ready character sculpt with presentation renders.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-2%20%282%29.jpg-QW5MPsfQj70nCdJJw9aRgIrY4VtIEA.jpeg",
    featured: false,
  },
  {
    href: "/projects/wasteland-sheriff",
    title: "Wasteland Sheriff",
    subtitle: "Stylized fan-art weapon created with production-minded detailing.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-artboard-1.jpg-iWiuSFYm6iD6vccDkCzwVZErB8kf5N.jpeg",
    featured: false,
  },
  {
    href: "/projects/prop-blowtorch",
    title: "Vintage Blowtorch",
    subtitle: "Interactive web-presented prop using Three.js rendering.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-render1.jpg-UkG2aKcOIk6a9zYjMf8md9lK8HrT31.jpeg",
    featured: false,
  },
  {
    href: "/projects/antman",
    title: "Ant-Man and the Wasp: Quantumania",
    subtitle: "Feature-film production experience in environment props work.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-screenshot-2023-05-16-154557.jpg-FEFroaW7oNqspjD0Bgwyi4JlVUAaEL.jpeg",
    featured: false,
  },
]

const tools = [
  {
    title: "Model Validator",
    description:
      "Real-time mesh validation tool for Blender that streamlines workflow by seamlessly validating meshes during the modeling process.",
    tags: ["Python", "Blender"],
    href: "https://github.com/Vamps023/ModelValidator",
  },
  {
    title: "Blender Unigine Exporter",
    description:
      "Specialized tool for exporting mesh files from Blender directly to Unigine, maintaining material properties and optimizing workflow.",
    tags: ["Python", "Blender", "Unigine"],
    href: "https://github.com/Vamps023/blenderUnigine",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,69,0,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.12),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-16 lg:py-28">
          <div className="mb-8 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Sparkles className="h-4 w-4 text-[#FF4500]" />
              Technical Artist Portfolio
            </div>
            <div className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
              <Link href="/blog" className="transition hover:text-white">
                Blog
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
                <Briefcase className="h-4 w-4 text-[#FF4500]" />
                Environment Art • Technical Art • Tool Development
              </div>
              <div className="space-y-5">
                <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                  Creating
                  <span className="block text-[#FF4500]">real-time worlds</span>
                  with art and systems thinking.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                  I build production-ready 3D environments, assets, and artist workflows for games, simulation, and VFX.
                  My work blends visual storytelling with technical problem solving across Blender, Unreal Engine, Unity,
                  UNIGINE, and web-based 3D.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects/buggy"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff5d22]"
                >
                  View Featured Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Me
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-3xl font-semibold text-white">4+</p>
                  <p className="mt-1 text-sm text-zinc-400">Years in games, simulation, and VFX</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-3xl font-semibold text-white">10+</p>
                  <p className="mt-1 text-sm text-zinc-400">Portfolio projects and process breakdowns</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-3xl font-semibold text-white">3D + Tools</p>
                  <p className="mt-1 text-sm text-zinc-400">Art direction backed by pipeline thinking</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/60 p-3 shadow-2xl shadow-[#FF4500]/10 backdrop-blur">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1716150100804.jpg-B9HtwdkKiiDbacnpz1OalncFT03jxF.jpeg"
                    alt="Swapnil Nare"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Current focus</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Environment art, real-time workflows, and artist-facing tool development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Selected Work</p>
              <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Projects built for visuals, performance, and storytelling.</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-white">
              Read breakdowns
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.href}
                href={project.href}
                className={`group ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                  {project.featured ? (
                    <div className="absolute left-0 top-0 m-6 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
                      Featured Project
                    </div>
                  ) : null}
                  <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                    <h3 className={`mb-2 font-bold text-white ${index === 0 ? "text-2xl sm:text-3xl" : "text-xl"}`}>{project.title}</h3>
                    <p className="max-w-xl text-sm text-zinc-300 sm:text-base">{project.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Technical Tools</p>
            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Workflow-focused tools that support artists and production teams.</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {tools.map((tool) => (
              <div key={tool.title} className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
                <div className="mb-6 inline-flex rounded-2xl bg-[#FF4500]/15 p-4 text-[#FF4500]">
                  <Github className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{tool.title}</h3>
                <p className="mb-5 text-zinc-400">{tool.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={tool.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF4500] hover:text-[#ff6b34]">
                  View on GitHub
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Experience</p>
            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Experience across VFX, real-time simulation, and technical production.</h2>
          </div>
          <div className="space-y-8">
            {workExperiences.map((exp, index) => (
              <div key={index} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-start">
                  <div className="flex justify-center md:w-1/4">
                  <div className="relative h-28 w-28 overflow-hidden rounded-2xl bg-zinc-800 p-3 sm:h-32 sm:w-32">
                    {exp.logo ? (
                      <Image src={exp.logo} alt={exp.company} fill className="object-contain p-2" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF4500]/70 to-zinc-900 text-lg font-semibold text-white">
                        {exp.company
                          .split(" ")
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                </div>
                  <div className="space-y-4 md:w-3/4">
                    <div className="flex items-center gap-3 text-[#FF4500]">
                      <Briefcase className="h-5 w-5" />
                      <span className="text-sm font-semibold uppercase tracking-[0.2em]">Professional Experience</span>
                    </div>
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    <div className="flex flex-wrap gap-x-8 gap-y-3 text-zinc-400">
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
                    <p className="whitespace-pre-line text-zinc-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-12 text-center text-3xl font-bold lg:text-left">
                <span className="text-[#FF4500]">Certificates</span>
              </h2>
              <div className="space-y-6">
                {certificates.map((cert, index) => (
                  <div key={index} className="flex items-start gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF4500] font-bold text-white">{index + 1}</div>
                    <div>
                      <p className="text-zinc-400">{cert.year}</p>
                      <h3 className="text-xl font-semibold">{cert.title}</h3>
                      <p className="text-zinc-500">{cert.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-12 text-center text-3xl font-bold lg:text-left">
                <span className="text-[#FF4500]">Education</span>
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF4500] font-bold text-white">{index + 1}</div>
                    <div>
                      <p className="text-zinc-400">{edu.year}</p>
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                      <p className="text-zinc-500">{edu.degree}</p>
                      <p className="mt-2 text-zinc-400">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Let&apos;s Connect</p>
            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Available for collaboration, freelance work, and technical art opportunities.</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="https://www.linkedin.com/in/swapnilnare/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <Linkedin className="mb-4 h-12 w-12 text-[#0A66C2]" />
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <p className="mt-2 text-sm text-zinc-400">Connect with me professionally</p>
            </a>
            <a
              href="https://www.artstation.com/vamps23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <Palette className="mb-4 h-12 w-12 text-[#13AFF0]" />
              <h3 className="text-xl font-semibold">ArtStation</h3>
              <p className="mt-2 text-sm text-zinc-400">View my portfolio</p>
            </a>
            <a
              href="mailto:Swapnilnare007@gmail.com"
              className="flex flex-col items-center rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <Mail className="mb-4 h-12 w-12 text-[#EA4335]" />
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="mt-2 text-sm text-zinc-400">Swapnilnare007@gmail.com</p>
            </a>
            <a
              href="tel:+918766569006"
              className="flex flex-col items-center rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <Phone className="mb-4 h-12 w-12 text-[#4CAF50]" />
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="mt-2 text-sm text-zinc-400">+91 8766569006</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-12 text-center lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-zinc-400">© {new Date().getFullYear()} Swapnil Nare. All rights reserved.</p>
          <div className="mt-6 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/swapnilnare/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-[#FF4500]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.artstation.com/vamps23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-[#FF4500]"
            >
              <Palette className="h-5 w-5" />
            </a>
            <a href="mailto:Swapnilnare007@gmail.com" className="text-zinc-400 transition-colors hover:text-[#FF4500]">
              <Mail className="h-5 w-5" />
            </a>
            <a href="tel:+918766569006" className="text-zinc-400 transition-colors hover:text-[#FF4500]">
              <Phone className="h-5 w-5" />
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
    logo: undefined,
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
    logo: "https://logo.clearbit.com/mpcvfx.com",
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
    logo: undefined,
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
    logo: undefined,
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
    description: "Focused on modeling, environment creation, and production-ready 3D workflows.",
  },
]

