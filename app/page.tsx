import Hero from "@/components/sections/hero"
import Stats from "@/components/sections/stats"
import Tools from "@/components/sections/tools"
import CourseRoadmap from "@/components/sections/course-roadmap"
import Results from "@/components/sections/results"
import Contact from "@/components/sections/contact"
import SpeakWithUs from "@/components/sections/speak-with-us"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Tools />
      <CourseRoadmap />
      <Results />
      <Contact />
      <SpeakWithUs />
    </main>
  )
}
