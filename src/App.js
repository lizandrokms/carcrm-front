import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import 'bootstrap/dist/css/bootstrap.min.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },

  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true
    },
    MuiSelect: {
      variant: 'outlined',
      fullWidth: true
    }
  }
})


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1 className="text-danger">React</h1>
    </ThemeProvider >
  )
}
