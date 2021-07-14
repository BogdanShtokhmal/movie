import React from "react";
import {FilmItem} from "../film-item";
import styles from './FilmList.module.css';

export const FilmList = ({items})=>{
console.log(items, 'from filmlist');
    return (
        <div className={styles.list}>
            {items.map(item =>(
                <div className={styles.item}>
                    <FilmItem key={item.id} {...item}/>
                </div>
            ))}
        </div>
    )
}