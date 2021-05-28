import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CreateCourseModal from '../EditorPage/CreateCourseModal/CreateCourseModal'
import { useTranslation } from 'next-i18next'

const ProfileNavbar = () => {
  const router = useRouter()
  const [createCourseModalShow, setCreateCourseModalShow] = useState(false)
  const { t } = useTranslation('navbar')

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
        <h3 className="profile-create-course-text">{t('createCourse')}</h3>
        <i className="fas fa-plus-circle profile-create-course-illustration"/>
      </div>
      <div className="profile-button d-flex mb-4">
        {fieldCreator( t('dashboard'), '/profile', 'fab fa-flipboard')}
      </div>
      <div className="profile-button d-flex mb-4">
        {fieldCreator( t('teaching'), '/teaching', 'fas fa-book')}
      </div>
      <div className="profile-button d-flex mb-4">
        {fieldCreator( t('settings'), '/settings', 'fas fa-cog')}
      </div>
      <div className="profile-upgrade-block mt-5">
        <img className="profile-upgrade-img" src="/6.png" alt="upgrade"/>
        <p className="profile-upgrade-text">{t('upToPro')}</p>
        <Link href={`/plans`}>
          <a style={{ textDecoration: 'none' }}>
            <button className="profile-upgrade-button">{t('upgrade')}</button>
          </a>
        </Link>
      </div>
      <CreateCourseModal
        show={createCourseModalShow}
        onHide={() => setCreateCourseModalShow(false)}
      />
    </div>

  )
}

export default ProfileNavbar
