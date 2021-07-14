import React from "react";
import styles from './FilmItem.module.css'
export const FilmItem = (props)=>{
    // adult: false
    // backdrop_path: "/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg"
    // genre_ids: (3) [28, 12, 53]
    // id: 497698
    // original_language: "en"
    // original_title: "Black Widow"
    // overview: "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger."
    // popularity: 6993.47
    // poster_path: "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg"
    // release_date: "2021-07-07"
    // title: "Black Widow"
    // video: false
    // vote_average: 8.2
    // vote_count: 2031

    const {original_title, overview, release_date, vote_average, vote_count, poster_path, movieGenresList } = props;

    return (
        <div className={styles.filmItem}>
           <div>
               <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title} poster`}/>
           </div>
            <div>
                <h2>{original_title}</h2>
                <h3>{movieGenresList.map(({name, id})=><span key={id}>{name}' '</span>)}</h3>
                <span>Reating:{vote_average} (total vote:{vote_count})</span>
                <p>{overview}</p>
                <span>Release date:{release_date}</span>
            </div>
        </div>
    )
}