import React from 'react'
import ProfileNavbar from '../ProfileNavbar/ProfileNavbar'
import { useSelector } from 'react-redux'
import { getUserData } from '../../store/auth-reducer/auth-selector'
import ProfileCourseCard from './ProfileCourseCard'

const ProfileMain = () => {
  const user = useSelector(getUserData)

  const courseBlock = user.courses.map((course) => {
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
            <div className="profile-welcome d-flex">
              <div className="profile-welcome-block">
                <h3 className="profile-welcome-title">Welcome, {user.name}</h3>
                <p className="profile-welcome-subtitle">Are you ready to new day?</p>
              </div>
              <div className="col-6">
                <img className="profile-welcome-img" src="/7.png" alt="upgrade"/>
              </div>
            </div>
            <div className="profile-courses">
              <h3 className="profile-courses-title">My Courses</h3>
              {courseBlock}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileMain
