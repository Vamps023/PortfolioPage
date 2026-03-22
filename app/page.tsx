import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Linkedin,
  Mail,
  Sparkles,
  ExternalLink,
  Github,
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-black text-white">
      <Hero />
      <ProductionProjectsSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}

function ProductionProjectsSection() {
  const productionProjects = [
    {
      id: "monarch",
      title: "Monarch: Legacy of Monsters",
      subtitle: "Asset and technical art work for Apple TV+ monster series",
      image: "/Monarch/swapnil-nare-bigil-b-06-1.jpg",
      tools: ["Maya", "Substance Painter", "Pipeline Tools", "Lookdev"],
      category: "Feature Production"
    },
    {
      id: "antman",
      title: "Ant-Man and The Wasp: Quantumania",
      subtitle: "Environment prop modeling at MPC for Marvel feature film",
      image: "/ant_man/swapnil-nare-jhs1030-trl-comp-mpa-v0290-1050-1280.jpg",
      tools: ["Maya", "Modeling", "Environment Art", "Props"],
      category: "Feature Film"
    }
  ]

  return (
    <section id="production-work" className="px-4 py-8 lg:px-12 bg-zinc-950/50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Production Work</p>
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Professional Projects</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productionProjects.map((project) => (
            <a key={project.id} href={`/production/${project.id}`} className="group block">
              <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-zinc-900/70 aspect-[16/9] shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="mb-1 flex flex-wrap gap-1 text-[10px] uppercase tracking-[0.2em] text-[#FF4500]">
                    <span>{project.category}</span>
                    <span className="text-zinc-400">•</span>
                    <span className="text-zinc-300">{project.tools.slice(0, 2).join(" · ")}</span>
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-white leading-tight">{project.title}</h3>
                  <p className="text-xs text-zinc-300 line-clamp-2">{project.subtitle}</p>
                  <div className="mt-2 flex items-center gap-2 text-[#FF4500] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">View Details</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      id: "buggy",
      title: "Buggy",
      subtitle: "UE5 Environment Showcase",
      image: "/buggy/swapnil-nare-1.jpg",
      tools: ["Blender", "UE5", "Substance Painter", "Megascans"],
      category: "Real-Time Environment"
    },
    {
      id: "buggy-breakdown",
      title: "Buggy",
      subtitle: "Technical Breakdown",
      image: "/buggy/breakdown/swapnil-nare-10.jpg",
      tools: ["Blender", "Substance Painter", "Marmoset Toolbag", "Photoshop"],
      category: "Technical Art"
    },
    {
      id: "blowtorch",
      title: "Vintage Blowtorch",
      subtitle: "Hero Prop",
      image: "/BlowTorch/swapnil-nare-render1.jpg",
      tools: ["Maya", "Blender", "Substance Painter", "Marmoset Toolbag"],
      category: "Prop Modeling"
    }
  ]

  return (
    <section id="projects" className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Projects</p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Personal Projects</h2>
          <p className="max-w-3xl text-zinc-400">Click any project to view full details and media</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a key={project.id} href={`/projects/${project.id}`} className="group block">
              <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-zinc-900/70 aspect-[16/9] shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="mb-1 flex flex-wrap gap-1 text-[10px] uppercase tracking-[0.2em] text-[#FF4500]">
                    <span>{project.category}</span>
                    <span className="text-zinc-400">•</span>
                    <span className="text-zinc-300">{project.tools.slice(0, 2).join(" · ")}</span>
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-white leading-tight">{project.title}</h3>
                  <p className="text-xs text-zinc-300 line-clamp-2">{project.subtitle}</p>
                  <div className="mt-2 flex items-center gap-2 text-[#FF4500] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">View Details</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(255,69,0,0.22),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(22,119,255,0.18),transparent_28%),radial-gradient(circle_at_50%_75%,rgba(255,255,255,0.06),transparent_34%)]" />
      <div className="absolute inset-0 grid-futuristic opacity-40" />
      <div className="absolute inset-0 noise-overlay opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
      <div className="volumetric-orange absolute -left-24 top-24 h-80 w-80 rounded-full blur-3xl" />
      <div className="volumetric-blue absolute right-0 top-10 h-96 w-96 rounded-full blur-3xl" />
      <div className="data-stream absolute -left-20 top-16 hidden h-[620px] w-[30%] lg:block" />
      <div className="data-stream absolute -right-20 top-10 hidden h-[640px] w-[30%] scale-x-[-1] opacity-60 lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-12 lg:py-10">
        <div className="flex flex-col gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-sm text-zinc-200">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#FF4500]/30 bg-[#FF4500]/10 text-[#FF4500]">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            Technical Artist Portfolio
          </div>
          <div className="flex items-center gap-3 text-xs text-zinc-400 sm:gap-6 sm:text-sm">
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-300">
              Available for technical art roles
            </span>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>

        {/* Hero content with improved composition */}
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_400px] lg:gap-8">
          {/* Main Content */}
          <div className="flex flex-col justify-between min-h-[60vh] pb-12 pt-4 lg:pt-8">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
                <Briefcase className="h-4 w-4 text-[#FF4500]" />
                AAA-style Technical Art • Real-Time Graphics • VFX Pipeline Thinking
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[88px]">
                  Swapnil Nare
                  <span className="block text-[#FF4500]">Technical Artist</span>
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
                  I design environments, technical workflows, and artist tools for games, simulation, and VFX with a focus on
                  clarity, performance, and polished presentation.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex flex-wrap gap-4">
                <a href="#production-work" className="inline-flex items-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff5d22]">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10">
                  Contact Me
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <Surface>
                  <p className="text-3xl font-semibold text-white">4+</p>
                  <p className="mt-2 text-sm text-zinc-400">Years across simulation, VFX, and technical production.</p>
                </Surface>
                <Surface>
                  <p className="text-3xl font-semibold text-white">10+</p>
                  <p className="mt-2 text-sm text-zinc-400">Portfolio projects spanning environments, tools, and assets.</p>
                </Surface>
                <Surface>
                  <p className="text-3xl font-semibold text-white">3D + Tools</p>
                  <p className="mt-2 text-sm text-zinc-400">Visual problem solving supported by automation and engine thinking.</p>
                </Surface>
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                <Surface className="panel-glow">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {["Blender", "Unreal Engine", "Unity", "UNIGINE"].map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </Surface>
                <Surface className="panel-glow">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {["Shaders", "Technical Art", "Pipeline Tools", "Optimization", "Procedural Workflows"].map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </Surface>
                <Surface className="panel-glow">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {["GLSL", "HLSL", "Python Tools", "Real-Time Rendering"].map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </Surface>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative mx-auto h-64 w-64 flex-shrink-0 overflow-hidden rounded-full md:h-72 md:w-72 lg:mx-auto lg:-translate-x-5 lg:-translate-y-[180px]">
            {/* Enhanced radial glow background */}
            <div className="absolute -inset-12 rounded-full bg-gradient-radial from-[#FF4500]/20 via-transparent to-blue-500/15 blur-3xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/15 via-transparent to-transparent" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1716150100804.jpg-B9HtwdkKiiDbacnpz1OalncFT03jxF.jpeg"
              alt="Swapnil Nare portrait"
              fill
              className="object-cover object-center scale-x-[-1]"
              priority
            />
            
            {/* Refined overlay for seamless blending */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">About Me</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Professional technical artist with production expertise.</h2>
        </div>
        
        <div className="max-w-4xl space-y-6 text-zinc-300">
          <p className="leading-relaxed text-lg">
            I'm a production-minded technical artist specializing in real-time graphics, environment art, and VFX pipeline development. With experience on major feature films including Marvel's Ant-Man and Apple TV+'s Monarch: Legacy of Monsters, I deliver clean, efficient assets and workflows that meet the highest industry standards.
          </p>
          
          <p className="leading-relaxed">
            My expertise spans the complete production pipeline - from hard-surface modeling and environment composition to advanced material creation and lighting optimization. I excel at creating dependable technical workflows that enhance team productivity while maintaining exceptional visual quality for both real-time and cinematic applications.
          </p>
          
          <p className="leading-relaxed">
            I'm passionate about solving complex technical challenges and building tools that empower artists to work more efficiently. Whether developing custom scripts, optimizing rendering pipelines, or creating production-ready assets, I focus on delivering polished, professional results that exceed expectations and drive project success.
          </p>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const skills = ["Blender", "Unreal Engine", "Technical Art", "Python Tools", "Shaders", "Optimization"]
  return (
    <section id="skills" className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Skills</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Core tools and workflows.</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      </div>
    </section>
  )
}


function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-3 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Experience</p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Real-time simulation, VFX production, and technical art delivery.</h2>
          <p className="text-zinc-400">A concise view of relevant production experience.</p>
        </div>

        <div className="space-y-8">
          {workExperiences.map((exp, index) => (
            <Surface key={index} className="p-6 sm:p-8">
              <div className="space-y-4">
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
            </Surface>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Surface className="flex flex-col items-start gap-6 border border-white/10 bg-gradient-to-r from-[#111] via-[#0b0f1a] to-[#120a08] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Contact</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Open to technical art opportunities.</h2>
            <p className="text-zinc-400">Email or connect on LinkedIn for full-time, freelance, or collaboration work.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ContactChip href="https://www.linkedin.com/in/swapnilnare/?skipRedirect=true" label="LinkedIn" icon={<Linkedin className="h-4 w-4" />} />
            <ContactChip href="mailto:Swapnilnare007@gmail.com" label="Email" icon={<Mail className="h-4 w-4" />} />
          </div>
        </Surface>
      </div>
    </section>
  )
}

// UI helpers
function Surface({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur ${className}`}>
      {children}
    </div>
  )
}

function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-zinc-200">{children}</span>
}

function ContactChip({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {icon}
      {label}
    </a>
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

