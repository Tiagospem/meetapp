import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ActivityIndicator } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import api from '~/services/api'
import Card from '~/components/Card'
import { Container, Background, List, NoMeetups, Message } from './styles'
import CustomHeader from '~/components/CustomHeader'
import CalendarModal from '~/components/CalendarModal'
import Logout from '~/components/LogoutHeaderButton'
import FilterLabel from '~/components/FilterLabel'

function Main({ isFocused, navigation }) {
  const [meetups, setMeetups] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)

  const filter_date = useSelector(state => state.main.date)

  async function loadMeetups(pg, refresh = false) {
    setRefreshing(refresh)
    const response = await api.get('meetups', {
      params: { limit: 4, page: pg, filter_date }
    })
    setLoading(false)
    setRefreshing(false)
    setMeetups(
      !refresh
        ? [...meetups, ...response.data.meetups]
        : [...response.data.meetups]
    )
    setTotalPages(response.data.pages)
    setPage(pg)
  }

  function renderFooter() {
    if (!loading) {
      return null
    }
    return <ActivityIndicator size={30} color="#7159c1" />
  }

  async function loadMore() {
    if (page < totalPages) {
      setLoading(true)
      loadMeetups(page + 1, false)
    }
  }

  useEffect(() => {
    loadMeetups(1, true)
  }, [])

  useEffect(() => {
    loadMeetups(1, true)
  }, [filter_date])

  return (
    <Background>
      <Container>
        <CustomHeader
          leftComponent={<CalendarModal />}
          rightComponent={<Logout />}
          placement="center"
        />
        {filter_date && <FilterLabel />}
        {meetups.length > 0 ? (
          <List
            bounces={false}
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Card data={item} navigation={navigation} />
            )}
            refreshing={refreshing}
            onRefresh={() => loadMeetups(1, true)}
            onEndReachedThreshold={0.1}
            onEndReached={() => loadMore()}
            ListFooterComponent={renderFooter()}
          />
        ) : (
          <NoMeetups>
            <Message>
              <FontAwesome5 name="calendar-times" /> No meetups found.
            </Message>
          </NoMeetups>
        )}
      </Container>
    </Background>
  )
}

Main.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name={'list'} color={tintColor} size={20} />
  )
}
export default Main
