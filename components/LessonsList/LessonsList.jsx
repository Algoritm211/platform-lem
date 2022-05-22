import React, { useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { clearCurrentCourse, setCurrentCourse } from '../../store/courses/reducer'
import { clearLessons, setLessons } from '../../store/lesson/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { getLessons } from '../../store/lesson/selectors'
import { getCurrentCourse } from '../../store/courses/selectors'
import Loader from '../Loader/Loader'
import { Button } from 'react-bootstrap'
import LessonsListCard from './LessonsListCard'
import Link from 'next/link'

const LessonsList = ({ course, lessons }) => {
  const dispatch = useDispatch()
  const { t } = useTranslation('navbar')
  const currentLessons = useSelector(getLessons)
  const currentCourse = useSelector(getCurrentCourse)
  const noPhotoCourse = '/no-course-image.jpeg'

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
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="col-12 сol-sm-6 profile-welcome" style={{ backgroundColor: 'rgb(240, 196, 215)' }}>
              <div className="profile-welcome-block">
                <h3 className="profile-welcome-title">{course.title}</h3>
              </div>
              <div className="col-12 col-sm-6 d-flex align-items-center ml-auto">
                <img className="profile-welcome-course-img" src={course.coursePreview?.url || noPhotoCourse} alt={course.title}/>
              </div>
            </div>
            <div className="my-5">
              <Link href={`/scoretable/${course._id}`}>
                <Button style={{ borderRadius: '8px', backgroundColor: '#0070f3' }}>
                  <i className="fas fa-table mr-2" />
                  {t('getScore')}
                </Button>
              </Link>
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
