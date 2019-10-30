/* 
应用根组件
*/
import React, {Component} from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Login from "./containers/login"
import Admin from "./containers/admin"
import history from './history'
import routes from './config/routes'

export default class App extends Component {

  render () {
    return (
      <Router history={history}>
        <Switch> { }
          <Route path="/login" component={Login} exact/>
          <Admin>
            <Switch>
              {
                routes.map(route =><Route {...route} key={route.path}></Route>)
              }
            </Switch>
          </Admin>
        </Switch>
      </Router>
    )
  }
}