import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Blog - Latest Insights & Tutorials | SocialeEagle.AI",
  description:
    "Stay updated with the latest AI trends, tutorials, and insights. Learn about GenAI, LangChain, RAG systems, and AI career guidance from industry experts.",
  keywords:
    "AI blog, machine learning tutorials, GenAI insights, AI career advice, LangChain tutorials, RAG systems, AI trends",
}

export default function BlogsPage() {
  const featuredPost = {
    title: "The Future of AI: Trends Shaping 2025 and Beyond",
    excerpt:
      "Explore the cutting-edge developments in artificial intelligence that are set to transform industries and reshape how we work, learn, and live in the coming years. From autonomous agents to multimodal AI systems.",
    author: "Manoj Kumar",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "/images/future-of-ai.png",
    category: "AI Trends",
  }

  const blogPosts = [
    {
      title: "Building Your First RAG Application: A Step-by-Step Guide",
      excerpt:
        "Learn how to create a Retrieval-Augmented Generation system from scratch using LangChain and vector databases. Complete with code examples and best practices.",
      author: "Thirumurugan",
      date: "December 10, 2024",
      readTime: "12 min read",
      image: "/images/rag-application.png",
      category: "Tutorial",
    },
    {
      title: "Prompt Engineering Mastery: Advanced Techniques for 2025",
      excerpt:
        "Discover advanced prompt engineering strategies that can dramatically improve your AI model outputs and unlock new capabilities.",
      author: "Manoj Kumar",
      date: "December 5, 2024",
      readTime: "6 min read",
      image: "/images/prompt-engineering.png",
      category: "Best Practices",
    },
    {
      title: "AI Career Transition: From Zero to AI Professional in 6 Months",
      excerpt:
        "Real stories and practical advice from professionals who successfully transitioned into AI careers, including salary data and interview tips.",
      author: "SocialeEagle Team",
      date: "November 28, 2024",
      readTime: "10 min read",
      image: "/images/ai-career-transition.png",
      category: "Career",
    },
    {
      title: "LangChain vs Custom Solutions: When to Use What",
      excerpt:
        "A comprehensive comparison to help you choose the right approach for your AI projects, with performance benchmarks and use cases.",
      author: "Thirumurugan",
      date: "November 20, 2024",
      readTime: "8 min read",
      image: "/images/langchain-vs-custom.png",
      category: "Technical",
    },
    {
      title: "Deploying AI Models in Production: Complete DevOps Guide",
      excerpt:
        "Essential guidelines for successfully deploying and scaling AI applications in production environments with monitoring and security.",
      author: "Manoj Kumar",
      date: "November 15, 2024",
      readTime: "15 min read",
      image: "/images/ai-model-deployment.png",
      category: "DevOps",
    },
    {
      title: "The Ethics of AI: Building Responsible AI Systems",
      excerpt:
        "Understanding the ethical implications of AI development and how to build more responsible, fair, and transparent AI systems.",
      author: "SocialeEagle Team",
      date: "November 8, 2024",
      readTime: "7 min read",
      image: "/images/ethics-of-ai.png",
      category: "Ethics",
    },
    {
      title: "Multi-Agent Systems: The Next Frontier in AI",
      excerpt:
        "Explore how multiple AI agents can work together to solve complex problems and create more sophisticated AI applications.",
      author: "Thirumurugan",
      date: "October 30, 2024",
      readTime: "11 min read",
      image: "/images/multi-agent-systems.png",
      category: "Advanced",
    },
    {
      title: "AI Tools Every Developer Should Know in 2025",
      excerpt:
        "A curated list of essential AI tools, frameworks, and platforms that every developer should have in their toolkit.",
      author: "SocialeEagle Team",
      date: "October 25, 2024",
      readTime: "9 min read",
      image: "/images/ai-developer-tools.png",
      category: "Tools",
    },
  ]

  const categories = [
    "All",
    "Tutorial",
    "Career",
    "Technical",
    "AI Trends",
    "Best Practices",
    "DevOps",
    "Ethics",
    "Advanced",
    "Tools",
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
                  AI Insights
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  & Learning Hub
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Stay ahead of the AI curve with expert insights, practical tutorials, and industry trends. Learn from
                the experiences of AI professionals and discover the latest developments in artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 rounded-full bg-white/10 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-full">
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/ai-knowledge-hub.png"
                alt="AI Knowledge Hub"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-6">
                <p className="text-white font-bold text-lg">50+ Articles</p>
                <p className="text-white/80">Expert Insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-purple-500/30 text-gray-300 hover:bg-purple-500/20 hover:text-white bg-transparent rounded-full px-4 py-2"
              >
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Article
              </span>
            </h2>
          </div>

          <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm overflow-hidden">
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
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 w-fit">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                Latest Articles
              </span>
            </h2>
          </div>

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
                      href="#"
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

          {/* Load More */}
          <div className="text-center">
            <Button
              variant="outline"
              className="border-2 border-purple-500/30 text-white hover:bg-purple-500/20 bg-transparent px-8 py-3 rounded-full"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Never Miss an Update</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter and get the latest AI insights, tutorials, and industry updates delivered
                straight to your inbox every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-4">Join 10,000+ AI professionals who trust our insights</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
