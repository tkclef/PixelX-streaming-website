import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Heart, Bell, Share2, Calendar, Clock, Trophy, Star, Gift, Play, Eye } from "lucide-react"

interface StreamerProfileProps {
  username: string
}

export function StreamerProfile({ username }: StreamerProfileProps) {
  // Mock data - in real app this would come from API
  const streamer = {
    username: "ProGamer_TTV",
    displayName: "ProGamer",
    avatar: "/placeholder.svg?key=profile-avatar",
    banner: "/placeholder.svg?key=profile-banner",
    bio: "Professional VALORANT player and content creator. Road to Radiant every season! Join the community for tips, tricks, and epic gameplay moments.",
    followers: 245000,
    isLive: true,
    currentGame: "VALORANT",
    streamTitle: "VALORANT Ranked Grind - Road to Radiant",
    viewers: 15420,
    streamDuration: "3h 24m",
    joinedDate: "March 2021",
    totalViews: 12500000,
    achievements: [
      { name: "Radiant Rank", icon: Trophy, color: "text-chart-4" },
      { name: "100K Followers", icon: Users, color: "text-primary" },
      { name: "Partner", icon: Star, color: "text-accent" },
    ],
    schedule: [
      { day: "Monday", time: "6:00 PM - 11:00 PM EST", game: "VALORANT" },
      { day: "Tuesday", time: "6:00 PM - 11:00 PM EST", game: "VALORANT" },
      { day: "Wednesday", time: "6:00 PM - 11:00 PM EST", game: "Variety" },
      { day: "Thursday", time: "6:00 PM - 11:00 PM EST", game: "VALORANT" },
      { day: "Friday", time: "6:00 PM - 12:00 AM EST", game: "VALORANT" },
      { day: "Saturday", time: "2:00 PM - 8:00 PM EST", game: "Variety" },
      { day: "Sunday", time: "Rest Day", game: "-" },
    ],
    recentStreams: [
      {
        id: 1,
        title: "VALORANT Ranked Grind - Road to Radiant",
        game: "VALORANT",
        duration: "4h 32m",
        views: 28400,
        date: "2 days ago",
        thumbnail: "/placeholder.svg?key=recent-1",
      },
      {
        id: 2,
        title: "Reacting to VCT Highlights",
        game: "Just Chatting",
        duration: "2h 15m",
        views: 15200,
        date: "4 days ago",
        thumbnail: "/placeholder.svg?key=recent-2",
      },
      {
        id: 3,
        title: "New Agent First Impressions",
        game: "VALORANT",
        duration: "3h 45m",
        views: 42100,
        date: "1 week ago",
        thumbnail: "/placeholder.svg?key=recent-3",
      },
    ],
  }

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={streamer.banner || "/placeholder.svg"}
          alt={`${streamer.displayName} banner`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {/* Live Indicator */}
        {streamer.isLive && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-destructive text-destructive-foreground animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full mr-1" />
              LIVE
            </Badge>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-8">
          <Avatar className="w-32 h-32 border-4 border-primary shadow-lg">
            <AvatarImage src={streamer.avatar || "/placeholder.svg"} alt={streamer.displayName} />
            <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
              {streamer.displayName.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{streamer.displayName}</h1>
                <p className="text-muted-foreground mb-2">@{streamer.username}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {streamer.followers.toLocaleString()} followers
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {(streamer.totalViews / 1000000).toFixed(1)}M total views
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Joined {streamer.joinedDate}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button className="bg-primary hover:bg-primary/90 neon-glow">
                  <Heart className="w-4 h-4 mr-2" />
                  Follow
                </Button>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Current Stream Info */}
        {streamer.isLive && (
          <Card className="mb-8 bg-card/50 border-primary/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Badge className="bg-destructive text-destructive-foreground">
                    <Play className="w-3 h-3 mr-1" />
                    LIVE NOW
                  </Badge>
                  <Badge variant="outline" className="border-accent text-accent">
                    {streamer.currentGame}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {streamer.viewers.toLocaleString()} viewers
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {streamer.streamDuration}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{streamer.streamTitle}</h3>
              <Button className="bg-primary hover:bg-primary/90">
                <Play className="w-4 h-4 mr-2" />
                Watch Stream
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Main Content */}
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-secondary">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Bio */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>About {streamer.displayName}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">{streamer.bio}</p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Achievements</h4>
                    <div className="flex flex-wrap gap-3">
                      {streamer.achievements.map((achievement, index) => {
                        const IconComponent = achievement.icon
                        return (
                          <div key={index} className="flex items-center gap-2 bg-secondary/50 rounded-lg px-3 py-2">
                            <IconComponent className={`w-4 h-4 ${achievement.color}`} />
                            <span className="text-sm font-medium">{achievement.name}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Channel Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Followers</span>
                    <span className="font-semibold text-primary">{streamer.followers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Views</span>
                    <span className="font-semibold text-accent">{(streamer.totalViews / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Member Since</span>
                    <span className="font-semibold">{streamer.joinedDate}</span>
                  </div>
                  {streamer.isLive && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current Viewers</span>
                      <span className="font-semibold text-destructive">{streamer.viewers.toLocaleString()}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Streaming Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {streamer.schedule.map((day, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-border last:border-b-0"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-medium w-20">{day.day}</span>
                        <span className="text-muted-foreground">{day.time}</span>
                      </div>
                      <Badge
                        variant="outline"
                        className={day.game === "-" ? "text-muted-foreground" : "border-accent text-accent"}
                      >
                        {day.game}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="videos">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Recent Streams</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {streamer.recentStreams.map((stream) => (
                  <Card key={stream.id} className="group cursor-pointer overflow-hidden">
                    <div className="relative">
                      <img
                        src={stream.thumbnail || "/placeholder.svg"}
                        alt={stream.title}
                        className="w-full h-40 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute bottom-2 right-2">
                        <Badge variant="secondary" className="bg-black/70 text-white text-xs">
                          {stream.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {stream.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{stream.views.toLocaleString()} views</span>
                        <span>{stream.date}</span>
                      </div>
                      <Badge variant="outline" className="mt-2 text-xs border-accent/50 text-accent">
                        {stream.game}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="community">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Support the Stream</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Gift className="w-4 h-4 mr-2" />
                    Send Donation
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Subscribe ($4.99/month)
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Be respectful to all community members</li>
                    <li>• No spam or excessive caps</li>
                    <li>• Keep discussions relevant to the stream</li>
                    <li>• Follow platform terms of service</li>
                    <li>• Have fun and enjoy the content!</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
