import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Award, Zap, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SpeakWithUs() {
  const benefits = [
    {
      icon: Calendar,
      title: "Free Career Consultation",
      description: "Get personalized guidance on your AI career path",
    },
    {
      icon: Users,
      title: "Meet Our Experts",
      description: "Connect with industry professionals and mentors",
    },
    {
      icon: Award,
      title: "Custom Learning Plan",
      description: "Receive a tailored roadmap for your goals",
    },
    {
      icon: Zap,
      title: "Instant Clarity",
      description: "Get answers to all your questions in real-time",
    },
  ]

  const testimonials = [
    {
      name: "Vikram Singh",
      role: "Data Scientist",
      quote:
        "The consultation call changed my perspective on AI careers. The team provided clear guidance and helped me choose the right specialization.",
    },
    {
      name: "Sneha Reddy",
      role: "Product Manager",
      quote:
        "I was confused about transitioning to AI. The expert consultation gave me confidence and a clear roadmap to follow.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black relative overflow-hidden">
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
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Speak With Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Experts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get personalized guidance from industry experts. Book a free 30-minute consultation to discuss your AI
            career goals and find the perfect learning path.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits */}
          

          {/* Right side - CTA Card */}
          
        </div>
      </div>
    </section>
  )
}
