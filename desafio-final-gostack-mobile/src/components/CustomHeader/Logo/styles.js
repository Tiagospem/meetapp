import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
let { width } = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Image = styled.Image`
  width: ${width * 0.5};
  height: 35px;
  overflow: visible;
`
