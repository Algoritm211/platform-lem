import React, { useEffect, useState } from 'react'
import CourseCard from '../CourseCard/CourseCard'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllCourses } from '../../store/courses/thunks'
import { getAllCourses } from '../../store/courses/selectors'
import RegistrationModal from '../Form/Registration'
import LoginModal from '../Form/Login'
import { getIsAuth } from '../../store/auth/selectors'
import { useTranslation } from 'next-i18next'
import { Select, Input } from 'antd'
const { Option } = Select
const { Search } = Input

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
        <CourseCard course={course} />
      </div>
    )
  })

  const categories = [
    { label: t('category') },
    { label: t('math') },
    { label: t('science') },
    { label: t('it') },
    { label: t('geography') },
    { label: t('art') },
    { label: t('english') },
    { label: t('history') },
  ]

  const selectCategory = categories.map(({ label }) => {
    return <Option key={label} value={label}>{label}</Option>
  })

  return (
    <div>
      <div className="container my-3">
        <div style={{ backgroundColor: '#f0c4d7', borderRadius: '8px' }}>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-8 m-auto">
              <img className="content-image" src="/3.png" alt="photo" />
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-5 m-auto">
              <h3 className="content-title mb-2">{t('title')}</h3>
              <p className="content-text m-0">{t('subtitle')}</p>
            </div>
          </div>
          <div className="container pb-3">
            <div className="d-flex align-items-center pb-3">
              <Select
                defaultValue={t('category')}
                style={{ width: 120, border: 'none' }}
              >
                {selectCategory}
              </Select>
              <Search
                allowClear
                placeholder={t('example')}
                enterButton={<i className="fas fa-search grid-100" />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h2 className="category-picker py-3">{t('popular')}</h2>
        <div className="row">{coursesBlock}</div>
      </div>
      {/*
      <div className="container py-5">
        <h2 className="category-picker py-3">{t('subjects')}</h2>
        <Carousel />
      </div>

      <div className="container py-5">
        <h2 className="category-picker py-3">{t('themes')}</h2>
        <div className="row">
          <div className="col-6 col-md-4">
            <div
              className="carousel-card my-3"
              style={{ backgroundColor: '#B2CCFC' }}
            >
              <h3 className="carousel-title" style={{ color: '#466aa8' }}>
                Math
              </h3>
              <p className="carousel-subtitle" style={{ color: '#466aa8' }}>
                12 courses
              </p>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div
              className="carousel-card my-3"
              style={{ backgroundColor: '#B2CCFC' }}
            >
              <h3 className="carousel-title" style={{ color: '#466aa8' }}>
                Math
              </h3>
              <p className="carousel-subtitle" style={{ color: '#466aa8' }}>
                12 courses
              </p>
            </div>
          </div>
        </div>
      </div>
      */}
      <div>
        {isAuth ? (
          <div />
        ) : (
          <div className="container py-5">
            <h2 className="category-picker py-3">{t('ownCourse')}</h2>
            <div style={{ backgroundColor: '#B2CCFC', borderRadius: '8px' }}>
              <div className="row">
                <div className="col-12 col-md-3 m-auto">
                  <img className="content-image" src="/14.png" alt="photo" />
                </div>
                <div className="col-12 col-md-9 p-5 m-auto">
                  <h3 className="content-title mb-2">{t('createAcc')}</h3>
                  <p className="content-text">{t('newInfo')}</p>
                  <button
                    className="content-btn"
                    onClick={() => setRegistrationModalShow(true)}
                  >
                    {t('start')}
                  </button>
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
