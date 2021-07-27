import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function Screen({children, description='Scale your recipes'}) {
  return (
    <>
      <Head>
        <title>Sliced</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" type="image/png" href="../public/favicon_knife.png" />
      </Head>
      <main>
        <Header />
        <div className='screen'>
            {children}
        </div>
        <Footer />
      </main>
    </>
  )
}