import React, { useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { clearCurrentCourse, setCurrentCourse } from '../../store/courses/reducer'
import { clearLessons, setLessons } from '../../store/lesson/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { getLessons } from '../../store/lesson/selectors'
import { getCurrentCourse } from '../../store/courses/selectors'
import Loader from '../Loader/Loader'
import LessonsListCard from './LessonsListCard'

const LessonsList = ({ course, lessons }) => {
  const dispatch = useDispatch()
  const { t } = useTranslation('navbar')
  const currentLessons = useSelector(getLessons)
  const currentCourse = useSelector(getCurrentCourse)

  useEffect(() => {
    dispatch(setCurrentCourse(course))
    dispatch(setLessons(lessons))
    return () => {
      dispatch(clearCurrentCourse())
      dispatch(clearLessons())
    }
  }, [])

  if (!currentLessons && !currentCourse) {
    return <Loader/>
  }
  const lessonBlock = currentLessons.map((lesson, index) => {
    return <LessonsListCard lesson={lesson} lessonIndex={index} key={lesson._id}/>
  })

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="col-12 сol-sm-6 profile-welcome" style={{ backgroundColor: 'rgb(240, 196, 215)' }}>
              <div className="profile-welcome-block">
                <h3 className="profile-welcome-title">{course.title}</h3>
                <p className="profile-welcome-subtitle">{course.description}</p>
              </div>
              <div className="col-12 col-sm-6 d-flex align-items-center">
                <img className="profile-welcome-course-img" src={course.coursePreview.url} alt="upgrade"/>
              </div>
            </div>
            <div className="profile-courses">
              <h3 className="profile-courses-title">{t('content')}({currentLessons.length})</h3>
              {lessonBlock}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonsList
