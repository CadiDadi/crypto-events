import React, { Fragment } from 'react'
import Event from './Event'

const Events = (props) => {
    return(
        <Fragment>
            { props.events.map(event =>
                <Event 
                    title={event.title}
                    date_event= {event.date_event}
                    description={event.description}
                    coins={event.coins} 
                    source={event.source}

                />
            )}
        </Fragment>
    )
}
 
export default Events 