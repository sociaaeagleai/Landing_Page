"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Course", href: "/course" },
  { name: "Results", href: "/results" },
  { name: "Contact Us", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href || (href !== "/" && pathname.startsWith(href))
  }

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <nav className="bg-gradient-to-r from-violet-600 to-fuchsia-600 backdrop-blur-md rounded-full px-6 py-2 shadow-2xl border border-white/10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-1">
              <img
                src="/images/socialeagle-logo.png"
                alt="SocialEagle.AI Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">SocialEagle.AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-white/90 ${
                  isActive(item.href) ? "text-white font-bold" : "text-white/80"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                Speak With Us →
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 rounded-full p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed top-4 right-4 left-4">
            <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
                    <img
                      src="/images/socialeagle-logo.png"
                      alt="SocialEagle.AI Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-bold text-xl">SocialEagle.AI</span>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 rounded-full p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-4 mb-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-lg font-medium transition-colors hover:text-white/90 ${
                      isActive(item.href) ? "text-white font-bold" : "text-white/80"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{item.name}</span>
                      {isActive(item.href) && <div className="w-1 h-1 bg-white rounded-full" />}
                    </div>
                  </Link>
                ))}
              </div>

              <Link href="/contact">
                <Button className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-full transition-all duration-300">
                  Speak With Us →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
