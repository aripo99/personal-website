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
        title: "Cumbia Vieja",
        description: "Old cumbia from Uruguay/Argentina",
        imageUrl: "/images/cumbia_vieja_god.png",
        spotifyUrl: "https://open.spotify.com/playlist/6uRo71FnrdJHDlwqisRjbD?si=9bbb2b5c82f04452",
    },
    {
        id: "2",
        title: "Reggaeton",
        description: "Title says it all",
        imageUrl: "/images/reggaeton_god.png",
        spotifyUrl: "https://open.spotify.com/playlist/6SBtMgEFHrhkZkGeIW7NXw?si=7c643c38f12f40ff",
    },
    {
        id: "3",
        title: "Teketeke",
        description: "All sorts of techno music",
        imageUrl: "/images/teketeke_god.png",
        spotifyUrl: "https://open.spotify.com/playlist/5CCbxMjJRRD5w9S1wKBl8J?si=6a170aa428ea49a9",
    },
]

export default function Playlists() {
  return (
    <section className="my-12" id="playlists">
      <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">My Playlists</h2>
      <p className="text-lg mb-4">If you made it here... let&apos;s just say you weren&apos;t supposed to. But since you did, here&apos;s some bangers 😎</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist) => (
            <Card 
                key={playlist.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 w-[330px] mx-auto"                
            >
              <CardHeader className="p-4">
                <Image 
                    src={playlist.imageUrl}
                    alt={playlist.title}
                    width={330}
                    height={330}
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