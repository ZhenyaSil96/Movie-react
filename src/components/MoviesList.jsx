import React from "react";
import { Movie } from './Movie'
import classes from './MoviesList.module.css'

const MoviesList = props => {
    const { movies  = []} = props
    return (
        <div className={classes.movies}>
            {movies.length ? 
                movies.map(movie => {
                    return <Movie key={movie.imdbID} {...movie} />
                }) :  <h4>Nothing found</h4>
            }
        </div>
    )
}

export { MoviesList }