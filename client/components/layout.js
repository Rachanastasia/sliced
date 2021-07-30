import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import Banner from './Banner'
import favicon from '../public/favicon_io/favicon.ico'
import { DEFAULT_DESCRIPTION } from '../config/constants'

export default function Screen({children, description=DEFAULT_DESCRIPTION, title='Scale your recipes with Sliced', showBanner}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta property="og:type" content="website" key='ogtype'/>
        <meta name="author" content="Rachel Reilly"/>
        <meta property="og:url" content='https://sliced.vercel.app/' key="ogurl" />
        <meta name="description" property="og:description" content={description} key="ogdesc"/>
        <meta name="title" property="og:title" content={title} key="ogtitle"/>
        <meta name="image" property="og:image" content="https://www.flickr.com/photos/193574908@N02/51345247352/in/dateposted-public/" key="ogimage"/>
        <meta property="og:site_name" content='Sliced' key="ogsitename" />
        <link rel="icon" type="image/x-icon"  href="https://sliced-rachanastasia.vercel.app/_next/static/media/slice-line.c74f7d520b78c549bc1920b7a803dee8.svg" />
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