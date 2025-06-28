"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Brain, Zap, Trophy, Wrench, Bot, Rocket, Award, CheckCircle } from "lucide-react"

export default function CourseRoadmap() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const [showArchitect, setShowArchitect] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const roadmapSteps = [
    {
      week: 1,
      title: "AI Foundation & Python Setup",
      icon: Code,
      description: "Master Python fundamentals and AI ecosystem basics",
    },
    {
      week: 2,
      title: "GenAI + Prompt Engineering",
      icon: Brain,
      description: "Advanced prompt optimization and GPT integration",
    },
    {
      week: 3,
      title: "LangChain & RAG",
      icon: Zap,
      description: "Build production-ready RAG applications",
    },
    {
      week: 4,
      title: "Prompt-to-RAG + Competitions",
      icon: Trophy,
      description: "Multi-modal RAG and competition strategies",
    },
    {
      week: 5,
      title: "AI Agents & Agentic Architecture",
      icon: Wrench,
      description: "Intelligent agents and workflow automation",
    },
    {
      week: 6,
      title: "Project & Deployment",
      icon: Bot,
      description: "Cloud deployment and scaling strategies",
    },
    {
      week: 7,
      title: "Industry Applications",
      icon: Rocket,
      description: "Sector-specific AI solutions and integrations",
    },
    {
      week: 8,
      title: "Portfolio & Career Mastery",
      icon: Award,
      description: "Professional portfolio and career guidance",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps appearing with stagger
            roadmapSteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => {
                  if (!prev.includes(index)) {
                    return [...prev, index]
                  }
                  return prev
                })
              }, index * 400)
            })

            // Show Gen AI Architect after all steps
            setTimeout(
              () => {
                setShowArchitect(true)
              },
              roadmapSteps.length * 400 + 800,
            )
          }
        })
      },
      {
        threshold: 0.2,
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

  return (
    <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Your AI Learning{" "}
            <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow our expertly designed 8-week roadmap from fundamentals to mastery
          </p>
        </div>

        {/* 3D Isometric Staircase Container */}
        <div className="relative min-h-[2200px] flex flex-col items-center">
          {/* Smooth Zigzag Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 2200"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#a855f7" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#c084fc" stopOpacity="0.6" />
                <stop offset="75%" stopColor="#d8b4fe" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#e9d5ff" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Smooth Zigzag Path */}
            <path
              d="M 200 100 
                 Q 300 150, 400 200
                 Q 500 250, 600 300
                 Q 500 350, 400 400
                 Q 300 450, 200 500
                 Q 300 550, 400 600
                 Q 500 650, 600 700
                 Q 500 750, 400 800
                 Q 300 850, 200 900
                 Q 300 950, 400 1000
                 Q 500 1050, 600 1100
                 Q 500 1150, 400 1200
                 Q 300 1250, 200 1300
                 Q 300 1350, 400 1400
                 Q 500 1450, 600 1500
                 Q 500 1550, 400 1600
                 Q 300 1650, 200 1700
                 Q 300 1750, 400 1800
                 Q 500 1850, 600 1900
                 Q 500 1950, 400 2000"
              stroke="url(#zigzagGradient)"
              strokeWidth="4"
              fill="none"
              filter="url(#glow)"
              className="animate-pulse"
            />

            {/* Additional glow effect */}
            <path
              d="M 200 100 
                 Q 300 150, 400 200
                 Q 500 250, 600 300
                 Q 500 350, 400 400
                 Q 300 450, 200 500
                 Q 300 550, 400 600
                 Q 500 650, 600 700
                 Q 500 750, 400 800
                 Q 300 850, 200 900
                 Q 300 950, 400 1000
                 Q 500 1050, 600 1100
                 Q 500 1150, 400 1200
                 Q 300 1250, 200 1300
                 Q 300 1350, 400 1400
                 Q 500 1450, 600 1500
                 Q 500 1550, 400 1600
                 Q 300 1650, 200 1700
                 Q 300 1750, 400 1800
                 Q 500 1850, 600 1900
                 Q 500 1950, 400 2000"
              stroke="url(#zigzagGradient)"
              strokeWidth="8"
              fill="none"
              opacity="0.3"
              className="blur-sm"
            />
          </svg>

          {roadmapSteps.map((step, index) => {
            const Icon = step.icon
            const isVisible = visibleSteps.includes(index)
            const isEven = index % 2 === 0

            // Calculate vertical position for staircase effect
            const topPosition = index * 220 + 50

            return (
              <div
                key={step.week}
                className={`absolute w-full max-w-6xl transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{
                  top: `${topPosition}px`,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className={`flex items-center ${isEven ? "justify-start" : "justify-end"}`}>
                  {/* Content Card - Left side for even, Right side for odd */}
                  <div className={`${isEven ? "order-2 ml-12" : "order-1 mr-12"} max-w-md`}>
                    <Card className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-gray-700/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105">
                      <CardContent className="p-6">
                        {/* Icon and Week Number */}
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-white flex items-center justify-center mr-4 shadow-lg">
                            <Icon className="w-6 h-6 text-blue-900" />
                          </div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                            Week {step.week}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

                        {/* Description */}
                        <p className="text-gray-300 text-sm mb-4">{step.description}</p>

                        {/* Ready indicator */}
                        
                      </CardContent>
                    </Card>
                  </div>

                  {/* 3D Isometric Block */}
                  <div className={`${isEven ? "order-1" : "order-2"} relative`}>
                    <div className="relative group" style={{ perspective: "1000px" }}>
                      {/* Main 3D Block Container */}
                      <div className="relative w-32 h-32 transform-gpu">
                        {/* Top Face */}
                        <div
                          className="absolute w-32 h-32 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-2xl"
                          style={{
                            transform: "rotateX(60deg) rotateY(-45deg)",
                            transformOrigin: "center center",
                          }}
                        >
                          {/* Top face lighting */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />

                          {/* Week Number */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white font-bold text-3xl drop-shadow-lg transform rotate-12">
                              {step.week.toString().padStart(2, "0")}
                            </span>
                          </div>
                        </div>

                        {/* Right Face */}
                        

                        {/* Left Face */}
                        
                      </div>

                      {/* Hover Glow Effect */}
                      
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Gen AI Architect Achievement */}
          <div
            className={`absolute w-full max-w-4xl transition-all duration-1500 ease-out ${
              showArchitect ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
            style={{
              top: `${roadmapSteps.length * 220 + 150}px`,
            }}
          >
            <div className="text-center">
              <Card className="bg-gradient-to-br from-violet-600/20 to-purple-800/20 backdrop-blur-sm border border-violet-500/30 shadow-2xl hover:shadow-violet-500/30 transition-all duration-500 hover:scale-105">
                <CardContent className="p-12">
                  {/* Trophy Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-400 to-purple-600 flex items-center justify-center shadow-2xl animate-pulse">
                      <span className="text-4xl">🏆</span>
                    </div>
                  </div>

                  {/* Achievement Title */}
                  <h3 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Gen AI Architect
                    </span>
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xl text-gray-300 mb-6">
                    🎉 Congratulations! You've mastered the complete AI journey
                  </p>

                  {/* Achievement Description */}
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    You are now equipped with the skills to architect, build, and deploy sophisticated AI solutions.
                    Welcome to the elite community of Gen AI professionals!
                  </p>

                  {/* Floating celebration elements */}
                  <div className="absolute top-4 left-4 text-2xl animate-bounce">🎊</div>
                  <div className="absolute top-6 right-6 text-xl animate-bounce" style={{ animationDelay: "0.5s" }}>
                    ✨
                  </div>
                  <div className="absolute bottom-4 left-8 text-lg animate-bounce" style={{ animationDelay: "1s" }}>
                    🚀
                  </div>
                  <div className="absolute bottom-6 right-4 text-xl animate-bounce" style={{ animationDelay: "1.5s" }}>
                    🎯
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Card className="bg-gradient-to-r from-blue-600 to-white/20 border-0 shadow-2xl max-w-2xl mx-auto hover:scale-105 transition-all duration-500">
            
          </Card>
        </div>
      </div>
    </section>
  )
}
