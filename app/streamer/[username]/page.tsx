import { Header } from "@/components/header"
import { StreamerProfile } from "@/components/streamer-profile"

interface StreamerPageProps {
  params: {
    username: string
  }
}

export default function StreamerPage({ params }: StreamerPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <StreamerProfile username={params.username} />
      </main>
    </div>
  )
}
