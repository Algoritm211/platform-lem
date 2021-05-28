import React, { useEffect } from 'react'
import ProfileNavbar from '../Navbars/ProfileNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../store/auth/selectors'
import ProfileCourseCard from './ProfileCourseCard'
import { loadUserCourses } from '../../store/courses/thunks'
import { getUserCourses } from '../../store/courses/selectors'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import Loader from '../Loader/Loader'

const ProfileMain = () => {
  const { t } = useTranslation('profile')

  const dispatch = useDispatch()
  const user = useSelector(getUserData)
  const userCourses = useSelector(getUserCourses)

  useEffect(() => {
    dispatch(loadUserCourses())
  }, [])

  if (!userCourses) {
    return <Loader />
  }

  const courseLearningBlock = userCourses.map((course) => {
    return <ProfileCourseCard course={course} key={course._id}/>
  })
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-3 col-md-2">
            <ProfileNavbar/>
          </div>
          <div className="col-sm-9 col-md-10">
            <div className="col-12 сol-sm-6 profile-welcome">
              <div className="profile-welcome-block">
                <h3 className="profile-welcome-title">{t('title')}, {user.name}</h3>
                <p className="profile-welcome-subtitle">{t('subtitle')}</p>
              </div>
              <div className="col-12 col-sm-6">
                <img className="profile-welcome-img" src="/7.png" alt="upgrade"/>
              </div>
            </div>
            <div className="profile-courses">
              <h3 className="profile-courses-title">{t('myCourses')}</h3>
              {courseLearningBlock.length !== 0
                ? courseLearningBlock
                : (
                  <div className="profile-courses-one d-flex my-3">
                    <img className="profile-courses-nocourses-img" src="/9.png" alt="preview-course-photo"/>
                    <div className="profile-courses-one-content">
                      <h3 className="profile-courses-one-title" style={{ fontSize: '18px' }}>{t('ohUh')}</h3>
                      <p className="profile-courses-one-text">{t('noCourse')}</p>
                      <Link href={'/programs'}>
                        <a className="profile-courses-nocourse-a">
                          <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>{t('findCourse')}</p>
                        </a>
                      </Link>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileMain
