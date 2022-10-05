import React from "react";
import classes from './Search.module.css'

class Search extends React.Component {

    state = {
        search : ''
    }

    handleKey = (event) => {
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search)
        } else if (event.key === null){
            alert('Vvedite text')
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <div className="input-field">
                            <input
                            className="validate" 
                                placeholder='search'
                                type="search"
                                value= {this.state.search}
                                onChange= {(e) => {this.setState({search: e.target.value})}}
                                onKeyDown = {this.handleKey}
                                />
                                <div className= {classes.searchBtn}>
                                <button className = 'btn ' onClick={() => {this.props.searchMovies(this.state.search)}}>Search</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search