export type Song = {
    id:string,
    song:string,
    artist:string,
    duration: string,
    cover:string
}
export type Playlist = {
    id:string,
    playlist_name:string,
    cover:string,
    songs:Song[]
}

export const PLAYLISTS: Playlist[] = [
  {
    id: "chill",
    playlist_name: "Chill Vibes",
    cover: "/assets/playlists/chill.jpg",
    songs: [
      {
        id: "s1",
        song: "Midnight Drive",
        artist: "Neon Lights",
        duration: "3:24",
        cover: "/assets/songs/chahiya.jpg",
      },
      {
        id: "s2",
        song: "Late Night Code",
        artist: "Syntax Error",
        duration: "4:01",
        cover: "/assets/songs/chahiya.jpg",
      },
      {
        id: "s3",
        song: "Chill Loop",
        artist: "LoFi Beats",
        duration: "2:58",
        cover: "/assets/songs/chahiya.jpg",
      },
    ],
  },
  {
    id: "workout",
    playlist_name: "Workout Mix",
    cover: "/assets/playlists/workout.jpg",
    songs: [
      {
        id: "s4",
        song: "Run Faster",
        artist: "Pulse Mode",
        duration: "3:10",
        cover: "/assets/songs/chahiya.jpg",
      },
      {
        id: "s5",
        song: "Energy Boost",
        artist: "Beat Lab",
        duration: "3:45",
        cover: "/assets/songs/chahiya.jpg",
      },
    ],
  },
]