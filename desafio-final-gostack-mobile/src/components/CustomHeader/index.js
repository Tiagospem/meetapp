import React from 'react'
import { Header } from 'react-native-elements'
import Logo from './Logo'

export default function CustomHeader({ ...rest }) {
  const statusBar = {
    barStyle: 'dark-content',
    backgroundColor: '#fff',
    color: '#333'
  }
  const containerStyle = {
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    borderBottomColor: 'rgba(51, 51, 51, 0.1)',
    borderBottomWidth: 1,
    elevation: 2
  }

  return (
    <Header
      statusBarProps={statusBar}
      centerComponent={<Logo />}
      placement="left"
      {...rest}
      containerStyle={containerStyle}
    />
  )
}
