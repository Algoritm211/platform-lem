import React, { useEffect } from 'react'
import ProfileNavbar from '../Navbars/ProfileNavbar'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../store/auth/selectors'
import { getUserCourses } from '../../store/courses/selectors'
import { loadUserCourses } from '../../store/courses/thunks'
import ProfileCourseCard from '../ProfileMain/ProfileCourseCard'

const ProfileTeaching = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUserData)
  const userCourses = useSelector(getUserCourses)

  useEffect(() => {
    dispatch(loadUserCourses())
  }, [])

  if (!userCourses) {
    return <div>loading...</div>
  }

  const courseBlock = userCourses.map((course) => {
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
            <div className="col-12 сol-sm-6 profile-welcome profile-welcome-height">
              <div className="col-12 col-sm-6">
                <img className="profile-welcome-img" src="/10.png" alt="upgrade"/>
              </div>
              <div className="profile-welcome-block">
                <h3 className="profile-welcome-title">Your courses</h3>
                <p className="profile-welcome-subtitle">Ready to teach someone something new?</p>
              </div>
            </div>
            <div className="profile-courses">
              <h3 className="profile-courses-title">Teaching</h3>
              {courseBlock.length !== 0
                ? courseBlock
                : (
                  <div className="profile-courses-one d-flex my-3">
                    <img className="profile-courses-nocourses-img" src="/9.png" alt="preview-course-photo"/>
                    <div className="profile-courses-one-content">
                      <h3 className="profile-courses-one-title" style={{ fontSize: '18px' }}>Uh-oh...</h3>
                      <p className="profile-courses-one-text">You don`t have any courses yet</p>
                      <Link href={'/programs'}>
                        <a className="profile-courses-nocourse-a">
                          <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>Let`s find new course</p>
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

export default ProfileTeaching
