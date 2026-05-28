import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import GamesPage from "./pages/GamesPage"
import GameDetailPage from "./pages/GameDetailPage"
import EditGamePage from "./pages/EditGamePage"
import ProtectedRoute from "./routes/ProtectedRoute"
import CreateGamePage from "./pages/CreateGamePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/games"
          element={
            <ProtectedRoute>
              <GamesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/games/:id"
          element={
            <ProtectedRoute>
              <GameDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
  path="/create"
  element={
    <ProtectedRoute>
      <CreateGamePage />
    </ProtectedRoute>
  }
/>

        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <EditGamePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App