import { Fragment } from 'react'

import Head from 'next/head'
import { Recipe, Header } from '../components'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Sliced | An App to Scale and Manipulate Recipes</title>
      </Head>
      <main>
        <Header />
        <Recipe />
      </main>
    </Fragment>
  )
}
