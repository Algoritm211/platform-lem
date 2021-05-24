import React from 'react'
import Link from 'next/link'

const ForbiddenPage = () => {
  return (
    <div>
      This page is forbidden, return to home page
      <br />
      <Link href={'/'}>
        <a>
          Main Page
        </a>
      </Link>

    </div>
  )
}

export default ForbiddenPage
