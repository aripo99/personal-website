import TopNavBar from "@/components/TopNavBar"
import AboutMe from "@/components/AboutMe"
import Work from "@/components/Work"
import Projects from "@/components/Projects"
import School from "@/components/School"
import Books from "@/components/Books"
import Footer from "@/components/Footer"
import Values from "@/components/Values"
import Blog from "@/components/Blog"
import Playlists from "@/components/Playlists"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-mono px-4">
      <div className="z-10 max-w-5xl w-full items-start flex-col justify-center font-mono text-sm lg:flex">
        <AboutMe />
        <Work />
        <Projects />
        <Values />
        <Blog />
        <School />
        <Books />
        <Playlists />
      </div>
      <div className="z-10 w-full">
        <Footer />
      </div>
    </main>
  )
}
