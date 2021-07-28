import Head from 'next/head'

import '../styles/variables.css'
import '../styles/variables.old.css'
import '../styles/main.css'
import '../styles/form.css'
import '../styles/footer.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon"  href="../public/favicon_io/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
