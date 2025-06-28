import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award } from "lucide-react"

export default function About() {
  const mentors = [
    {
      name: "Manoj",
      title: "AI Innovation Architect",
      bio: "Leading AI transformation initiatives with 15+ years of experience in machine learning and enterprise AI solutions. Specialized in building scalable AI systems that drive business growth.",
      impact: "500+ AI Projects Delivered",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Thirumurugan",
      title: "GenAI & ML Engineering Pioneer",
      bio: "Pioneering generative AI applications and MLOps practices. Expert in LangChain, RAG systems, and production-ready AI deployment strategies.",
      impact: "1000+ Developers Trained",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">About Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering the next generation of AI professionals through practical, portfolio-driven education led by
            industry experts.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To democratize AI education and make cutting-edge AI skills accessible to everyone, regardless of their
                background.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To create a global community of AI practitioners who can build, automate, and scale intelligent
                solutions for real-world problems.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
              <p className="text-gray-300">
                Hands-on learning with real projects, expert mentorship, and a focus on building a strong portfolio that
                showcases your skills.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mentors Section */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Meet Our Expert Mentors
            </span>
          </h3>

          {mentors.map((mentor, index) => (
            <div
              key={mentor.name}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative">
                  <img
                    src={mentor.image || "/placeholder.svg"}
                    alt={mentor.name}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">{mentor.impact}</p>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <h4 className="text-3xl font-bold text-white mb-2">{mentor.name}</h4>
                <p className="text-xl text-cyan-400 font-semibold mb-6">{mentor.title}</p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">{mentor.bio}</p>
                <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-lg px-4 py-2">
                  <p className="text-yellow-400 font-semibold">{mentor.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
