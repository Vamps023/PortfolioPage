import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function WastelandSheriffProject() {
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Wasteland Sheriff</h2>
          <p className="text-zinc-400 mb-8">Valorant Fan Art - Game Weapon</p>

          <div className="w-full h-[60vh] relative rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-artboard-1.jpg-iWiuSFYm6iD6vccDkCzwVZErB8kf5N.jpeg"
              alt="Wasteland Sheriff - Side View"
              fill
              className="object-contain bg-zinc-950"
            />
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-12 px-4 lg:px-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed mb-6">
              This is my fan art recreation of the Wasteland Sheriff, a revolver-style pistol from the game Valorant. I
              used Blender for modeling and Photoshop for texturing and detailing, with the final renders created in
              Marmoset Toolbag 4.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The model features a medium poly count of 11k triangles with a 1k texture resolution, making it suitable
              for game environments. I wanted to capture the rugged, post-apocalyptic aesthetic of the original design,
              so I added scratches, dirt, and weathering elements to give it an authentic worn look.
            </p>
            <p className="text-lg leading-relaxed">
              The distinctive red fabric wrappings and metal components were carefully recreated to match the in-game
              weapon while adding my own interpretation of the materials and wear patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Renders & Views</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-artboard-2.jpg-muiR32AdjqX0bbojezhKxsDVEKwsWh.jpeg"
                alt="Wasteland Sheriff - Multiple Views"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-ref.jpg-vz3iKX9buiEmjbg63qGaUFm2srwMXC.jpeg"
                alt="Wasteland Sheriff - Reference and Renders"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
            <div className="col-span-full aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-artboard-5.jpg-nussqtjph0yiKVXYtd0CAcrZKghNAF.jpeg"
                alt="Wasteland Sheriff - Wireframe Views"
                fill
                className="object-contain bg-zinc-950"
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
                <li>• Photoshop - Texturing and Detailing</li>
                <li>• Marmoset Toolbag 4 - Rendering</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Polygon Count: 11,000 triangles</li>
                <li>• Texture Resolution: 1024x1024</li>
                <li>• PBR Materials: Diffuse, Normal, Roughness, Metallic</li>
                <li>• Game-ready optimization</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Modeling Process</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Reference gathering from in-game screenshots</li>
                <li>• Base mesh creation in Blender</li>
                <li>• Hard-surface modeling techniques</li>
                <li>• Clean topology for game implementation</li>
                <li>• UV unwrapping for efficient texture space usage</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Texturing Approach</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Hand-painted textures in Photoshop</li>
                <li>• Custom weathering and damage effects</li>
                <li>• Material separation for metal, fabric, and wood</li>
                <li>• Dirt and grime layers for post-apocalyptic aesthetic</li>
                <li>• Color grading to match game style</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-12 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Inspiration & Reference</h3>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-4">About Valorant's Wasteland Sheriff</h4>
                <p className="text-zinc-400 mb-4">
                  The Wasteland Sheriff is a popular skin variant for the Sheriff pistol in Riot Games' tactical shooter
                  Valorant. It features a distinctive post-apocalyptic design with metal plating, wooden components, and
                  fabric wrappings that give it a makeshift, survival aesthetic.
                </p>
                <p className="text-zinc-400">
                  My goal with this fan art was to faithfully recreate the weapon while adding my own interpretation of
                  the materials and weathering, imagining how this weapon might look and feel in a real post-apocalyptic
                  environment.
                </p>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-ref.jpg-vz3iKX9buiEmjbg63qGaUFm2srwMXC.jpeg"
                  alt="Wasteland Sheriff - Game Reference"
                  fill
                  className="object-contain bg-zinc-950"
                />
              </div>
            </div>
          </div>
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

