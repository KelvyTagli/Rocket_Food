import React from 'react'
import ReactDOM from 'react-dom/client'

// import do StyledComponents //
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'
import { Home } from './Pages/home/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Home/>
    </ThemeProvider>
  </React.StrictMode>,
)
