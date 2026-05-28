import axios from "axios"

const API_URL = "http://localhost:3030/"

export const gameApi = axios.create({
  baseURL: API_URL,
  timeout: 1000
})

gameApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
