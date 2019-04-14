import React from "react";
import { Component } from "react"
import { connect } from "react-redux"
import { updateUser } from "../../actions/actions"
import { Route, Redirect } from 'react-router'
import { fetchData } from '../../utils/fetchData'
import { fetchOptions } from '../../utils/fetchOptions'
import user from '../../Assets/Images/user.png'
import password from '../../Assets/Images/password-icon.png'
import email from '../../Assets/Images/email-icon.png'
import './Signup.css'


export class Signup extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      error: ""
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const url = "http://localhost:3000/api/users/new"
    const body = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    try {
    const options = await fetchOptions('POST', body)
    const result = await fetchData(url, options)
      if(result.status === "success"){
       return this.props.updateUser({id: result.id, name: this.state.name})
      }
     } catch(error) {
      const message = "Email has already been used, please Login."
      this.setState({
          error: message
      })
      }
  }

  render(){
    return (
      <section className="signup">
      <form onSubmit={this.handleSubmit}>
        <div className="username-input input-box">
          <img alt="user-icon" src={user}></img>
          <input
            type="text"
            name="name"
            placeholder="name"
            value= {this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="email-input input-box">
          <img alt="user-icon" src={email}></img>
          <input
            type="text"
            name="email"
            placeholder="email"
            value= {this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="password-input input-box">
          <img alt="password-icon" src={password}></img>
          <input
            type="text"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <button className="signup-button">Sign up</button>
      </form>
      <p className="error-text">{this.state.error &&  this.state.error}</p>
      <Route exact path ='/Signup' render={()=> (
        this.props.user.id && <Redirect to="/"/>
      )}/>
      </section>
    )
  }
}
export const mapStateToProps = (state) => ({
  user: state.user,
  
})

export const mapDispatchToProps = (dispatch) => ({
    updateUser: (id, name) => dispatch(updateUser(id, name)),
    
  })

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
