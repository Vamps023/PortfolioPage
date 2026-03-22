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

export default function BuggyBreakdown() {
  useEffect(() => {
    if (window.location.hash === '#production-projects') {
      // Redirect to main page and scroll to production projects
      window.location.replace('/#production-projects')
    }
  }, [])

  const images = [
    "/buggy/breakdown/swapnil-nare-1.jpg",
    "/buggy/breakdown/swapnil-nare-2.jpg",
    "/buggy/breakdown/swapnil-nare-3.jpg",
    "/buggy/breakdown/swapnil-nare-4.jpg",
    "/buggy/breakdown/swapnil-nare-5.jpg",
    "/buggy/breakdown/swapnil-nare-6.jpg",
    "/buggy/breakdown/swapnil-nare-7.jpg",
    "/buggy/breakdown/swapnil-nare-8.jpg",
    "/buggy/breakdown/swapnil-nare-9.jpg",
    "/buggy/breakdown/swapnil-nare-10.jpg",
    "/buggy/breakdown/swapnil-nare-11.jpg",
    "/buggy/breakdown/swapnil-nare-12.jpg",
    "/buggy/breakdown/swapnil-nare-13.jpg",
    "/buggy/breakdown/swapnil-nare-14.jpg",
    "/buggy/breakdown/swapnil-nare-15.jpg",
    "/buggy/breakdown/swapnil-nare-16.jpg"
  ]

  return (
    <main className="min-h-screen overflow-x-clip bg-black text-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/buggy/breakdown/swapnil-nare-10.jpg"
            alt="Buggy Technical Breakdown"
            fill
            className="object-cover"
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
                Technical Art • Modeling • Texturing • Breakdown
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Buggy
                  <span className="block text-[#FF4500]">Technical Breakdown</span>
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
                  This is my latest artwork, was working on this for the last couple of months. A really fun challenge to work on with detailed modeling and texturing breakdown.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex flex-wrap gap-2">
                  {["Blender", "Substance 3D Painter", "Marmoset Toolbag", "Photoshop"].map((tool) => (
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

      {/* Image Gallery */}
      <section className="px-4 py-16 lg:px-12 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Breakdown Gallery</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Detailed Shots & Technical Breakdowns</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-900/70 aspect-[4/3] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                <Image
                  src={image}
                  alt={`Buggy breakdown image ${index + 1}`}
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
            <h2 className="text-3xl font-bold sm:text-4xl">Modeling & Texturing Breakdown</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">About This Project</h3>
                <div className="space-y-4 text-zinc-300">
                  <p className="leading-relaxed">
                    This is my latest artwork, which I've been working on for the last couple of months. It was a really fun challenge to work on and represents a significant step forward in my technical art skills.
                  </p>
                  
                  <p className="leading-relaxed">
                    The goal of the project was to improve my modeling and texturing skills through focused practice and attention to detail. I wanted to create a high-quality asset that would showcase my ability to handle complex geometry and sophisticated material workflows.
                  </p>
                  
                  <p className="leading-relaxed">
                    This breakdown project allowed me to dive deep into the technical aspects of asset creation, from clean topology construction to advanced texturing techniques. The experience gained from this project has been invaluable for understanding production workflows and quality standards.
                  </p>
                </div>
              </Surface>

              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">Technical Specifications</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex justify-between">
                    <span className="text-[#FF4500] font-semibold">Polycount:</span>
                    <span>43,97 faces (75,778 Tris)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FF4500] font-semibold">Texture Set:</span>
                    <span>8 x 2048 (normals, albedo, ORM)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FF4500] font-semibold">Modeling:</span>
                    <span>Blender</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FF4500] font-semibold">Texturing:</span>
                    <span>Substance 3D Painter</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FF4500] font-semibold">Rendering:</span>
                    <span>Marmoset Toolbag</span>
                  </div>
                </div>
              </Surface>
            </div>

            <div className="space-y-6">
              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">Software & Tools</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div>
                    <span className="text-[#FF4500] font-semibold">Blender:</span> Complete 3D modeling and geometry optimization
                  </div>
                  <div>
                    <span className="text-[#FF4500] font-semibold">Substance 3D Painter:</span> Professional PBR texturing and material creation
                  </div>
                  <div>
                    <span className="text-[#FF4500] font-semibold">Marmoset Toolbag:</span> High-quality rendering and presentation
                  </div>
                  <div>
                    <span className="text-[#FF4500] font-semibold">Photoshop:</span> Texture refinement and post-processing work
                  </div>
                </div>
              </Surface>

              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">Key Learning Outcomes</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Advanced modeling techniques for complex geometry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Professional PBR texturing workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Texture optimization for high-resolution assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Rendering and presentation best practices</span>
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
