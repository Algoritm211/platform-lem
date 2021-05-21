import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { loadCurrentCourse, subscribeToCourse, unsubscribeCourse } from '../../store/courses-reducer/courses-thunks'
import { getCurrentCourse } from '../../store/courses-reducer/courses-selector'
import { getUserData } from '../../store/auth-reducer/auth-selector'

const CoursePreview = () => {
  const dispatch = useDispatch()
  const course = useSelector(getCurrentCourse)
  const user = useSelector(getUserData)
  const router = useRouter()
  useEffect(() => {
    dispatch(loadCurrentCourse(router.query.id))
  }, [])
  if (!course) {
    return <div>loading...</div>
  }

  const onSubscribe = () => {
    dispatch(subscribeToCourse(course._id))
  }

  const onUnsubscribe = () => {
    dispatch(unsubscribeCourse(course._id))
  }

  return (
    <div>
      {user?.courses?.includes(course._id) ? (
        <button
          style={{ backgroundColor: '#63c76a', borderColor: '#63c76a' }}
          className="mobile-course-preview-button"
          onClick={onUnsubscribe}>Go to course</button>
      ) : (
        <button className="mobile-course-preview-button" onClick={onSubscribe}>Get started</button>
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
                    <p className="course-preview-text">This course liked {course.rating} people</p>
                  </div>
                  <div className="course-preview-rating d-flex">
                    <i className="fas fa-users"/>
                    <p className="course-preview-text">{course.students.length} pupils</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 mt-5">
            <h3 className="course-preview-title my-3">About course</h3>
            <p>
              {course?.about}
            </p>
          </div>
          <div className="col-12 col-md-4 mt-5">
            <img className="my-3" style={{ width: '100%' }} src="https://cdn.pixabay.com/photo/2016/06/13/07/59/pi-1453836_1280.jpg" alt="course-preview-photo"/>
            <p className="course-preview-price my-3">Free</p>
            {user?.courses?.includes(course._id) ? (
              <button
                style={{ backgroundColor: '#63c76a', borderColor: '#63c76a' }}
                className="course-preview-button"
                onClick={onUnsubscribe}>Go to course</button>
            ) : (
              <button className="course-preview-button" onClick={onSubscribe}>Get started</button>
            )}

            <div className="course-preview-info-block my-5">
              <p className="course-preview-info-title">The course includes</p>
              <p className="course-preview-info-text">{course.lessons.length} Lesson</p>
              <p className="course-preview-info-text">215 tests</p>
              <p className="course-preview-info-text">13 programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePreview
