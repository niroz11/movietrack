import React,{ Component } from 'react'
import './Card.css';
export class Card extends Component{
    constructor(){
        super()
    }
    render(){
        const {movies} = this.props
        const poster = movies.poster_path
        const path = `https://image.tmdb.org/t/p/w185/${poster}`
        return(
            <div className="movie-card">
                
                <img src={path}></img>
            </div>
        )
    }
}

export default Card;