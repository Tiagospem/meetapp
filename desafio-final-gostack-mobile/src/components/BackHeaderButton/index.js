import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import HeaderButton from '~/components/HeaderButton'

export default function BackHeaderButton({ navigation }) {
  function handleBack() {
    return navigation.goBack()
  }

  return (
    <HeaderButton onPress={handleBack}>
      <FontAwesome5 name="chevron-left" size={25} color="#666" />
    </HeaderButton>
  )
}
