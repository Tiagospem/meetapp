import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  opacity: ${props => (props.past ? 0.5 : 1)};
  margin-bottom: 15px;
  border-radius: 6px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
export const Banner = styled.Image`
  border-top-left-radius: 6px;
  width: 100%;
  height: 130px;
`
export const Info = styled.View`
  padding: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`
export const Location = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`
export const Time = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`
export const Organizer = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`

export const UnSubscribeButton = styled(RectButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 50px;
  height: 50px;
  right: 0;
  margin-right: 10px;
  top: 105px;
  background: #eb236e;
  border-radius: 25px;
`
