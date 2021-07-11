import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutSliced from '../components/AboutSliced'
import Slicer from '../components/Slicer/index'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sliced</title>
        <meta name="description" content="Scale your recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <AboutSliced />
        <Slicer />
      </main>

      <Footer />
    </div>
  )
}
