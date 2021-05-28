import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { getCurrentCourse } from '../../store/courses/selectors'
import { useTranslation } from 'next-i18next'

const CourseNavbar = () => {
  const { t } = useTranslation('navbar')

  const router = useRouter()
  const currentCourse = useSelector(getCurrentCourse)

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
    <div className="profile-mobile" style={{ justifyContent: 'space-around' }}>
      <div className="profile-button mb-4">
        <div className="profile-button d-flex mb-3">
          <p className="profile-button-text" style={{ fontSize: '16px' }}>{t('course')}</p>
        </div>
        <div className="profile-button d-flex mb-4">
          {fieldCreator(t('description'), `/editor/${currentCourse?._id}`, 'fas fa-align-left')}
        </div>
        <div className="profile-button d-flex mb-4">
          {fieldCreator(t('content'), `/courseplan/${currentCourse?._id}`, 'fas fa-th-large')}
        </div>
        <hr className="separator-mobile"/>
      </div>
      <div className="profile-button mb-4">
        <div className="profile-button d-flex mb-4">
          {fieldCreator(t('dashboard'), '/profile', 'fab fa-flipboard')}
        </div>
        <div className="profile-button d-flex mb-4">
          {fieldCreator(t('teaching'), '/teaching', 'fas fa-book')}
        </div>
        <div className="profile-button d-flex mb-4">
          {fieldCreator(t('settings'), '/settings', 'fas fa-cog')}
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
      </div>
    </div>

  )
}

export default CourseNavbar
