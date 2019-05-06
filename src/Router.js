import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App.js'
import About from './About.js'
import Typing from './Typing.js'

class Router extends Component {
  render() {
    return (
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/speed-typer' component={Typing}/>
          <Route path='/' component={App}/>
        </Switch>
    )
  }
}

export default Router
