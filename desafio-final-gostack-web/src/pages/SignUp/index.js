import React from 'react'
import { Form, Input } from '@rocketseat/unform'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import logo from '~/assets/logo.png'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid email')
    .required('The email is required'),
  password: Yup.string()
    .min(8, 'The password requires min 8 characters')
    .required('The password is required'),
  name: Yup.string().required('The name is required')
})

export default function SignUp() {
  function handleSubmit(data) {}

  return (
    <>
      <img alt="Meetup" width="200" src={logo} />
      <Form schema={schema} autoComplete="no-complete" onSubmit={handleSubmit}>
        <Input name="name" type="string" placeholder="Enter your name" />
        <Input name="email" type="email" placeholder="Enter your email" />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit">SignUp</button>
        <Link to="/">Login</Link>
      </Form>
    </>
  )
}
