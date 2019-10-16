import { Platform, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import Input from '~/components/Input'
import Button from '~/components/Button'

let { width } = Dimensions.get('window')

export const Container = styled.KeyboardAvoidingView.attrs({
  //fix ios keyboard bug
  enabled: Platform.OS === 'ios',
  behavior: 'padding'
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`

export const Logo = styled.Image`
  width: ${width * 0.5};
  height: 100px;
  overflow: visible;
`

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`
export const FormInput = styled(Input)`
  margin-top: 10px;
`
export const SubmitButton = styled(Button)`
  margin-top: 15px;
`
export const SignInLink = styled.TouchableOpacity`
  margin-top: 20px;
`
export const SignInLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`
