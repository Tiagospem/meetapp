import React, { forwardRef } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, TextInput } from './styles'

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(0, 0, 0, 0.4)" />}
      <TextInput {...rest} ref={ref} />
    </Container>
  )
}

export default forwardRef(Input)
