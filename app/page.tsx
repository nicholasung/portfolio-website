import Education from "@/components/education"
import Experience from "@/components/experience"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </main>
  )
}
