import { Fragment } from 'react'
import Head from 'next/head'

import { Recipe, Header, Footer } from '../components'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Sliced | Scale and Edit your Recipes</title>
      </Head>
      <main>
        <Header />
        <Recipe />
        <Footer />
      </main>
    </Fragment>
  )
}
