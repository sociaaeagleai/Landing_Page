import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Code, Brain, Zap, Trophy, Rocket, Target, Star, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "AI Course - 8-Week GenAI Mastery Program | SocialeEagle.AI",
  description:
    "Master Generative AI, LangChain, RAG systems, and AI agents in our comprehensive 8-week program. Hands-on projects, expert mentorship, and portfolio development.",
  keywords:
    "AI course, GenAI training, LangChain course, RAG systems, AI agents, prompt engineering, machine learning course",
}

export default function CoursePage() {
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
    },
    {
      week: 3,
      title: "LangChain & RAG Systems",
      modules: ["LangChain framework mastery", "RAG implementation", "Vector databases", "Document processing"],
      deliverables: "Production-ready RAG application",
      icon: Zap,
      duration: "50 hours",
    },
    {
      week: 4,
      title: "Advanced RAG + Competitions",
      modules: ["Multi-modal RAG", "Performance optimization", "Competition strategies", "Portfolio enhancement"],
      deliverables: "Competition-winning project",
      icon: Trophy,
      duration: "45 hours",
    },
    {
      week: 5,
      title: "AI Agents & Automation",
      modules: ["Agent frameworks", "Workflow automation", "Multi-agent systems", "Tool integration"],
      deliverables: "Intelligent AI agent prototype",
      icon: Rocket,
      duration: "50 hours",
    },
    {
      week: 6,
      title: "Production Deployment",
      modules: ["Cloud deployment strategies", "API development", "Scaling and monitoring", "Security best practices"],
      deliverables: "Deployed AI application with monitoring",
      icon: Target,
      duration: "45 hours",
    },
    {
      week: 7,
      title: "Industry Applications",
      modules: ["Sector-specific AI solutions", "Custom integrations", "Business case development", "ROI optimization"],
      deliverables: "Industry-specific AI solution",
      icon: Star,
      duration: "50 hours",
    },
    {
      week: 8,
      title: "Portfolio & Career Mastery",
      modules: ["Portfolio optimization", "Interview preparation", "Career guidance", "Industry networking"],
      deliverables: "Complete professional portfolio",
      icon: CheckCircle,
      duration: "40 hours",
    },
  ]

  const features = [
    {
      title: "Live Interactive Sessions",
      description: "Real-time learning with expert instructors",
      icon: Users,
    },
    {
      title: "Hands-On Projects",
      description: "Build 8+ real-world AI applications",
      icon: Code,
    },
    {
      title: "1:1 Mentorship",
      description: "Personal guidance from industry experts",
      icon: Target,
    },
    {
      title: "Lifetime Access",
      description: "Access to all course materials forever",
      icon: Clock,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                  8-Week GenAI
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Mastery Program
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform from beginner to AI professional with our comprehensive, hands-on curriculum designed by
                industry pioneers. Build real projects, master cutting-edge tools, and launch your AI career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  Enroll Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Download Syllabus
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/course-overview.png"
                alt="AI Course Overview"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-6">
                <p className="text-white font-bold text-lg">8 Weeks</p>
                <p className="text-white/80">365+ Hours Content</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                What Makes Our Course Special
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm text-center"
                >
                  <CardContent className="p-8">
                    <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Curriculum */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                Detailed Curriculum
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive, hands-on curriculum designed to transform you into an AI professional with real-world
              projects and industry-ready skills.
            </p>
          </div>

          {/* Course Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-pink-500 to-purple-600 hidden lg:block" />

            <div className="space-y-12">
              {weeks.map((week, index) => {
                const Icon = week.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={week.week}
                    className={`relative grid lg:grid-cols-2 gap-8 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center z-10 hidden lg:flex">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Week image */}
                    <div className={`${!isEven ? "lg:col-start-2" : ""}`}>
                      <div className="relative">
                        <img
                          src={`/images/week${week.week}-${week.week === 1 ? "python" : week.week === 2 ? "genai" : week.week === 3 ? "langchain" : week.week === 4 ? "rag" : week.week === 5 ? "agents" : week.week === 6 ? "deployment" : week.week === 7 ? "industry" : "portfolio"}.png`}
                          alt={`Week ${week.week}`}
                          className="w-full rounded-2xl shadow-2xl"
                        />
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-3">
                          <div className="text-white font-bold text-2xl">Week {week.week}</div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${!isEven ? "lg:col-start-1" : ""}`}>
                      <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
                        <CardContent className="p-8">
                          <div className="flex items-center mb-4 lg:hidden">
                            <Icon className="w-8 h-8 text-cyan-400 mr-3" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                              Week {week.week}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold text-white mb-4">{week.title}</h3>

                          <div className="flex items-center mb-4">
                            <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                            <span className="text-cyan-400 font-semibold">{week.duration}</span>
                          </div>

                          <div className="mb-6">
                            <h4 className="text-cyan-400 font-semibold mb-3">Learning Modules:</h4>
                            <ul className="space-y-2">
                              {week.modules.map((module, idx) => (
                                <li key={idx} className="flex items-center text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {module}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-4">
                            <h4 className="text-yellow-400 font-semibold mb-2">Project Deliverable:</h4>
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
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your AI Journey?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of professionals who have transformed their careers with our comprehensive AI program.
                Limited seats available for the next batch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  Enroll Now - Limited Seats
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Schedule a Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
