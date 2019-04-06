import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Favorites from './Components/Favorites/Favorites'
import Nowplayingmovies from './Components/Nowplayingmovies/Nowplayingmovies'
import Toprated from './Components/Toprated/Toprated'
import Popularmovies from './Components/Popularmovies/Popularmovies'
import { APIkey } from './utils/APIkey'
import { fetchOptions } from './utils/fetchOptions'
import { fetchData } from './utils/fetchData'
import { connect } from 'react-redux'
import { nowPlayingMovies, topRatedMovies, popularMovies, logOutUser } from './actions/actions'
import Moviedetails from './Components/Moviedetails/Moviedetails';
import './App.css'



export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
  }

  componentDidMount = () => {
    this.fetchNowPlayingMovies()
    this.fetchTopRatedMovies()
    this.fetchPopularMovies()
  }

  fetchNowPlayingMovies = async () => {
    try {
      const options = await fetchOptions('GET')
      const movies = await fetchData(APIkey, options)
      this.props.nowPlayingMovies(movies.results)

    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  fetchTopRatedMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=93b214404de014118b64ce033e70ac99&language=en-US&page=1"
    try {
      const options = await fetchOptions('GET')
      const movies = await fetchData(url, options)
      this.props.topRatedMovies(movies.results)


    } catch (error) {
      this.setState({
        error: error.message
      })
    }
  }

  fetchPopularMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=93b214404de014118b64ce033e70ac99&language=en-US&page=1"
    try {
      const options = await fetchOptions('GET')
      const movies = await fetchData(url, options)
      this.props.popularMovies(movies.results)


    } catch (error) {
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
            { typeof this.props.user.id === 'number' ? <NavLink to="/logout" className="login-button" onClick={this.props.logOutUser}>Logout</NavLink> : <NavLink to="/login" className="login-button">Login</NavLink>}
            <NavLink to="/signup" className="signup-button">Signup</NavLink>
            <NavLink to="/favorites" className="favorites-button">Favorites</NavLink>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/favorites' component={Favorites}/>
          </div>
        </header>
        <section className="movies-container">
          <Route exact  path='/movie/:id' render={({ match }) => {
            const { id } = match.params;
            const { nowPlaying, topRatedMovies2, popularMovies2 } = this.props
            const allMovies = nowPlaying.concat(topRatedMovies2, popularMovies2)
            const foundMovie = allMovies.find((movie) => {
              return movie.id == id;
            })
            return <Moviedetails {...foundMovie}/>
            
          }} />
          <div className="now-playing movie-section">
            <h1>Now playing movies</h1>
            <Nowplayingmovies />
          </div>
          <div className="toprated-movies movie-section">
            <h1>Top rated movies</h1>
            <Toprated />
          </div>
          <div className="popular-movies movie-section">
            <h1>Popular movies</h1>
            <Popularmovies />
          </div>
          
        </section>

      </div>
    );
  }
}
export const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlayingMovies,
  topRatedMovies2: state.topRatedMovies,
  popularMovies2: state.popularMovies,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  nowPlayingMovies: (movies) => dispatch(nowPlayingMovies(movies)),
  topRatedMovies: (movies) => dispatch(topRatedMovies(movies)),
  popularMovies: (movies) => dispatch(popularMovies(movies)),
  logOutUser: () => dispatch(logOutUser())

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
