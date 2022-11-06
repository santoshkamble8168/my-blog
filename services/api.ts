import axios from "axios"

//const token: string = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token") || "") : ""

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        //Authorization: `Bearer ${token}`
    }
})

export default api