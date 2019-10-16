import React from 'react'

import { Container } from './styles'

export default function Breadcumb({ title, subtitle, icon }) {
  return (
    <Container>
      <h1>
        {icon} <span>{title}</span>
      </h1>
      <p>{subtitle}</p>
    </Container>
  )
}
