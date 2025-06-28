"use client"

export default function Tools() {
  const toolsRow1 = [
    { name: "Python", logo: "/images/logos/python.png" },
    { name: "ChatGPT", logo: "/images/logos/chatgpt.png" },
    { name: "Claude", logo: "/images/logos/claude.png" },
    { name: "Qwen", logo: "/images/logos/qwen.png" },
    { name: "NotebookLM", logo: "/images/logos/notebooklm.png" },
    { name: "Flowise", logo: "/images/logos/flowise.png" },
  ]

  const toolsRow2 = [
    { name: "LangChain", logo: "/images/logos/langchain.png" },
    { name: "n8n", logo: "/images/logos/n8n.png" },
    { name: "Notion", logo: "/images/logos/notion.png" },
    { name: "Gemini", logo: "/images/logos/gemini.png" },
    { name: "Colab", logo: "/images/logos/colab.png" },
    { name: "VS Code", logo: "/images/logos/vscode.png" },
  ]

  const toolsRow3 = [
    { name: "Cursor", logo: "/images/logos/cursor.png" },
    { name: "Docker", logo: "/images/logos/docker.png" },
    { name: "GitHub", logo: "/images/logos/github.png" },
    { name: "Flask", logo: "/images/logos/flask.png" },
    { name: "Hugging Face", logo: "/images/logos/huggingface.png" },
    { name: "Eleven Labs", logo: "/images/logos/elevenlabs.png" },
  ]

  const toolsRow4 = [
    { name: "HeyGen", logo: "/images/logos/heygen.png" },
    { name: "Autogen", logo: "/images/logos/autogen.png" },
    { name: "Streamlit", logo: "/images/logos/streamlit.png" },
    { name: "Redis", logo: "/images/logos/redis.png" },
    { name: "Playwright", logo: "/images/logos/playwright.png" },
    { name: "Selenium", logo: "/images/logos/selenium.png" },
  ]

  const toolsRow5 = [
    { name: "Supabase", logo: "/images/logos/supabase.png" },
    { name: "Kimi", logo: "/images/logos/kimi.png" },
    { name: "Jupyter", logo: "/images/logos/jupyter.png" },
    { name: "Perplexity", logo: "/images/logos/perplexity.png" },
    { name: "Deepseek", logo: "/images/logos/deepseek.png" },
    { name: "OpenAI", logo: "/images/logos/openai.png" },
  ]

  const ToolCard = ({ tool }: { tool: { name: string; logo: string } }) => (
    <div className="flex-shrink-0 bg-white rounded-2xl p-6 mx-3 w-32 h-20 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
      <img src={tool.logo || "/placeholder.svg"} alt={tool.name} className="max-w-full max-h-full object-contain" />
    </div>
  )

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Premium Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tools You'll Learn</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master the most in-demand AI tools and technologies used by industry professionals
          </p>
        </div>

        {/* Animated Tool Rows */}
        <div className="space-y-6">
          {/* Row 1 - Moving Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...toolsRow1, ...toolsRow1, ...toolsRow1].map((tool, index) => (
                <ToolCard key={`row1-${index}`} tool={tool} />
              ))}
            </div>
          </div>

          {/* Row 2 - Moving Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...toolsRow2, ...toolsRow2, ...toolsRow2].map((tool, index) => (
                <ToolCard key={`row2-${index}`} tool={tool} />
              ))}
            </div>
          </div>

          {/* Row 3 - Moving Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...toolsRow3, ...toolsRow3, ...toolsRow3].map((tool, index) => (
                <ToolCard key={`row3-${index}`} tool={tool} />
              ))}
            </div>
          </div>

          {/* Row 4 - Moving Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...toolsRow4, ...toolsRow4, ...toolsRow4].map((tool, index) => (
                <ToolCard key={`row4-${index}`} tool={tool} />
              ))}
            </div>
          </div>

          {/* Row 5 - Moving Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...toolsRow5, ...toolsRow5, ...toolsRow5].map((tool, index) => (
                <ToolCard key={`row5-${index}`} tool={tool} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-6">And many more cutting-edge tools in our comprehensive curriculum</p>
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-white font-semibold">30+ Professional Tools & Platforms</span>
          </div>
        </div>
      </div>
    </section>
  )
}
