import React from 'react'
import Link from 'next/link'

const ForbiddenPage = () => {
  return (
    <div className="container d-flex text-center" style={{ height: '100vh', alignItems: 'center' }}>
      <div className="row">
        <div className="col-12 col-md-4 p-5 m-auto">
          <h2 className="category-picker my-3">Forbidden</h2>
          <Link href={'/'}>
            <a>
              <button className="content-btn">Go to main</button>
            </a>
          </Link>
        </div>
        <div className="col-12 col-md-8 m-auto order-first order-md-last">
          <img className="content-image" src="/403.png" alt="photo"/>
        </div>
      </div>
    </div>
  )
}

export default ForbiddenPage
