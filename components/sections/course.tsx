"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Code, Brain, Zap, Trophy, Rocket, Target, Star, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export default function Course() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const weeks = [
    {
      week: 1,
      title: "AI Foundation & Python Setup",
      modules: [
        "Python fundamentals for AI",
        "AI/ML ecosystem overview",
        "Development environment setup",
        "Version control with Git",
      ],
      deliverables: "First AI script and development environment",
      icon: Code,
      duration: "40 hours",
      color: "from-blue-500 to-cyan-500",
    },
    {
      week: 2,
      title: "GenAI + Prompt Engineering",
      modules: [
        "GPT integration and APIs",
        "Advanced prompt optimization",
        "Prompt chaining techniques",
        "API usage and best practices",
      ],
      deliverables: "Comprehensive prompt engineering portfolio",
      icon: Brain,
      duration: "45 hours",
      color: "from-purple-500 to-pink-500",
    },
    {
      week: 3,
      title: "LangChain & RAG Systems",
      modules: ["LangChain framework mastery", "RAG implementation", "Vector databases", "Document processing"],
      deliverables: "Production-ready RAG application",
      icon: Zap,
      duration: "50 hours",
      color: "from-yellow-500 to-orange-500",
    },
    {
      week: 4,
      title: "Advanced RAG + Competitions",
      modules: ["Multi-modal RAG", "Performance optimization", "Competition strategies", "Portfolio enhancement"],
      deliverables: "Competition-winning project",
      icon: Trophy,
      duration: "45 hours",
      color: "from-green-500 to-emerald-500",
    },
    {
      week: 5,
      title: "AI Agents & Automation",
      modules: ["Agent frameworks", "Workflow automation", "Multi-agent systems", "Tool integration"],
      deliverables: "Intelligent AI agent prototype",
      icon: Rocket,
      duration: "50 hours",
      color: "from-red-500 to-pink-500",
    },
    {
      week: 6,
      title: "Production Deployment",
      modules: ["Cloud deployment strategies", "API development", "Scaling and monitoring", "Security best practices"],
      deliverables: "Deployed AI application with monitoring",
      icon: Target,
      duration: "45 hours",
      color: "from-indigo-500 to-purple-500",
    },
    {
      week: 7,
      title: "Industry Applications",
      modules: ["Sector-specific AI solutions", "Custom integrations", "Business case development", "ROI optimization"],
      deliverables: "Industry-specific AI solution",
      icon: Star,
      duration: "50 hours",
      color: "from-teal-500 to-cyan-500",
    },
    {
      week: 8,
      title: "Portfolio & Career Mastery",
      modules: ["Portfolio optimization", "Interview preparation", "Career guidance", "Industry networking"],
      deliverables: "Complete professional portfolio",
      icon: CheckCircle,
      duration: "40 hours",
      color: "from-violet-500 to-fuchsia-500",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="course"
      className="py-20 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10 relative overflow-hidden"
    >
      {/* 3D Grid Lines - Scroll Triggered */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {/* Perspective Grid */}
        <div className="absolute inset-0 perspective-1000">
          <div className="absolute inset-0 transform-gpu">
            {/* Horizontal Grid Lines */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"
                style={{
                  top: `${i * 5}%`,
                  transform: `rotateX(60deg) translateZ(${i * 10}px)`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}

            {/* Vertical Grid Lines */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
                style={{
                  left: `${i * 5}%`,
                  transform: `rotateX(60deg) translateZ(${i * 10}px)`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}

            {/* Diagonal Grid Lines for 3D Effect */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`d-${i}`}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/15 to-transparent"
                style={{
                  top: `${i * 10}%`,
                  transform: `rotateX(45deg) rotateY(15deg) translateZ(${i * 20}px)`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Grid Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-br from-violet-400 to-cyan-400 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
              ✨ Transform Your Career in 8 Weeks
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              8-Week AI Mastery
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Program</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            A comprehensive, hands-on curriculum designed to transform you into an AI professional with real-world
            projects and industry-ready skills.
          </p>
        </div>

        {/* Course Timeline */}
        <div className="relative">
          {/* Animated Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500 hidden lg:block opacity-30" />

          <div className="space-y-16">
            {weeks.map((week, index) => {
              const Icon = week.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={week.week}
                  className={`relative grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Animated Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center z-10 hidden lg:flex animate-pulse shadow-2xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Week visual */}
                  <div className={`${!isEven ? "lg:col-start-2" : ""}`}>
                    <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 overflow-hidden group">
                      <CardContent className="p-0 relative">
                        <div className={`h-48 bg-gradient-to-br ${week.color} relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/20" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <Icon className="w-16 h-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                              <div className="text-4xl font-bold text-white">Week {week.week}</div>
                            </div>
                          </div>
                          {/* Animated particles */}
                          <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping" />
                          <div
                            className="absolute bottom-4 left-4 w-1 h-1 bg-white rounded-full animate-ping"
                            style={{ animationDelay: "1s" }}
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-white">{week.title}</h4>
                            <div className="flex items-center text-cyan-400 text-sm">
                              <Clock className="w-4 h-4 mr-1" />
                              {week.duration}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? "lg:col-start-1" : ""}`}>
                    <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4 lg:hidden">
                          <Icon className="w-8 h-8 text-cyan-400 mr-3" />
                          <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                            Week {week.week}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-6">{week.title}</h3>

                        <div className="mb-6">
                          <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                            <ArrowRight className="w-4 h-4 mr-2" />
                            Learning Modules:
                          </h4>
                          <ul className="space-y-3">
                            {week.modules.map((module, idx) => (
                              <li key={idx} className="flex items-center text-gray-300 group">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                <span className="group-hover:text-white transition-colors duration-200">{module}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-4 hover:bg-gradient-to-r hover:from-yellow-400/30 hover:to-orange-500/30 transition-all duration-300">
                          <h4 className="text-yellow-400 font-semibold mb-2 flex items-center">
                            <Trophy className="w-4 h-4 mr-2" />
                            Project Deliverable:
                          </h4>
                          <p className="text-white">{week.deliverables}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm max-w-4xl mx-auto hover:scale-105 transition-all duration-500">
            
          </Card>
        </div>
      </div>
    </section>
  )
}
