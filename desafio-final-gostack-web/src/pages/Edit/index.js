import React, { useState, useEffect } from 'react'
import history from '~/services/history'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { Form, Input } from '@rocketseat/unform'
import { MdEdit } from 'react-icons/md'
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

export default function Edit({ match }) {
  const [loading, setLoading] = useState(false)
  const [banner, setBanner] = useState({})
  const [meetup, setMeetup] = useState({})

  useEffect(() => {
    async function loadMeetup() {
      await api
        .get(`/organizers/meetup/${match.params.meetup_id}`)
        .then(meetup => {
          setMeetup(meetup.data)
          setBanner(meetup.data.banner)
        })
        .catch(() => {
          toast.error('Meetup not found')
          history.push('/dashboard')
        })
    }
    loadMeetup()
  }, [match])

  async function handleSubmit(data) {
    try {
      setLoading(true)
      await api.put(`meetups/${match.params.meetup_id}`, data)
      toast.success('Meetup updated!')
      setLoading(false)
    } catch (e) {
      setLoading(false)
      toast.error('Error to update meetup')
    }
  }

  return (
    <Container>
      <Breadcumb
        title="Edit Meetup"
        subtitle="You can edit your meetup here"
        icon={<MdEdit />}
      />
      <Form
        schema={schema}
        initialData={meetup}
        autoComplete="no-complete"
        onSubmit={handleSubmit}
      >
        <LabelFile fileData={banner} name="banner_id" />
        <Input name="title" type="string" placeholder="Title" />
        <Input name="location" type="string" placeholder="Location" />
        <DatePicker name="date" />
        <Input
          multiline
          name="description"
          placeholder="Please enter the description of your meeting"
        />
        <Button type="submit">{loading ? 'Saving...' : 'Save'}</Button>
      </Form>
    </Container>
  )
}
