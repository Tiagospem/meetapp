import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  SubmitButton,
  Separator,
  FormInput,
  Form,
  Background
} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomHeader from '~/components/CustomHeader'
import { updateProfileRequest } from '~/store/modules/user/actions'
import Logout from '~/components/LogoutHeaderButton'

export default function Profile() {
  const dispatch = useDispatch()

  const profile = useSelector(state => state.user.profile)

  const emailRef = useRef()
  const oldPasswordRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const [name, setName] = useState(profile.name)
  const [email, setEmail] = useState(profile.email)
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    setOldPassword('')
    setPassword('')
    setConfirmPassword('')
  }, [profile])

  async function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword
      })
    )
  }

  return (
    <Background>
      <Container>
        <CustomHeader rightComponent={<Logout />} placement="center" />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Full Name"
            returnKeyType={'next'}
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Your e-mail"
            ref={emailRef}
            returnKeyType={'next'}
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <Separator />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            placeholder="Your current password"
            ref={oldPasswordRef}
            returnKeyType={'next'}
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            placeholder="Insert new password"
            ref={passwordRef}
            returnKeyType={'next'}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            placeholder="Confirm new password"
            ref={confirmPasswordRef}
            returnKeyType={'send'}
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <SubmitButton onPress={handleSubmit}>Update</SubmitButton>
        </Form>
      </Container>
    </Background>
  )
}

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name={'person'} color={tintColor} size={20} />
  )
}
