import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { gameService } from "../api/gameService"
import { Button } from "@mui/material"

function GamesPage()  {
  const navigate = useNavigate();
  const [games, setGames] = useState([])

  useEffect(() => {
    loadGames()
  }, [])

  const loadGames = async () => {
    const data = await gameService().getGames()
    setGames(data)
  }
  const handleDelete = async (id: number) => {
  await gameService().deleteGame(id)
  loadGames()
}

const handleDetails = (id : number) => {
  navigate("/games/" + id)
}

const handleCreate = () => {
  navigate("/create")
}

const handleEdit = (id : number) => {
  navigate("/edit" + id)
}

  return (
    <div className="container">
      <h1>Games</h1>

      {games.map((game: any) => (
        <div
          key={game.id}
          className="game-card"
          
        >
          <h3>{game.title}</h3>

          <p>
            Release: {game.release_date}
          </p>

          <Link to={`/games/${game.id}`}>
            <Button sx={{margin: "10px"}} variant="contained" onClick={() => handleDetails(game.id)}>Details</Button>
          </Link>

          <Link to="/create">
           <Button sx={{margin: "10px"}} variant="contained" onClick={() => handleCreate()}>Create Game</Button>
          </Link>

          
    
          <Button sx={{margin: "10px"}} variant="contained" onClick={() => handleDelete(game.id)}>Delete</Button>
    
          <Link to={`/edit/${game.id}`}>
            <Button sx={{margin: "10px"}} variant="contained" onClick={() => handleEdit(game.id)}>Edit</Button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default GamesPage