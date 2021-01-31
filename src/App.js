import React from 'react'
import logo from './logo.svg'
import './App.css'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

function App(props) {
  const { t } = props

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t('messages.welcome', { name: 'Magneto365' })}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

App.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('translation')(App)
