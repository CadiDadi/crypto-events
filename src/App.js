import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import EventList from './Components/Events/EventList'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'
import primary from './img/primary.png'


class App extends Component {
    constructor(){
        super()
        this.state = {
            events: []
        }
    }
    render(){ 
        return(
            <div>
                <Navbar />
                <Header primary={primary}/>
                <Switch>
                    <Route exact path="/" component={EventList}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        )
    }
}
 
export default App  