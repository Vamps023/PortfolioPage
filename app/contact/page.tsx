import Link from "next/link"
import { Linkedin, Mail, Phone, Palette, ArrowLeft, Send } from "lucide-react"

export default function ContactPage() {
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

        {/* Hero */}
        <section className="relative z-10 px-4 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF4500]">Let&apos;s Connect</p>
            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              Available for collaboration, freelance work, and technical art opportunities.
            </h2>
            <p className="mt-4 text-lg text-zinc-300">
              Reach out through any channel below—I respond fastest via email or LinkedIn.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="relative z-10 px-4 pb-20 lg:px-12">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ContactCard
              href="https://www.linkedin.com/in/swapnilnare/"
              title="LinkedIn"
              subtitle="Connect with me professionally"
              icon={<Linkedin className="h-12 w-12 text-[#0A66C2]" />}
            />
            <ContactCard
              href="https://www.artstation.com/vamps23"
              title="ArtStation"
              subtitle="View my portfolio"
              icon={<Palette className="h-12 w-12 text-[#13AFF0]" />}
            />
            <ContactCard
              href="mailto:Swapnilnare007@gmail.com"
              title="Email"
              subtitle="Swapnilnare007@gmail.com"
              icon={<Mail className="h-12 w-12 text-[#EA4335]" />}
            />
            <ContactCard
              href="tel:+918766569006"
              title="Phone"
              subtitle="+91 8766569006"
              icon={<Phone className="h-12 w-12 text-[#4CAF50]" />}
            />
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10 px-4 py-12 text-center lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-zinc-400">© {new Date().getFullYear()} Swapnil Nare. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

function ContactCard({
  href,
  title,
  subtitle,
  icon,
}: {
  href: string
  title: string
  subtitle: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-6 py-10 text-center transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
    >
      <div className="rounded-2xl bg-black/40 p-4 backdrop-blur group-hover:bg-black/30">{icon}</div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-zinc-300">{subtitle}</p>
    </a>
  )
}

