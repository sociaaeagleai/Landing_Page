import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your AI journey? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Phone & WhatsApp</h4>
                  <p className="text-gray-300">+91 842 842 8800</p>
                  <p className="text-sm text-gray-400">Available 9 AM - 9 PM IST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-300">upskill@socialeagle.ai</p>
                  <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                  <p className="text-gray-300">Social Eagle Academy</p>
                  <p className="text-gray-300">No. 14-16, Global Hospital Road Junction,</p>
                  <p className="text-gray-300">Indira Priyadarshini Nagar,</p>
                  <p className="text-gray-300">Opp. ICICI Bank, Perumbakkam,</p>
                  <p className="text-gray-300">Chennai, Tamil Nadu 600100</p>
                  <p className="text-sm text-gray-400">Virtual programs worldwide</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Office Hours</h4>
                  <p className="text-gray-300">Monday - Saturday</p>
                  <p className="text-sm text-gray-400">9:00 AM - 9:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Link href="https://wa.me/918428428800" target="_blank">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us Now
                </Button>
              </Link>
              <Link href="tel:+918428428800">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Images */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="/images/contact-support-team.png"
                alt="Professional Support Team"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-violet-500 to-blue-600 rounded-xl p-6">
                <p className="text-white font-bold text-lg">Expert Support</p>
                <p className="text-white/80">Always Available</p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/expert-consultation.png"
                alt="AI Expert Consultation"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-4">
                <p className="text-white font-bold">Free Consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
