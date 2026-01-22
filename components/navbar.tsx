import {ArrowRight} from 'lucide-react';
import {ArrowLeft} from 'lucide-react';
import {Search} from 'lucide-react';
export default function navbar(){
    return (
        <header className="p-4 h-16 border-b justify-between flex items-centre">
            <div className="flex items-centre gap-2">
            <ArrowLeft />
            <ArrowRight />
            </div>

            {/*Search bar*/}
            <div className="flex-1 flex justify-center"><Search />
                <input type="text" placeholder="search songs, artists, playlists" className="w-full max-w-md bg-neutral-900 text-sm text-white px-2 py-2 rounded-full outline-none border border-neutral-800 focus:border-white transition" />
            </div>

            {/*user and misc*/}
            <div className="">
                <button className="w-10 h-10 rounded-full text-xl bg-neutral-800 justify-between">U</button>
            </div>
        </header>
    )
}