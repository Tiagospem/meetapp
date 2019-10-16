import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify'
import 'react-confirm-alert/src/react-confirm-alert.css'
import history from '~/services/history'
import { format, parseISO } from 'date-fns'
import Breadcumb from '~/components/Breadcumb'
import {
  MdEdit,
  MdDeleteForever,
  MdInfo,
  MdDashboard,
  MdPinDrop,
  MdToday,
  MdGroup
} from 'react-icons/md'
import {
  Container,
  List,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  NoMeetup
} from './styles'
import api from '~/services/api'

export default function Dashboard() {
  const [meetups, setMeetups] = useState([])

  async function cancelMeetup(id) {
    try {
      await api.delete(`organizers/meetup/${id}`)
      setMeetups(meetups.filter(m => m.id !== id))
    } catch (e) {
      toast.error('Error to delete meetup')
    }
  }

  function cancel(id) {
    confirmAlert({
      title: 'Confirm to cancel',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => cancelMeetup(id)
        },
        {
          label: 'No'
        }
      ]
    })
  }

  useEffect(() => {
    async function loadData() {
      const response = await api.get('organizers')
      if (response.data) {
        const slice = response.data.map(m => {
          return {
            ...m,
            title: m.title.slice(0, 70),
            location: m.location.slice(0, 35),
            date: format(parseISO(m.date), 'MMM d, YYY - HH:mm'),
            count: m.subscriptions.length
          }
        })
        setMeetups(slice)
      }
    }
    loadData()
  }, [])

  return (
    <Container>
      <Breadcumb
        title="Dashboard"
        subtitle="Your current meetings. You can preview, cancel and edit meetings"
        icon={<MdDashboard />}
      />
      {meetups.length === 0 && (
        <NoMeetup>
          <span>No meetups found</span>
        </NoMeetup>
      )}
      <List>
        {meetups.map(m => (
          <Card key={m.id} past={m.past_meetup}>
            <CardHeader image={m.banner.url} />
            <CardBody>
              <div>
                <p>
                  <strong>{m.title}</strong>
                </p>
                <p>
                  <MdToday /> {m.date}
                </p>
                <p>
                  <MdPinDrop /> {m.location}
                </p>
                <p>
                  <MdGroup /> {m.count} subscribers
                </p>
              </div>
            </CardBody>
            <CardFooter past={m.past_meetup}>
              <button onClick={() => history.push(`/meetup/${m.id}`)}>
                <MdInfo />
              </button>
              {!m.past_meetup && (
                <>
                  <button onClick={() => history.push(`/edit/meetup/${m.id}`)}>
                    <MdEdit />
                  </button>
                  <button onClick={() => cancel(m.id)}>
                    <MdDeleteForever />
                  </button>
                </>
              )}
            </CardFooter>
          </Card>
        ))}
      </List>
    </Container>
  )
}
