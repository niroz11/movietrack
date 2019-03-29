import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { Login } from './Components/Login'
import { Nowplayingmovies } from './Components/Nowplayingmovies'
import { APIkey } from './utils/APIkey'
import { fetchOptions } from './utils/fetchOptions'
import { fetchData } from './utils/fetchData'
import { connect } from 'react-redux'
import { nowPlayingMovies, topRatedMovies } from './actions/actions'


class App extends Component {
  constructor(){
    super()
    this.state={
      error:''
    }
  }

  componentDidMount = () => {
    this.fetchNowPlayingMovies()
    this.fetchTopRatedMovies()
  }

  fetchNowPlayingMovies = async () => {
    try{
    const options = await fetchOptions('GET')
    const movies = await fetchData(APIkey,options)
    this.props.nowPlayingMovies(movies.results)
    } catch(error){
      this.setState({error: error.message})
    }
  }

  fetchTopRatedMovies = async() => {
    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=93b214404de014118b64ce033e70ac99&language=en-US&page=1"
    try{
      const options = await fetchOptions('GET')
      const movies = await fetchData(url,options)
      this.props.topRatedMovies(movies.results)
      console.log(movies.results, "toprated")

    }catch(error){
      this.setState({
        error: error.message
      })
    }
  }
   
  render() {
    console.log(this.props, "props")
    console.log(this.props.state, "state")

    return (
      <div className="App">
        <header className="App-header">
          <div className="heading-title">
            <h1>MovieTrack</h1>
          </div>
          <div>
            <NavLink to="/Login" className="login-button">Login</NavLink>
            <NavLink to="/signup" className ="signup-button">Signup</NavLink>
            <Route path='/Login' component = {Login}/>
            <Route exact path='/' component={Nowplayingmovies}/>
          </div>
        </header>
        <section className="movies-section">
         
        
        </section>
        
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  nowPlayingMovies: (movies) => dispatch(nowPlayingMovies(movies)),
  topRatedMovies: (movies) => dispatch(topRatedMovies(movies))
  
})

export default connect(null, mapDispatchToProps)(App)
