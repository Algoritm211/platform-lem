import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CreateCourseModal from '../EditorPage/CreateCourseModal/CreateCourseModal'

const ProfileNavbar = () => {
  const router = useRouter()
  const [createCourseModalShow, setCreateCourseModalShow] = useState(false)

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
      <div className="profile-create-course d-flex mb-5" onClick={() => setCreateCourseModalShow(true)}>
        <h3 className="profile-create-course-text">Create new course</h3>
        <i className="fas fa-plus-circle profile-create-course-illustration"/>
      </div>
      <div className="profile-button d-flex mb-4">
        {fieldCreator('Dashboard', '/profile', 'fab fa-flipboard')}
      </div>
      <div className="profile-button d-flex mb-4">
        {fieldCreator('Editor', '/editor', 'fab fa-elementor')}
      </div>
      <div className="profile-button d-flex mb-4">
        {fieldCreator('Settings', '/settings', 'fas fa-cog')}
      </div>
      <div className="profile-upgrade-block mt-5">
        <img className="profile-upgrade-img" src="/6.png" alt="upgrade"/>
        <p className="profile-upgrade-text">Upgrade to PRO version to get more features</p>
        <button className="profile-upgrade-button">Upgrade</button>
      </div>
      <CreateCourseModal
        show={createCourseModalShow}
        onHide={() => setCreateCourseModalShow(false)}
      />
    </div>

  )
}

export default ProfileNavbar
