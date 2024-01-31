import React from 'react'
import ReactDOM from 'react-dom/client'

// import do StyledComponents //
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'
import {SignUp} from '../src/Pages/signUp'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SignUp/>
    </ThemeProvider>
  </React.StrictMode>,
)
