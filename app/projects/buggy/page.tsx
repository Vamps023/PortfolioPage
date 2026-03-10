import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function BuggyProject() {
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

        {/* Project Hero */}
        <section className="relative z-10 px-4 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl space-y-6">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Case Study</p>
              <h2 className="text-4xl font-bold text-white sm:text-5xl">Buggy (Game Ready)</h2>
              <p className="text-zinc-300">UE5 Environment and Vehicle Asset</p>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-[0_25px_70px_rgba(0,0,0,0.55)]">
              <div className="relative h-[60vh] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1%20%281%29.jpg-4BIex2ypgB62KQUpb5CgQY1RyjbQu0.jpeg"
                  alt="Game Ready Buggy in Environment"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Project Description */}
        <section className="relative z-10 px-4 pb-16 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-6 rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <h3 className="text-2xl font-bold text-white">Overview</h3>
              <p className="text-lg leading-relaxed text-zinc-300">
                This off-road buggy project helped me deepen my modeling and texturing skills while building a cohesive UE5
                environment presentation.
              </p>
              <p className="text-lg leading-relaxed text-zinc-300">
                I leveraged Megascans for foliage and supporting assets, focusing on lighting, composition, and scene polish
                to deliver a production-ready showcase.
              </p>
              <p className="text-lg leading-relaxed text-zinc-300">
                Modeling was done in Blender and texturing in Substance Painter, with additional thanks to Arjun for
                texture insights—see his work on
                {" "}
                <a
                  href="https://www.artstation.com/arjunferozzpopzienz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF4500] hover:underline"
                >
                  ArtStation
                </a>
                .
              </p>
            </div>
            <div className="space-y-4 rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <h4 className="text-xl font-semibold text-white">Highlights</h4>
              <ul className="space-y-3 text-zinc-300">
                <li>UE5 environment assembly with Megascans foliage and props</li>
                <li>Blender modeling and Substance Painter texturing</li>
                <li>Lighting and presentation tuned for readability and mood</li>
                <li>Scene optimization for real-time performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Breakdown CTA */}
        <section className="relative z-10 px-4 pb-16 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[1.6rem] border border-white/10 bg-white/[0.03] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="relative h-64 lg:h-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-14.jpg-Ey3eyiRAPRfpspaauC9I7HP7ovP6Xg.jpeg"
                  alt="Buggy Wireframe"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="lg:col-span-2 p-8 lg:p-10 space-y-4">
                <h3 className="text-2xl font-bold">Technical Breakdown</h3>
                <p className="text-zinc-300">
                  Dive deeper into the process: modeling, texturing, technical specs, and challenges solved along the way.
                </p>
                <Link
                  href="/projects/buggy-technical-breakdown"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF4500] transition hover:text-[#ff6b34]"
                >
                  View Technical Breakdown
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="relative z-10 px-4 pb-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h3 className="mb-8 text-2xl font-bold">Project Gallery</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-6%20%281%29.jpg-GtbJStXc60iS9ReflG4FPASNpZAqHh.jpeg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-7.jpg-X50U3xHAEZEpcAdgcwW8jgnfDFzYZQ.jpeg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-5.jpg-hLnHij2wM0VwKUTCy2rK10QlchKcBN.jpeg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-4.jpg-wyzpgImyS2zrXgjjI1LBBrfrI0V5ml.jpeg",
              ].map((src) => (
                <div key={src} className="relative aspect-video overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.02]">
                  <Image src={src} alt="Buggy detail" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10 px-4 py-12 text-center lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-zinc-400">© {new Date().getFullYear()} Swapnil Nare. All rights reserved.</p>
          <Link href="/" className="mt-2 inline-block text-[#FF4500] hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </main>
  )
}

