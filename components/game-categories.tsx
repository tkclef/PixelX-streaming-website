import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Zap, Sword, Trophy, Target, Puzzle } from "lucide-react"

export function GameCategories() {
  const categories = [
    {
      id: 1,
      name: "First Person Shooter",
      shortName: "FPS",
      icon: Target,
      streamCount: 15420,
      viewerCount: 2400000,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/30",
      games: ["VALORANT", "CS2", "Apex Legends", "Call of Duty"],
    },
    {
      id: 2,
      name: "Multiplayer Online Battle Arena",
      shortName: "MOBA",
      icon: Sword,
      streamCount: 8900,
      viewerCount: 1800000,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
      games: ["League of Legends", "Dota 2", "Heroes of the Storm"],
    },
    {
      id: 3,
      name: "Battle Royale",
      shortName: "BR",
      icon: Trophy,
      streamCount: 12300,
      viewerCount: 3200000,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
      games: ["Fortnite", "PUBG", "Apex Legends", "Warzone"],
    },
    {
      id: 4,
      name: "Role Playing Game",
      shortName: "RPG",
      icon: Gamepad2,
      streamCount: 6700,
      viewerCount: 950000,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
      borderColor: "border-chart-3/30",
      games: ["Elden Ring", "Final Fantasy XIV", "World of Warcraft"],
    },
    {
      id: 5,
      name: "Esports",
      shortName: "ESPORTS",
      icon: Zap,
      streamCount: 4200,
      viewerCount: 5600000,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
      borderColor: "border-chart-4/30",
      games: ["Tournament Streams", "Pro Matches", "Championships"],
    },
    {
      id: 6,
      name: "Puzzle & Strategy",
      shortName: "PUZZLE",
      icon: Puzzle,
      streamCount: 2800,
      viewerCount: 420000,
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
      borderColor: "border-chart-5/30",
      games: ["Chess", "Tetris", "Civilization VI", "Among Us"],
    },
  ]

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">Browse by</span> <span className="text-primary neon-text">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover streams across all your favorite gaming genres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.id}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${category.bgColor} ${category.borderColor} border-2 hover:shadow-lg hover:shadow-current/20`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${category.bgColor} ${category.borderColor} border`}>
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <Badge variant="secondary" className="bg-background/50">
                      {category.shortName}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-current transition-colors">
                    {category.name}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Live Streams</span>
                      <span className={`font-semibold ${category.color}`}>{category.streamCount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Viewers</span>
                      <span className={`font-semibold ${category.color}`}>
                        {(category.viewerCount / 1000000).toFixed(1)}M
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground font-medium">Popular Games:</p>
                    <div className="flex flex-wrap gap-1">
                      {category.games.slice(0, 3).map((game, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className={`text-xs ${category.borderColor} ${category.color} hover:${category.bgColor}`}
                        >
                          {game}
                        </Badge>
                      ))}
                      {category.games.length > 3 && (
                        <Badge variant="outline" className="text-xs text-muted-foreground">
                          +{category.games.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary neon-text">50K+</div>
              <div className="text-sm text-muted-foreground">Active Streams</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent neon-text">500+</div>
              <div className="text-sm text-muted-foreground">Game Titles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary neon-text">24/7</div>
              <div className="text-sm text-muted-foreground">Live Content</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent neon-text">Global</div>
              <div className="text-sm text-muted-foreground">Community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
