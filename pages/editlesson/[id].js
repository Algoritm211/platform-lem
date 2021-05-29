import React from 'react'
import Header from '../../components/Header/Header'
import LessonEditor from '../../components/LessonPage/LessonEditor'
import { wrapper } from '../../store/store'
import LessonAPI from '../../api/api.lesson'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const CourseLessonEditor = ({ lesson, course }) => {
  return (
    <div>
      <Header/>
      <LessonEditor lesson={lesson} course={course}/>
    </div>
  )
}

export default CourseLessonEditor

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { id } = ctx.params
  const data = await LessonAPI.getOne(id)
  return {
    props: {
      lesson: data.lesson,
      course: data.course,
      ...await serverSideTranslations(ctx.locale, ['navbar', 'header', 'editLesson', 'steps']),
    },
  }
})
