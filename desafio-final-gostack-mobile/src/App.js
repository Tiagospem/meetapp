import React from 'react'
import { useSelector } from 'react-redux'
import createRouter from './routes'

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: DatePickerAndroid has been merged'
])

export default function App() {
  const signed = useSelector(state => state.auth.signed)
  const Routes = createRouter(signed)
  return <Routes />
}
