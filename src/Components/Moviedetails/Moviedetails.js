import React, { Component } from "react";
import { connect } from "react-redux";
import { Route,  Redirect } from "react-router-dom";
import './Moviedetails.css';

class Moviedetails extends Component {
    constructor(){
        super()
        this.state={
            redirect: false
        }
    }
    toggle = () => {
        this.setState({
            redirect: !this.state.redirect
        })
    }
    render(){
        
        if (this.state.redirect) return <Redirect to={'/'} />
        const poster = this.props.poster_path
        const path = `https://image.tmdb.org/t/p/w185/${poster}`
        return (
            <div className="movie-details-box">
              
                <button onClick={this.toggle}>go back</button>
                
                  <img src={path}></img>
                    <div className="text-area">
                      <h3>{this.props.title}</h3>
                      <p>{this.props.overview}</p>
                      <p>Rating: {this.props.vote_average} /10</p>
                    </div>
                
            </div>
        )
    }
}

export const mapStateToProps = (state) => ({
    nowPlaying: state.nowPlayingMovies,
    topRatedMovies: state.topRatedMovies,
    popularMovies: state.popularMovies
})

export default connect(mapStateToProps)(Moviedetails)