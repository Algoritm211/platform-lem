import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const CourseNavbar = () => {
  const router = useRouter()

  const fieldCreator = (textLink, routePath, iconClass) => {
    return (
      <Link href={routePath}>
        <a className={'profile-button-link d-flex'} style={{ color: router.route.includes(routePath) && '#0070f3' }}>
          <i className={iconClass + ' profile-button-illustration'}/>
          <p className="profile-button-text">{textLink}</p>
        </a>
      </Link>
    )
  }
  return (
    <div className="profile-mobile">
      <div className="profile-button mb-4">
        <div className="profile-button d-flex mb-3">
          <p className="profile-button-text" style={{ fontSize: '16px' }}>Course</p>
        </div>
        <div className="profile-button d-flex mb-4">
          {fieldCreator('Description', '/editor', 'fas fa-align-left')}
        </div>
        <div className="profile-button d-flex mb-4">
          {fieldCreator('Content', '/courseplan', 'fas fa-th-large')}
        </div>

        <div className="profile-button d-flex pt-5 mb-4" style={{ borderTop: '1px solid #212529' }}>
          {fieldCreator('Dashboard', '/profile', 'fab fa-flipboard')}
        </div>
        <div className="profile-button d-flex mb-4">
          {fieldCreator('Teaching', '/teaching', 'fas fa-book')}
        </div>
        <div className="profile-button d-flex mb-4">
          {fieldCreator('Settings', '/settings', 'fas fa-cog')}
        </div>
        <div className="profile-upgrade-block mt-5">
          <img className="profile-upgrade-img" src="/6.png" alt="upgrade"/>
          <p className="profile-upgrade-text">Upgrade to PRO version to get more features</p>
          <a href={`/plans`}>
            <button className="profile-upgrade-button">Upgrade</button>
          </a>
        </div>
      </div>
    </div>

  )
}

export default CourseNavbar
