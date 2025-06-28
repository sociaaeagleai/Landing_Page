import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Events() {
  const events = [
    {
      title: "Program Orientation",
      date: "June 28, 2025",
      time: "10:00 AM IST",
      type: "Virtual",
      description: "Meet your mentors, understand the curriculum, and connect with fellow learners.",
      icon: Users,
      status: "upcoming",
    },
    {
      title: "Batch Kickoff",
      date: "June 30, 2025",
      time: "9:00 AM IST",
      type: "Hybrid",
      description: "Official start of the 8-week AI mastery program with hands-on sessions.",
      icon: Calendar,
      status: "upcoming",
    },
    {
      title: "AI Hackathon",
      date: "July 15, 2025",
      time: "48 Hours",
      type: "Virtual",
      description: "Build innovative AI solutions and compete with peers for exciting prizes.",
      icon: Trophy,
      status: "registration-open",
    },
    {
      title: "Industry Buildathon",
      date: "August 5, 2025",
      time: "Weekend",
      type: "Hybrid",
      description: "Collaborate on real industry problems with mentorship from experts.",
      icon: MapPin,
      status: "coming-soon",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "from-green-400 to-emerald-500"
      case "registration-open":
        return "from-yellow-400 to-orange-500"
      case "coming-soon":
        return "from-blue-400 to-cyan-500"
      default:
        return "from-gray-400 to-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming":
        return "Upcoming"
      case "registration-open":
        return "Registration Open"
      case "coming-soon":
        return "Coming Soon"
      default:
        return "TBD"
    }
  }

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our community events, hackathons, and learning sessions to accelerate your AI journey.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => {
            const Icon = event.icon
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{event.title}</h3>
                        <p className="text-cyan-400 font-semibold">{event.type}</p>
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getStatusColor(event.status)} text-white`}
                    >
                      {getStatusText(event.status)}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{event.description}</p>

                  <div className="flex space-x-4">
                    <div className="w-24 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1 flex items-center">
                      <Link href="/contact">
                        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
                          {event.status === "registration-open" ? "Register Now" : "Learn More"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Don't Miss Out!</h3>
              <p className="text-gray-300 mb-6">
                Stay updated with all our events and be the first to know about new opportunities.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Subscribe to Updates
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
