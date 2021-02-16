import React from 'react'
import Head from 'next/head'

import { Container, Title, Caption } from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Vinicius G.</title>
      </Head>
      <main>
        <Title>Portfolio de desenvolvimento de Vinicius G.</Title>
        <Caption>Site ainda em construção!</Caption>
      </main>
    </Container>
  )
}
