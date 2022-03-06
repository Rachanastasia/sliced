import { Fragment } from 'react'
import Head from 'next/head'

import { Recipe, Header, Footer } from '../components'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <meta
          name="image"
          property="og:image"
          content="https://www.flickr.com/photos/194941749@N07/51922591540/in/dateposted-public/"
          key="ogimage"
        />
        <meta
          property="og:description"
          content="Sliced is an app that parses and scales recipes, allowing users to scale a recipe by changing the amounts of certain ingredients."
          key="ogdesc"
        />
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
        <link rel="shortcut icon" href="/static/favicon.svg" />
      </Head>
      <main>
        <Header />
        <Recipe />
        <Footer />
      </main>
    </Fragment>
  )
}
