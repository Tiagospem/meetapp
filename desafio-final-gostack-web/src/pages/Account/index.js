import React from 'react'
import Breadcumb from '~/components/Breadcumb'
import { MdLock } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import { updateProfileRequest } from '~/store/modules/user/actions'
import { Container, Button } from './styles'

export default function Profile() {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)
  const loading = useSelector(state => state.user.loading)
  function handleSubmit(data) {
    dispatch(updateProfileRequest(data))
  }
  return (
    <Container>
      <Breadcumb
        title="Account"
        subtitle="You can update your credentials here"
        icon={<MdLock />}
      />
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Your name" />
        <Input name="email" type="email" placeholder="Your password" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Your current password"
          autoComplete="new-password"
        />
        <Input name="password" type="password" placeholder="New password" />
        <Input
          name="passwordConfirm"
          type="password"
          placeholder="Confirm password"
        />
        <Button type="submit">{loading ? 'Updating...' : 'Update'}</Button>
      </Form>
    </Container>
  )
}
