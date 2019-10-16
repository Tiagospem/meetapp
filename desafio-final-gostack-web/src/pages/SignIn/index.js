import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import logo from '~/assets/logo.png'

import { signInRequest } from '~/store/modules/auth/actions'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid email')
    .required('The email is required'),
  password: Yup.string().required('The password is required')
})

export default function SignIn() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password))
  }

  return (
    <>
      <img alt="Meetup" width="200" src={logo} />
      <Form schema={schema} autoComplete="no-complete" onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Enter your email" />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit">{loading ? 'Please wait...' : 'SignIn'}</button>
        <Link to="/register">Register</Link>
      </Form>
    </>
  )
}
