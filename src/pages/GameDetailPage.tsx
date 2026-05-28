import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gameService } from "../api/gameService"

const GameDetailPage = () => {
  const { id } = useParams()

  const [game, setGame] = useState<any>(null)

  useEffect(() => {
    loadGame()
  }, [])

  const loadGame = async () => {
    if (id) {
      const data = await gameService().getGame(id)
      setGame(data)
    }
  }

  if (!game) return <p>Lädt...</p>

  return (
    <div>
      <h1>{game.title}</h1>

      <img
        src={game.thumbnail}
        width="300"
      />

      <p>{game.short_description}</p>
      <p>{game.genre}</p>
      <p>{game.release_date}</p>
    </div>
  )
}

export default GameDetailPage