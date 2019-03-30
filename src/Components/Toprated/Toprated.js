import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import './Toprated.css';


export class Toprated extends Component {
    constructor(){
        super()
    }
    
    render(){
        
        const movies = this.props.topRatedMovies.map((eachMovie) => {
            return <Card key={eachMovie.id} movies={eachMovie}/>
        })
        return(
            <div className="top-rated-movies">{movies}</div>   
        )
    }
}

export const mapStateToProps = (state) => ({
    nowPlaying: state.nowPlayingMovies,
    topRatedMovies: state.topRatedMovies,
    popularMovies: state.popularMovies
})

export default connect(mapStateToProps)(Toprated)