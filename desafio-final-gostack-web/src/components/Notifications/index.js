import React, { useState } from 'react'
import { MdNotifications } from 'react-icons/md'
import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll
} from './styles'

function Notifications() {
  const [visible, setVisible] = useState(false)

  function handleToggleVisible() {
    setVisible(!visible)
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={true}>
        <MdNotifications color="#a64536" size={20} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread={false}>
            <p>test test test</p>
            <time>10:00:00</time>
            <button type="button">Mark as read</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  )
}

export default Notifications
