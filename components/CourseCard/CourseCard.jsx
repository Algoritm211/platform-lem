import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLikeCourse } from '../../store/courses/thunks'
import { getUserData } from '../../store/auth/selectors'
import Link from 'next/link'
import { ProgressBar } from 'react-bootstrap'
import { useTranslation } from 'next-i18next'
import { percentCompletedCourse } from '../utils/lessonFunctions'

const CourseCard = ({ course }) => {
  const { t } = useTranslation('programs')
  const dispatch = useDispatch()
  const user = useSelector(getUserData)
  let percentCompleted = 0
  if (user.stepsCompleted) {
    percentCompleted = percentCompletedCourse(user.stepsCompleted, course)
  }

  const onToggleLike = (event) => {
    event.stopPropagation()
    event.preventDefault()
    dispatch(toggleLikeCourse(course._id))
  }

  return (
    <div>
      <div
        style={{
          display: 'grid',
          backgroundPosition: 'center center',
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) ), url('${course.coursePreview?.url || course.coursePreview}')`,
        }}
        className="course-image">
        <Link href={`/programs/${course._id}`}>
          <a style={{ textDecoration: 'none' }}>
            <h2 className="course-card-title">{course.title}</h2>
            <p className="course-card-text">{course.lessons.length} {t('lessons')}</p>
          </a>
        </Link>
        <div className="d-flex align-items-end">
          {/* ---------Если уже проходил курс, то появляется прогресс-бар--------- */}
          {percentCompleted !== 0 ? (
            <ProgressBar className="programs-progress-bar d-flex" now={percentCompleted} label={`${percentCompleted}%`} />
          ) : (
            <Link href={`/programs/${course._id}`}>
              <a style={{ textDecoration: 'none' }}>
                <button className="course-card-btn d-flex">
                  <p className="course-card-btn-text m-0 pr-3">
                    Start
                  </p>
                  <i className="fas fa-play course-card-btn-text"/>
                </button>
              </a>
            </Link>
          )}
          {/* ---------Если еще не проходил курс, то появляется кнопка старт--------- */}
          <div style={{ cursor: 'pointer' }} className="course-card-rating d-flex ml-auto" onClick={onToggleLike}>
            <i className={`${user?.likedCourses?.includes(course._id) ? 'fas' : 'far'} fa-heart`}/>
            <p className="course-card-text">{course.rating}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
