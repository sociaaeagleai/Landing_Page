import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Star, TrendingUp, Award, Users, Code, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Results & Success Stories - SocialeEagle.AI Alumni Achievements",
  description:
    "Discover the success stories of our 26,000+ alumni. See career transformations, salary increases, and real projects built by our AI training graduates.",
  keywords:
    "AI training results, career transformation, AI job placement, salary increase, AI portfolio, success stories",
}

export default function ResultsPage() {
  const stats = [
    {
      number: "50+",
      label: "GenAI Projects",
      description: "Real-world AI applications built by our students",
      icon: Code,
      image: "/images/genai-projects.png",
    },
    {
      number: "25+",
      label: "Real Use Case Projects",
      description: "Industry-specific solutions solving actual business problems",
      icon: Briefcase,
      image: "/images/use-case-projects.png",
    },
    {
      number: "200+",
      label: "Flowise Templates",
      description: "Ready-to-use workflow templates for rapid development",
      icon: TrendingUp,
      image: "/images/flowise-templates.png",
    },
    {
      number: "250+",
      label: "n8n Templates",
      description: "Automation templates for seamless integration",
      icon: Award,
      image: "/images/n8n-templates.png",
    },
    {
      number: "1000+",
      label: "Ready-to-use Prompt Templates",
      description: "Optimized prompts for various AI applications",
      icon: Star,
      image: "/images/prompt-templates.png",
    },
    {
      number: "50+",
      label: "AI Agents Source Code",
      description: "Complete source code for intelligent agents",
      icon: Users,
      image: "/images/ai-agents.png",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior AI Engineer at Google",
      previousRole: "Software Developer",
      salaryIncrease: "150%",
      content:
        "The practical approach and real projects helped me transition from web development to AI engineering. I landed my dream job at Google with a 150% salary increase!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Sarah+J",
      company: "Google",
    },
    {
      name: "Michael Chen",
      role: "AI Product Manager at Microsoft",
      previousRole: "Business Analyst",
      salaryIncrease: "200%",
      content:
        "From business analyst to AI Product Manager in 6 months. The portfolio I built here was the key differentiator in my interviews.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Michael+C",
      company: "Microsoft",
    },
    {
      name: "Priya Patel",
      role: "ML Engineer at OpenAI",
      previousRole: "Data Analyst",
      salaryIncrease: "180%",
      content:
        "The hands-on experience with LangChain and RAG systems prepared me perfectly for my role at OpenAI. Best investment I've ever made!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Priya+P",
      company: "OpenAI",
    },
    {
      name: "David Rodriguez",
      role: "AI Consultant",
      previousRole: "Marketing Manager",
      salaryIncrease: "250%",
      content:
        "Started my own AI consulting firm after completing the program. Now helping Fortune 500 companies implement AI solutions.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=David+R",
      company: "Independent",
    },
  ]

  const careerStats = [
    { metric: "Average Salary Increase", value: "175%", icon: TrendingUp },
    { metric: "Job Placement Rate", value: "95%", icon: Briefcase },
    { metric: "Career Transition Success", value: "92%", icon: Award },
    { metric: "Alumni Network", value: "26,000+", icon: Users },
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
                  Success Stories
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  That Inspire
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover how our alumni have transformed their careers, built innovative AI solutions, and achieved
                remarkable success in the AI industry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {careerStats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <p className="text-gray-300 text-sm">{stat.metric}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/success-dashboard.png"
                alt="Success Stories Dashboard"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-6">
                <p className="text-white font-bold text-lg">26,000+ Alumni</p>
                <p className="text-white/80">Worldwide Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Results */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Portfolio & Project Results
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tangible outcomes and resources that our students receive to accelerate their AI journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <Icon className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                          {stat.number}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{stat.label}</h3>
                        <p className="text-gray-300 text-sm mb-4">{stat.description}</p>
                      </div>
                    </div>
                    <div className="w-full h-32 rounded-lg overflow-hidden">
                      <img
                        src={stat.image || "/placeholder.svg"}
                        alt={stat.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                Career Transformation Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real stories from real people who transformed their careers with our AI training program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-cyan-400 font-semibold">{testimonial.role}</p>
                      <p className="text-gray-400 text-sm">Previously: {testimonial.previousRole}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        +{testimonial.salaryIncrease}
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Salary Increase</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold text-sm">{testimonial.company}</span>
                    <span className="text-gray-400 text-sm">Verified Graduate</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your Success Story Starts Here</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of professionals who have transformed their careers and achieved remarkable success in
                the AI industry. Your journey to AI mastery begins now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  Start Your Transformation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  View More Success Stories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
