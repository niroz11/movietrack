import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import './Popularmovies.css';


export class Popularmovies extends Component {
    constructor(){
        super()
    }
    
    render(){
        const movies = this.props.popularMovies.map((eachMovie) => {
            return <Card key={eachMovie.id} movies={eachMovie}/>
        })
        return(
            <div className="popularMovies">{movies}</div>   
        )
    }
}

export const mapStateToProps = (state) => ({
    nowPlaying: state.nowPlayingMovies,
    topRatedMovies: state.topRatedMovies,
    popularMovies: state.popularMovies
})

export default connect(mapStateToProps)(Popularmovies)