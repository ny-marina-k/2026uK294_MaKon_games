import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { gameService, type loginProp } from "../api/gameService"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const login : loginProp = {
        email: email,
        password: password
      }
      const response = await gameService().login(login)
      

      localStorage.setItem("token", response);

      navigate("/games")
    } catch (error) {
      alert("Login fehlgeschlagen")
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Passwort"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage