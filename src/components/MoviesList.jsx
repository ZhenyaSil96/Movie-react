import React from "react";
import { Movie } from './Movie'
import classes from './MoviesList.module.css'

const MoviesList = props => {
    const { movies } = props
    return (
        <div className={classes.movies}>
            {
                movies.map(movie => {
                    return <Movie key={movie.imdbID} {...movie} />
                })
            }
        </div>
    )
}

export { MoviesList }