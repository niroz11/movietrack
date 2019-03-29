import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Login } from './Components/Login';
import { Topratedmovies } from './Components/Topratedmovies'
import { Upcomingmovies } from './Components/Upcomingmovies'
import { Nowplayingmovies } from './Components/Nowplayingmovies'


class App extends Component {
  constructor(){
    super()
  }
   
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="heading-title">
            <h1>MovieTrack</h1>
          </div>
          <div>
            <NavLink to="/Login" className="login-button">Login</NavLink>
            <NavLink to="signup" className ="signup-button">Signup</NavLink>
            <Route path='/Login' component = {Login}/>
          </div>
        </header>
        <section className="movies-section">
          <Nowplayingmovies/>
          <Topratedmovies/>
          <Upcomingmovies/>
        </section>
        
      </div>
    );
  }
}

export default App;
