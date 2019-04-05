import React, { Component } from "react";
import { connect } from "react-redux";
import { Route,  Redirect } from "react-router-dom"

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
        return (
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.overview}</p>
                <button onClick={this.toggle}>go back</button>
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