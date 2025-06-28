"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Hero() {
  const sphereRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sphereRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate mouse position as percentage
      const xPercent = (clientX / innerWidth - 0.5) * 2 // -1 to 1
      const yPercent = (clientY / innerHeight - 0.5) * 2 // -1 to 1

      // Apply subtle rotation and translation based on mouse position
      const rotateX = yPercent * 10 // Max 10 degrees
      const rotateY = xPercent * 10 // Max 10 degrees
      const translateX = xPercent * 20 // Max 20px
      const translateY = yPercent * 20 // Max 20px

      sphereRef.current.style.transform = `
        translate(${translateX}px, ${translateY}px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        scale(1.1)
      `
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Sphere Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={sphereRef}
          className="relative w-[600px] h-[600px] transition-transform duration-300 ease-out"
          style={{
            transform: "translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1.1)",
          }}
        >
          {/* Main 3D Sphere */}
          <div className="absolute inset-0 opacity-60">
            <img src="/images/hero-3d-sphere.jpeg" alt="3D AI Sphere" className="w-full h-full object-contain" />
          </div>

          {/* Glowing overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />

          {/* Additional glow rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] border border-violet-400/30 rounded-full animate-ping" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[500px] h-[500px] border border-cyan-400/20 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>

      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        {/* Minimal gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-violet-400 rounded-full animate-float opacity-60" />
        <div
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-40"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-float opacity-50"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 right-1/5 w-1 h-1 bg-blue-400 rounded-full animate-float opacity-30"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              GenAI Architect
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Community</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master Generative AI, Agentic Architectures & AI Product Engineering from Industry Pioneers
          </p>

          {/* CTA Button */}
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-violet-500/25"
            >
              Join the Movement
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
