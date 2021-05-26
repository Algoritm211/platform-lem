import React from 'react'
import Header from '../components/Header/Header'
import ProfileTeaching from '../components/ProfileTeaching/ProfileTeaching'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Teaching = () => {
  return (
    <div>
      <Header/>
      <ProfileTeaching/>
    </div>
  )
}

export default Teaching

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['navbar', 'header', 'teaching']),
    },
  }
}
