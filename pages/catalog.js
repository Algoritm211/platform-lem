import React from 'react'
import Header from '../components/Header/Header'
import FinderResult from '../components/FinderResult/FinderResult'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Catalog = () => {
  return (
    <div>
      <Header/>
      <FinderResult/>
    </div>
  )
}

export default Catalog

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['header']),
    },
  }
}
