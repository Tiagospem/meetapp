import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import HeaderButton from '~/components/HeaderButton'
import DateTimePicker from 'react-native-modal-datetime-picker'

import { setDate } from '~/store/modules/main/actions'

// https://www.npmjs.com/package/react-native-modal-datetime-picker

export default function CalendarModal() {
  const dispatch = useDispatch()
  const filter_date = useSelector(state => state.main.date)

  const [visible, setVisible] = useState(false)

  function showDateTimePicker() {
    setVisible(true)
  }

  function hideDateTimePicker() {
    setVisible(false)
  }

  function handleDatePicked(date) {
    dispatch(setDate(date))
    hideDateTimePicker()
  }

  return (
    <>
      <HeaderButton onPress={showDateTimePicker}>
        <FontAwesome5 name="calendar-alt" size={25} color="#666" />
      </HeaderButton>
      <DateTimePicker
        date={filter_date || new Date()}
        isVisible={visible}
        onConfirm={handleDatePicked}
        onCancel={hideDateTimePicker}
      />
    </>
  )
}
