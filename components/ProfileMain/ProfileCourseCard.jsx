import React from 'react'

const ProfileCourseCard = ({ course }) => {
  return (
    <div className="profile-courses-one d-flex my-3">
      <img className="profile-courses-one-img" src="https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg" alt="preview-course-photo"/>
      <div className="profile-courses-one-content">
        <h3 className="profile-courses-one-title">{course.title}</h3>
        <p className="profile-courses-one-text">{course.description}</p>
        <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>{course.lessons.length} lessons</p>
      </div>
    </div>
  )
}

export default ProfileCourseCard
