import Image from "next/image";
export default function Home() {
  const Songs = [
    {
      id:"1",
      song:"CHAHIYA CHAHIYA",
      artist:"Sukhvindar singh",
      duration:"3:14",
      cover:"/image/songs/song1.png"
    },
    {
      id:"2",
      song:"GORI GORI",
      artist:"Sonu Nigam",
      duration:"3:20",
      cover:"/image/songs/song2.png"
    },
    {
      id:"3",
      song:"AGAR MAI KAHAU",
      artist:"Shaan",
      duration:"3:50",
      cover:"/image/songs/song3.png"
    }
  ]
  return (
    <main className="p-6">
      <div className="mt-6">
        <h2 className="text-3xl font-semibold mb-4">
          Popular Songs
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 bg-neutral-900 p-4">

          {
            Songs.map((song) => (
              <div 
              className="bg-neutral-700 p-2 rounded-md items-center justify-between text-center"
              key={song.id}
              >
                <div className="relative w-full aspect-square mb-5 ">
                <Image 
                src={song.cover}
                alt={song.song}
                fill 
                className="object-cover rounded-md"
                /></div>
                <div className="text-sm font-semibold truncate p-1">{song.song}</div>
                <div className="text-sm font-semibold truncate">{song.artist}</div>
              </div>
            ))
          }
        </div>
        </div>
    </main>
  );
}
