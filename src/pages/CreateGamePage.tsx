import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { gameService } from "../api/gameService"

const CreateGamePage = () => {
  const [title, setTitle] = useState("")
  const [releaseDate, setReleaseDate] = useState("")

  const navigate = useNavigate()

  const handleCreate = async () => {
    await gameService().createGame({
      title,
      release_date: releaseDate,
    })

    navigate("/games")
  }

  return (
    <div>
      <h1>Create Game</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        placeholder="Release Date"
        value={releaseDate}
        onChange={(e) =>
          setReleaseDate(e.target.value)
        }
      />

      <button onClick={handleCreate}>
        Create
      </button>
    </div>
  )
}

export default CreateGamePage