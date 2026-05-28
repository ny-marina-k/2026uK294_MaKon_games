import type { AxiosInstance } from "axios"
import { gameApi } from "./Api"

export interface loginProp {
  email: string;
  password: string;
}

export const gameService = (api: AxiosInstance = gameApi) => ({
  getGame: async (id: string) => {
  const response = await api.get(`games/` + id)
  return response["data"]
},
getGames: async () => {
  const response = await api.get("games/")
  return response.data
},

createGame: async (game: any) => {
  const response = await api.post("games/", game)
  return response.data
},
updateGame: async (
  id: string,
  game: any
) => {
  const response = await api.put(`games/${id}`, game)
  return response.data
},
deleteGame: async (id: number) => {
  const response = await api.delete(`games/${id}`)
  return response.data
},
login: async (prop: loginProp) => {
   const response = await api.post("login", prop)
  return response["data"].accessToken;
}

})