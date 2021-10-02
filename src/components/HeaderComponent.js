import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const HeaderComponent = () => {
  const [index, setIndex] = useState(0)
  const dispatch = useDispatch()

  const userLogOut = () => {
    dispatch({ type: 'LOGOUT_USER' })
  }

  const headerStyle = makeStyles((theme) => ({
    tabsStyle: {
      marginLeft: 'auto',
    },
    tabStyle: {
      '&:hover': {
        backgroundColor: '#316B83',
        borderRadius: '10px',
      },
    },
  }))

  const style = headerStyle()

  return (
    <>
      <AppBar>
        <Toolbar>
          <Tabs
            className={style.tabsStyle}
            value={index}
            onChange={(e, value) => setIndex(value)}
          >
            <Tab className={style.tabStyle} label='Home' />
            <Tab className={style.tabStyle} label='Products' />
            <Tab className={style.tabStyle} label='Cart' />
            <Tab className={style.tabStyle} label='Orders' />
            <Tab className={style.tabStyle} label='Profile' />
            <Tab
              className={style.tabStyle}
              label='LogOut'
              onClick={(e) => userLogOut()}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default HeaderComponent
