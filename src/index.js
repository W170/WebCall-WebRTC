import './stylesheets/main.scss'
import './stylesheets/ant.less'
import './index.css'
import './i18n.config'
import * as serviceWorker from './serviceWorker'

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider, Spin } from 'antd'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import store from './store'
import i18next from 'i18next'
import Router from './routes/components/router.route'

const getPopupContainer = trigger => trigger.parentNode || document.body

const appRoot = document.getElementById('root')
appRoot.setAttribute('notranslate', true)

ReactDOM.render(
  <Suspense fallback={<Spin size="large" className="suspense__global" />}>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <ConfigProvider getPopupContainer={getPopupContainer}>
          <Router />
        </ConfigProvider>
      </I18nextProvider>
    </Provider>
  </Suspense>,
  appRoot,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
