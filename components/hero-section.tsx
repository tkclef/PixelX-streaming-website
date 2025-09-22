import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Eye } from "lucide-react"

export function HeroSection() {
  const featuredStreams = [
    {
      id: 1,
      title: "VALORANT Champions Tour",
      streamer: "ProGamer_TTV",
      game: "VALORANT",
      viewers: 45200,
      thumbnail: "/valorant-esports-tournament-stream.jpg",
    },
    {
      id: 2,
      title: "Speedrun World Record Attempt",
      streamer: "SpeedDemon",
      game: "Elden Ring",
      viewers: 28900,
      thumbnail: "/elden-ring-speedrun-gameplay.jpg",
    },
    {
      id: 3,
      title: "Ranked Climb to Challenger",
      streamer: "LoL_Master",
      game: "League of Legends",
      viewers: 15600,
      thumbnail: "/league-of-legends-ranked-gameplay.jpg",
    },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Background with neon grid effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(101,67,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(101,67,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-primary neon-text">Live</span> <span className="text-foreground">Gaming</span>{" "}
            <span className="text-accent neon-text">Streams</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Watch the best gamers compete, learn new strategies, and join the ultimate gaming community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 neon-glow">
              <Play className="w-5 h-5 mr-2" />
              Watch Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              Start Streaming
            </Button>
          </div>
        </div>

        {/* Featured Streams */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Featured Streams</h2>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              <Eye className="w-3 h-3 mr-1" />
              89.7K watching
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStreams.map((stream) => (
              <div key={stream.id} className="group cursor-pointer">
                <div className="gradient-border">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={stream.thumbnail || "/placeholder.svg"}
                      alt={stream.title}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-destructive/90 text-destructive-foreground">LIVE</Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        <Users className="w-3 h-3 mr-1" />
                        {stream.viewers.toLocaleString()}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-semibold text-white mb-1 text-sm">{stream.title}</h3>
                      <p className="text-gray-300 text-xs">{stream.streamer}</p>
                      <Badge variant="outline" className="mt-1 text-xs border-accent/50 text-accent">
                        {stream.game}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary neon-text">2.4M+</div>
            <div className="text-muted-foreground">Active Streamers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent neon-text">89.7K</div>
            <div className="text-muted-foreground">Live Now</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary neon-text">15M+</div>
            <div className="text-muted-foreground">Monthly Viewers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent neon-text">500+</div>
            <div className="text-muted-foreground">Games</div>
          </div>
        </div>
      </div>
    </section>
  )
}
