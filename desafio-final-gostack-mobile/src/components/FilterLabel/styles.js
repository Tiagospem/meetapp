import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  height: 40px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
export const Text = styled.Text`
  color: #fff;
`
export const Button = styled(RectButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  width: 30px;
  height: 30px;
`
