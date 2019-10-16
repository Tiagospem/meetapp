import React, { useState, useRef, useEffect } from 'react'
import { useField } from '@rocketseat/unform'
import DatePicker from 'react-datepicker'
import { parseISO } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'

export default function DatePickerCustom({ name }) {
  const ref = useRef(null)
  const { defaultValue, fieldName, registerField } = useField(name)
  const [selected, setSelected] = useState(defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear()
      }
    })
    if (defaultValue) {
      setSelected(parseISO(defaultValue))
    }
  }, [ref.current, defaultValue]); // eslint-disable-line

  return (
    <>
      <DatePicker
        name={fieldName}
        selected={selected}
        ref={ref}
        placeholderText="Date"
        onChange={date => setSelected(date)}
        data-date={selected}
        showTimeSelect
        timeFormat="p"
        minDate={new Date()}
        timeIntervals={15}
        dateFormat="yyyy-M-dd h:mm"
      />
    </>
  )
}
