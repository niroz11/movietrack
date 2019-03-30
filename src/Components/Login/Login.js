import React, { Component } from 'react';
import user from '../../Assets/Images/user.png'
import password from '../../Assets/Images/password-icon.png'
import './Login.css'
export class Login extends Component{

    constructor(){
        super()
    }
    render(){
        return (
            // <div className="login-heading">
                <div className="login">
        <div className="login-box">
        <form>
            <div className="login-header">
                <h3>Please Log in</h3>
            </div>
            <div className="username-input input-box">
                <img alt="user-icon" src={user}></img>
                <input
                  type="text"
                  name="email"
                //   value={}
                  placeholder={"Enter your email address"}
                //   onChange={this.handleChange}
                />
            </div>   
          <div className="password-input input-box">
                <img alt="password-icon" src={password}></img>
                <input
                  type="text"
                  name="password"
                  placeholder={"Enter your password"}
                //   value={this.state.password}
                //   onChange={this.handleChange}
                />
              </div>
          <button>Submit</button>
          <p className="error-message">error</p>
        </form>
        </div>
        {/* <Route exact path='/login' render={() => (
          this.props.user.id && <Redirect to="/"/>
        )} /> */}
      </div>
            // </div>
        )
    }
}