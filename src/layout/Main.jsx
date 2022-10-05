import React from "react";
import classes from './Main.module.css';
import { MoviesList } from '../components/MoviesList'
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {

    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
             //fetch('http://www.omdbapi.com/?apikey=1344b79')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}`: ''}`)
        // fetch('http://www.omdbapi.com/?i=tt3896198&apikey=1344b79')
        .then(response => response.json())
        .then(data => this.setState({ movies: data.Search , loading: false}))
    }

    render() {

        const { movies, loading } = this.state

        return (
            <main className={classes.content}>
                <Search searchMovies={this.searchMovies}/>
                {loading ? (
                    <Preloader />
                    ) : (<MoviesList movies={movies} />)
                }
            </main>
        )
    }
}
export default Main