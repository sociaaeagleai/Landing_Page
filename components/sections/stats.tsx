"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function Stats() {
  const stats = [
    { number: "50+", label: "AI Projects", color: "from-blue-500 to-cyan-500" },
    { number: "50+", label: "AI Agents", color: "from-purple-500 to-pink-500" },
    { number: "15+", label: "AI Tools", color: "from-green-500 to-emerald-500" },
    { number: "250+", label: "Templates", color: "from-yellow-500 to-orange-500" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Clean 3D AI Bot */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md h-80">
              {/* Main Clean 3D AI Bot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-64 h-80 flex items-center justify-center">
                  {/* Bot Image with Hover Animation */}
                  <img
                    src="/images/ai-bot-clean.png"
                    alt="Clean 3D AI Bot"
                    className="w-full h-full object-contain animate-float hover:scale-110 transition-transform duration-500"
                  />

                  {/* Glowing Base Effect */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 rounded-full blur-lg animate-pulse" />
                </div>

                {/* Floating Particles Around Bot */}
                <div
                  className="absolute top-16 left-8 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg animate-float opacity-80"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-24 right-12 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg animate-float opacity-60"
                  style={{ animationDelay: "2s" }}
                />
                <div
                  className="absolute bottom-20 left-16 w-4 h-4 bg-gradient-to-br from-violet-400 to-fuchsia-500 rounded-full shadow-lg animate-float opacity-70"
                  style={{ animationDelay: "3s" }}
                />
                <div
                  className="absolute bottom-32 right-8 w-2.5 h-2.5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg animate-float opacity-50"
                  style={{ animationDelay: "4s" }}
                />

                {/* Energy Rings */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-violet-400/20 rounded-full animate-ping" />
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/15 rounded-full animate-ping"
                  style={{ animationDelay: "1s" }}
                />

                {/* Interactive Speech Bubble */}
                <div className="absolute -top-8 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-xl animate-bounce">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-violet-600 font-bold text-sm">AI Ready!</span>
                  </div>
                  {/* Speech bubble tail */}
                  <div className="absolute bottom-0 left-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white/95" />
                </div>

                {/* Data Flow Lines */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 300 300">
                    <defs>
                      <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>

                    {/* Animated data flow lines */}
                    <path
                      d="M50,150 Q150,50 250,150"
                      stroke="url(#dataFlow)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="4,4"
                      className="animate-pulse"
                    />
                    <path
                      d="M50,150 Q150,250 250,150"
                      stroke="url(#dataFlow)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="3,5"
                      className="animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                  AI-Powered Learning{" "}
                </span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  Ecosystem
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl">
                Join our comprehensive AI learning network with hands-on projects, intelligent agents, cutting-edge
                tools, and ready-to-use templates.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium text-lg">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
