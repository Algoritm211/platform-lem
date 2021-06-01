import React from 'react'
import Header from '../components/Header/Header'
import PricePage from '../components/PricePage/PricePage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Plans = () => {
  return (
    <div>
      <Header />
      <PricePage />
    </div>
  )
}

export default Plans

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['plans', 'header', 'auth']),
    },
  }
}
