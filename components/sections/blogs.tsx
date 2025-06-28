import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Blogs() {
  const featuredPost = {
    title: "The Future of AI: Trends Shaping 2025 and Beyond",
    excerpt:
      "Explore the cutting-edge developments in artificial intelligence that are set to transform industries and reshape how we work, learn, and live in the coming years.",
    author: "Manoj Kumar",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "AI Trends",
  }

  const blogPosts = [
    {
      title: "Building Your First RAG Application: A Step-by-Step Guide",
      excerpt:
        "Learn how to create a Retrieval-Augmented Generation system from scratch using LangChain and vector databases.",
      author: "Thirumurugan",
      date: "December 10, 2024",
      readTime: "12 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Tutorial",
    },
    {
      title: "Prompt Engineering Mastery: Advanced Techniques",
      excerpt: "Discover advanced prompt engineering strategies that can dramatically improve your AI model outputs.",
      author: "Manoj Kumar",
      date: "December 5, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Best Practices",
    },
    {
      title: "AI Career Transition: From Zero to AI Professional",
      excerpt: "Real stories and practical advice from professionals who successfully transitioned into AI careers.",
      author: "SocialeEagle Team",
      date: "November 28, 2024",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Career",
    },
    {
      title: "LangChain vs Custom Solutions: When to Use What",
      excerpt: "A comprehensive comparison to help you choose the right approach for your AI projects.",
      author: "Thirumurugan",
      date: "November 20, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Technical",
    },
    {
      title: "Deploying AI Models in Production: Best Practices",
      excerpt:
        "Essential guidelines for successfully deploying and scaling AI applications in production environments.",
      author: "Manoj Kumar",
      date: "November 15, 2024",
      readTime: "15 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "DevOps",
    },
    {
      title: "The Ethics of AI: Building Responsible AI Systems",
      excerpt: "Understanding the ethical implications of AI development and how to build more responsible AI systems.",
      author: "SocialeEagle Team",
      date: "November 8, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Ethics",
    },
  ]

  return (
    <section id="blogs" className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Latest Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights from the world of AI and machine learning.
          </p>
        </div>

        {/* Featured Post */}
        <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm mb-16 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto">
              <img
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              </div>
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <div className="mb-4">
                <span className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                  {featuredPost.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
              <p className="text-gray-300 mb-6 text-lg">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 w-fit">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400 px-2 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                  <Link
                    href="/contact"
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay in the Loop</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest AI insights, tutorials, and industry updates delivered
              straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  Subscribe
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
