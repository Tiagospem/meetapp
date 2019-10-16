import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import Account from '../pages/Account'
import Create from '../pages/Create'
import Preview from '../pages/Preview'
import Edit from '../pages/Edit'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/account" component={Account} isPrivate />
      <Route path="/create" component={Create} isPrivate />
      <Route path="/meetup/:meetup_id" component={Preview} isPrivate />
      <Route path="/edit/meetup/:meetup_id" component={Edit} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  )
}
