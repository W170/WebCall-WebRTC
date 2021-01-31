import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

RouteWithSubRoutes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
}

export default RouteWithSubRoutes
