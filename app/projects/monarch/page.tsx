import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function MonarchProject() {
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Monarch: Legacy of Monsters</h2>
          <p className="text-zinc-400 mb-8">Asset and Technical Artist</p>

          <div className="w-full h-[60vh] relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Monarch: Legacy of Monsters Hero"
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
              As an asset and technical artist for 'Monarch: Legacy of Monsters,' I focused on improving assets in our
              pipeline and helping fellow artists troubleshoot look development issues. I also created scripts to make
              our workflow smoother as we transitioned to a new pipeline.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              This artwork reflects the teamwork and dedication behind the scenes. Special thanks to MPC for giving me
              this opportunity.
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
                src="/placeholder.svg?height=600&width=1000"
                alt="Monarch: Legacy of Monsters - Image 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=1000"
                alt="Monarch: Legacy of Monsters - Image 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=1000"
                alt="Monarch: Legacy of Monsters - Image 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=1000"
                alt="Monarch: Legacy of Monsters - Image 4"
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
              <h4 className="text-xl font-semibold mb-4">Pipeline Optimization</h4>
              <p className="text-zinc-400">
                Created scripts and tools to streamline the asset pipeline, improving efficiency during the transition
                to a new workflow.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Asset Improvement</h4>
              <p className="text-zinc-400">
                Enhanced existing assets to meet production quality standards and ensure consistency across the project.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Technical Support</h4>
              <p className="text-zinc-400">
                Provided troubleshooting assistance to fellow artists, resolving look development issues to maintain
                production schedule.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Collaboration</h4>
              <p className="text-zinc-400">
                Worked closely with the MPC team to ensure seamless integration of assets and technical solutions.
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

