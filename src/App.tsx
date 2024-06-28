import { ThemeProvider, useTheme } from '@mui/material'
import { RouteApp } from 'core/routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <RouteApp />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
