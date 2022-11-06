import api from "./api"

const getCategories = async () => api.get("/category")

export {
    getCategories
}