import { PLAYLISTS } from "@/src/data/music"
import Image from "next/image"

export default async function PlaylistPage({params }: {
  params: Promise<{ id: string }>
}) {
    const {id} = await params
    const Playlist= PLAYLISTS.find((p) => p.id === id)
if(!Playlist){
  return (
    <main>
        Playlist not found
    </main>
  )
}
return (
    <main>
       <div   className="grid grid-cols-[40px_1fr_1fr_60px] items-center px-2 py-2">
        <span>#</span>
        <span>Title</span>
        <span>Artist</span>
        </div> 
        {Playlist.songs.map((song, index)=>(
            <div
            key = {song.id}
            className="grid grid-cols-[40px_1fr_1fr_60px] items-center px-2 py-2">
                <span>{index+1}</span>
                <div><span>{song.song}</span></div>
                <span>{song.artist }</span>
            </div>
        ))}
    </main>
)
}
