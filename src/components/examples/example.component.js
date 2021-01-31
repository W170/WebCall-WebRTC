import React, { useEffect } from 'react'
import { withTranslation } from 'react-i18next'
import { compose } from 'redux'
import { connect } from 'react-redux'
import RouteWithSubRoutes from '../../routes/components/routeWithSubRoutes.route'
import PropTypes from 'prop-types'
import { GET_FILMS } from '../../actions/example.action'
import { getFilmsSelector } from '../../selectors/example.selector'
import { Empty } from 'antd'

function ExampleComponent({ t, routes, getFilms }) {
  useEffect(() => {
    getFilms()
  }, [])

  return (
    <div>
      {t('messages.welcome', { name: 'Magneto React Core' })}
      <Empty />
      {routes &&
        routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  )
}

const mapStateToProps = state => ({
  films: getFilmsSelector(state),
})

const mapDispatchToProps = dispatch => ({
  getFilms: () => dispatch(GET_FILMS()),
})

ExampleComponent.propTypes = {
  t: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  getFilms: PropTypes.func,
}

export default compose(
  withTranslation('translation'),
  connect(mapStateToProps, mapDispatchToProps),
)(ExampleComponent)
