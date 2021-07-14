import React, {useEffect, useState} from "react";
import {FilmList} from "../components";
import {genresServices, moviesServices} from "../services";
import styles from './Home.module.css'


export const Home = ()=>{
    const [moviesList, setMoviesList] = useState([]);
    const [genresList, setGenresList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const fetchMovies = async ()=>{
        try{
            const {results, page,total_page, total_results} = await moviesServices.getMovies();
        return results;
        }catch (e){
            console.error(e);
        }

    }

    const fetchGenres = async () =>{
        try{
            const {genres} = await genresServices.getGenres();
           return genres
        }catch (e){
            console.error(e);
        }
    }

    const fetchMoviesData = async () =>{
        const requests = [fetchMovies(), fetchGenres()];
        try{
            setIsLoading(true)
            const [movies, genres] = await Promise.all(requests)
            const mergedWithgenresMovies = movies.map((movie) => {
                const {genre_ids} = movie;
                const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId))
            return{
                    ...movie,
                movieGenresList,

            }
            })
            setMoviesList(mergedWithgenresMovies);
        }catch (e){
            console.error(e);
        }finally {
            setIsLoading(false)
        }
    }

    useEffect(() =>{
        fetchMoviesData()
    }, [])

    const renderLoadingIndicator = () =>{
        <div className={styles.loading}>Loading....</div>
    }
    return(
        <div>
            {isLoading || isLoading===null ? renderLoadingIndicator(): <FilmList items={moviesList}/>}

        </div>
    )
}