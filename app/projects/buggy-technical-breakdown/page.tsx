import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Share2 } from "lucide-react"

export default function BuggyTechnicalBreakdownPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-8 px-4 lg:px-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/projects/buggy"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Buggy Project</span>
          </Link>
          <h1 className="text-2xl font-bold">Swapnil Nare</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[60vh] relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1%20%281%29.jpg-4BIex2ypgB62KQUpb5CgQY1RyjbQu0.jpeg"
            alt="Buggy 3D Model - Final Render"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-0 relative -mt-32 z-10">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center text-zinc-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                Technical Breakdown
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-6">Buggy: Technical Breakdown & Modeling Process</h1>
            <p className="text-lg text-zinc-300">
              A comprehensive look at the modeling, texturing, and technical details behind my off-road buggy 3D asset
              creation.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 lg:px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p>
              This was my latest artwork, a project I was working on for the last couple of months. Creating this
              off-road buggy was a really fun challenge and significantly improved my 3D modeling and texturing skills.
            </p>
            <p>
              The goal of the project was to create a highly detailed, game-ready vehicle with realistic materials, wear
              and tear, and a post-apocalyptic aesthetic while maintaining good topology and optimization for real-time
              use.
            </p>
          </div>

          {/* Technical Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-zinc-400">Software (Modeling)</span>
                  <span>Blender</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">Software (Texturing)</span>
                  <span>Substance Painter</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">Software (Rendering)</span>
                  <span>Marmoset Toolbag</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">Polycount</span>
                  <span>43,97 faces (75,778 triangles)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">Texture Sets</span>
                  <span>8 x 2048 (normals, albedo, ORM)</span>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Asset Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="min-w-5 text-[#FF4500]">•</div>
                  <span>Game-ready optimization with efficient topology</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 text-[#FF4500]">•</div>
                  <span>PBR textures with detailed wear and weathering</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 text-[#FF4500]">•</div>
                  <span>Custom decals and storytelling elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 text-[#FF4500]">•</div>
                  <span>Modular design with separate components</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 text-[#FF4500]">•</div>
                  <span>Realistic materials including metal, fabric, and rubber</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wireframe Gallery */}
      <section className="py-12 px-4 lg:px-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Wireframe & Modeling</h2>

          <div className="grid grid-cols-1 gap-6 mb-8">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-14.jpg-Ey3eyiRAPRfpspaauC9I7HP7ovP6Xg.jpeg"
                alt="Buggy Wireframe - Front and Back View"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-12.jpg-kSR52YZzRp2rQiYGmUuSjm1SPmV0qe.jpeg"
                alt="Buggy Wireframe - Side Views"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-13.jpg-yAKe7E6gX0Q3Wl0z15Q3qjLDLL0FCu.jpeg"
                alt="Buggy Wireframe - Top Views"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-8.jpg-xS1qS2XPBtD1pAhOENOHkdXtv3b2Wv.jpeg"
                alt="Buggy Wireframe - Three-Quarter View"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-15.jpg-w10fqjOmwCiszUG6vXc8xiB04Rdura.jpeg"
                alt="Buggy Wireframe - Top Down View"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Textured Gallery */}
      <section className="py-12 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Textured & Final Renders</h2>

          <div className="grid grid-cols-1 gap-6 mb-8">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-6%20%281%29.jpg-GtbJStXc60iS9ReflG4FPASNpZAqHh.jpeg"
                alt="Buggy Textured - Front and Back View"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-5%20%281%29.jpg-i9VHf4AeKSNvQe5KgIuBMTRdZQUO7a.jpeg"
                alt="Buggy Textured - Top Views"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-1%20%281%29.jpg-4BIex2ypgB62KQUpb5CgQY1RyjbQu0.jpeg"
                alt="Buggy Textured - Three-Quarter View"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-16.jpg-7j9bELJDtsN8hDnwjFLu3tivUsG1pX.jpeg"
                alt="Buggy Textured - Another Angle"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swapnil-nare-11.jpg-3eSSHJb8T3g6ioV31N9w2D2gHn3ve4.jpeg"
                alt="Buggy Textured - Top Down View"
                fill
                className="object-contain bg-zinc-950"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modeling Breakdown */}
      <section className="py-16 px-4 lg:px-0 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Modeling Process</h2>

          <div className="prose prose-lg prose-invert max-w-none">
            <h3>Base Modeling & Structure</h3>
            <p>
              I began the modeling process in Blender by blocking out the primary shapes and establishing the overall
              proportions of the buggy. The roll cage framework was created first, as it would serve as the foundation
              for the rest of the vehicle's components.
            </p>
            <p>
              For the tubular frame elements, I used a combination of curve objects and modifiers to ensure consistent
              thickness and proper deformation at joints. This approach also allowed for easier adjustments throughout
              the modeling process.
            </p>

            <h3>Component Modeling</h3>
            <p>
              Each component of the buggy was modeled separately to ensure proper organization and to allow for easier
              UV unwrapping and texturing later on:
            </p>
            <ul>
              <li>Chassis and roll cage framework</li>
              <li>Wheels and suspension components</li>
              <li>Seats and interior controls</li>
              <li>Engine components and mechanical details</li>
              <li>Body panels and protective elements</li>
              <li>Accessories (fuel canisters, storage bags, etc.)</li>
            </ul>

            <h3>Topology Optimization</h3>
            <p>
              With game readiness in mind, I paid special attention to topology optimization throughout the modeling
              process:
            </p>
            <ul>
              <li>Eliminated n-gons and ensured clean quad-based geometry where possible</li>
              <li>Strategically placed edge loops to maintain shape while minimizing polygon count</li>
              <li>Created seamless connections between components</li>
              <li>Optimized geometry density based on visibility and importance</li>
            </ul>

            <h3>UV Unwrapping</h3>
            <p>
              The UV unwrapping process was carefully planned to maximize texture resolution for the most visible parts
              while efficiently using the available texture space:
            </p>
            <ul>
              <li>Created eight separate UV maps to organize components logically</li>
              <li>Prioritized texture space for highly visible and detailed areas</li>
              <li>Made strategic seam placements to minimize visible texture stretching</li>
              <li>Packed UVs efficiently to maximize resolution across all components</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Texturing Breakdown */}
      <section className="py-16 px-4 lg:px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Texturing Process</h2>

          <div className="prose prose-lg prose-invert max-w-none">
            <h3>Material Planning</h3>
            <p>
              Before beginning the texturing process in Substance Painter, I developed a material plan for each
              component to ensure consistency across the entire model:
            </p>
            <ul>
              <li>Metal framework with varying levels of wear, rust, and paint chipping</li>
              <li>Rubber tires with dirt accumulation and wear patterns</li>
              <li>Fabric materials for the seat and storage bags with fraying and discoloration</li>
              <li>Plastic components with scratches, cracks, and UV damage</li>
              <li>Specialized materials for mechanical components like the engine</li>
            </ul>

            <h3>Base Material Application</h3>
            <p>
              In Substance Painter, I began by applying base materials to establish the foundation for each component:
            </p>
            <ul>
              <li>Created custom smart materials for recurring elements</li>
              <li>Established physically accurate base values for metallic, roughness, and normal maps</li>
              <li>Applied procedural noise and variation to break up uniformity</li>
              <li>Established color palette for the vehicle's primary and accent colors</li>
            </ul>

            <h3>Weathering & Detail Work</h3>
            <p>To achieve the worn, post-apocalyptic aesthetic, I applied several layers of weathering effects:</p>
            <ul>
              <li>Edge wear on high-contact areas using mask generators</li>
              <li>Rust development in crevices and exposed metal areas</li>
              <li>Dirt and mud accumulation on lower parts of the vehicle</li>
              <li>Paint chipping and scratches throughout the frame</li>
              <li>Subtle leaking fluids and stains near mechanical components</li>
              <li>Custom decals and graffiti to add character and storytelling elements</li>
            </ul>

            <h3>Final Texture Maps</h3>
            <p>The final texture export included eight sets of 2048x2048 maps:</p>
            <ul>
              <li>Albedo/Base Color maps for color information</li>
              <li>Normal maps for surface detail</li>
              <li>ORM maps (combined Occlusion, Roughness, and Metallic)</li>
              <li>Height maps for additional surface detail</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rendering */}
      <section className="py-16 px-4 lg:px-0 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Rendering & Presentation</h2>

          <div className="prose prose-lg prose-invert max-w-none">
            <h3>Rendering Setup in Marmoset Toolbag</h3>
            <p>
              Marmoset Toolbag was chosen for the final presentation renders due to its real-time rendering capabilities
              and excellent material rendering quality:
            </p>
            <ul>
              <li>Set up a neutral studio environment to showcase the model clearly</li>
              <li>Created a simple ground plane with subtle shadows for context</li>
              <li>Established a three-point lighting setup to highlight key details</li>
              <li>Used rim lights to accentuate edges and surface details</li>
              <li>Applied subtle ambient occlusion and global illumination for realism</li>
            </ul>

            <h3>Camera Setup & Composition</h3>
            <p>
              For the final presentation, I planned specific camera angles to showcase different aspects of the model:
            </p>
            <ul>
              <li>Front and back orthographic views to display symmetry and design</li>
              <li>Side views to show the profile and proportions</li>
              <li>Three-quarter views to showcase volume and form</li>
              <li>Top-down views to display the layout and organization</li>
              <li>Detail shots to highlight specific areas of interest</li>
            </ul>

            <h3>Post-Processing</h3>
            <p>
              I applied minimal post-processing to maintain the integrity of the materials while enhancing the
              presentation:
            </p>
            <ul>
              <li>Subtle color grading to enhance the mood</li>
              <li>Light vignetting to frame the composition</li>
              <li>Slight sharpening to enhance texture details</li>
              <li>Consistent presentation format across all renders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 px-4 lg:px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Challenges & Solutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Challenge: Complex Geometry</h3>
              <p className="text-zinc-400">
                The tubular framework of the roll cage presented a challenge for maintaining both visual quality and
                reasonable polygon count.
              </p>
              <h4 className="text-lg font-medium mt-4 mb-2 text-[#FF4500]">Solution:</h4>
              <p className="text-zinc-400">
                I used a combination of curve modifiers and custom mesh decimation to create tubes with higher polygon
                density at visible bends and joints, while keeping straight sections optimized.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Challenge: UV Space Allocation</h3>
              <p className="text-zinc-400">
                With so many individual components, efficiently allocating UV space while maintaining texture clarity
                was difficult.
              </p>
              <h4 className="text-lg font-medium mt-4 mb-2 text-[#FF4500]">Solution:</h4>
              <p className="text-zinc-400">
                I organized components by visibility and detail requirements, giving more UV space to prominent features
                and less to hidden components, while using texture mirroring where appropriate.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Challenge: Consistent Weathering</h3>
              <p className="text-zinc-400">
                Creating a coherent weathering story across different materials and components was challenging.
              </p>
              <h4 className="text-lg font-medium mt-4 mb-2 text-[#FF4500]">Solution:</h4>
              <p className="text-zinc-400">
                I developed a "weathering narrative" deciding where the vehicle would show most wear, rust, and dirt
                accumulation based on its use. This guided consistent application across all components.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Challenge: Performance Optimization</h3>
              <p className="text-zinc-400">
                Balancing high visual fidelity with performance requirements for a game-ready asset was difficult.
              </p>
              <h4 className="text-lg font-medium mt-4 mb-2 text-[#FF4500]">Solution:</h4>
              <p className="text-zinc-400">
                I implemented strategic level-of-detail planning, used normal maps to capture high-poly details, and
                optimized geometry in less visible areas to achieve the final count of 75,778 triangles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4 lg:px-0 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Conclusion & Learnings</h2>

          <div className="prose prose-lg prose-invert max-w-none">
            <p>
              This buggy project represented a significant milestone in my 3D modeling and texturing skills development.
              The multi-month process pushed me to learn new techniques and solve complex problems in both the modeling
              and texturing phases.
            </p>

            <p>Key learnings from this project included:</p>

            <ul>
              <li>Improved topology planning and optimization workflows</li>
              <li>More efficient UV mapping strategies for complex models</li>
              <li>Enhanced texturing techniques in Substance Painter</li>
              <li>Better organization of large-scale assets with many components</li>
              <li>More effective presentation of technical 3D work</li>
            </ul>

            <p>
              The final result successfully met my goal of creating a detailed, game-ready vehicle asset that
              demonstrates both technical proficiency and artistic style. The skills and techniques developed during
              this project have already proven valuable in subsequent work.
            </p>
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="https://www.artstation.com/artwork/rJLblm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#FF4500] text-white rounded-lg hover:bg-[#FF5722] transition-colors"
            >
              <Share2 className="w-5 h-5" />
              View on ArtStation
            </a>
            <Link
              href="/projects/buggy"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Buggy Project
            </Link>
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

