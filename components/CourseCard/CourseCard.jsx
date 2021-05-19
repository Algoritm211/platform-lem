import React from 'react'

const CourseCard = ({ course }) => {
  return (
    <div>
      <div className="course-image">
        <h2 className="course-card-title">{course.title}</h2>
        <p className="course-card-text">{course.lessons.length} lessons</p>
        <button className="course-card-btn d-flex">
          <p className="course-card-btn-text m-0 pr-3">
            Start
          </p>
          <i className="fas fa-play course-card-btn-text"/>
        </button>
        <div className="course-card-rating d-flex">
          <i className="far fa-heart"/>
          <p className="course-card-text">{course.rating}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
