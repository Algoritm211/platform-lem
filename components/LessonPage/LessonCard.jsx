import React from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { deleteLesson } from '../../store/lesson/thunks'

const LessonCard = ({ lesson, lessonIndex }) => {
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(deleteLesson(lesson._id))
  }
  return (
    <div className="profile-courses-one d-flex my-3">
      <h3 className="profile-courses-one-lessonNumber">{lessonIndex + 1}.</h3>
      <div className="profile-courses-one-content">
        <h3 className="profile-courses-one-title">{lesson.title || 'No title'}</h3>
        {/* <p className="profile-courses-one-text">Lesson description</p>*/}
        <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>9 tasks and exercises</p>
      </div>
      <div className="ml-auto">
        <Link href={`/editlesson/${lesson._id}`}>
          <a style={{ textDecoration: 'none' }}>
            <button className="lesson-btn d-flex">
              <i className="fas fa-pen"/>
            </button>
          </a>
        </Link>
      </div>
      <div className="ml-1">
        <a style={{ textDecoration: 'none' }}>
          <button className="lesson-delete-btn d-flex" onClick={onDelete}>
            <i className="fas fa-trash-alt"/>
          </button>
        </a>
      </div>
    </div>
  )
}

export default LessonCard
