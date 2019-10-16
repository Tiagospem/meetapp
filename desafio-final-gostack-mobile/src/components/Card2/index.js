import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { removeSubscription } from '~/store/modules/subscription/actions'
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
  UnSubscribeButton
} from './styles'
import { StyleSheet, Alert } from 'react-native'

import api from '~/services/api'

export default function Card2({ data, navigation }) {
  const dispatch = useDispatch()

  const dateParsed = useMemo(() => {
    return format(parseISO(data.meetup.date), 'MMM d, YYY - HH:mm')
  }, [data.meetup.date])

  const styles = StyleSheet.create({
    shadow: {
      elevation: 1
    }
  })

  async function unsubscribe() {
    await api
      .delete(`subscriptions/${data.id}`)
      .then(() => {
        dispatch(removeSubscription(data.id))
        Toast.show('Unsubscribed', Toast.LONG)
      })
      .catch(error => {
        Toast.show(error.response.data.message, Toast.LONG)
      })
  }

  function handleUnSubscribe() {
    Alert.alert(
      'Confirm unsubscription',
      `${data.meetup.title} at ${dateParsed}?`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => unsubscribe()
        }
      ],
      { cancelable: false }
    )
  }

  function renderSubscribeButton() {
    return (
      <UnSubscribeButton
        subscribed={data.meetup.subscribed}
        style={styles.shadow}
        onPress={handleUnSubscribe}>
        <FontAwesome5 name={'calendar-minus'} size={20} color="#fff" />
      </UnSubscribeButton>
    )
  }

  return (
    <Container
      style={styles.shadow}
      past={data.meetup.past_meetup}
      onPress={() =>
        navigation.navigate('Subscription', { meetup: data.meetup })
      }>
      <Content>
        <Banner source={{ uri: data.meetup.banner.url }} />
        {!data.meetup.past_meetup && renderSubscribeButton()}
        <Info>
          <Title>{data.meetup.title}</Title>
          <Time>
            <FontAwesome5 name={'calendar-alt'} /> {dateParsed}hs
          </Time>
          <Location>
            <FontAwesome5 name={'map-marked-alt'} /> {data.meetup.location}
          </Location>
          <Organizer>
            <FontAwesome5 name={'user-cog'} /> Organizer:{' '}
            {data.meetup.organizer.name}
          </Organizer>
        </Info>
      </Content>
    </Container>
  )
}
