import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-8 px-4 lg:px-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-2xl font-bold">Swapnil Nare</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-16 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Blog & Work Breakdowns</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Detailed insights into my creative process and technical breakdowns of selected projects.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="relative h-[60vh] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1.jpg-KWZwWjPlY3ofzCgCIo4WDBU0MAu99P.jpeg"
                  alt="Buggy Breakdown"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center text-zinc-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  June 15, 2023
                </span>
                <span className="flex items-center text-zinc-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  15 min read
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Buggy Model Breakdown: From Concept to Game-Ready Asset</h2>
              <p className="text-zinc-300 mb-6">
                In this detailed breakdown, I walk through my entire process for creating the game-ready buggy model,
                from initial concept sketches to final implementation in Unreal Engine 5.
              </p>
              <Link
                href="/blog/buggy-breakdown"
                className="inline-block px-6 py-3 bg-[#FF4500] text-white rounded-lg hover:bg-[#FF5722] transition-colors"
              >
                Read Full Article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-20 px-4 lg:px-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Recent Articles</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/blog/buggy-breakdown" className="group">
              <div className="bg-zinc-800 rounded-lg overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1.jpg-KWZwWjPlY3ofzCgCIo4WDBU0MAu99P.jpeg"
                    alt="Buggy Breakdown"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs text-zinc-400">June 15, 2023</span>
                    <span className="text-xs px-2 py-1 bg-zinc-700 rounded-full">Work Breakdown</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-[#FF4500] transition-colors">
                    Buggy Model Breakdown: From Concept to Game-Ready Asset
                  </h3>
                  <p className="text-zinc-400 mt-2">
                    A detailed look at my process for creating the game-ready buggy model, from initial concept to final
                    implementation in UE5.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog/antman-quantumania-experience" className="group">
              <div className="bg-zinc-800 rounded-lg overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-screenshot-2023-05-16-154557.jpg-FEFroaW7oNqspjD0Bgwyi4JlVUAaEL.jpeg"
                    alt="Ant-Man and the Wasp: Quantumania"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs text-zinc-400">February 18, 2023</span>
                    <span className="text-xs px-2 py-1 bg-zinc-700 rounded-full">Work Breakdown</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-[#FF4500] transition-colors">
                    Working on Ant-Man and the Wasp: Quantumania
                  </h3>
                  <p className="text-zinc-400 mt-2">
                    My experience working on Marvel's Ant-Man and the Wasp: Quantumania, including challenges and
                    solutions.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 lg:px-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zinc-400">© {new Date().getFullYear()} Swapnil Nare. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

