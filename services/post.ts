import api from "./api"

const getPosts = async () => api.get("/post")

export {
    getPosts
}