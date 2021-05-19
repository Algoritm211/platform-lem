import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLikeCourse } from '../../store/courses-reducer/courses-thunks'
import { getUserData } from '../../store/auth-reducer/auth-selector'

const CourseCard = ({ course }) => {
  const dispatch = useDispatch()
  const user = useSelector(getUserData)
  const onToggleLike = (event) => {
    event.stopPropagation()
    event.preventDefault()
    dispatch(toggleLikeCourse(course._id))
  }

  return (
    <div>
      <div
        style={{ backgroundImage: `url('${course.coursePreview}')` }}
        className="course-image">
        <h2 className="course-card-title">{course.title}</h2>
        <p className="course-card-text">{course.lessons.length} lessons</p>
        <button className="course-card-btn d-flex">
          <p className="course-card-btn-text m-0 pr-3">
            Start
          </p>
          <i className="fas fa-play course-card-btn-text"/>
        </button>
        <div style={{ cursor: 'pointer' }} className="course-card-rating d-flex" onClick={onToggleLike}>
          <i className={`${user?.likedCourses?.includes(course._id) ? 'fas' : 'far'} fa-heart`}/>
          <p className="course-card-text">{course.rating}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
