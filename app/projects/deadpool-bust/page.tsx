import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DeadpoolBustProject() {
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Deadpool 3D Bust</h2>
          <p className="text-zinc-400 mb-8">3D Print-Ready Character Bust</p>

          <div className="w-full h-[60vh] relative rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-2%20%282%29.jpg-QW5MPsfQj70nCdJJw9aRgIrY4VtIEA.jpeg"
              alt="Deadpool 3D Bust - Front View"
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
              This Deadpool bust was created as a 3D print-ready model, capturing the iconic Marvel character's
              distinctive features and costume details. The final printed bust stands at 15.24 cm tall, making it a
              perfect collectible size for display.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The model features Deadpool's characteristic mask with expressive eye shapes, detailed suit textures, and
              his signature katanas on the back. Special attention was paid to the proportions and details to ensure the
              model would print well while maintaining the character's iconic look.
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Multiple Views</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1%20%282%29.jpg-snqQSqGt6Mr8CaZe8w2VhOkT3ZNmAK.jpeg"
                alt="Deadpool Bust - Multiple Angles"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-6%20%282%29.jpg-OuYonFzHneklHUBfYMGF1beQM3mpYZ.jpeg"
                alt="Deadpool Bust - 3D Print"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-img-20200914-143756.jpg-MrFPFkmfdwTEmXYNHB0BfBdHrWAqt1.jpeg"
                alt="Deadpool Bust - Print Comparison"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-screenshot-474.jpg-t4s2GLRKs1z2DrD4yRQ8v9ERXPlF8d.jpeg"
                alt="Deadpool Bust - ZBrush Sculpting"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
            <div className="col-span-full aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-screenshot-475.jpg-Cce7RJxgbRGAH2Af5Eg4paW81IfsfH.jpeg"
                alt="Deadpool Bust - ZBrush Development"
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
                <li>• ZBrush - Digital Sculpting</li>
                <li>• Blender - Mesh Preparation</li>
                <li>• Meshmixer - 3D Print Optimization</li>
                <li>• Cura - Slicing for 3D Printing</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Model Specifications</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Height: 15.24 cm (6 inches)</li>
                <li>• Print Material: PLA</li>
                <li>• Print Time: Approximately 14 hours</li>
                <li>• Support Structure: Minimal supports required</li>
                <li>• Print Resolution: 0.12mm layer height</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Sculpting Process</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Base mesh creation in ZBrush</li>
                <li>• Detailed facial features and mask textures</li>
                <li>• Costume detailing with fabric folds and seams</li>
                <li>• Weapon modeling and placement</li>
                <li>• Final polish and preparation for 3D printing</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Print Optimization</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• Wall thickness verification for structural integrity</li>
                <li>• Mesh cleanup and manifold checking</li>
                <li>• Strategic support placement for overhangs</li>
                <li>• Base design for stability</li>
                <li>• Test prints for quality assurance</li>
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

