"use client"

import type { ReactNode } from "react"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Linkedin,
  Mail,
  Sparkles,
  ExternalLink,
  Github,
} from "lucide-react"

export default function Blowtorch() {
  useEffect(() => {
    if (window.location.hash === '#production-projects') {
      // Redirect to main page and scroll to production projects
      window.location.replace('/#production-projects')
    }
  }, [])

  const images = [
    "/BlowTorch/swapnil-nare-render1.jpg",
    "/BlowTorch/swapnil-nare-render2.jpg",
    "/BlowTorch/swapnil-nare-render4.jpg",
    "/BlowTorch/swapnil-nare-render5.jpg",
    "/BlowTorch/swapnil-nare-cameramatch.jpg",
    "/BlowTorch/swapnil-nare-refrence.jpg"
  ]

  return (
    <main className="min-h-screen overflow-x-clip bg-black text-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/BlowTorch/swapnil-nare-render1.jpg"
            alt="Vintage Blowtorch"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(255,69,0,0.22),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(22,119,255,0.18),transparent_28%),radial-gradient(circle_at_50%_75%,rgba(255,255,255,0.06),transparent_34%)]" />
        <div className="absolute inset-0 grid-futuristic opacity-40" />
        <div className="absolute inset-0 noise-overlay opacity-20" />
        
        <div className="relative mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-12 lg:py-10">
          <div className="flex flex-col gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 text-sm text-zinc-200">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#FF4500]/30 bg-[#FF4500]/10 text-[#FF4500]">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              Technical Artist Portfolio
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-400 sm:gap-6 sm:text-sm">
              <Link href="/" className="transition hover:text-white">
                <ArrowLeft className="inline h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
              <Link href="#contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div className="pb-6 pt-12 lg:pb-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
                <Briefcase className="h-4 w-4 text-[#FF4500]" />
                Hero Prop • Modeling • Texturing • Rendering
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Vintage
                  <span className="block text-[#FF4500]">Blowtorch</span>
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
                  I wanted to improve my skills in modeling and texturing, so I used different tools for each step of this hero prop creation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex flex-wrap gap-2">
                  {["Maya", "Blender", "Photoshop", "Substance 3D Painter", "Marmoset Toolbag"].map((tool) => (
                    <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-zinc-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
      {/* Video Gallery */}
      <section className="px-4 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Video Showcase</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Prop in Motion</h2>
          </div>

          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-900/70 aspect-[16/9] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            <video
              src="/video/BlowTorch.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button
                onClick={() => window.open("/video/BlowTorch.mp4", '_blank')}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:border-white/20 hover:bg-black/80"
              >
                <ExternalLink className="h-4 w-4" />
                View Full Size
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-4 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Image Gallery</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Detailed Shots & Renders</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-900/70 aspect-[4/3] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                <Image
                  src={image}
                  alt={`Vintage Blowtorch render ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    onClick={() => window.open(image, '_blank')}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:border-white/20 hover:bg-black/80"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Full Size
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="px-4 py-16 lg:px-12 bg-zinc-950/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Project Overview</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Hero Prop Creation</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">About This Project</h3>
                <div className="space-y-4 text-zinc-300">
                  <p className="leading-relaxed">
                    This vintage blowtorch represents a deliberate exploration of multi-software workflows and advanced prop creation techniques. The project was designed to push my modeling and texturing abilities while developing a comprehensive understanding of how different tools complement each other in a professional pipeline.
                  </p>
                  
                  <p className="leading-relaxed">
                    The modeling phase leveraged both Maya and Blender to maximize workflow efficiency. Maya's precision modeling tools handled the core mechanical components and hard-surface geometry, while Blender's procedural modeling capabilities accelerated the creation of complex forms and detailed elements. This dual-software strategy proved invaluable for achieving both technical accuracy and creative flexibility.
                  </p>
                  
                  <p className="leading-relaxed">
                    Texturing involved a sophisticated material workflow combining Photoshop's texture editing power with Substance Painter's procedural material generation. I developed a comprehensive aging system that tells the story of this tool's history through multiple layers of wear: micro-scratches from regular use, impact dents from drops, rust patterns from moisture exposure, and accumulated dirt from workshop environments. Each material layer was carefully crafted to interact naturally with lighting, creating believable surface complexity.
                  </p>
                  
                  <p className="leading-relaxed">
                    The final render in Marmoset Toolbag 4 brought all elements together, showcasing how clean topology, optimized UV layouts, and high-quality PBR materials combine to create a production-ready asset. This project demonstrates the complete journey from concept to polished presentation, with particular attention to the subtle details that make digital props feel tangible and authentic.
                  </p>
                </div>
              </Surface>

              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">Technical Specifications</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex justify-between">
                    <span className="text-[#FF4500] font-semibold">Polycount:</span>
                    <span>5,006 triangles</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FF4500] font-semibold">Texture Resolution:</span>
                    <span>1K (1024x1024)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FF4500] font-semibold">Modeling:</span>
                    <span>Maya & Blender</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FF4500] font-semibold">Texturing:</span>
                    <span>Photoshop & Substance Painter</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FF4500] font-semibold">Rendering:</span>
                    <span>Marmoset Toolbag 4</span>
                  </div>
                </div>
              </Surface>
            </div>

            <div className="space-y-6">
              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">Software & Tools</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div>
                    <span className="text-[#FF4500] font-semibold">Maya:</span> Professional 3D modeling and geometry work
                  </div>
                  <div>
                    <span className="text-[#FF4500] font-semibold">Blender:</span> Additional modeling and mesh refinement
                  </div>
                  <div>
                    <span className="text-[#FF4500] font-semibold">Photoshop:</span> Texture editing and detail work
                  </div>
                  <div>
                    <span className="text-[#FF4500] font-semibold">Substance 3D Painter:</span> PBR texturing and material creation
                  </div>
                  <div>
                    <span className="text-[#FF4500] font-semibold">Marmoset Toolbag:</span> High-quality rendering and presentation
                  </div>
                </div>
              </Surface>

              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">Key Features</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Realistic aged metal with scratches, dents, and rust</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Low poly count optimized for real-time applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>High-quality 1K textures for detailed surface work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Multi-software workflow demonstrating tool flexibility</span>
                  </li>
                </ul>
              </Surface>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Surface className="flex flex-col items-start gap-6 border border-white/10 bg-gradient-to-r from-[#111] via-[#0b0f1a] to-[#120a08] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Contact</p>
              <h2 className="text-3xl font-bold sm:text-4xl">Open to technical art opportunities.</h2>
              <p className="text-zinc-400">Email or connect on LinkedIn for full-time, freelance, or collaboration work.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ContactChip href="https://www.linkedin.com/in/swapnilnare/" label="LinkedIn" icon={<Linkedin className="h-4 w-4" />} />
              <ContactChip href="mailto:Swapnilnare007@gmail.com" label="Email" icon={<Mail className="h-4 w-4" />} />
            </div>
          </Surface>
        </div>
      </section>
    </main>
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
