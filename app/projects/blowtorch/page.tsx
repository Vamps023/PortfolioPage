import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BlowtorchProject() {
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Vintage BlowTorch</h2>
          <p className="text-zinc-400 mb-8">Self Projects</p>

          <div className="w-full h-[60vh] relative rounded-lg overflow-hidden">
            <Image
              src="https://pic.surf/weo3"
              alt="Vintage Blowtorch"
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
            Vintage Blowtorch.
            I wanted to improve my skills in modeling and texturing, so I used different tools for each step. 
            I modeled the prop in Maya and Blender, textured and detailed it in Photoshop and Substance Painter, and rendered it in Marmoset Toolbag 4. 
            The prop has a low poly count of 5006 triangles and a high quality texture of 1k. 
            I gave the metal parts a realistic and aged look with scratches, dents, rust, and dirt.
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-vlcsnap-2023-05-12-03h12m54s410.jpg-9PkTTSJmiORrMS6Z58pxYzhNEqhYA1.jpeg"
                alt="Quantum Realm Scene with Torches"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-vlcsnap-2023-05-12-03h09m44s072.jpg-e2dmnnaxKRcmcopQprZPD4mu3DIDro.jpeg"
                alt="Quantum Realm Pod"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-jhs1030-trl-comp-mpa-v0290-1050-1280.jpg-lpyVLtxP8DyFk7rPelFyBJZ9EbhfUT.jpeg"
                alt="Quantum Realm Sky"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-screenshot-2023-05-16-154515.jpg-233JKzd5CoALNevJfWgEhuJJAyjHDj.jpeg"
                alt="3D Model Render"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-vlcsnap-2023-05-12-03h08m56s625.jpg-4F6GhryLFwfhSfSIACrWNlEX0woXUq.jpeg"
                alt="Quantum Realm Cave"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-vlcsnap-2023-05-12-03h12m13s014.jpg-HT5AtwzgYuIVucq4x6nqmfmAaCiAsS.jpeg"
                alt="Quantum Energy Effect"
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
          <h3 className="text-2xl font-bold mb-8">Technical Contributions</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Environment Props</h4>
              <p className="text-zinc-400">
                Created and optimized various environment props for the Quantum Realm scenes, ensuring high visual
                quality and performance.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Asset Creation</h4>
              <p className="text-zinc-400">
                Collaborated with the team to develop and refine assets that enhanced the unique visual style of the
                Quantum Realm.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Visual Effects Integration</h4>
              <p className="text-zinc-400">
                Worked closely with VFX teams to ensure proper integration of environment props with visual effects.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Quality Assurance</h4>
              <p className="text-zinc-400">
                Maintained high standards of quality through regular reviews and iterations based on feedback.
              </p>
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

