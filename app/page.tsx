import TopNavBar from "@/components/TopNavBar"
import AboutMe from "@/components/AboutMe"
import Work from "@/components/Work"
import Projects from "@/components/Projects"
import School from "@/components/School"
import Books from "@/components/Books"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 max-w-5xl w-full items-start flex-col justify-center font-mono text-sm lg:flex">
        <TopNavBar />
        <AboutMe />
        <Work />
        <Projects />
        <School />
        <Books />
      </div>
    </main>
  )
}
