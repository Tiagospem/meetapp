import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { format } from 'date-fns'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Container, Text, Button } from './styles'

import { removeDate } from '~/store/modules/main/actions'

export default function FilterLabel() {
  const dispatch = useDispatch()

  const filter_date = useSelector(state => state.main.date)

  const dateParsed = useMemo(() => {
    const date = filter_date ? filter_date : new Date()
    return format(date, "'Filter by' MMM d, YYY")
  }, [filter_date])

  function handleRemoveFilter() {
    dispatch(removeDate())
  }

  return (
    <Container>
      <Text>{dateParsed}</Text>
      <Button onPress={handleRemoveFilter}>
        <FontAwesome5 name={'times-circle'} size={20} color={'#fff'} />
      </Button>
    </Container>
  )
}
