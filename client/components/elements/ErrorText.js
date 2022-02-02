import React, { useContext, useEffect } from 'react'
import { Fragment } from 'react'

function ErrorText({ error }) {
  return (
    <Fragment>
      {error ? <span className="error">{error}</span> : <></>}
    </Fragment>
  )
}

export default ErrorText
