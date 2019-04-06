import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUser } from '../../actions/actions'
import { fetchFavorites } from '../../utils/fetchFavorites'
import './Card.css';
export class Card extends Component{
    constructor(){
        super()
        this.state={
            error:""
        }
    }
    addFavorites = () => {
        console.log("it works")
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
        console.log(favorites, "user fab")
       
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