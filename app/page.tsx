import TopNavBar from "@/components/ui/TopNavBar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <TopNavBar />
      </div>
    </main>
  )
}
