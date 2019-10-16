import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withNavigationFocus } from 'react-navigation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { Container, Background, List, NoMeetups, Message } from './styles'

import api from '~/services/api'

import Card2 from '~/components/Card2'
import CustomHeader from '~/components/CustomHeader'
import Logout from '~/components/LogoutHeaderButton'
import { setSubscriptions } from '~/store/modules/subscription/actions'

function Subscriptions({ isFocused, navigation }) {
  const dispatch = useDispatch()
  const subscriptions = useSelector(state => state.subscription.subscriptions)

  useEffect(() => {
    async function loadData() {
      const reponse = await api.get('subscriptions')
      dispatch(setSubscriptions(reponse.data))
    }
    loadData()
  }, [dispatch, isFocused])

  return (
    <Background>
      <Container>
        <CustomHeader rightComponent={<Logout />} placement="center" />
        {subscriptions.length > 0 ? (
          <List
            bounces={false}
            data={subscriptions}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Card2 data={item} navigation={navigation} />
            )}
          />
        ) : (
          <NoMeetups>
            <Message>
              <FontAwesome5 name="calendar-times" /> No subscription found.
            </Message>
          </NoMeetups>
        )}
      </Container>
    </Background>
  )
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Subscriptions',
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome5 name={'calendar-check'} color={tintColor} size={20} />
  )
}
export default withNavigationFocus(Subscriptions)
