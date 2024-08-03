import React from 'react'
import ReactDOM from 'react-dom/client'

// import do StyledComponents //
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'

import { Router } from './Router/index.jsx'

import { AuthProvider } from './Hooks/auth.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <Router/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
