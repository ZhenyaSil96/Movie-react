import React from "react";
import classes from './Search.module.css'

class Search extends React.Component {

    state = {
        search: '',
        type: 'all',

    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleFind = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        })
        
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
                                value={this.state.search}
                                onChange={(e) => { this.setState({ search: e.target.value }) }}
                                onKeyDown={this.handleKey}
                            />
                            <div className={classes.searchBtn}>
                                <button className='btn ' onClick={() => { this.props.searchMovies(this.state.search, this.state.type) }}>Search</button>
                            </div>
                            <div>
                                <label>
                                    <input className="with-gap" name="type" type="radio" data-type='all' onChange={this.handleFind} checked={this.state.type === 'all'}/>
                                    <span>All</span>
                                </label>
                                <label>
                                    <input className="with-gap" name="type" type="radio" data-type='movie' onChange={this.handleFind} checked={this.state.type === 'movie'}/>
                                    <span>Movies only</span>
                                </label>
                                <label>
                                    <input className="with-gap" name="type" type="radio" data-type='series' onChange={this.handleFind} checked={this.state.type === 'series'}/>
                                    <span>Serials only</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search