import React from 'react'
import Header from '../../components/Header/Header'
import CoursePreview from '../../components/CoursePreview/CoursePreview'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { wrapper } from '../../store/store'
import CourseAPI from '../../api/api.course'

const PreviewCourse = () => {
  return (
    <div>
      <Header/>
      <CoursePreview/>
    </div>
  )
}

export default PreviewCourse

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { id } = ctx.query
  const data = await CourseAPI.one(id)
  return {
    props: {
      course: data.course,
      ...await serverSideTranslations(ctx.locale, ['coursePreview', 'header', 'steps']),
    },
  }
})
