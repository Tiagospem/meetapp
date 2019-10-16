import React from 'react'
import { useDispatch } from 'react-redux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import HeaderButton from '~/components/HeaderButton'
import { signOut } from '~/store/modules/auth/actions'

// import { Container } from './styles'

export default function LogoutHeaderButton() {
  const dispatch = useDispatch()
  function handleLogout() {
    dispatch(signOut())
  }
  return (
    <HeaderButton onPress={handleLogout}>
      <FontAwesome5 name="power-off" size={25} color="#666" />
    </HeaderButton>
  )
}
