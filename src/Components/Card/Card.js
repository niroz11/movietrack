import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import './Card.css';
export class Card extends Component{
    constructor(){
        super()
    }
    getCard = (movies) => {
        console.log( movies, "movie card")
    }
    render(){
        const { id } = this.props.movies
        const {movies } = this.props
        const poster = movies.poster_path
        const path = `https://image.tmdb.org/t/p/w185/${poster}`
        return(
            
            <div className="movie-card">
                <Link to={`/movie/${id}`}>
                <img src={path}></img>
                </Link>
                <button onClick={()=>{this.getCard(movies)}}>click</button>
            </div>
        )
    }
}

export default Card;