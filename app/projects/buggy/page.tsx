import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1.jpg-KWZwWjPlY3ofzCgCIo4WDBU0MAu99P.jpeg"
              alt="Game Ready Buggy in Forest Environment"
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
              I'm excited to unveil the environment I crafted in UE5 for the first time! I also took advantage of
              Megascans high quality assets for foliage and some filler assets like ground embankments.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The primary objective of this endeavor was to enhance my modeling and texturing skills, with the modeling
              phase executed in Blender and texturing accomplished in Substance Painter.
            </p>
            <p className="text-lg leading-relaxed mb-6">Will be posting Buggy breakdown in few days.</p>
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

      {/* Project Gallery */}
      <section className="py-12 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Project Gallery</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-3.jpg-He3YwMhAOXaj3Ei1eqQeyKGpEsaj5f.jpeg"
                alt="Buggy Front View"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-5.jpg-uvgrk5o0nueMVKzQsDKcCXMC7u0pv5.jpeg"
                alt="Buggy Side Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-2.jpg-Sp5yL9orBSnob4Gond2FyH4LuyJokm.jpeg"
                alt="Buggy Rear Quarter View"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-4.jpg-GawJB9HK5jOkoXg0xGOqQTGNGjIEJ5.jpeg"
                alt="Buggy Dashboard Detail"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-full aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-6.jpg-jKZ6mQRiVtkrETcg2dkeHRLjDFcIkj.jpeg"
                alt="Buggy in Forest Environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-12 px-4 lg:px-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Technical Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Software Used</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Blender - 3D Modeling</li>
                <li>• Substance Painter - Texturing</li>
                <li>• Unreal Engine 5 - Environment</li>
                <li>• Megascans - Foliage Assets</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Key Features</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Game-ready asset optimization</li>
                <li>• Detailed texturing and weathering</li>
                <li>• Custom decals and markings</li>
                <li>• Realistic materials and lighting</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Environment</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• UE5 lighting system</li>
                <li>• Megascans foliage integration</li>
                <li>• Custom terrain composition</li>
                <li>• Atmospheric effects</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Modeling Details</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• High-poly to low-poly workflow</li>
                <li>• Mechanical part detailing</li>
                <li>• UV optimization</li>
                <li>• Custom prop creation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* View on ArtStation */}
      <section className="py-12 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <a
            href="https://www.artstation.com/artwork/rJLblm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#FF4500] text-white rounded-lg hover:bg-[#FF5722] transition-colors"
          >
            View Project on ArtStation
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

