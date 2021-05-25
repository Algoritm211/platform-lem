import React from 'react'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const UnfoundPage = () => {
  const { t } = useTranslation('unfound')

  return (
    <div className="container d-flex text-center" style={{ height: '100vh', alignItems: 'center' }}>
      <div className="row">
        <div className="col-12 col-md-4 p-5 m-auto">
          <h2 className="category-picker my-3">{t('wrong')}</h2>
          <Link href={'/'}>
            <a>
              <button className="content-btn">{t('toMain')}</button>
            </a>
          </Link>
        </div>
        <div className="col-12 col-md-8 m-auto order-first order-md-last">
          <img className="content-image" src="/404.png" alt="photo"/>
        </div>
      </div>
    </div>
  )
}

export default UnfoundPage

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['unfound']),
    },
  }
}
