import Link from "next/link"
import { Linkedin, Mail, Phone, Palette, ArrowLeft, Send } from "lucide-react"

export default function ContactPage() {
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

      {/* Hero Section */}
      <section className="py-16 px-4 lg:px-16 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of
            the channels below.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="https://www.linkedin.com/in/swapnilnare/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 p-8 rounded-lg flex flex-col items-center hover:bg-zinc-800 transition-colors"
            >
              <Linkedin className="w-16 h-16 text-[#0A66C2] mb-6" />
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <p className="text-zinc-400 text-center mt-2">Connect with me professionally</p>
              <span className="mt-4 text-sm text-[#FF4500]">linkedin.com/in/swapnilnare</span>
            </a>

            <a
              href="https://www.artstation.com/vamps23"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 p-8 rounded-lg flex flex-col items-center hover:bg-zinc-800 transition-colors"
            >
              <Palette className="w-16 h-16 text-[#13AFF0] mb-6" />
              <h3 className="text-xl font-semibold">ArtStation</h3>
              <p className="text-zinc-400 text-center mt-2">View my portfolio</p>
              <span className="mt-4 text-sm text-[#FF4500]">artstation.com/vamps23</span>
            </a>

            <a
              href="mailto:Swapnilnare007@gmail.com"
              className="bg-zinc-900 p-8 rounded-lg flex flex-col items-center hover:bg-zinc-800 transition-colors"
            >
              <Mail className="w-16 h-16 text-[#EA4335] mb-6" />
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-zinc-400 text-center mt-2">Send me an email</p>
              <span className="mt-4 text-sm text-[#FF4500]">Swapnilnare007@gmail.com</span>
            </a>

            <a
              href="tel:+918766569006"
              className="bg-zinc-900 p-8 rounded-lg flex flex-col items-center hover:bg-zinc-800 transition-colors"
            >
              <Phone className="w-16 h-16 text-[#4CAF50] mb-6" />
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-zinc-400 text-center mt-2">Give me a call</p>
              <span className="mt-4 text-sm text-[#FF4500]">+91 8766569006</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 lg:px-16 bg-zinc-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Send Me a Message</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
                placeholder="Subject of your message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#FF4500] text-white rounded-lg hover:bg-[#FF5722] transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 lg:px-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zinc-400">© {new Date().getFullYear()} Swapnil Nare. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/swapnilnare/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#FF4500] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.artstation.com/vamps23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#FF4500] transition-colors"
            >
              <Palette className="w-5 h-5" />
            </a>
            <a href="mailto:Swapnilnare007@gmail.com" className="text-zinc-400 hover:text-[#FF4500] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+918766569006" className="text-zinc-400 hover:text-[#FF4500] transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

