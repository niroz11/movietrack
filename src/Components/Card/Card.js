import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUser } from '../../actions/actions'
import { fetchUserFavorites } from '../../utils/fetchUserFavorites'
import { fetchData } from '../../utils/fetchData';
import { fetchOptions } from '../../utils/fetchOptions'
import './Card.css';
export class Card extends Component{
    constructor(){
        super()
        this.state={
            error:""
        }
    }
    addFavorites = () => {
        
        if (typeof this.props.user.id === "number") {
          return this.validateFavorites()
        } else {
          const message = "Please login or sign up to favorite movies."
          this.setState({
              error: message
          })
        }
      }

    validateFavorites = async () => {
        const { favorites } = this.props.user
        const existing = await favorites.find(favorite => favorite.movie_id === this.props.movies.id)
        return (!existing ? this.fetchFavorites() : null)
       
    }

    fetchFavorites = async () => {
        const { movies, user } = this.props;
        console.log(movies, "movie props")
        const url = "http://localhost:3000/api/users/favorites/new"
        const body = {
          movie_id: movies.id,
          user_id: user.id,
          title: movies.title,
          poster_path: movies.poster_path,
          release_date: movies.release_date,
          vote_average: movies.vote_average,
          overview: movies.overview
        }
        try {
          const options = await fetchOptions('POST', body)
          const result = await fetchData(url, options)
          if(result.status === "success"){
            const favorites = await fetchUserFavorites(user.id)
            return this.props.updateUser({id: user.id, name: user.name, favorites})
          }
        } catch(error) {
          const message = "Sorry something went wrong, please refresh and try again."
          this.setState({
              error: message
          })
        }
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
                <button onClick={()=>{this.addFavorites()}}>click</button>
                {this.state.error && this.state.error}
            </div>
        )
    }
}

export const mapStateToProps = (state) => ({
    user: state.user,
    
})

export const mapDispatchToProps = (dispatch) => ({
  
  updateUser: (id, name, favorites) => dispatch(updateUser(id, name, favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)