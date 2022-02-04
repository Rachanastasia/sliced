import { Fragment } from 'react'

import Head from 'next/head'
import { Recipe, Header } from '../components'

export default function Home() {
  return (
    <Fragment>
      <Head></Head>
      <main>
        <Header />
        <Recipe />
      </main>
    </Fragment>
  )
}
