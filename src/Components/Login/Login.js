import React from 'react';
import { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { fetchOptions } from '../../utils/fetchOptions'
import { fetchData } from '../../utils/fetchData'
import { updateUser } from '../../actions/actions'
import { connect } from 'react-redux'
import user from '../../Assets/Images/user.png'
import password from '../../Assets/Images/password-icon.png'
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            error: "",
            id: false
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: [value]
        })
    }

    validateUser = async (e) => {
        e.preventDefault()
        const { email, password } = this.state
        const url = 'http://localhost:3000/api/users'
        const body = { email: email, password: password }
        const final = { email: body.email[0], password: body.password[0] }
        console.log(this.props)

        try {
            const options = await fetchOptions('POST', final)
            const result = await fetchData(url, options)
            console.log(result, "staus")
            if (result.status === "success") {
                this.setState({
                    id: !this.state.id
                })
                this.props.updateUser(result.data.id)
            }
        }
        catch (error) {
            return this.setState({ error: "Email and Password do not match. Please try again or Signup." })
        }
    }

    render() {
        
        return (
            <div className="login">
                <div className="login-box">
                    <form onSubmit={this.validateUser}>
                        <div className="login-header">
                            <h3>Please Log in</h3>
                        </div>
                        <div className="username-input input-box">
                            <img alt="user-icon" src={user}></img>
                            <input
                                type="text"
                                name="email"
                                value={this.state.email}
                                placeholder={"Enter your email address"}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="password-input input-box">
                            <img alt="password-icon" src={password}></img>
                            <input
                                type="text"
                                name="password"
                                placeholder={"Enter your password"}
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button onClick={this.handleSubmit}>Submit</button>
                        <p className="error-message">{this.state.error && this.state.error}</p>
                    </form>
                </div>
            </div>

        )
    }
}


export const mapStateToProps = (state) => ({
    user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
    updateUser: (id) => dispatch(updateUser(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)