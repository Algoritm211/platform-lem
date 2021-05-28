import React from 'react'
import Header from '../components/Header/Header'
import ProfileMain from '../components/ProfileMain/ProfileMain'
import withAuthRequired from '../components/HOC/withAuthRequired'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Profile = () => {
  return (
    <div>
      <Header />
      <ProfileMain />
    </div>
  )
}

export default withAuthRequired(Profile)

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['navbar', 'header', 'profile', 'teaching']),
    },
  }
}
