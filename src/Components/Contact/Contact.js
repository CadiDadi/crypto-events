import React, { Component } from 'react'
import ContactForm from './ContactForm'
import './style.css'

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            message: '',
            isAuthenticated: false,
            user: {
                name: '',
                email: '',
                message: '',
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
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }      
        this.setState({
            user: newUser,
            isAuthenticated: true,
            name: '',
            email: '',
            message: '',
        })
    }
    render() {
        return (
            <div className='contact-box'>
                {/* ternary - ? show the THANKS MESSAGE if contact form has been filled out : otherwise, show the CONTACT FORM */}
                {this.state.isAuthenticated
                    ?
                    <h1 className='response'>Thanks <i>{this.state.user.name}</i> you will receive a response within 24hours</h1>
                    :
                    <ContactForm
                        name={this.state.name}
                        email={this.state.email}
                        message={this.state.message}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit} />
                }
            </div>
        )
    }
}

export default Contact