import React, {useEffect, useState} from "react";
import {FilmList} from "../components";
import {moviesServices} from "../services";
import styles from './Home.module.css'


export const Home = ()=>{
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const fetchMovies = async ()=>{
        try{
            const {results, page,total_page, total_results} = await moviesServices.getMovies();
        setMoviesList(results);
        }catch (e){
            console.error(e);
        }finally {
            setIsLoading(false)
        }

    }

    useEffect(() =>{
        fetchMovies();
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