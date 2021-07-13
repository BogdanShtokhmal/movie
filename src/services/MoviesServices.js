import {AXIOS} from "./axiosConfig";


class MoviesServices{
    async getMovies(){
        const {data} = await AXIOS.get('/discover/movie')
        return data
            }
    async getMovieDetails(movieId){
        const {data} = await AXIOS.get(`/movie/${movieId}`)
        return data
    }


}
export const moviesServices = new MoviesServices();