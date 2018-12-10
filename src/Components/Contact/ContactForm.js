import React from 'react'
import './style.css'

const LoginForm = props => {
    return ( 
        <form onSubmit={props.handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={props.name} 
                onChange={props.handleChange} 
                placeholder="Name"/>
            <input 
                type="text" 
                name="email" 
                value={props.email} 
                onChange={props.handleChange} 
                placeholder="Email Address"/>
            <input className='message'
                type="text" 
                name="message" 
                value={props.message} 
                onChange={props.handleChange} 
                placeholder="Message"/>
            <button>Submit</button>
        </form>
    )
}
 
export default LoginForm