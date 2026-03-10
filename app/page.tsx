import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Boxes,
  Briefcase,
  Code2,
  Cpu,
  ExternalLink,
  Gauge,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Palette,
  Phone,
  Sparkles,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react"

const featuredProjects = [
  {
    href: "/projects/buggy",
    title: "Buggy (Game Ready)",
    subtitle: "UE5 environment scene, hero vehicle asset, and presentation-ready lighting built for a polished real-time showcase.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1.jpg-KWZwWjPlY3ofzCgCIo4WDBU0MAu99P.jpeg",
    tools: ["Blender", "UE5", "Substance"],
    breakdown: "Vehicle modeling, material breakup, environment framing, and final render composition.",
    category: "Real-Time Presentation",
    featured: true,
  },
  {
    href: "/projects/buggy-technical-breakdown",
    title: "Buggy Technical Breakdown",
    subtitle: "A process-led look into topology, UV strategy, material work, and presentation decisions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-14.jpg-Ey3eyiRAPRfpspaauC9I7HP7ovP6Xg.jpeg",
    tools: ["Blender", "Substance", "Marmoset"],
    breakdown: "Wireframes, texture sets, modular parts, and production-facing optimization choices.",
    category: "Workflow Analysis",
    featured: false,
  },
  {
    href: "/projects/deadpool-bust",
    title: "Deadpool 3D Bust",
    subtitle: "High-detail character bust focused on form, material readability, and final presentation quality.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-2%20%282%29.jpg-QW5MPsfQj70nCdJJw9aRgIrY4VtIEA.jpeg",
    tools: ["Sculpting", "Lookdev", "Rendering"],
    breakdown: "Character surfacing, clean presentation lighting, and polished viewport-to-render translation.",
    category: "Character Study",
    featured: false,
  },
  {
    href: "/projects/wasteland-sheriff",
    title: "Wasteland Sheriff",
    subtitle: "Stylized hero prop built with a production-minded balance of shape language and technical detail.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-artboard-1.jpg-iWiuSFYm6iD6vccDkCzwVZErB8kf5N.jpeg",
    tools: ["Modeling", "Texturing", "Presentation"],
    breakdown: "Readable silhouette design, layered surfacing, and optimized prop breakdown.",
    category: "Hero Prop",
    featured: false,
  },
  {
    href: "/projects/prop-blowtorch",
    title: "Vintage Blowtorch",
    subtitle: "A web-presented prop project that bridges real-time asset creation with browser-based rendering.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-render1.jpg-UkG2aKcOIk6a9zYjMf8md9lK8HrT31.jpeg",
    tools: ["Three.js", "WebGL", "PBR"],
    breakdown: "Interactive display, efficient geometry handling, and web-friendly lookdev decisions.",
    category: "Interactive Web 3D",
    featured: false,
  },
  {
    href: "/projects/antman",
    title: "Ant-Man and the Wasp: Quantumania",
    subtitle: "Feature-film production support spanning asset quality, environment work, and technical problem solving.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-screenshot-2023-05-16-154557.jpg-FEFroaW7oNqspjD0Bgwyi4JlVUAaEL.jpeg",
    tools: ["VFX Pipeline", "Assets", "Optimization"],
    breakdown: "Asset fidelity, pipeline collaboration, and production constraints across large-scale delivery.",
    category: "Feature Production",
    featured: false,
  },
]

const technicalSkills = [
  {
    title: "Blender & Asset Production",
    level: 94,
    description: "Environment art, hard-surface assets, modular workflows, UV cleanup, and artist-facing efficiency tools.",
    tags: ["Modeling", "Geometry Nodes", "UVs"],
    icon: Boxes,
  },
  {
    title: "Unreal Engine & Real-Time Rendering",
    level: 90,
    description: "Scene assembly, material workflows, lighting, optimization, and high-quality portfolio-ready presentation.",
    tags: ["UE5", "Lighting", "Profiling"],
    icon: Cpu,
  },
  {
    title: "Unity & Cross-Engine Thinking",
    level: 78,
    description: "Adapting assets and technical workflows for game-ready pipelines with an emphasis on clarity and performance.",
    tags: ["Runtime", "PBR", "Scenes"],
    icon: Layers3,
  },
  {
    title: "UNIGINE & Simulation Pipelines",
    level: 86,
    description: "Simulation environment production, scalable scene building, LOD planning, and stable artist workflows.",
    tags: ["Simulation", "LOD", "Baking"],
    icon: Gauge,
  },
  {
    title: "Shader & Material Development",
    level: 82,
    description: "Material graph literacy, real-time shading logic, procedural surfacing, and rendering-focused debugging.",
    tags: ["HLSL", "GLSL", "Materials"],
    icon: Zap,
  },
  {
    title: "Python Tools & Pipeline Automation",
    level: 88,
    description: "Tooling that reduces repetitive tasks, validates content, and improves handoff quality for artists and teams.",
    tags: ["Python", "Addons", "Automation"],
    icon: Wrench,
  },
]

const developmentTracks = [
  {
    title: "Model Validator",
    description:
      "A Blender-focused validation workflow that helps catch mesh issues early and keep asset quality checks closer to the artist.",
    tags: ["Python", "Blender", "Validation"],
    icon: Github,
    href: "https://github.com/Vamps023/ModelValidator",
  },
  {
    title: "Blender Unigine Exporter",
    description: "A direct exporter workflow aimed at reducing friction between DCC authoring and UNIGINE deployment.",
    tags: ["Exporter", "Blender", "UNIGINE"],
    icon: Workflow,
    href: "https://github.com/Vamps023/blenderUnigine",
  },
  {
    title: "Shader & Material Studies",
    description:
      "Ongoing exploration of shader graphs, material layering, procedural breakup, and real-time visual debugging.",
    tags: ["Shader Graph", "Lookdev", "Optimization"],
    icon: Code2,
  },
  {
    title: "Pipeline Utility Design",
    description: "Production-minded utilities for naming consistency, scene prep, asset checks, and smoother artist handoff.",
    tags: ["Automation", "Pipeline", "Artist Tools"],
    icon: Wrench,
  },
]

const environmentWork = [
  {
    title: "Simulation Environments",
    subtitle:
      "Large-scale real-time scenes designed for bus and train training with an emphasis on clarity, performance, and believable world building.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1.jpg-KWZwWjPlY3ofzCgCIo4WDBU0MAu99P.jpeg",
    stats: ["LOD Strategy", "Baked Lighting", "Procedural Assets"],
  },
  {
    title: "Cinematic Asset Support",
    subtitle:
      "Feature-production environment and prop workflows shaped by pipeline constraints, iteration speed, and final quality bars.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-screenshot-2023-05-16-154557.jpg-FEFroaW7oNqspjD0Bgwyi4JlVUAaEL.jpeg",
    stats: ["Asset Quality", "VFX Pipeline", "Production Delivery"],
  },
  {
    title: "Interactive Prop Presentation",
    subtitle: "Real-time props and showcase scenes that communicate craft, material response, and technical polish across platforms.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-render1.jpg-UkG2aKcOIk6a9zYjMf8md9lK8HrT31.jpeg",
    stats: ["WebGL", "Presentation", "PBR"],
  },
]

const workflowSteps = [
  {
    step: "01",
    title: "Blockout & Planning",
    description: "Structure, scale, silhouette, and production constraints are resolved early so the visual target stays technically grounded.",
  },
  {
    step: "02",
    title: "Authoring & Validation",
    description: "Assets are built with UV discipline, repeatable naming, topology checks, and lookdev decisions that support downstream use.",
  },
  {
    step: "03",
    title: "Optimization & Handoff",
    description: "LOD thinking, texture packing, engine integration, and artist-friendly automation keep scenes stable and performant.",
  },
  {
    step: "04",
    title: "Presentation & Breakdown",
    description: "Renders, wireframes, node views, and technical callouts make the craft visible to leads, teams, and recruiters.",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-black text-white">
      <Hero />
      <TechnicalSkills />
      <FeaturedProjectsSection />
      <ToolingSection />
      <EnvironmentSection />
      <BreakdownSection />
      <ExperienceSection />
      <FooterCta />
    </main>
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
            <Link href="/blog" className="transition hover:text-white">
              Blog
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div className="grid gap-12 pb-6 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-8 lg:pb-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
              <Briefcase className="h-4 w-4 text-[#FF4500]" />
              AAA-style Technical Art • Real-Time Graphics • VFX Pipeline Thinking
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[88px]">
                Building
                <span className="block text-[#FF4500]">real-time visuals,</span>
                shaders, tools, and production-ready worlds.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
                I design environments, technical workflows, and artist tools for games, simulation, and VFX. My focus sits at the
                intersection of environment art, pipeline development, optimization, and real-time rendering across Blender, Unreal
                Engine, Unity, UNIGINE, and web-based 3D.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects/buggy"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff5d22]"
              >
                Explore Featured Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Talk About a Role
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Surface>
                <p className="text-3xl font-semibold text-white">4+</p>
                <p className="mt-2 text-sm text-zinc-400">Years across simulation, VFX, and technical production.</p>
              </Surface>
              <Surface>
                <p className="text-3xl font-semibold text-white">10+</p>
                <p className="mt-2 text-sm text-zinc-400">Project breakdowns spanning lookdev, assets, and workflows.</p>
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

          <div className="relative min-h-[720px]">
            <Surface className="scanline-panel relative mx-auto max-w-[540px] overflow-hidden rounded-[2rem] p-3 shadow-[0_40px_120px_rgba(255,69,0,0.12)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,69,0,0.16),transparent_35%)]" />
              <div className="absolute inset-0 grid-futuristic opacity-25" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1716150100804.jpg-B9HtwdkKiiDbacnpz1OalncFT03jxF.jpeg"
                  alt="Swapnil Nare portrait"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              </div>

              <div className="relative mt-4 grid gap-3 rounded-[1.4rem] border border-white/10 bg-black/60 p-4 text-sm backdrop-blur">
                <div className="flex items-center gap-2 text-zinc-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Current Focus
                </div>
                <p className="text-lg font-semibold text-white leading-relaxed">
                  Environment art, real-time workflows, shader/material iteration, and artist-facing tool development.
                </p>
              </div>
            </Surface>

          </div>
        </div>
      </div>
    </section>
  )
}

function TechnicalSkills() {
  return (
    <section className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Technical Skills</p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Engines, shaders, pipelines, and tooling.</h2>
          <p className="max-w-3xl text-zinc-400">
            A stack shaped by production constraints: rendering, asset discipline, automation, and presentable results that travel
            well between DCCs and engines.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {technicalSkills.map((skill) => (
            <Surface key={skill.title} className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 text-[#FF4500]">
                  <skill.icon className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">{skill.title}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">{skill.level}%</span>
              </div>
              <p className="mt-3 text-lg font-semibold text-white">{skill.title}</p>
              <p className="mt-2 text-sm text-zinc-400">{skill.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div className="h-full rounded-full bg-gradient-to-r from-[#FF4500] via-amber-400 to-emerald-300" style={{ width: `${skill.level}%` }} />
              </div>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProjectsSection() {
  return (
    <section className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Featured Technical Projects</p>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Projects built for visuals, performance, and clarity.</h2>
            <p className="text-zinc-400">
              Real-time presentation, shader/material craft, and production-aware optimization across environments, props, and film support.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-white">
            Read breakdowns
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Link key={project.href} href={project.href} className={`group ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}>
              <div
                className={`relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-900/70 ${
                  index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"
                } shadow-[0_30px_80px_rgba(0,0,0,0.4)]`}
              >
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                {project.featured ? (
                  <div className="absolute left-0 top-0 m-5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
                    Featured Project
                  </div>
                ) : null}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <div className="mb-2 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-[#FF4500]">
                    <span>{project.category}</span>
                    <span className="text-zinc-400">•</span>
                    <span className="text-zinc-300">{project.tools.join(" · ")}</span>
                  </div>
                  <h3 className={`mb-2 font-bold text-white ${index === 0 ? "text-2xl sm:text-3xl" : "text-xl"}`}>{project.title}</h3>
                  <p className="max-w-xl text-sm text-zinc-300 sm:text-base">{project.subtitle}</p>
                  <p className="mt-3 text-xs text-zinc-400">{project.breakdown}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function ToolingSection() {
  const tracks = developmentTracks

  return (
    <section className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Shader & Tool Development</p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Automation, validation, and real-time materials.</h2>
          <p className="max-w-3xl text-zinc-400">
            Tools that reinforce artist velocity, reduce risk, and keep assets aligned with engine expectations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {tracks.map((track) => (
            <Surface key={track.title} className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-center gap-3 text-[#FF4500]">
                <track.icon className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">{track.title}</p>
              </div>
              <p className="mt-2 text-lg font-semibold text-white">{track.title}</p>
              <p className="mt-2 text-sm text-zinc-400">{track.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {track.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              {track.href ? (
                <a
                  href={track.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#FF4500] hover:text-[#ff6b34]"
                >
                  View on GitHub
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </Surface>
          ))}
        </div>
      </div>
    </section>
  )
}

function EnvironmentSection() {
  return (
    <section className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Real-Time Environment Work</p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Optimized worlds ready for simulation, film, and games.</h2>
          <p className="max-w-3xl text-zinc-400">
            Environment construction paired with profiling, LOD planning, baked lighting, and material discipline to keep scenes stable and clear.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {environmentWork.map((env) => (
            <Surface key={env.title} className="group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-white/10">
                <Image src={env.image} alt={env.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{env.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{env.subtitle}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {env.stats.map((stat) => (
                  <Tag key={stat}>{stat}</Tag>
                ))}
              </div>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  )
}

function BreakdownSection() {
  return (
    <section className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Technical Breakdown</p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Process visibility from blockout to presentation.</h2>
          <p className="max-w-3xl text-zinc-400">
            Structured steps that keep assets reliable: planning, validation, optimization, and clear presentation for leads and recruiters.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((step) => (
            <Surface key={step.step} className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF4500]">{step.step}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{step.description}</p>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-3 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Experience</p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Real-time simulation, VFX production, and technical art delivery.</h2>
          <p className="text-zinc-400">
            A mix of environment building, pipeline support, and automation to keep creative and technical goals aligned.
          </p>
        </div>

        <div className="space-y-8">
          {workExperiences.map((exp, index) => (
            <Surface key={index} className="p-6 sm:p-8">
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
            </Surface>
          ))}
        </div>
      </div>
    </section>
  )
}

function FooterCta() {
  return (
    <section className="px-4 pb-16 pt-4 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Surface className="flex flex-col items-start gap-6 border border-white/10 bg-gradient-to-r from-[#111] via-[#0b0f1a] to-[#120a08] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Let&apos;s Connect</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Available for technical art, tooling, and real-time roles.</h2>
            <p className="text-zinc-400">Reach out for collaboration, freelance work, or full-time opportunities.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ContactChip href="https://www.linkedin.com/in/swapnilnare/" label="LinkedIn" icon={<Linkedin className="h-4 w-4" />} />
            <ContactChip href="https://www.artstation.com/vamps23" label="ArtStation" icon={<Palette className="h-4 w-4" />} />
            <ContactChip href="mailto:Swapnilnare007@gmail.com" label="Email" icon={<Mail className="h-4 w-4" />} />
            <ContactChip href="tel:+918766569006" label="Phone" icon={<Phone className="h-4 w-4" />} />
          </div>
        </Surface>
        <footer className="mt-8 border-t border-white/10 py-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Swapnil Nare. All rights reserved.
        </footer>
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

function FloatingCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur ${className}`}>
      {children}
    </div>
  )
}

function FloatingHeader({ icon: Icon, label }: { icon: typeof Code2; label: string }) {
  return (
    <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF4500]">
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </div>
  )
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

