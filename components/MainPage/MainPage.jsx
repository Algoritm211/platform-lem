import React, { useState } from 'react'
import RegistrationModal from '../Form/Registration'
import LoginModal from '../Form/Login'
import withPageSize from '../HOC/withPageSize'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const MainPage = ({ size }) => {
  const { t } = useTranslation('main')

  const [loginModalShow, setLoginModalShow] = useState(false)
  const [registrationModalShow, setRegistrationModalShow] = useState(false)

  const switchModals = () => {
    setLoginModalShow((prev) => !prev)
    setRegistrationModalShow((prev) => !prev)
  }

  const CategoryCard = ({ courseAmount, label, bgColor, textColor, href }) => {
    return (
      <Link href={href}>
        <a style={{ textDecoration: 'none' }}>
          <div
            className="carousel-card my-3"
            style={{ backgroundColor: bgColor }}
          >
            <h3 className="carousel-title" style={{ color: textColor }}>
              {label}
            </h3>
            <p className="carousel-subtitle m-0" style={{ color: textColor }}>
              {courseAmount} {t('existCourses')}
            </p>
          </div>
        </a>
      </Link>
    )
  }

  return (
    <div>
      <div className="container my-3">
        <div style={{ backgroundColor: '#B2CCFC', borderRadius: '8px' }}>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 p-5 m-auto">
              <h3 className="content-title mb-2">{t('title')}</h3>
              <p className="content-text">{t('subtitle')}</p>
              <button
                className="content-btn"
                onClick={() => setLoginModalShow(true)}
              >
                {t('start')}
              </button>
            </div>
            <div className="col-12 col-md-6 col-lg-8 m-auto">
              <img className="content-image" src="/mainPageImage.png" alt="mainPageImage"/>
            </div>
          </div>
        </div>
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

      <div className="container py-5">
        <div className="row d-flex" style={{ alignItems: 'center' }}>
          <div className="col-12 col-md-3 my-3">
            <h2 className="category-picker m-auto">{t('learnEasy')}</h2>
          </div>
          <div className="col-12 col-md-9 my-3">
            <p className="content-text" style={{ margin: '0' }}>
              {t('learnDescription')}
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row d-flex" style={{ alignItems: 'center' }}>
          <div className="col-12 col-md-6 my-3">
            <img className="content-image" src="/12.png" alt="photo"/>
          </div>
          <div className="col-12 col-md-6 my-3">
            <h2 className="category-picker my-3">{t('createCourse')}</h2>
            <p className="content-text" style={{ margin: '0' }}>
              {t('createDescription')}
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row d-flex" style={{ alignItems: 'center' }}>
          <div className="col-12 col-md-6 my-3">
            <h2 className="category-picker my-3">{t('additionalCourse')}</h2>
            <p className="content-text mb-3" style={{ margin: '0' }}>
              {t('additionalDescription')}
            </p>
            <Link href={'/programs'}>
              <a style={{ textDecoration: 'none' }}>
                <button className="content-btn">{t('goToCourse')}</button>
              </a>
            </Link>
          </div>
          <div className="col-12 col-md-6 my-3">
            <img className="content-image" src="/13.png" alt="photo"/>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="category-picker py-3">{t('favoriteSubj')}</h2>
        <div className="row">
          <div className={`col-12 col-md-4 my-3`}>
            <Link href={'/programs'}>
              <a style={{ textDecoration: 'none' }}>
                <div
                  className="carousel-card d-flex"
                  style={{
                    backgroundColor: '#f7f7fc',
                    height: '100%',
                    alignItems: 'center',
                  }}
                >
                  <h3 className="carousel-title m-0 pr-2">
                    {t('checkCourse')}
                  </h3>
                  <i className="fas fa-arrow-right"/>
                  {/* <p className="carousel-subtitle" style={{ color: 'rgb(137, 81, 105)' }}>2 courses</p></div>*/}
                </div>
              </a>
            </Link>
          </div>
          <div className="col-6 col-md-4">
            <CategoryCard href={'/programs'} bgColor={'#B2CCFC'} label={t('math')} textColor={'#466aa8'} courseAmount={3} />
            <CategoryCard href={'/programs'} bgColor={'rgb(240, 196, 215)'} label={t('chemistry')} textColor={'rgb(137, 81, 105)'} courseAmount={1} />
          </div>
          <div className="col-6 col-md-4">
            <CategoryCard href={'/programs'} bgColor={'#8cdac8'} label={t('biology')} textColor={'#408971'} courseAmount={2} />
            <CategoryCard href={'/programs'} bgColor={'#B2CCFC'} label={t('it')} textColor={'#466aa8'} courseAmount={4} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withPageSize(MainPage)
