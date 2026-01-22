import "./globals.css"
import {Inter} from "next/font/google"
import Sidebar from "@/components/sidebar"
import Playerbar from "@/components/playerbar"
import Navbar from "@/components/navbar"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className = "h-screen flex flex-col">
      <Navbar />
        {/* Main App Area*/}
        <div className={`${inter.className} flex flex-1 overflow-hidden`}>
          <Sidebar />
          {/* all songs and suggestions */}
          <main className = "flex-1 p-6 overflow-y-auto">
            {children}
          </main>
        </div>

        {/* song player*/}
        <Playerbar />

      </body>
    </html>
  )
}

