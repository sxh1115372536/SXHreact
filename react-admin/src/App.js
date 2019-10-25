/* 
应用根组件
*/
import React, {Component} from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Login from "./container/login"
import Admin from "./container/admin"
import history from './history'

export default class App extends Component {

  render () {
    return (
      <Router history={history}>
        <Switch> { }
          <Route path="/login" component={Login} exact/>
          <Route path="/" component={Admin}/>
        </Switch>
      </Router>
    )
  }
}