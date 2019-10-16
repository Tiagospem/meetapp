import React, { useMemo } from 'react'
import { parseISO, format } from 'date-fns'
import {
  Container,
  Background,
  Preview,
  Banner,
  Title,
  Location,
  Date,
  Description,
  Organizer,
  Divider,
  Strong
} from './styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import CustomHeader from '~/components/CustomHeader'
import Logout from '~/components/LogoutHeaderButton'
import Back from '~/components/BackHeaderButton'

export default function Subscription({ navigation }) {
  const meetup = navigation.getParam('meetup')
  const dateParsed = useMemo(() => {
    return format(parseISO(meetup.date), 'MMM d, YYY - HH:mm')
  }, [meetup.date])

  return (
    <Container>
      <Background>
        <CustomHeader
          rightComponent={<Logout />}
          leftComponent={<Back navigation={navigation} />}
          placement="center"
        />
        <Preview>
          <Banner source={{ uri: meetup.banner.url }} />
          <Title>{meetup.title}</Title>
          <Divider />
          <Location>
            <FontAwesome5 name={'map-marked-alt'} /> {meetup.location}
          </Location>
          <Date>
            <FontAwesome5 name={'calendar-alt'} /> {dateParsed}h
          </Date>
          <Organizer>
            <FontAwesome5 name={'user-cog'} /> {meetup.organizer.name}
          </Organizer>
          <Divider />
          <Description>
            <Strong>About meetup:</Strong> {meetup.description}
          </Description>
        </Preview>
      </Background>
    </Container>
  )
}
