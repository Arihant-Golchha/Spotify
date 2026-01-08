export default function playerbar(){
    return(
     <footer className="px-6 border-t bg-neutral-900 h-20 flex items-center justify-between">

        {/* Track Details*/}
        <div className ="w-1/3">
            <div className="text-l font-medium">Song Title</div>
            <div className="text-sm text-grey-400">Artist name</div>

        </div>
        {/*controls*/}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-4">
        <div className="flex gap-4 text-xl">
                <span className="cursor-pointer">⏮</span>
                <span className="cursor-pointer">▶</span>
                <span className="cursor-pointer">⏭</span>
        </div>
        </div>
        {/*Right: Volume*/}
        <div className="w-1/3 flex justify-end text-xl text-grey-400">
        volume
        </div>
     </footer>
    )
}