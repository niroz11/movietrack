import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { Login } from './Components/Login/Login'
import  Nowplayingmovies  from './Components/Nowplayingmovies/Nowplayingmovies'
import Toprated from './Components/Toprated/Toprated'
import Popularmovies from './Components/Popularmovies/Popularmovies'
import { APIkey } from './utils/APIkey'
import { fetchOptions } from './utils/fetchOptions'
import { fetchData } from './utils/fetchData'
import { connect } from 'react-redux'
import { nowPlayingMovies, topRatedMovies, popularMovies } from './actions/actions'


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
    this.fetchPopularMovies()
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
      

    }catch(error){
      this.setState({
        error: error.message
      })
    }
  }

  fetchPopularMovies = async() => {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=93b214404de014118b64ce033e70ac99&language=en-US&page=1"
    try{
      const options = await fetchOptions('GET')
      const movies = await fetchData(url,options)
      this.props.popularMovies(movies.results)
      

    }catch(error){
      this.setState({
        error: error.message
      })
    }
  }
   
  render() {
    console.log(this.props, "app props")
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
            <Route exact path='/Nowplaying' component={Nowplayingmovies}/>
          </div>
        </header>
        <section className="movies-container">
         <div className="now-playing movie-section">
         <h1>Now playing movies</h1>
            <Nowplayingmovies/>
         </div>
         <div className="toprated-movies movie-section">
         <h1>Top rated movies</h1>
          <Toprated/>
         </div>
         <div className="popular-movies movie-section">
         <h1>Popular movies</h1>
         <Popularmovies/>
         </div>
        
        </section>
        
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  nowPlayingMovies: (movies) => dispatch(nowPlayingMovies(movies)),
  topRatedMovies: (movies) => dispatch(topRatedMovies(movies)),
  popularMovies: (movies) => dispatch(popularMovies(movies))
  
})

export default connect(null, mapDispatchToProps)(App)
