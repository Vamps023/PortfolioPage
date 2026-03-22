"use client"

import type { ReactNode } from "react"
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

export default function Monarch() {
  const images = [
    "/Monarch/swapnil-nare-bigil-b-06-1.jpg",
    "/Monarch/swapnil-nare-screenshot-2024-02-07-084338.jpg"
  ]

  return (
    <main className="min-h-screen overflow-x-clip bg-black text-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Monarch/swapnil-nare-bigil-b-06-1.jpg"
            alt="Monarch: Legacy of Monsters"
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
                Feature Production • Apple TV+ • MPC
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Monarch
                  <span className="block text-[#FF4500]">Legacy of Monsters</span>
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
                  Asset and technical art work for Apple TV+ monster series, focusing on pipeline improvement and look development support.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex flex-wrap gap-2">
                  {["Maya", "Substance Painter", "Pipeline Tools", "Lookdev"].map((tool) => (
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
            <h2 className="text-3xl font-bold sm:text-4xl">VFX Breakdown</h2>
            <p className="max-w-3xl text-zinc-400">Watch the VFX breakdown to see the final production work</p>
          </div>

          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-900/70 aspect-[16/9] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            <iframe
              src="https://www.youtube.com/embed/JLHsM4bpfxY"
              className="w-full h-full border-0"
              allowFullScreen
              title="Monarch: Legacy of Monsters - Official Trailer"
            />
          </div>
        </div>
      </section>

      {/* Production Video */}
      <section className="px-4 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Behind the Scenes</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Production Work</h2>
            <p className="max-w-3xl text-zinc-400">Behind-the-scenes look at the asset creation and pipeline work</p>
          </div>

          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-900/70 aspect-[16/9] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            <video
              src="/video/Monarch.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button
                onClick={() => window.open("/video/Monarch.mp4", '_blank')}
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
      <section className="px-4 py-16 lg:px-12 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Production Gallery</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Behind the Scenes</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-900/70 aspect-[4/3] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                <Image
                  src={image}
                  alt={`Monarch production image ${index + 1}`}
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
      <section className="px-4 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Project Overview</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Feature Film Production</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">About This Project</h3>
                <div className="space-y-4 text-zinc-300">
                  <p className="leading-relaxed">
                    As an asset and technical artist for 'Monarch: Legacy of Monsters,' I focused on improving assets in our pipeline and helping fellow artists troubleshoot look development issues. This role required both technical expertise and collaborative problem-solving skills in a high-pressure production environment.
                  </p>
                  
                  <p className="leading-relaxed">
                    I created scripts to make our workflow smoother as we transitioned to a new pipeline, which involved understanding existing workflows and identifying opportunities for automation and optimization. This work directly contributed to meeting tight production deadlines while maintaining quality standards.
                  </p>
                  
                  <p className="leading-relaxed">
                    This artwork reflects the teamwork and dedication behind the scenes at MPC. The collaborative environment and the opportunity to work on such a high-profile project was invaluable for my professional growth as a technical artist.
                  </p>
                </div>
              </Surface>

              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">Key Contributions</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Asset improvement and optimization for production pipeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Look development troubleshooting and artist support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Script development for workflow automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF4500] mt-1">•</span>
                    <span>Pipeline transition support and training</span>
                  </li>
                </ul>
              </Surface>
            </div>

            <div className="space-y-6">
              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">Production Details</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div>
                    <span className="text-[#FF4500] font-semibold">Studio:</span>
                    <span>MPC (Moving Picture Company)</span>
                  </div>
                  <div>
                    <span className="text-[#FF4500] font-semibold">Platform:</span>
                    <span>Apple TV+ Series</span>
                  </div>
                  <div>
                    <span className="text-[#FF4500] font-semibold">Role:</span>
                    <span>Asset & Technical Artist</span>
                  </div>
                  <div>
                    <span className="text-[#FF4500] font-semibold">Tools:</span>
                    <span>Maya, Substance Painter, Custom Pipeline Tools</span>
                  </div>
                </div>
              </Surface>

              <Surface className="p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">Special Thanks</h3>
                <p className="text-sm text-zinc-300">
                  Special thanks to MPC for giving me this opportunity to work on such an amazing project with talented artists and professionals.
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
