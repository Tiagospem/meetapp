import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`
export const Background = styled.View`
  background-color: #fff;
  flex: 1;
`

export const Preview = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})``

export const Banner = styled.Image`
  width: 100%;
  height: 240px;
  margin-bottom: 10px;
`
export const Title = styled.Text`
  padding: 0 15px;
  font-weight: bold;
  font-size: 20px;
  color: #666;
`
export const Location = styled.Text`
  padding: 3px 15px;
  font-size: 16px;
  color: #666;
`
export const Date = styled.Text`
  padding: 3px 15px;
  font-size: 16px;
  color: #666;
`
export const Description = styled.Text`
  padding: 0 15px;
  font-size: 14px;
  text-align: justify;
  line-height: 21px;
  color: #666;
`
export const Organizer = styled.Text`
  padding: 3px 15px;
  font-size: 16px;
  color: #666;
`
export const Divider = styled.View`
  height: 1px;
  border: 1px solid rgba(0, 0, 0, 0.02);
  margin: 15px 15px;
`
export const Strong = styled.Text`
  font-weight: bold;
`
