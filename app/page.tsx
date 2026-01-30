import Image from "next/image"
import Link from "next/link"
import { PLAYLISTS } from "@/src/data/music"
export default function Home() {

  return (
    <main className="p-6">
      <div className="mt-6">
        <h2 className="text-3xl font-semibold mb-4">
          Popular Playlist
        </h2>
        <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4">

          {
            PLAYLISTS.map((playlists) => (
              <Link 
              className="p-2 rounded-md items-center justify-between text-center"
              key={playlists.id}
              href={`/playlist/${playlists.id}`}
              >
                <div className="relative w-full aspect-square mb-5 ">
                <Image 
                src={playlists.cover}
                alt={playlists.playlist_name}
                fill 
                className="object-cover rounded-md"
                /></div>
                <div className="text-sm font-semibold truncate p-1 ">{playlists.playlist_name}</div>
                
              </Link>
            ))
          }
        </div>
        </div>
    </main>
  );
}
