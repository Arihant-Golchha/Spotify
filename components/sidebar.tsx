const Playlists = [
    "Liked songs",
    "Chill Vibes",
    "Workout mix",
    "Late Night Coding",
]
export default function sidebar() {
    
    return (
    <aside className = "w-60 border-r p-4">
        <h2 className = "text-xs uppercase tracking-wider font-semibold text-grey-500 mb-4">
            Playlists
        </h2>

        <ul className= "space-y-2">
            {Playlists.map((name) => (
                <li 
                key = {name}
                className = "group flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-gray-400 hover:text-white hover:bg-neutral-800 transition">
                    {/*icon*/}
                    <span
              className="opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
                         transition-transform transition-opacity duration-200"
            >
                ▶
            </span>
            {/*name*/}
            <span className="truncate">
                {name}
            </span>
                </li>
            ))}
        </ul>
    </aside>
    )
}