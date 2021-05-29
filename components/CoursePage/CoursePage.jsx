import React, { useEffect, useState } from 'react'
import CourseCard from '../CourseCard/CourseCard'
import Carousel from './Subject-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllCourses } from '../../store/courses/thunks'
import { getAllCourses } from '../../store/courses/selectors'
import RegistrationModal from '../Form/Registration'
import LoginModal from '../Form/Login'
import { getIsAuth } from '../../store/auth/selectors'
import { useTranslation } from 'next-i18next'

const CoursePage = () => {
  const { t } = useTranslation('programs')

  const [loginModalShow, setLoginModalShow] = useState(false)
  const [registrationModalShow, setRegistrationModalShow] = useState(false)
  const isAuth = useSelector(getIsAuth)

  const switchModals = () => {
    setLoginModalShow((prev) => !prev)
    setRegistrationModalShow((prev) => !prev)
  }

  const dispatch = useDispatch()
  const courses = useSelector(getAllCourses)
  useEffect(() => {
    dispatch(loadAllCourses(1, ''))
  }, [])

  const coursesBlock = courses.map((course, index) => {
    const countBlock = index % 3 === 0 ? 8 : 4
    return (
      <div className={`col-12 col-md-${countBlock}`} key={course._id}>
        <CourseCard course={course}/>
      </div>
    )
  })
  return (
    <div>
      <div className="container my-3">
        <div style={{ backgroundColor: '#f0c4d7', borderRadius: '8px' }}>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-8 m-auto">
              <img className="content-image" src="/3.png" alt="photo"/>
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-5 m-auto">
              <h3 className="content-title mb-2">{t('title')}</h3>
              <p className="content-text">{t('subtitle')}</p>
            </div>
          </div>
          <div className="container" style={{ paddingBottom: '15px' }}>
            <section className="search-form">
              <form action="" method="GET" name="search" role="search" className="border-form">
                <p className="inp-wrap cat-wrap" style={{ borderRight: '1px solid rgba(51,51,51,0.3)' }}>
                  <select name="search categories" id="categories" className="search-input">
                    <option value="category" defaultValue>{t('category')}</option>
                    <option value="newyork">{t('math')}</option>
                    <option value="chicago">{t('science')}</option>
                    <option value="losangeles">{t('it')}</option>
                    <option value="seattle">{t('geography')}</option>
                    <option value="dallas">{t('art')}</option>
                    <option value="boston">{t('english')}</option>
                    <option value="sanfran">{t('history')}</option>
                  </select>
                  <i className="fas fa-caret-down"/>
                </p>
                <p className="inp-wrap search-wrap">
                  <input type="search" name="search-term" id="search-field" className="search-input" placeholder={t('example')} /></p>
                <p className="inp-wrap submit-wrap">
                  <button className="search-btn">
                    <i className="fas fa-search grid-100"/>
                  </button>
                </p>
              </form>
            </section>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="category-picker py-3">{t('popular')}</h2>
        <div className="row">
          {coursesBlock}
        </div>
      </div>
      <div className="container my-5">
        <h2 className="category-picker py-3">{t('subjects')}</h2>
        <Carousel/>
      </div>
      <div className="container my-5">
        <h2 className="category-picker py-3">{t('themes')}</h2>
        <div className="row">
          <div className="col-6 col-md-4">
            <div className="carousel-card my-3" style={{ backgroundColor: '#B2CCFC' }}>
              <h3 className="carousel-title" style={{ color: '#466aa8' }}>Math</h3>
              <p className="carousel-subtitle" style={{ color: '#466aa8' }}>12 courses</p>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="carousel-card my-3" style={{ backgroundColor: '#B2CCFC' }}>
              <h3 className="carousel-title" style={{ color: '#466aa8' }}>Math</h3>
              <p className="carousel-subtitle" style={{ color: '#466aa8' }}>12 courses</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {isAuth
          ? (<div/>)
          : (
            <div className="container my-5">
              <h2 className="category-picker py-3">{t('ownCourse')}</h2>
              <div style={{ backgroundColor: '#B2CCFC', borderRadius: '8px' }}>
                <div className="row">
                  <div className="col-12 col-md-3 m-auto">
                    <img className="content-image" src="/14.png" alt="photo"/>
                  </div>
                  <div className="col-12 col-md-9 p-5 m-auto">
                    <h3 className="content-title mb-2">{t('createAcc')}</h3>
                    <p className="content-text">{t('newInfo')}</p>
                    <button className="content-btn" onClick={() => setRegistrationModalShow(true)}>{t('start')}</button>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
      <RegistrationModal
        show={registrationModalShow}
        switchModals={() => switchModals()}
        onHide={() => setRegistrationModalShow(false)}
      />
      <LoginModal
        show={loginModalShow}
        switchModals={() => switchModals()}
        onHide={() => setLoginModalShow(false)}
      />
    </div>
  )
}

export default CoursePage
