import { Fragment } from 'react'

import Head from 'next/head'
import { About as AboutContent, Footer, Header } from '../components'

export default function About() {
  return (
    <Fragment>
      <Head>
        <title>About Sliced | Scale and Edit your Recipes</title>
      </Head>
      <main>
        <Header hideAbout />
        <AboutContent />
        <Footer />
      </main>
    </Fragment>
  )
}
