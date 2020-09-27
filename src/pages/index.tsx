import React, { FC } from 'react'
import Head from 'next/head'

import { Container } from 'styles/pages/Home'

const Home: FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>React Js Structure</h1>
      <p>A ReactJs + Next.js boilerplate project</p>
    </Container>
  )
}

export default Home
