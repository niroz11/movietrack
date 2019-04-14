import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Card } from '../Card/Card';
import { updateUser } from '../../actions/actions'


export class Favorites extends Component {
    constructor(props){
        super(props)}
    render(){
        console.log(this.props.user, "fav user")
        let displayFavorites;
        if(this.props.favoriteMovies && this.props.favoriteMovies.length > 0){
            displayFavorites = this.props.favoriteMovies.map((eachMovie) => {
                return <Card key={eachMovie.id} 
                             movies={eachMovie} 
                             id={eachMovie.movie_id} 
                             user={this.props.user}
                             updateUser={this.props.updateUser}/>
            })
        } else {
            return <p>No favs to display</p>
        }
      return (
          <div>
              {displayFavorites}
          </div>
      )}
}

export const mapStateToProps = (state) => ({
    favoriteMovies: state.user.favorites,
    user: state.user.id,
    email: state.user.email,
    user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
    updateUser: (id, name, favorites) => dispatch(updateUser(id, name, favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)