import React, { Component } from 'react';
import { connect } from 'react-redux';


export class Nowplayingmovies extends Component {
    constructor(){
        super()
    }
    
    render(){
        console.log(this.props.nowPlaying, "nowplaying")
        return(
        <div>Now playing movies</div>
        )
    }
}

export const mapStateToProps = (state) => ({
    nowPlaying: state.nowPlayingMovies,
    topRatedMovies: state.topRatedMovies,
    popularMovies: state.popularMovies
})

export default connect(mapStateToProps)(Nowplayingmovies)