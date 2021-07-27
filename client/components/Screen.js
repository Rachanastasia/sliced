import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Screen({children, description='A copy and paste your favorite recipes to scale the ingredients', title='Scale your recipes with Sliced', showBanner}) {
  return (
    <>
      <Head>
      <link rel="shortcut icon" href="../public/favicon_knife.png" />
        <title>Sliced</title>
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content="../public/main-page.png" />
      </Head>
      <main>
        <Header />
        {showBanner && <Banner />}
        <div className='screen'>
            {children}
        </div>
        <Footer />
      </main>
    </>
  )
}