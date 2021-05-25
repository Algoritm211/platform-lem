import React from 'react'
import Header from '../components/Header/Header'
import CourseManager from '../components/CourseManager/CourseManager'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Course = () => {
  return (
    <div>
      <Header/>
      <CourseManager />
    </div>
  )
}

export default Course

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['navbar', 'header']),
    },
  }
}
