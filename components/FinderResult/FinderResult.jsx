import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses } from '../../store/courses/selectors'
import { loadAllCourses } from '../../store/courses/thunks'
import CourseCard from '../CourseCard/CourseCard'
import { useTranslation } from 'next-i18next'


const FinderResult = () => {
  const { t } = useTranslation('header')
  const dispatch = useDispatch()
  const courses = useSelector(getAllCourses)
  useEffect(() => {
    dispatch(loadAllCourses(1, ''))
  }, [])

  const coursesBlock = courses.map((course, index) => {
    return (
      <div className={`col-12 col-md-4`} key={course._id}>
        <CourseCard course={course}/>
      </div>
    )
  })
  return (
    <div>
      <div className="container mt-3">
        <h2 className="category-picker py-3">{t('results')}</h2>
        <div className="row">
          {coursesBlock}
        </div>
      </div>
    </div>
  )
}

export default FinderResult
