import React from 'react'
import Header from '../components/Header/Header'
import ProfileSettings from '../components/ProfileSettings/ProfileSettings'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Settings = () => {
  return (
    <div>
      <Header/>
      <ProfileSettings/>
    </div>
  )
}

export default Settings

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['navbar', 'header', 'settings']),
    },
  }
}
