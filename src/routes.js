import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Home from './pages/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/lista" component={Listagem} /> */}
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}
