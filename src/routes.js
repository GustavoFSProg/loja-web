import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Register from './pages/Register'
import Cart from './pages/Cart'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}
