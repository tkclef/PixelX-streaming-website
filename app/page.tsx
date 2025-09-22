import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GameCategories } from "@/components/game-categories"
import { LiveStreamFeed } from "@/components/live-stream-feed"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <GameCategories />
        <LiveStreamFeed />
      </main>
    </div>
  )
}
