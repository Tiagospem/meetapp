import React, { useMemo, useState, useEffect } from 'react'
import { parseISO, format } from 'date-fns'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Toast from 'react-native-simple-toast'
import {
  Container,
  Content,
  Banner,
  Info,
  Title,
  Time,
  Location,
  Organizer,
  SubscribeButton
} from './styles'
import { StyleSheet, Alert } from 'react-native'
import api from '~/services/api'

export default function Card({ data, navigation }) {
  const [meetup, setMeetup] = useState(data)

  useEffect(() => {
    setMeetup(data)
  }, [data])

  const dateParsed = useMemo(() => {
    return format(parseISO(meetup.date), 'MMM d, YYY - HH:mm')
  }, [meetup.date])

  const styles = StyleSheet.create({
    shadow: {
      elevation: 1
    }
  })

  async function subscribe() {
    await api
      .post('subscriptions', {
        meetup_id: meetup.id
      })
      .then(response => {
        setMeetup({
          ...meetup,
          subscribed: true,
          subscription_id: response.data.id
        })
        Toast.show('Subscribed', Toast.LONG)
      })
      .catch(error => {
        Toast.show(error.response.data.message, Toast.LONG)
      })
  }

  async function unsubscribe() {
    await api
      .delete(`subscriptions/${meetup.subscription_id}`)
      .then(() => {
        setMeetup({
          ...meetup,
          subscribed: false,
          subscription_id: null
        })
        Toast.show('Unsubscribed', Toast.LONG)
      })
      .catch(error => {
        Toast.show(error.response.data.message, Toast.LONG)
      })
  }

  function handleSubscribe() {
    Alert.alert(
      meetup.subscribed ? 'Confirm unsubscription' : 'Confirm subscription',
      `${meetup.title} at ${dateParsed}?`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => (meetup.subscribed ? unsubscribe() : subscribe())
        }
      ],
      { cancelable: false }
    )
  }

  function renderSubscribeButton() {
    return (
      <SubscribeButton
        subscribed={meetup.subscribed}
        style={styles.shadow}
        onPress={handleSubscribe}>
        <FontAwesome5
          name={meetup.subscribed ? 'calendar-check' : 'calendar-plus'}
          size={20}
          color="#fff"
        />
      </SubscribeButton>
    )
  }
  return (
    <Container
      style={styles.shadow}
      past={meetup.past_meetup}
      onPress={() => navigation.navigate('Subscription', { meetup })}>
      <Content>
        <Banner source={{ uri: meetup.banner.url }} />
        {!meetup.past_meetup && renderSubscribeButton()}
        <Info>
          <Title>{meetup.title}</Title>
          <Time>
            <FontAwesome5 name={'calendar-alt'} /> {dateParsed}hs
          </Time>
          <Location>
            <FontAwesome5 name={'map-marked-alt'} /> {meetup.location}
          </Location>
          <Organizer>
            <FontAwesome5 name={'user-cog'} /> Organizer:{' '}
            {meetup.organizer.name}
          </Organizer>
        </Info>
      </Content>
    </Container>
  )
}
