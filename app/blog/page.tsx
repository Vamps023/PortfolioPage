import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,69,0,0.25),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.06),transparent_35%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

        {/* Header */}
        <header className="relative z-10 border-b border-white/10 px-4 py-6 backdrop-blur lg:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-zinc-300 transition hover:text-white">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Portfolio</span>
            </Link>
            <h1 className="text-xl font-semibold text-white">Swapnil Nare</h1>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 px-4 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Insights</p>
            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Blog & Work Breakdowns</h2>
            <p className="mt-4 text-lg text-zinc-300">
              Detailed insights into my creative process and technical breakdowns of selected projects.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="relative z-10 px-4 pb-16 lg:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur lg:grid-cols-5 lg:p-10">
            <div className="lg:col-span-3">
              <div className="relative h-[60vh] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1.jpg-KWZwWjPlY3ofzCgCIo4WDBU0MAu99P.jpeg"
                  alt="Buggy Breakdown"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 lg:col-span-2">
              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  June 15, 2023
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  15 min read
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">Work Breakdown</span>
              </div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Buggy Model Breakdown: From Concept to Game-Ready Asset</h2>
              <p className="text-zinc-300">
                In this detailed breakdown, I walk through my entire process for creating the game-ready buggy model,
                from initial concept sketches to final implementation in Unreal Engine 5.
              </p>
              <Link
                href="/blog/buggy-breakdown"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff5d22]"
              >
                Read Full Article
              </Link>
            </div>
          </div>
        </section>

        {/* All Blog Posts */}
        <section className="relative z-10 px-4 pb-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h3 className="mb-10 text-3xl font-bold text-white">Recent Articles</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <BlogCard
                href="/blog/buggy-breakdown"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1.jpg-KWZwWjPlY3ofzCgCIo4WDBU0MAu99P.jpeg"
                date="June 15, 2023"
                tag="Work Breakdown"
                title="Buggy Model Breakdown: From Concept to Game-Ready Asset"
                excerpt="A detailed look at my process for creating the game-ready buggy model, from initial concept to final implementation in UE5."
              />
              <BlogCard
                href="/blog/antman-quantumania-experience"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-screenshot-2023-05-16-154557.jpg-FEFroaW7oNqspjD0Bgwyi4JlVUAaEL.jpeg"
                date="February 18, 2023"
                tag="Work Breakdown"
                title="Working on Ant-Man and the Wasp: Quantumania"
                excerpt="My experience working on Marvel's Ant-Man and the Wasp: Quantumania, including challenges and solutions."
              />
              <BlogCard
                href="/blog/technical-tools"
                image="/placeholder.svg?height=600&width=800"
                date="March 17, 2025"
                tag="Technical Tools"
                title="Developing Tools for Technical Artists"
                excerpt="An overview of my approach to creating specialized tools that enhance workflows for technical artists and 3D professionals."
              />
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10 px-4 py-12 text-center lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-zinc-400">© {new Date().getFullYear()} Swapnil Nare. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

function BlogCard({
  href,
  image,
  date,
  tag,
  title,
  excerpt,
}: {
  href: string
  image: string
  date: string
  tag: string
  title: string
  excerpt: string
}) {
  return (
    <Link href={href} className="group block rounded-[1.5rem] border border-white/10 bg-white/[0.03] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
      <div className="p-6 space-y-3">
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          <span>{date}</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-zinc-300">{tag}</span>
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-[#FF4500] transition-colors">{title}</h3>
        <p className="text-zinc-400 text-sm">{excerpt}</p>
      </div>
    </Link>
  )
}

