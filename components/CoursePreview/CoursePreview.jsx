import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { loadCurrentCourse, subscribeToCourse } from '../../store/courses/thunks'
import { getCurrentCourse } from '../../store/courses/selectors'
import { getUserData } from '../../store/auth/selectors'
import Loader from '../Loader/Loader'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const CoursePreview = () => {
  const { t } = useTranslation('coursePreview')
  const dispatch = useDispatch()
  const course = useSelector(getCurrentCourse)
  const user = useSelector(getUserData)
  const router = useRouter()
  useEffect(() => {
    dispatch(loadCurrentCourse(router.query.id))
  }, [])
  if (!course) {
    return <Loader />
  }

  const onSubscribe = () => {
    dispatch(subscribeToCourse(course._id))
  }

  // const onUnsubscribe = () => {
  //   dispatch(unsubscribeCourse(course._id))
  // }

  return (
    <div>
      {user?.courses?.includes(course._id) ? (
        <Link href={`/lessonslist/${course._id}`}>
          <button
            style={{ backgroundColor: '#63c76a', borderColor: '#63c76a' }}
            className="mobile-course-preview-button">{t('goToCourse')}</button>
        </Link>
      ) : (
        <button className="mobile-course-preview-button" onClick={onSubscribe}>{t('getStarted')}</button>
      )}
      <div
        style={{ backgroundColor: '#3A5FA4', padding: '50px 0' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-md-6 m-auto py-3">
                  <h1 className="course-preview-name">{course.title}</h1>
                  <p className="course-preview-text">{course.description}</p>
                </div>
                <div className="col-12 col-md-6 mt-auto py-3">
                  <div className="course-preview-rating d-flex">
                    <i className="fas fa-heart"/>
                    <p className="course-preview-text">{t('liked')} {course.rating} {t('people')}</p>
                  </div>
                  <div className="course-preview-rating d-flex">
                    <i className="fas fa-users"/>
                    <p className="course-preview-text">{course.students.length} {t('pupils')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 mt-5 image-fix">
            <h3 className="course-preview-title my-3">{t('about')}</h3>
            <p style={{ overflow: 'auto' }} dangerouslySetInnerHTML={{ __html: course?.about }}>
              {/* {course?.about}*/}
            </p>
          </div>
          <div className="col-12 col-md-4 mt-5">
            <img className="my-3" style={{ width: '100%' }} src={course.coursePreview?.url || course.coursePreview} alt="course-preview-photo"/>
            <p className="course-preview-price my-3">{t('free')}</p>
            {user?.courses?.includes(course._id) ? (
              <Link href={`/lessonslist/${course._id}`}>
                <button
                  style={{ backgroundColor: '#63c76a', borderColor: '#63c76a' }}
                  className="course-preview-button">{t('goToCourse')}</button>
              </Link>
            ) : (
              <button className="course-preview-button" onClick={onSubscribe}>{t('getStarted')}</button>
            )}

            <div className="course-preview-info-block my-5">
              <p className="course-preview-info-title">{t('analytics')}</p>
              <p className="course-preview-info-text">{course.lessons.length} {t('lessons')}</p>
              <p className="course-preview-info-text">215 {t('tests')}</p>
              <p className="course-preview-info-text">13 {t('programs')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePreview
