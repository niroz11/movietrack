import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Card } from '../Card/Card';
import { updateUser } from '../../actions/actions'


class Favorites extends Component {
    constructor(props){
        super(props)
        this.state = {
            favorites: false
        }

    }

    
    
    render(){
        console.log(this.props.user, "fav user")
        let displayFavorites;
        if(this.props.favoriteMovies.length > 0){
            displayFavorites = this.props.favoriteMovies.map((eachMovie) => {
                return <Card key={eachMovie.id} 
                             movies={eachMovie} 
                             id={eachMovie.movie_id} 
                             user={this.props.user}
                             updateUser={this.props.updateuser}/>
            })
        } else {
            return <p>No favs to display</p>
        }
      return (
          <div>
              {displayFavorites}
          </div>
      )
        
       
        
       
      
   
    }
}

const mapStateToProps = (state) => ({
    favoriteMovies: state.user.favorites,
    user: state.user.id,
    email: state.user.email,
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    updateUser: (id, name, favorites) => dispatch(updateUser(id, name, favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)