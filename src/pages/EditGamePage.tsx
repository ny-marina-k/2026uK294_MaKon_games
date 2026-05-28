import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { gameService } from "../api/gameService"

const EditGamePage = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [releaseDate, setReleaseDate] = useState("")

  useEffect(() => {
    loadGame()
  }, [])

  const loadGame = async () => {
    if (id) {
      const game = await gameService().getGame(id)

      setTitle(game.title)
      setReleaseDate(game.release_date)
    }
  }

  const handleUpdate = async () => {
    if (!id) return

    await gameService().updateGame(id, {
      title,
      release_date: releaseDate,
    })

    navigate("/games")
  }

  return (
    <div>
      <h1>Edit Game</h1>

      <input
        type="text"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        type="text"
        value={releaseDate}
        onChange={(e) =>
          setReleaseDate(e.target.value)
        }
      />

      <button onClick={handleUpdate}>
        Save
      </button>
    </div>
  )
}

export default EditGamePage