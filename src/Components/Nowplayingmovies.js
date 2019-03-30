import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card'


export class Nowplayingmovies extends Component {
    constructor(){
        super()
    }
    
    render(){
        
        const movies = this.props.nowPlaying.map((e) => {
            return <Card movies={e}/>
        })
        return(
            <div>{movies}</div>
        )
    }
}

export const mapStateToProps = (state) => ({
    nowPlaying: state.nowPlayingMovies,
    topRatedMovies: state.topRatedMovies,
    popularMovies: state.popularMovies
})

export default connect(mapStateToProps)(Nowplayingmovies)