import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react"

export default function BuggyBreakdownPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-8 px-4 lg:px-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/blog" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
          <h1 className="text-2xl font-bold">Swapnil Nare</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[60vh] relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1.jpg-KWZwWjPlY3ofzCgCIo4WDBU0MAu99P.jpeg"
            alt="Buggy Model"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 lg:px-0 relative -mt-32 z-10">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center text-zinc-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                June 15, 2023
              </span>
              <span className="flex items-center text-zinc-400 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                15 min read
              </span>
              <span className="flex items-center text-zinc-400 text-sm">
                <Tag className="w-4 h-4 mr-1" />
                Work Breakdown
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-6">
              Buggy Model Breakdown: From Concept to Game-Ready Asset
            </h1>
            <p className="text-lg text-zinc-300">
              A detailed look at my process for creating the game-ready buggy model, from initial concept to final
              implementation in UE5.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4 lg:px-0">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2>Introduction</h2>
            <p>
              I'm excited to share the detailed breakdown of my UE5 buggy project. This was my first environment created
              in Unreal Engine 5, and I wanted to challenge myself to create a high-quality, game-ready asset that
              showcased both my modeling and texturing skills.
            </p>

            <p>
              In this article, I'll walk through my entire process from initial concept to final implementation,
              including the challenges I faced and the techniques I used to achieve the final result.
            </p>

            <h2>Concept and Planning</h2>
            <p>
              Before diving into modeling, I spent time gathering reference images of off-road buggies and
              post-apocalyptic vehicles. I wanted to create something that looked weathered and well-used, with a mix of
              improvised repairs and modifications.
            </p>

            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-3.jpg-He3YwMhAOXaj3Ei1eqQeyKGpEsaj5f.jpeg"
                  alt="Buggy Reference 1"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-5.jpg-uvgrk5o0nueMVKzQsDKcCXMC7u0pv5.jpeg"
                  alt="Buggy Reference 2"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <p>I sketched out some initial designs, focusing on the key elements I wanted to include:</p>

            <ul>
              <li>Exposed frame with roll cage</li>
              <li>Large off-road tires</li>
              <li>Minimal body panels with visible damage</li>
              <li>Utilitarian dashboard with basic controls</li>
              <li>Storage for survival gear (fuel cans, bags, etc.)</li>
            </ul>

            <h2>Modeling in Blender</h2>
            <p>
              I chose Blender for the modeling phase because of its flexibility and powerful modeling tools. I started
              with a low-poly base mesh to establish the overall proportions and structure.
            </p>

            <div className="relative h-96 my-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-screenshot-2023-05-16-154515.jpg-233JKzd5CoALNevJfWgEhuJJAyjHDj.jpeg"
                alt="Buggy Wireframe"
                fill
                className="object-contain rounded-lg"
              />
            </div>

            <p>The modeling process was broken down into several key components:</p>

            <h3>Frame and Roll Cage</h3>
            <p>
              I started with the tubular frame, using a combination of curve objects and the Skin modifier to create the
              main structure. This approach gave me the flexibility to adjust the overall shape while maintaining clean
              topology.
            </p>

            <h3>Wheels and Suspension</h3>
            <p>
              The wheels were modeled separately, with attention to the tread pattern and hub details. I used array
              modifiers for repeating elements like the tread blocks and lug nuts. The suspension components were
              modeled to be functional in appearance, with proper pivot points.
            </p>

            <h3>Dashboard and Controls</h3>
            <p>
              For the dashboard, I focused on creating a utilitarian design with basic gauges and switches. I used
              boolean operations to cut holes for the instruments and added small details like screws and wiring.
            </p>

            <div className="relative h-64 my-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-4.jpg-GawJB9HK5jOkoXg0xGOqQTGNGjIEJ5.jpeg"
                alt="Dashboard Detail"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h3>Accessories and Details</h3>
            <p>
              To add character and storytelling elements, I created various accessories like fuel canisters, a rolled-up
              tarp, and improvised armor plating. These details help sell the narrative of a vehicle that has been
              adapted for survival.
            </p>

            <h2>Texturing in Substance Painter</h2>
            <p>
              Texturing was done in Substance Painter, where I built up multiple layers to create depth and visual
              interest. My approach included:
            </p>

            <h3>Base Materials</h3>
            <p>
              I established base materials for each component type (metal, rubber, fabric, etc.) with appropriate
              physical properties.
            </p>

            <h3>Wear and Tear</h3>
            <p>Using masks and generators, I added various types of wear:</p>

            <ul>
              <li>Edge wear on metal parts</li>
              <li>Dirt accumulation in crevices</li>
              <li>Rust in areas exposed to the elements</li>
              <li>Scratches and dents on body panels</li>
              <li>Tire wear and mud splatter</li>
            </ul>

            <h3>Details and Storytelling</h3>
            <p>
              I added small details like warning labels, gauge markings, and improvised repairs to enhance the narrative
              of the vehicle.
            </p>

            <div className="relative h-64 my-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-2.jpg-Sp5yL9orBSnob4Gond2FyH4LuyJokm.jpeg"
                alt="Texture Detail"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h2>Implementation in Unreal Engine 5</h2>
            <p>The final step was bringing the model into UE5 and setting up the materials and environment:</p>

            <h3>Material Setup</h3>
            <p>
              I created master materials in UE5 that utilized the texture maps exported from Substance Painter. For some
              elements, I used material instances to allow for easy adjustments and variations.
            </p>

            <h3>Environment Creation</h3>
            <p>
              To showcase the buggy, I created a simple environment using Megascans assets for the terrain and
              vegetation. This helped place the vehicle in context and demonstrate how it would look in a game setting.
            </p>

            <div className="relative h-64 my-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-6.jpg-jKZ6mQRiVtkrETcg2dkeHRLjDFcIkj.jpeg"
                alt="Final Environment"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h2>Conclusion</h2>
            <p>
              This project was an excellent opportunity to push my skills in modeling, texturing, and environment
              creation. The experience of working with UE5's new features, particularly Lumen for lighting, has been
              invaluable for my development as a 3D artist.
            </p>

            <p>
              I'd like to thank Arjun for his invaluable assistance with the texturing aspects of this project. His
              expertise helped elevate the final result. You can check out his work on{" "}
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

          {/* Article Actions */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-zinc-800">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
            <div>
              <Link href="/blog" className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Post */}
      <section className="py-16 px-4 lg:px-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">You Might Also Like</h3>

          <Link href="/blog/antman-quantumania-experience" className="group">
            <div className="bg-zinc-800 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-screenshot-2023-05-16-154557.jpg-FEFroaW7oNqspjD0Bgwyi4JlVUAaEL.jpeg"
                    alt="Ant-Man and the Wasp: Quantumania"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <span className="text-xs text-zinc-400">February 18, 2023</span>
                  <h3 className="text-xl font-semibold mt-2 group-hover:text-[#FF4500] transition-colors">
                    Working on Ant-Man and the Wasp: Quantumania
                  </h3>
                  <p className="text-zinc-400 mt-2">
                    My experience working on Marvel's Ant-Man and the Wasp: Quantumania, including challenges and
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </Link>
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

