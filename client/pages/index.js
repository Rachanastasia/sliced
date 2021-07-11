import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutSliced from '../components/AboutSliced'
import Slicer from '../components/Slicer/index'


export default function Home() {
  return (
    <div id='App'>
      <Head>
        <title>Sliced</title>
        <meta name="description" content="Scale your recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className='screen_content'>
          <AboutSliced />
          <Slicer />
        </div>
        <Footer />
      </main>

      
    </div>
  )
}
