import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface Playlist {
  id: string
  title: string
  description: string
  imageUrl: string
  spotifyUrl: string
}


const playlists: Playlist[] = [
    {
        id: "1",
        title: "Cumbia Vieja God",
        description: "Old cumbia from Uruguay/Argentina",
        imageUrl: "/images/cumbia_vieja_god.png",
        spotifyUrl: "https://open.spotify.com/playlist/6uRo71FnrdJHDlwqisRjbD?si=9bbb2b5c82f04452",
    },
    {
        id: "2",
        title: "Reggaeton God",
        description: "Title says it all",
        imageUrl: "/images/reggaeton_god.png",
        spotifyUrl: "https://open.spotify.com/playlist/6SBtMgEFHrhkZkGeIW7NXw?si=7c643c38f12f40ff",
    },
]

export default function Playlists() {
  return (
    <section className="my-12" id="projects">
      <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">My Playlists</h2>
      <p className="text-lg mb-4">If you made it here... let's just say you weren't supposed to. But since you did, here's some bangers 😎</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist) => (
            <Card key={playlist.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image 
                    src={playlist.imageUrl}
                    alt={playlist.title}
                    width={300}
                    height={300}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl mb-2">{playlist.title}</CardTitle>
                <CardDescription>{playlist.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full">
                  <a href={playlist.spotifyUrl} target="_blank" rel="noopener noreferrer">
                    Open in Spotify
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </section>
  )
}