import React from 'react'
import ReactDOM from 'react-dom/client'

// import do StyledComponents //
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'
import { SignIn } from './Pages/SignIn/index.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SignIn/>
    </ThemeProvider>
  </React.StrictMode>,
)
