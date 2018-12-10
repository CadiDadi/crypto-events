import React from 'react'
import Coin from './Coin'
import moment from 'moment'

const Event = (props) => {
    const { title, date_event, coins, description, source } = props
    console.log(props)
    return (
        <div className= "e-container">
            <div class="event-container">
                <h2 className='event-title'>{title}</h2>
                <div class='coin-box'>{coins.map(coin =>
                    <Coin className='coin'
                        name={coin.name}
                        symbol={coin.symbol}
                    />)}
                </div>
                <a href={source}><div class='info-container'>
                    <p><b>When: </b> {moment(date_event).format('LL')}</p>
                    <p><b>Description: </b>{description}</p>
                    <p><b>Event Link: Click in Box</b></p>
                </div></a>
            </div>
        </div>
    )
}

export default Event 