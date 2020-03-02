import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const deleteMovie = (id) => api.delete(`/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    deleteMovie
}

export default apis;