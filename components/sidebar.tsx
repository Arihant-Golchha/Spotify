"use client"

import { useState } from "react"

const PLAYLISTS = [
  "Liked Songs",
  "Chill Vibes",
  "Workout Mix",
  "Late Night Coding",
]

export default function Sidebar() {
  const [activePlaylist, setActivePlaylist] = useState<string | null>(null)

  return (
    <aside className="w-60 border-r p-4">
      <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-4">
        Playlists
      </h2>

      <ul className="space-y-2">
        {PLAYLISTS.map((name) => {
          const isActive = activePlaylist === name

          return (
            <li
              key={name}
              onClick={() => setActivePlaylist(name)}
              className={`group flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition
                ${
                  isActive
                    ? "bg-neutral-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-neutral-800"
                }
              `}
            >
              {/* Icon */}
              <span
                className={`transition-transform transition-opacity duration-200
                  ${
                    isActive
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
                  }
                `}
              >
                ▶
              </span>

              {/* Name */}
              <span className="truncate">{name}</span>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
