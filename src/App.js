import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Login } from './Login';

import './App.css';

class App extends Component {

  
 

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to="/Login" className="login-button">Login</NavLink>
          <NavLink to="signup" className ="signup-button">Signup</NavLink>
          <Route path='/Login' component = {Login}/>
        </header>
      </div>
    );
  }
}

export default App;
