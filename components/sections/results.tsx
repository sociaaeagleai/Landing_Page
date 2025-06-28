import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Award, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Results() {
  const stats = [
    {
      number: "50+",
      label: "GenAI Projects",
      description: "Real-world AI applications built by our students",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      number: "25+",
      label: "Real Use Case Projects",
      description: "Industry-specific solutions solving actual business problems",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      number: "200+",
      label: "Flowise Templates",
      description: "Ready-to-use workflow templates for rapid development",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      number: "250+",
      label: "n8n Templates",
      description: "Automation templates for seamless integration",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      number: "1000+",
      label: "Ready-to-use Prompt Templates",
      description: "Optimized prompts for various AI applications",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      number: "50+",
      label: "AI Agents Source Code",
      description: "Complete source code for intelligent agents",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const careerStats = [
    { metric: "Average Salary Increase", value: "175%", icon: TrendingUp },
    { metric: "Job Placement Rate", value: "95%", icon: Briefcase },
    { metric: "Career Transition Success", value: "92%", icon: Award },
    { metric: "Alumni Network", value: "26,000+", icon: Users },
  ]

  return (
    <section
      id="results"
      className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black relative overflow-hidden"
    >
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Our Results Speak
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tangible outcomes and resources that our students receive to accelerate their AI journey.
          </p>
        </div>

        {/* Career Stats */}
        

        {/* Portfolio Results */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio & Project Results
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{stat.label}</h3>
                      <p className="text-gray-300 text-sm">{stat.description}</p>
                    </div>
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={stat.image || "/placeholder.svg"}
                        alt={stat.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm max-w-4xl mx-auto">
            
          </Card>
        </div>
      </div>
    </section>
  )
}
