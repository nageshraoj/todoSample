import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './styles/theme'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'
import HeaderComponent from './components/HeaderComponent'

const App = () => {
  const loginType = useSelector((state) => state.loginType)
  const isLogin = useSelector((state) => state.isLogin)
  return (
    <>
      <ThemeProvider theme={theme}>
        {isLogin ? (
          <HeaderComponent />
        ) : loginType === 'LogIn' ? (
          <LoginComponent />
        ) : (
          <RegisterComponent />
        )}
      </ThemeProvider>
    </>
  )
}

export default App
