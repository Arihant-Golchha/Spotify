"use client"
import { useState } from "react"
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
export default function Playerbar(){
    const [volume, setVolume ] = useState(50)
    const [isPlaying, setIsPlaying] = useState(false)
    return(
     <footer className="relative px-6 border-t bg-neutral-900 h-20 flex items-center justify-between">

        {/* Track Details*/}
        <div className ="w-1/3">
            <div className="text-l font-medium">Song Title</div>
            <div className="text-sm text-gray-400">Artist name</div>

        </div>
        {/*controls*/}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-4">
        <div className="flex gap-4 text-xl">
                <button className="cursor-pointer"><SkipBack /></button>
                <button onClick={() => setIsPlaying((prev) => !prev)} className="cursor-pointer hover:text-white transition">{isPlaying ? <Pause/>:<Play />}</button>
                <button className="cursor-pointer"><SkipForward /></button>
        </div>
        </div>
        {/*Right: Volume*/}
        <div className="w-1/3 flex item-center justify-end gap-2 text-xl text-gray-400">
        <Volume2 />
        <div className="flex items-center h-5">
        <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-24 h-1 accent-white cursor-pointer"
            />
            </div> 
        </div>
     </footer>
    )
}