import TopNavBar from "@/components/TopNavBar"
import AboutMe from "@/components/AboutMe"
import Work from "@/components/Work"
import Projects from "@/components/Projects"
import School from "@/components/School"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 max-w-5xl w-full items-center flex-col justify-center font-mono text-sm lg:flex">
        <TopNavBar />
        <AboutMe />
        <Work />
        <Projects />
        <School />
      </div>
    </main>
  )
}
