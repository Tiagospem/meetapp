import React, { useState } from 'react'
import history from '~/services/history'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { Form, Input } from '@rocketseat/unform'
import { MdAddBox } from 'react-icons/md'
import Breadcumb from '~/components/Breadcumb'
import DatePicker from '~/components/DatePicker'
import { Container, Button } from './styles'
import api from '~/services/api'

import LabelFile from '~/components/LabelFile'

const schema = Yup.object().shape({
  banner_id: Yup.number().required('The banner is required'),
  title: Yup.string().required('The title is required'),
  location: Yup.string().required('The location is required'),
  date: Yup.string().required('The date is required'),
  description: Yup.string()
    .min(50, 'The description requires min 50 characters')
    .required('The password is required')
})

export default function Create() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(data) {
    try {
      setLoading(true)
      await api.post('meetups', data)
      toast.success('Meetup created!')
      history.push('/dashboard')
    } catch (e) {
      setLoading(false)
      toast.error('Error to create meetup')
    }
  }

  return (
    <Container>
      <Breadcumb
        title="Create New"
        subtitle="You can create new meetings here"
        icon={<MdAddBox />}
      />
      <Form schema={schema} autoComplete="no-complete" onSubmit={handleSubmit}>
        <LabelFile name="banner_id" />
        <Input name="title" type="string" placeholder="Title" />
        <Input name="location" type="string" placeholder="Location" />
        <DatePicker name="date" />
        <Input
          multiline
          name="description"
          placeholder="Please enter the description of your meeting"
        />
        <Button type="submit">{loading ? 'Creating...' : 'Create'}</Button>
      </Form>
    </Container>
  )
}
