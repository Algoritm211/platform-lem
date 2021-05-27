import React, { useEffect, useState } from 'react'
import CourseNavbar from '../Navbars/CourseNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { clearCurrentCourse, setCurrentCourse } from '../../store/courses/reducer'
import { clearLessons, setLessons } from '../../store/lesson/reducer'
import { getLessons } from '../../store/lesson/selectors'
import { getCurrentCourse } from '../../store/courses/selectors'
import LessonCard from '../LessonPage/LessonCard'
import LessonAPI from '../../api/api.lesson'
import { useRouter } from 'next/router'

const CourseManager = ({ course, lessons }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const currentLessons = useSelector(getLessons)
  const currentCourse = useSelector(getCurrentCourse)
  const [loading, setIsLoading] = useState(false)

  useEffect(() => {
    dispatch(setCurrentCourse(course))
    dispatch(setLessons(lessons))
    return () => {
      dispatch(clearCurrentCourse())
      dispatch(clearLessons())
    }
  }, [])

  const onCreateLesson = async () => {
    if (currentCourse) {
      setIsLoading(true)
      const data = await LessonAPI.create(currentCourse._id)
      await router.push(`/editlesson/${data.lesson._id}`)
    }
  }

  const lessonBlock = currentLessons.map((lesson, index) => {
    return <LessonCard lesson={lesson} key={lesson._id} lessonIndex={index}/>
  })
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-3 col-md-2">
            <CourseNavbar/>
          </div>
          <div className="col-sm-9 col-md-10">
            <div className="col-12 сol-sm-6 profile-welcome" style={{ backgroundColor: 'rgb(240, 196, 215)' }}>
              <div className="profile-welcome-block">
                <h3 className="profile-welcome-title">{course.title}</h3>
                <p className="profile-welcome-subtitle">Here you can see your lessons, change them, delete and whatever you want!</p>
              </div>
              <div className="col-12 col-sm-6">
                <img className="profile-welcome-course-img" src="https://i.pinimg.com/originals/84/15/e1/8415e1af255424efc151ed1cb79147b1.jpg" alt="upgrade"/>
              </div>
            </div>
            <div className="profile-courses">
              <h3 className="profile-courses-title">Lessons({currentLessons.length})</h3>
              {lessonBlock}
              <a style={{ textDecoration: 'none' }}>
                <div className="profile-courses-one justify-content-center d-flex my-3" style={{ alignItems: 'center' }}>
                  <div className="mr-3">
                    <button
                      disabled={loading}
                      className="lesson-btn d-flex"
                      onClick={onCreateLesson}>
                      <i className="fas fa-plus"/>
                    </button>
                  </div>
                  <h3 className="profile-courses-one-title m-0">Create another lesson</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseManager
