import React, { Component } from 'react'
import LoginForm from './LoginForm'
import './style.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            isAuthenticated: false,
            user: {
                username: '',
                password: '',
            }
        }
    }
    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const newUser = {
            username: this.state.username,
            password: this.state.password
        }      
        this.setState({
            user: newUser,
            isAuthenticated: true,
            username: '',
            password: '',
        })
    }
    render() {
        return (
            <div>
                {/* ternary - ? show the WELCOME MESSAGE if contact form has been filled out : otherwise, show the LOGIN FORM */}
                {this.state.isAuthenticated
                    ?
                    <h1 className='response'>Welcome <i>{this.state.user.username}</i> you are now logged in!</h1>
                    :
                    <LoginForm
                        username={this.state.username}
                        password={this.state.password}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit} />
                }
            </div>
        )
    }
}

export default Login