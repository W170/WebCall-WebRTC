import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from '../routes'
import RouteWithSubRoutes from './routeWithSubRoutes.route'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Route path="*">
          <div>NO MATCH</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
