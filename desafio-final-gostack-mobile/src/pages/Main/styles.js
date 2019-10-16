import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 }
})`
  margin-top: 0;
`

export const Background = styled.View`
  background-color: #f8f9fb;
  flex: 1;
`
export const NoMeetups = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const Message = styled.Text`
  position: relative;
  top: -40px;
  color: #444;
`
