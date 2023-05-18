import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { ConfigProvider } from 'src/contexts/ConfigContext'
import GlobalStyles from './components/GlobalStyles'
import './index.css'

/* eslint-env browser */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ConfigProvider>
        <GlobalStyles>
          <App />
        </GlobalStyles>
      </ConfigProvider>
    </Router>
  </React.StrictMode>
)
