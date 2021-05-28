import React from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

const PricePage = () => {
  const { t } = useTranslation('plans')
  return (
    <div className="container my-3">
      <div style={{ backgroundColor: '#B2CCFC', borderRadius: '8px' }}>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 p-5 m-auto">
            <h3 className="content-title mb-2">{t('title')}</h3>
            <p className="content-text">{t('subtitle')}</p>
          </div>
          <div className="col-12 col-md-6 col-lg-8 m-auto">
            <img className="content-image" src="/8.png" alt="photo"/>
          </div>
        </div>
      </div>
      <div className="row justify-content-center d-flex">
        <div className="col-12 col-sm-6 col-lg-4 my-3 text-center">
          <div className="price-card mb-4">
            <h3 className="price-card-name mt-4 mb-3">{t('basic')}</h3>
            <div className="price-benefits my-5">
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">{t('design')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">{t('account')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text"><b>2</b> {t('permissions')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">{t('takeCourse')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">{t('createCourse')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text"><b>4</b> {t('taskType')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">{t('techSupport')}</p>
              </div>

              <div style={{ color: '#b4b4b4' }}>
                <div className="price-benefits-one">
                  <i className="far fa-times-circle price-benefits-ill" style={{ color: '#b4b4b4' }}/>
                  <p className="price-benefits-text">{t('groupClasses')}</p>
                </div>
                <div className="price-benefits-one">
                  <i className="far fa-times-circle price-benefits-ill" style={{ color: '#b4b4b4' }}/>
                  <p className="price-benefits-text">{t('search')}</p>
                </div>
                <div className="price-benefits-one">
                  <i className="far fa-times-circle price-benefits-ill" style={{ color: '#b4b4b4' }}/>
                  <p className="price-benefits-text">{t('enrollClasses')}</p>
                </div>
                <div className="price-benefits-one">
                  <i className="far fa-times-circle price-benefits-ill" style={{ color: '#b4b4b4' }}/>
                  <p className="price-benefits-text">{t('files')}</p>
                </div>
                <div className="price-benefits-one">
                  <i className="far fa-times-circle price-benefits-ill" style={{ color: '#b4b4b4' }}/>
                  <p className="price-benefits-text">{t('scoreTable')}</p>
                </div>
                <div className="price-benefits-one">
                  <i className="far fa-times-circle price-benefits-ill" style={{ color: '#b4b4b4' }}/>
                  <p className="price-benefits-text">{t('schedule')}</p>
                </div>
              </div>
            </div>
            <h3 className="price-card-name mt-4 mb-3 text-left">{t('timing')}</h3>
            <h3 className="price-card-sum text-left mb-3 text-left" style={{ whiteSpace: 'nowrap' }}>{t('twoWeeks')}</h3>
            <h3 className="price-card-name mt-4 mb-3 text-left">{t('price')}</h3>
            <h1 className="price-card-title pricing-card-title text-left mb-3">
              <small className="price-card-sum text-left">$</small>
              2000
            </h1>
            <Link href={'/contacts'}>
              <a>
                <button type="button" className="price-button my-4">{t('upgradeButton')}</button>
              </a>
            </Link>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 my-3 text-center">
          <div className="price-card mb-4">
            <h3 className="price-card-name mt-4 mb-3">{t('premium')}</h3>
            <div className="price-benefits my-5">
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">{t('design')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">{t('account')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text"><b>3+</b> {t('permissions')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">{t('takeCourse')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">{t('createCourse')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text"><b>7</b> {t('taskType')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">{t('techSupport')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill" />
                <p className="price-benefits-text">{t('groupClasses')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill" />
                <p className="price-benefits-text">{t('search')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill" />
                <p className="price-benefits-text">{t('enrollClasses')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill" />
                <p className="price-benefits-text">{t('files')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill" />
                <p className="price-benefits-text">{t('scoreTable')}</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill" />
                <p className="price-benefits-text">{t('schedule')}</p>
              </div>
            </div>
            <h3 className="price-card-name mt-4 mb-3 text-left">{t('timing')}</h3>
            <h3 className="price-card-sum text-left mb-3 text-left" style={{ whiteSpace: 'nowrap' }}>{t('month')}</h3>
            <h3 className="price-card-name mt-4 mb-3 text-left">{t('price')}</h3>
            <h1 className="price-card-title pricing-card-title text-left mb-3">
              <small className="price-card-sum text-left">$</small>
              3500
            </h1>
            <Link href={'/contacts'}>
              <a>
                <button type="button" className="price-button my-4">{t('upgradeButton')}</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="row justify-content-center d-flex">
        <div className="col-12 col-sm-12 col-lg-8 my-3 text-center">
          <div className="price-card mb-4">
            <h3 className="price-card-name mt-4 mb-3">{t('addFunc')}</h3>
            <div className="row p-0 m-0 d-flex" style={{ alignItems: 'center' }}>
              <div className="price-benefits col-12 col-md-6 my-5">
                <div className="price-benefits-one">
                  <i className="far fa-dot-circle price-benefits-ill"/>
                  <p className="price-benefits-text">{t('rating')}</p>
                </div>
                <div className="price-benefits-one">
                  <i className="far fa-dot-circle price-benefits-ill"/>
                  <p className="price-benefits-text">{t('newTask')}</p>
                </div>
                <div className="price-benefits-one">
                  <i className="far fa-dot-circle price-benefits-ill"/>
                  <p className="price-benefits-text">{t('login')}</p>
                </div>
                <div className="price-benefits-one">
                  <i className="far fa-dot-circle price-benefits-ill"/>
                  <p className="price-benefits-text">{t('lang')}</p>
                </div>
                <div className="price-benefits-one">
                  <i className="far fa-dot-circle price-benefits-ill"/>
                  <p className="price-benefits-text">{t('certificates')}</p>
                </div>
                <div className="price-benefits-one">
                  <i className="far fa-dot-circle price-benefits-ill"/>
                  <p className="price-benefits-text">{t('confirmation')}</p>
                </div>
                <div className="price-benefits-one">
                  <i className="far fa-dot-circle price-benefits-ill"/>
                  <p className="price-benefits-text">{t('promotion')}</p>
                </div>
                <div className="price-benefits-one">
                  <i className="far fa-dot-circle price-benefits-ill"/>
                  <p className="price-benefits-text">{t('webAnalytics')}</p>
                </div>
                <div className="price-benefits-one">
                  <i className="far fa-dot-circle price-benefits-ill"/>
                  <p className="price-benefits-text">{t('userAnalytics')}</p>
                </div>
              </div>
              <div className="col-12 col-md-6 my-5">
                <img className="content-image" src="/15.png" alt="photo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricePage
