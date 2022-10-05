import React from "react";
import classes from './Main.module.css';
import { MoviesList } from '../components/MoviesList'
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends React.Component {

    state = {
        movies: [],

    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=78584b3c&s=matrix')
             //fetch('http://www.omdbapi.com/?apikey=1344b79')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }

    searchMovies = (str, type = 'all') => {
        fetch(`http://www.omdbapi.com/?apikey=78584b3c&s=${str}${type !== 'all' ? `&type=${type}`: ''}`)
        // fetch('http://www.omdbapi.com/?i=tt3896198&apikey=1344b79')
        .then(response => response.json())
        .then(data => this.setState({ movies: data.Search }))
    }

    render() {

        const { movies } = this.state

        return (
            <main className={classes.content}>
                <Search searchMovies={this.searchMovies}/>
                {
                    movies.length ? (
                        <MoviesList movies={this.state.movies} />
                    ) : <Preloader />
                }
            </main>
        )
    }
}
export default Main