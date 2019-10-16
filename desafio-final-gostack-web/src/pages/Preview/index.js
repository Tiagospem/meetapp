import React, { useEffect, useState } from 'react'
import Breadcumb from '~/components/Breadcumb'
import { MdBookmark, MdPinDrop, MdToday } from 'react-icons/md'
import history from '~/services/history'
import { toast } from 'react-toastify'
import { format, parseISO } from 'date-fns'
import api from '~/services/api'

import {
  Container,
  Meetup,
  Image,
  Content,
  Title,
  Local,
  Description,
  Subscriptions,
  Subscription,
  SubscriptionTitle,
  Date,
  Name,
  Email
} from './styles'

export default function Preview({ match }) {
  const [subscriptions, setSubscriptions] = useState([])
  const [banner, setBanner] = useState({})
  const [meetup, setMeetup] = useState({})

  useEffect(() => {
    async function loadMeetup() {
      await api
        .get(`/organizers/meetup/${match.params.meetup_id}`)
        .then(meetup => {
          console.tron.log(meetup)
          const slice = {
            ...meetup.data,
            date: format(parseISO(meetup.data.date), 'MMM d, YYY - HH:mm')
          }
          setMeetup(slice)
          setBanner(meetup.data.banner)
          setSubscriptions(meetup.data.subscriptions)
        })
        .catch(() => {
          toast.error('Meetup not found')
          history.push('/dashboard')
        })
    }
    loadMeetup()
  }, [match])

  return (
    <Container>
      <Breadcumb
        title="Preview"
        subtitle={meetup.title}
        icon={<MdBookmark />}
      />
      <Meetup>
        <Image background={banner.url}></Image>
        <Content>
          <Title>{meetup.title}</Title>
          <Local>
            <MdPinDrop /> {meetup.location}
          </Local>
          <Date>
            <MdToday /> {meetup.date}
          </Date>
          <Description>{meetup.description}</Description>
          <SubscriptionTitle>Subscriptions:</SubscriptionTitle>
          <Subscriptions>
            {subscriptions.map(sub => (
              <Subscription key={sub.id}>
                <Name>{sub.user.name}</Name>
                <Email>{sub.user.email}</Email>
              </Subscription>
            ))}
            {subscriptions.length === 0 && (
              <Subscription>No subscriptions yet</Subscription>
            )}
          </Subscriptions>
        </Content>
      </Meetup>
    </Container>
  )
}
