import styled from 'styled-components/native'
import Input from '~/components/Input'
import Button from '~/components/Button'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Background = styled.View`
  background-color: #f8f9fb;
  flex: 1;
`

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 }
})`
  align-self: stretch;
`
export const FormInput = styled(Input)`
  margin-top: 10px;
`
export const SubmitButton = styled(Button)`
  margin-top: 15px;
`
export const Separator = styled.View`
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 20px 0 10px;
`
