"use client"
import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 842 842 8800",
      description: "Quick responses, available 24/7",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email",
      value: "upskill@socialeagle.ai",
      description: "Detailed inquiries and support",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 842 842 8800",
      description: "Direct consultation calls",
      color: "from-purple-400 to-pink-500",
    },
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM IST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM IST" },
    { day: "Sunday", hours: "Closed" },
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
                  Get in Touch
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to start your AI journey? Have questions about our program? We're here to help you every step of
                the way. Reach out to us and let's discuss how we can help you achieve your AI career goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Serving students globally across 20+ countries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Quick response within 2 hours during business hours</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/contact-support.png"
                alt="Contact Support Team"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-6">
                <p className="text-white font-bold text-lg">24/7 Support</p>
                <p className="text-white/80">Always Here to Help</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Multiple Ways to Reach Us
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-cyan-400 font-bold text-lg mb-2">{method.value}</p>
                    <p className="text-gray-300 text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Images */}
            <div className="space-y-8">
              <div className="relative">
                <img
                  src="/images/contact-support-team.png"
                  alt="Professional Support Team"
                  className="w-full rounded-2xl shadow-2xl"
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
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-4">
                  <p className="text-white font-bold">Free Consultation</p>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-violet-900/30 to-blue-900/30 border-violet-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Connect?</h3>
                  <p className="text-gray-300 mb-6">
                    Choose your preferred way to reach out to our AI experts and start your transformation journey.
                  </p>
                  <div className="space-y-4">
                    <Link href="https://wa.me/918428428800" target="_blank">
                      <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 rounded-full">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        WhatsApp Now
                      </Button>
                    </Link>
                    <Link href="tel:+918428428800">
                      <Button className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-bold py-3 rounded-full">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Office Hours */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Phone & WhatsApp</h4>
                        <p className="text-cyan-400 font-semibold">+91 842 842 8800</p>
                        <p className="text-gray-300 text-sm">Available Mon-Fri, 9 AM - 6 PM IST</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Email</h4>
                        <p className="text-cyan-400 font-semibold">upskill@socialeagle.ai</p>
                        <p className="text-gray-300 text-sm">We'll respond within 2 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Location</h4>
                        <p className="text-gray-300">
                          Chennai, Tamil Nadu, India
                          <br />
                          <span className="text-sm">Virtual & Hybrid Programs Available Globally</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Office Hours</h3>
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{schedule.day}</span>
                        <span className="text-cyan-400 font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-lg">
                    <p className="text-yellow-400 font-semibold text-sm">
                      Emergency support available 24/7 via WhatsApp for enrolled students
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Find Us</h3>
                  <div className="relative">
                    <img
                      src="/images/ai-knowledge-hub.png"
                      alt="Office Location Map"
                      className="w-full h-64 rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <div className="text-center">
                        <MapPin className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                        <p className="text-white font-semibold">Chennai, Tamil Nadu</p>
                        <p className="text-gray-300 text-sm mt-2">Virtual programs available worldwide</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white font-bold mb-3">How quickly can I expect a response?</h3>
                <p className="text-gray-300 text-sm">
                  We typically respond within 2 hours during business hours and within 24 hours on weekends. For urgent
                  matters, WhatsApp is the fastest way to reach us.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white font-bold mb-3">Can I schedule a consultation call?</h3>
                <p className="text-gray-300 text-sm">
                  We offer free 30-minute consultation calls to discuss your AI career goals and how our program can
                  help you achieve them.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white font-bold mb-3">Do you offer corporate training?</h3>
                <p className="text-gray-300 text-sm">
                  Yes, we provide customized AI training programs for companies looking to upskill their teams. Contact
                  us for enterprise solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white font-bold mb-3">What if I'm in a different timezone?</h3>
                <p className="text-gray-300 text-sm">
                  We serve students globally and can accommodate different timezones for consultations and support. Our
                  programs are designed to be flexible for international students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your AI Journey?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't wait any longer. Take the first step towards transforming your career with AI. Our team is ready
                to guide you through every step of your learning journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
