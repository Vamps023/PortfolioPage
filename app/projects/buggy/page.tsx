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

export default function BuggyProject() {
  useEffect(() => {
    if (window.location.hash === '#production-projects') {
      // Redirect to main page and scroll to production projects
      window.location.replace('/#production-projects')
    }
  }, [])

  const images = [
    "/buggy/swapnil-nare-1.jpg",
    "/buggy/swapnil-nare-2.jpg", 
    "/buggy/swapnil-nare-3.jpg",
    "/buggy/swapnil-nare-4.jpg",
    "/buggy/swapnil-nare-5.jpg",
    "/buggy/swapnil-nare-6.jpg"
  ]

  const videos = [
    "/video/buggy_1.mp4",
    "/video/buggy_2.mp4"
  ]

  return (
    <main className="min-h-screen overflow-x-clip bg-black text-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            src="/video/buggy_1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
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
                Real-Time Environment • UE5 • Professional Portfolio
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Buggy
                  <span className="block text-[#FF4500]">UE5 Environment Showcase</span>
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
                  A complete real-time environment crafted in Unreal Engine 5, featuring a hero buggy vehicle asset with professional-grade modeling, texturing, and presentation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex flex-wrap gap-2">
                  {["Blender", "Unreal Engine 5", "Substance Painter", "Megascans", "Photoshop"].map((tool) => (
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
      <section className="px-4 py-16 lg:px-12 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Video Showcase</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Real-time Environment in Motion</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {videos.map((video, index) => (
              <div key={index} className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-900/70 aspect-[16/9] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    onClick={() => window.open(video, '_blank')}
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

      {/* Image Gallery */}
      <section className="px-4 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Image Gallery</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Detailed Shots & Breakdowns</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-900/70 aspect-[4/3] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                <Image
                  src={image}
                  alt={`Buggy project image ${index + 1}`}
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
            <h2 className="text-3xl font-bold sm:text-4xl">First UE5 Environment Creation</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">About This Project</h3>
                <div className="space-y-4 text-zinc-300">
                  <p className="leading-relaxed">
                    I'm excited to unveil this environment I crafted in UE5 for the first time! This project marks a significant milestone in my technical art journey, representing my first complete real-time environment built from the ground up in Unreal Engine 5.
                  </p>
                  
                  <p className="leading-relaxed">
                    The primary objective was to enhance my modeling and texturing skills through a comprehensive production workflow. The modeling phase was executed in Blender, where I focused on creating clean, optimized geometry suitable for real-time rendering. The hero buggy vehicle asset became the centerpiece of this technical exercise, requiring careful attention to form, silhouette, and functional design.
                  </p>
                  
                  <p className="leading-relaxed">
                    For texturing, I leveraged Substance Painter to develop professional PBR materials that bring the vehicle to life. This involved creating multiple material layers, weathering effects, and detailed surface textures that respond realistically to lighting. The texturing process taught me valuable lessons about material complexity, texture optimization, and achieving visual fidelity within performance constraints.
                  </p>
                  
                  <p className="leading-relaxed">
                    To create a rich, believable environment, I strategically integrated Megascans' high-quality assets throughout the scene. Foliage, ground embankments, and environmental props were carefully placed to establish natural composition and visual interest. This approach allowed me to focus on the hero asset while still delivering a complete, polished environment that feels inhabited and authentic.
                  </p>
                  
                  <p className="leading-relaxed">
                    The lighting setup in UE5 was crucial for showcasing both the vehicle and environment effectively. I implemented a combination of natural lighting, atmospheric effects, and accent lighting to highlight the buggy's form and materials. This project provided invaluable experience with UE5's lighting systems, post-processing effects, and real-time rendering optimization techniques.
                  </p>
                </div>
              </Surface>

              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">Technical Highlights</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Game-ready vehicle asset with optimized geometry for real-time rendering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Professional material workflows using PBR texturing in Substance Painter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Environment composition with Megascans integration for natural foliage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Lighting and presentation setup optimized for portfolio showcase</span>
                  </li>
                </ul>
              </Surface>
            </div>

            <div className="space-y-6">
              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">Software & Tools</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div>
                    <span className="text-[#FF4500] font-semibold">Blender:</span> Complete vehicle modeling and asset preparation
                  </div>
                  <div>
                    <span className="text-[#FF4500] font-semibold">Substance Painter:</span> Professional texturing and material creation
                  </div>
                  <div>
                    <span className="text-[#FF4500] font-semibold">UE5:</span> Environment composition, lighting, and real-time presentation
                  </div>
                  <div>
                    <span className="text-[#FF4500] font-semibold">Megascans:</span> High-quality foliage and environment assets
                  </div>
                  <div>
                    <span className="text-[#FF4500] font-semibold">Photoshop:</span> Texture refinement and post-processing
                  </div>
                </div>
              </Surface>

              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">Special Thanks</h3>
                <p className="text-sm text-zinc-300">
                  Special thanks to Arjun for invaluable assistance with texture work and material development.
                </p>
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
