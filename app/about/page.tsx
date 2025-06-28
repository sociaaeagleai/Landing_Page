import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, CheckCircle, Globe, TrendingUp, Zap, Rocket, Heart, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - SocialEagle.AI | The AI Shift is Here",
  description:
    "AI won't replace you. But a person using AI will. Welcome to SocialEagle.AI - an execution-first academy that helps people become irreplaceable in an AI-driven world.",
  keywords: "AI training, AI shift, future of work, AI skills, digital transformation, SocialEagle Academy",
}

export default function AboutPage() {
  const stats = [
    { number: "1,700+", label: "Students Trained", icon: Users },
    { number: "330+", label: "Clients Served", icon: Globe },
    { number: "9-Figure", label: "Results Created", icon: TrendingUp },
    { number: "100%", label: "Success Focus", icon: Award },
  ]

  const capabilities = [
    "Use AI to create workflows, tools, content and automation",
    "Improve productivity, performance and creativity",
    "Execute faster, think better and work smarter",
    "Shift your identity from AI user to AI architect",
  ]

  const achievements = [
    "Helped 330+ clients across India and abroad",
    "Built systems and frameworks that created 9-figure results",
    "Trained over 1,700 students in digital marketing and now AI",
    "Seen our learners turn into agency owners, freelancers, consultants, professionals and leaders",
  ]

  const values = [
    { title: "Customer Delight", icon: Heart },
    { title: "Faith, Trust, Empathy", icon: Users },
    { title: "Ethics, Transparency", icon: Shield },
    { title: "Excellence, Creativity, Innovation", icon: Star },
    { title: "Discipline, Determination, Dynamism", icon: Zap },
    { title: "Gratitude, Competency", icon: Award },
    { title: "Positive Contribution", icon: Target },
    { title: "Continuous Learning", icon: TrendingUp },
    { title: "Community", icon: Globe },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Hero Section - THE AI SHIFT IS HERE */}
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                  🚨 THE AI SHIFT IS HERE
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                  AI won't replace you.
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-violet-600 bg-clip-text text-transparent">
                  But a person using AI will.
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Welcome to{" "}
                <strong className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                  SocialEagle.AI
                </strong>{" "}
                - an execution-first academy that helps people become irreplaceable in an AI-driven world.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-8 h-8 text-violet-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <p className="text-gray-300 text-sm">{stat.label}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/ai-transformation-hero.png"
                alt="AI Transformation"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-violet-500 to-blue-600 rounded-xl p-6">
                <p className="text-white font-bold text-lg">The Future is Now</p>
                <p className="text-white/80">Adapt or Get Left Behind</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Reality Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/images/fast-moving-world.png"
                alt="Fast Moving World"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-violet-500 to-blue-500 rounded-xl p-4">
                <p className="text-white font-bold">Speed = Currency</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                  The World is Moving Fast
                </span>
              </h2>
              <div className="space-y-4 text-lg text-gray-300 mb-8">
                <p>Job roles are changing.</p>
                <p>Clients expect more.</p>
                <p>
                  <strong className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                    Speed is the new currency.
                  </strong>
                </p>
                <p>Those who survive this shift won't be the ones who know the most.</p>
                <p className="text-xl font-bold bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                  It'll be the ones who adapt the fastest.
                </p>
              </div>
              <Card className="bg-gradient-to-r from-violet-400/20 to-blue-500/20 border border-violet-400/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent font-semibold text-lg">
                    "At SocialEagle.AI, we don't just teach you what AI is. We teach you how to build with it."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Teach Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                  What You'll Master
                </span>
              </h2>
              <div className="space-y-6 mb-8">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-violet-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300 text-lg">{capability}</p>
                  </div>
                ))}
              </div>
              <Card className="bg-gradient-to-r from-violet-400/20 to-blue-500/20 border border-violet-400/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent font-bold text-xl mb-2">
                    Identity Transformation
                  </h3>
                  <p className="text-white text-lg">From AI User → AI Architect</p>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <img
                src="/images/ai-building-tools.png"
                alt="AI Building and Tools"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-violet-500 to-blue-600 rounded-xl p-6">
                <p className="text-white font-bold text-lg">Build. Don't Just Use.</p>
                <p className="text-white/80">Execution First</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Vehicle Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/images/career-growth-vehicle.png"
                alt="Career Growth Vehicle"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-violet-500 to-blue-600 rounded-xl p-4">
                <p className="text-white font-bold">Your Edge</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                  More Than a Course
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                This is a{" "}
                <strong className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                  career + upskill vehicle.
                </strong>
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We've already trained{" "}
                <strong className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                  1,700+ students
                </strong>{" "}
                through Social Eagle Academy - helping them become high-performing freelancers, business owners and
                future-proof professionals.
              </p>
              <div className="bg-gradient-to-r from-violet-900/50 to-blue-900/50 border border-violet-500/30 rounded-xl p-6 mb-8">
                <p className="text-white text-xl font-bold mb-2">Now it's your turn.</p>
                <div className="space-y-2 text-lg">
                  <p className="bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent">
                    This is your <strong>edge.</strong>
                  </p>
                  <p className="bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">
                    This is your <strong>system.</strong>
                  </p>
                  <p className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    This is <strong>SocialEagle.AI.</strong>
                  </p>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                  Start Your Transformation
                  <Rocket className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                WHO WE ARE & WHY WE EXIST
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built in Tamil Nadu. Rooted in values. Scaling transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                'Social Eagle' is a data-driven, performance-based, customer-obsessed and result-oriented brand focused
                on transforming people and businesses.
              </p>
              <Card className="bg-gradient-to-r from-violet-400/20 to-blue-500/20 border border-violet-400/30 backdrop-blur-sm mb-6">
                <CardContent className="p-6">
                  <p className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent font-bold text-lg mb-2">
                    We are not here to just build a brand.
                  </p>
                  <p className="text-white text-xl">We are here to build people.</p>
                </CardContent>
              </Card>
              <p className="text-xl bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                Our belief is simple - We cannot win unless our customers win.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/tamil-nadu-roots.png"
                alt="Tamil Nadu Roots"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-violet-500 to-blue-600 rounded-xl p-6">
                <p className="text-white font-bold text-lg">Built in Tamil Nadu</p>
                <p className="text-white/80">Scaling Globally</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/images/success-stories.png"
                alt="Success Stories"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-violet-500 to-blue-500 rounded-xl p-4">
                <p className="text-white font-bold">Proven Results</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Over the years, we've:
              </h3>
              <div className="space-y-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-violet-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300 text-lg">{achievement}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-300">
                Inside our Community, we don't just pass on information. We help people find{" "}
                <strong className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                  clarity, discipline and execution power.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The energy of Social Eagle comes from the values we live by:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-violet-900/30 to-blue-900/30 border-violet-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <Icon className="w-12 h-12 text-violet-400 mx-auto mb-4" />
                    <h3 className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent font-semibold text-lg">
                      {value.title}
                    </h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Formula Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                  Our Success Formula
                </span>
              </h2>
              <Card className="bg-gradient-to-r from-violet-400/20 to-blue-500/20 border border-violet-400/30 backdrop-blur-sm mb-8">
                <CardContent className="p-8 text-center">
                  <p className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent font-bold text-2xl mb-4">
                    "
                  </p>
                  <p className="text-white text-xl font-semibold mb-4">
                    Disciplined, focused, consistent effort done on a daily basis.
                  </p>
                  <p className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent font-bold text-2xl">
                    "
                  </p>
                </CardContent>
              </Card>
              <p className="text-lg text-gray-300 mb-8">
                With{" "}
                <strong className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                  SocialEagle.AI
                </strong>
                , we're now preparing India's professionals for the AI age - through systems that work and mindset that
                sustains.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                  Join the AI Revolution
                  <Zap className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/success-formula.png"
                alt="Success Formula"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-violet-500 to-blue-500 rounded-xl p-6">
                <p className="text-white font-bold text-lg">Daily Discipline</p>
                <p className="text-white/80">Consistent Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-violet-900/50 to-blue-900/50 border-violet-500/30 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Ready to Become AI-Irreplaceable?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't get left behind in the AI revolution. Join SocialEagle.AI and transform from an AI user to an AI
                architect.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  Start Your AI Journey Today
                  <Rocket className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
