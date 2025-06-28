import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Course", href: "/course" },
    { name: "Results", href: "/results" },
    { name: "Contact Us", href: "/contact" },
  ]

  const programs = [
    { name: "GenAI Mastery Program", href: "/contact" },
    { name: "AI Agent Development", href: "/contact" },
    { name: "Corporate Training", href: "/contact" },
    { name: "1:1 Mentorship", href: "/contact" },
  ]

  const resources = [
    { name: "Blog & Insights", href: "/blogs" },
    { name: "Success Stories", href: "/results" },
    { name: "AI Tools & Templates", href: "/contact" },
    { name: "Career Guidance", href: "/contact" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-purple-500/20">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                <img
                  src="/images/socialeagle-logo.png"
                  alt="SocialEagle.AI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-bold text-xl">SocialEagle.AI</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering the next generation of AI professionals through practical, portfolio-driven education. Join
              26,000+ professionals across 20+ countries who have transformed their careers with us.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Twitter className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-violet-500 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Phone & WhatsApp</p>
                  <p className="text-gray-300">+91 842 842 8800</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">upskill@socialeagle.ai</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-gray-300">Social Eagle Academy</p>
                  <p className="text-gray-300">No. 14-16, Global Hospital Road Junction,</p>
                  <p className="text-gray-300">Indira Priyadarshini Nagar,</p>
                  <p className="text-gray-300">Opp. ICICI Bank, Perumbakkam,</p>
                  <p className="text-gray-300">Chennai, Tamil Nadu 600100</p>
                  <p className="text-gray-400 text-sm mt-1">Virtual programs worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-purple-500/20 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with AI Insights</h3>
            <p className="text-gray-300 mb-6">
              Get the latest AI trends, tutorials, and career guidance delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <Link href="/contact">
                <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">© 2025 SocialEagle.AI. All rights reserved.</p>
              <p className="text-gray-500 text-xs mt-1">Empowering AI professionals worldwide since 2020</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
