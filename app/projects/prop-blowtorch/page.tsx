import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import BlowTorchViewer from "./blowtorch-viewer"

export default function PropBlowTorchProject() {
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Vintage Blowtorch</h2>
          <p className="text-zinc-400 mb-8">Game-Ready Prop Model</p>

          {/* 3D Viewer */}
          <div className="w-full h-[60vh] relative rounded-lg overflow-hidden bg-zinc-900">
            <BlowTorchViewer />
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-12 px-4 lg:px-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed mb-6">
              This vintage blowtorch was created as a high-quality game-ready prop for use in period-accurate
              environments. The model features detailed texturing with realistic wear and tear, optimized topology for
              real-time rendering, and accurate proportions based on reference photography.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The modeling process involved careful study of reference images to capture the authentic details of this
              vintage tool, while ensuring the final asset would be optimized for game engines.
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Renders</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-render1.jpg-UkG2aKcOIk6a9zYjMf8md9lK8HrT31.jpeg"
                alt="Blowtorch Render 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-render2.jpg-cTU4C40DNoL6lEfscsSTF3gVeHKAo8.jpeg"
                alt="Blowtorch Render 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-full aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-render4.jpg-2FcM5vdLWjc43XnIWvfYQK6cLhTXhH.jpeg"
                alt="Blowtorch Multiple Views"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-render5.jpg-PctivWQNhuUXuvHoPbAJFGnxCwzIiG.jpeg"
                alt="Blowtorch Clay Render"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-cameramatch.jpg-26kH9gkttLxP53xe1UimW9EH1ZLx3Y.jpeg"
                alt="Blowtorch Modeling Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reference Images */}
      <section className="py-12 px-4 lg:px-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Reference & Process</h3>

          <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-refrence.jpg-80Klw7YQFkDgK7LuptvOAEhgBMIpNN.jpeg"
              alt="Blowtorch Reference Images"
              fill
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Modeling Process</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• High-poly modeling in Blender</li>
                <li>• Retopology for game-ready mesh</li>
                <li>• UV unwrapping with efficient layout</li>
                <li>• Baking high-poly details to low-poly mesh</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Texturing Process</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• PBR texturing in Substance Painter</li>
                <li>• Custom material creation for brass and metal</li>
                <li>• Hand-painted wear and tear details</li>
                <li>• Dirt and grime accumulation in crevices</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Triangle count: ~4,500 triangles</li>
                <li>• Texture maps: 2K resolution (Diffuse, Normal, Metallic, Roughness, AO)</li>
                <li>• Clean topology with proper edge flow</li>
                <li>• Optimized for real-time rendering</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Software Used</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Blender - 3D Modeling</li>
                <li>• Substance Painter - Texturing</li>
                <li>• Marmoset Toolbag - Rendering</li>
                <li>• Photoshop - Texture Refinement</li>
              </ul>
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

