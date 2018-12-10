import React from 'react'
import { Link } from 'react-router-dom'
import whiteLong from '../img/whiteLong.png'
import Login from './Login/Login'

const Navbar = props => {
    const { username } = props
    return (
        <div className="navbar">
            <div><img className='whiteLong' src={whiteLong} alt=""/> </div>
            <div>{username}</div>
            <div><Link to="./">Events</Link></div>
            <div><Link to="./contact">Contact Us</Link></div>
            <div><Link to="./login">Login</Link></div>
        </div>
    )
}
 
export default Navbar 