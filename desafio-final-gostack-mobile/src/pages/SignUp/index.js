import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImageBackground, StyleSheet } from 'react-native'
import logo from '~/assets/logo.png'
import bg from '~/assets/bg.jpg'
import { signUpRequest } from '~/store/modules/auth/actions'

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignInLink,
  SignInLinkText,
  Logo
} from '~/pages/SignIn/styles'

export default function SignUp({ navigation }) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const emailRef = useRef()
  const passwordRef = useRef()
  const loading = useSelector(state => state.auth.loading)
  function handleSubmit() {
    dispatch(signUpRequest(name, email, password))
  }

  const style = StyleSheet.create({
    background: { width: '100%', height: '100%' }
  })
  return (
    <ImageBackground blurRadius={6} source={bg} style={style.background}>
      <Container>
        <Logo source={logo} resizeMode={'contain'} />
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
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            placeholder="Your password"
            ref={passwordRef}
            returnKeyType={'send'}
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            SignUp
          </SubmitButton>
        </Form>
        <SignInLink onPress={() => navigation.navigate('SignIn')}>
          <SignInLinkText>Already registered?</SignInLinkText>
        </SignInLink>
      </Container>
    </ImageBackground>
  )
}
