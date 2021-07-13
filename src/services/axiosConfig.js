import axios from "axios";


export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTRlZTBjYjg1ZDQ5NTc3NzNmNTQ0YzczMjZiNjE1NyIsInN1YiI6IjYwZWM5NGRmMTk0MTg2MDA1ZGU1YjgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uUH7EizM7dXox0H4ZU81nPzRZ7leqEPxT00VSDO_iSI'
    }
})