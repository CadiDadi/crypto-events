import React from 'react'

const Header = (props) => {
    const { primary } = props
    console.log(props)
    return(
        <div className='header'>
            <img className='primary' src={primary} alt="primary"/>
        </div>
    )
}

export default Header