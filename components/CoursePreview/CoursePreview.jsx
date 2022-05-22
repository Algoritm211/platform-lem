import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { loadCurrentCourse, subscribeToCourse } from '../../store/courses/thunks'
import { getCurrentCourse } from '../../store/courses/selectors'
import { getUserData } from '../../store/auth/selectors'
import Loader from '../Loader/Loader'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Alert } from 'antd'

const CoursePreview = () => {
  const { t } = useTranslation('coursePreview')
  const dispatch = useDispatch()
  const noPhotoCourse = '/no-course-image.jpeg'
  const course = useSelector(getCurrentCourse)
  const user = useSelector(getUserData)
  const router = useRouter()
  useEffect(() => {
    dispatch(loadCurrentCourse(router.query.id))
  }, [])
  if (!course) {
    return <Loader/>
  }

  const onSubscribe = () => {
    dispatch(subscribeToCourse(course._id))
  }

  // const onUnsubscribe = () => {
  //   dispatch(unsubscribeCourse(course._id))
  // }

  const CommunityInfo = ({ iconClass, text }) => {
    return (
      <div className="course-preview-rating d-flex">
        <div className="d-flex justify-content-center" style={{ width: '20px' }}>
          <i className={`${iconClass} fas p-0`}/>
        </div>
        <p className="course-preview-text ml-2">{text}</p>
      </div>
    )
  }

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
                  <h1 className="course-preview-name m-0">{course.title}</h1>
                </div>
                <div className="col-12 col-md-6 mt-auto py-3">
                  <CommunityInfo iconClass={'fa-heart'} text={<>{t('liked')} {course.rating} {t('people')}</>}/>
                  <CommunityInfo iconClass={'fa-users'} text={<>{course.students.length} {t('pupils')}</>}/>
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
            {course?.about
              ? <div className="m-0 p-0" style={{ overflow: 'auto' }} dangerouslySetInnerHTML={{ __html: course?.about }}/>
              : <Alert message={t('noAboutCourseDescription')} type="warning"/>}
          </div>
          <div className="col-12 col-md-4 my-5 pb-sm-0 pb-5">
            <img className="my-3" style={{ width: '100%' }} src={course.coursePreview?.url || noPhotoCourse} alt="course-preview-photo"/>
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

            {/*
            <div className="course-preview-info-block my-5">
              <p className="course-preview-info-title">{t('analytics')}</p>
              <p className="course-preview-info-text">{course.lessons.length} {t('lessons')}</p>
              <p className="course-preview-info-text">215 {t('tests')}</p>
              <p className="course-preview-info-text">13 {t('programs')}</p>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePreview
