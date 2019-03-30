import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card'
import './Nowplayingmovies.css'


export class Nowplayingmovies extends Component {
    constructor(){
        super()
    }
    
    render(){
        
        const movies = this.props.nowPlaying.map((eachMovie) => {
            return <Card className="movie" key={eachMovie.id} movies={eachMovie}/>
        })
        return(
            <div className="now-playing-section">
            
            {movies}
            </div>   
        )
    }
}

export const mapStateToProps = (state) => ({
    nowPlaying: state.nowPlayingMovies,
    topRatedMovies: state.topRatedMovies,
    popularMovies: state.popularMovies
})

export default connect(mapStateToProps)(Nowplayingmovies)