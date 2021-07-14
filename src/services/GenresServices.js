import {AXIOS} from "./axiosConfig";


class GenresServices{
    async getGenres(){
        const {data} = await AXIOS.get('/genre/movie/list')
        return data
    }

}
export const genresServices = new GenresServices();