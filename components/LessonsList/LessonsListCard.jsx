import React from 'react'
import Link from 'next/link'

const LessonsListCard = ({ lesson, lessonIndex }) => {
  return (
    <div className="profile-courses-one d-flex my-3">
      <h3 className="profile-courses-one-lessonNumber">{lessonIndex + 1}.</h3>
      <div className="profile-courses-one-content">
        <h3 className="profile-courses-one-title">{lesson.title || 'No title'}</h3>
        <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>9 tasks and exercises</p>
      </div>
      <div className="ml-auto">
        <Link href={`/lesson/${lesson._id}`}>
          <a style={{ textDecoration: 'none' }}>
            <button className="lesson-btn d-flex">
              <i className="fas fa-play"/>
            </button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default LessonsListCard
