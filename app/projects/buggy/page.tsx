import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function BuggyProject() {
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

      {/* Project Hero */}
      <section className="py-12 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Buggy (Game Ready)</h2>
          <p className="text-zinc-400 mb-8">UE5 Environment and Vehicle Asset</p>

          <div className="w-full h-[60vh] relative rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1%20%281%29.jpg-4BIex2ypgB62KQUpb5CgQY1RyjbQu0.jpeg"
              alt="Game Ready Buggy in Environment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-12 px-4 lg:px-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed mb-6">
              This is my latest artwork, a project I was working on for the last couple of months. Creating this
              off-road buggy was a really fun challenge that helped me improve my modeling and texturing skills.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I'm excited to unveil the environment I crafted in UE5 for the first time! I also took advantage of
              Megascans high quality assets for foliage and some filler assets like ground embankments.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The primary objective of this endeavor was to enhance my modeling and texturing skills, with the modeling
              phase executed in Blender and texturing accomplished in Substance Painter.
            </p>
            <p className="text-lg leading-relaxed">
              A special thanks to Arjun for his invaluable assistance in the texture aspect of the project. Feel free to
              explore his work on{" "}
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
        </div>
      </section>

      {/* Technical Breakdown CTA */}
      <section className="py-12 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-14.jpg-Ey3eyiRAPRfpspaauC9I7HP7ovP6Xg.jpeg"
                  alt="Buggy Wireframe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:col-span-2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Technical Breakdown Available</h3>
                <p className="text-zinc-300 mb-6">
                  Dive deeper into my process with a comprehensive technical breakdown of this project. Explore the
                  modeling process, texturing techniques, technical specifications, and challenges I overcame during
                  development.
                </p>
                <Link
                  href="/projects/buggy-technical-breakdown"
                  className="inline-flex items-center gap-2 text-[#FF4500] hover:underline"
                >
                  View Technical Breakdown
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Project Gallery</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-6%20%281%29.jpg-GtbJStXc60iS9ReflG4FPASNpZAqHh.jpeg"
                alt="Buggy Front and Back View"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-16.jpg-7j9bELJDtsN8hDnwjFLu3tivUsG1pX.jpeg"
                alt="Buggy Side View"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-5%20%281%29.jpg-i9VHf4AeKSNvQe5KgIuBMTRdZQUO7a.jpeg"
                alt="Buggy Top Views"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-11.jpg-3eSSHJb8T3g6ioV31N9w2D2gHn3ve4.jpeg"
                alt="Buggy Top Down View"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-full aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1%20%281%29.jpg-4BIex2ypgB62KQUpb5CgQY1RyjbQu0.jpeg"
                alt="Buggy in Environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wireframe Gallery */}
      <section className="py-12 px-4 lg:px-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Wireframe & Model Development</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-14.jpg-Ey3eyiRAPRfpspaauC9I7HP7ovP6Xg.jpeg"
                alt="Buggy Wireframe Front and Back"
                fill
                className="object-cover bg-zinc-950"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-12.jpg-kSR52YZzRp2rQiYGmUuSjm1SPmV0qe.jpeg"
                alt="Buggy Wireframe Side Views"
                fill
                className="object-cover bg-zinc-950"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-8.jpg-xS1qS2XPBtD1pAhOENOHkdXtv3b2Wv.jpeg"
                alt="Buggy Wireframe Three-Quarter View"
                fill
                className="object-cover bg-zinc-950"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-13.jpg-yAKe7E6gX0Q3Wl0z15Q3qjLDLL0FCu.jpeg"
                alt="Buggy Wireframe Top Views"
                fill
                className="object-cover bg-zinc-950"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-12 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Technical Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Software Used</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Blender - 3D Modeling</li>
                <li>• Substance Painter - Texturing</li>
                <li>• Marmoset Toolbag - Rendering</li>
                <li>• Unreal Engine 5 - Environment</li>
                <li>• Megascans - Foliage Assets</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Polycount: 43,97 faces (75,778 triangles)</li>
                <li>• Texture Sets: 8 x 2048 (normals, albedo, ORM)</li>
                <li>• Game-ready optimization</li>
                <li>• PBR workflow</li>
                <li>• Custom materials and weathering</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Key Features</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Detailed modular construction</li>
                <li>• Realistic weathering and wear effects</li>
                <li>• Custom decals and storytelling elements</li>
                <li>• Optimized for real-time rendering</li>
                <li>• Comprehensive texture detail</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Development Time</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Concept & Planning: 2 weeks</li>
                <li>• Modeling: 4 weeks</li>
                <li>• UV Mapping: 1 week</li>
                <li>• Texturing: 3 weeks</li>
                <li>• Final Renders & Presentation: 1 week</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* View on ArtStation */}
      <section className="py-12 px-4 lg:px-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <a
            href="https://www.artstation.com/artwork/rJLblm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#FF4500] text-white rounded-lg hover:bg-[#FF5722] transition-colors"
          >
            View Full Project on ArtStation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 lg:px-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zinc-400">© {new Date().getFullYear()} Swapnil Nare. All rights reserved.</p>
          <Link href="/" className="text-[#FF4500] hover:underline mt-2 inline-block">
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </main>
  )
}

