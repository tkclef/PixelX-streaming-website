"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Eye, Filter, Grid, List } from "lucide-react"
import { useState } from "react"

export function LiveStreamFeed() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const streams = [
    {
      id: 1,
      title: "VALORANT Ranked Grind - Road to Radiant",
      streamer: "ProGamer_TTV",
      game: "VALORANT",
      viewers: 15420,
      category: "FPS",
      thumbnail: "/valorant-gameplay-stream.jpg",
      avatar: "/gamer-avatar.png",
      isLive: true,
      duration: "3h 24m",
      tags: ["Competitive", "Educational"],
    },
    {
      id: 2,
      title: "World First Attempt - New Raid Boss",
      streamer: "MMO_Legend",
      game: "Final Fantasy XIV",
      viewers: 28900,
      category: "RPG",
      thumbnail: "/final-fantasy-raid-boss-fight.jpg",
      avatar: "/mmo-player-avatar.jpg",
      isLive: true,
      duration: "6h 12m",
      tags: ["World First", "Raid"],
    },
    {
      id: 3,
      title: "Speedrun Practice - Sub 2 Hour Attempt",
      streamer: "SpeedDemon",
      game: "Elden Ring",
      viewers: 8750,
      category: "RPG",
      thumbnail: "/elden-ring-speedrun-gameplay.jpg",
      avatar: "/speedrunner-avatar.png",
      isLive: true,
      duration: "1h 45m",
      tags: ["Speedrun", "Any%"],
    },
    {
      id: 4,
      title: "Championship Finals - Team vs Team",
      streamer: "ESports_Official",
      game: "League of Legends",
      viewers: 125000,
      category: "ESPORTS",
      thumbnail: "/league-of-legends-esports.png",
      avatar: "/esports-logo.png",
      isLive: true,
      duration: "2h 30m",
      tags: ["Tournament", "Finals"],
    },
    {
      id: 5,
      title: "Building the Ultimate Base",
      streamer: "CraftMaster",
      game: "Minecraft",
      viewers: 5200,
      category: "SANDBOX",
      thumbnail: "/minecraft-creative-building.png",
      avatar: "/minecraft-player-avatar.png",
      isLive: true,
      duration: "4h 15m",
      tags: ["Creative", "Building"],
    },
    {
      id: 6,
      title: "Grandmaster Chess Analysis",
      streamer: "ChessGuru",
      game: "Chess",
      viewers: 3400,
      category: "STRATEGY",
      thumbnail: "/chess-board-analysis.jpg",
      avatar: "/chess-player-avatar.png",
      isLive: true,
      duration: "2h 05m",
      tags: ["Educational", "Analysis"],
    },
  ]

  const filters = [
    { id: "all", label: "All Streams", count: streams.length },
    { id: "FPS", label: "FPS", count: streams.filter((s) => s.category === "FPS").length },
    { id: "RPG", label: "RPG", count: streams.filter((s) => s.category === "RPG").length },
    { id: "ESPORTS", label: "Esports", count: streams.filter((s) => s.category === "ESPORTS").length },
    { id: "STRATEGY", label: "Strategy", count: streams.filter((s) => s.category === "STRATEGY").length },
  ]

  const filteredStreams =
    selectedFilter === "all" ? streams : streams.filter((stream) => stream.category === selectedFilter)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-primary neon-text">Live</span> <span className="text-foreground">Streams</span>
            </h2>
            <p className="text-muted-foreground">
              {filteredStreams.reduce((total, stream) => total + stream.viewers, 0).toLocaleString()} viewers watching
              now
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-secondary rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="px-3"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="px-3"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(filter.id)}
              className={selectedFilter === filter.id ? "bg-primary text-primary-foreground" : ""}
            >
              {filter.label}
              <Badge variant="secondary" className="ml-2 text-xs">
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Stream Grid */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
          }`}
        >
          {filteredStreams.map((stream) => (
            <Card
              key={stream.id}
              className="group cursor-pointer overflow-hidden bg-card/50 border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={stream.thumbnail || "/placeholder.svg"}
                  alt={stream.title}
                  className={`w-full object-cover transition-transform group-hover:scale-105 ${
                    viewMode === "grid" ? "h-48" : "h-32"
                  }`}
                />

                {/* Live Badge */}
                <div className="absolute top-3 left-3">
                  <Badge className="bg-destructive text-destructive-foreground animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full mr-1" />
                    LIVE
                  </Badge>
                </div>

                {/* Viewer Count */}
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-black/70 text-white">
                    <Eye className="w-3 h-3 mr-1" />
                    {stream.viewers.toLocaleString()}
                  </Badge>
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3">
                  <Badge variant="secondary" className="bg-black/70 text-white text-xs">
                    {stream.duration}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <img
                    src={stream.avatar || "/placeholder.svg"}
                    alt={stream.streamer}
                    className="w-10 h-10 rounded-full border-2 border-primary/30"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                      {stream.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-2">{stream.streamer}</p>

                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs border-accent/50 text-accent">
                        {stream.game}
                      </Badge>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {(stream.viewers / 1000).toFixed(1)}K
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-2">
                      {stream.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Load More Streams
          </Button>
        </div>
      </div>
    </section>
  )
}
