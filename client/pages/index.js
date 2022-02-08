import { Fragment } from 'react'
import Head from 'next/head'

import { Recipe, Header, Footer } from '../components'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Sliced | Scale and Edit your Recipes</title>
        <link
          rel="preconnect"
          key="preconnect1"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          key="preconnect2"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          key="font"
          href={`https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap`}
          rel="stylesheet"
        />
      </Head>
      <main>
        <Header />
        <Recipe />
        <Footer />
      </main>
    </Fragment>
  )
}
