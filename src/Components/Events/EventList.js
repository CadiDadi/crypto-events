import React, { Component } from 'react'
import axios from 'axios'
import Events from './Events'

class EventList extends Component {
    constructor(){
        super()
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        axios.get(`https://api.coinmarketcal.com/v1/events?access_token=YTY5YzYwNGE3YTk4NmI3YmUzMzMyMDFlOGRlY2MyZWNjNTU4OTAyYTZiZWRjNTk1YTM4MzVlN2ZkYzM5MGQ0NA&page=1&max=50`).then(response => {
            this.setState({
                events: response.data
            })
        })
    }
    render(){ 
        return(
            <div className='event-list'>
                <Events events={this.state.events} />
            </div>
        )
    }
}
 
export default EventList
