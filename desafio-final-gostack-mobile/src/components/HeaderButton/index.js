import React from 'react'
import { Button } from './styles'

export default function HeaderButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>
}
