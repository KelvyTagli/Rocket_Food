import React from 'react'
import ReactDOM from 'react-dom/client'

// import do StyledComponents //
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'

import {Router} from './Router/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Router/>
    </ThemeProvider>
  </React.StrictMode>,
)
