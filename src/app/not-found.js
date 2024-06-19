import Link from 'next/link'
import React from 'react'

const PageNotFound= () => {
  return (
    <div className='container'>
        404 page notfound ! <Link href={'/'}> Back to home</Link>
    </div>
  )
}

export default PageNotFound