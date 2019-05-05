import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App.js'
import About from './About.js'

class Router extends Component {
  render() {
    return (
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/' component={App}/>
        </Switch>
    )
  }
}

export default Router
