import React from 'react'
import Header from '../../components/Header/Header'
import { wrapper } from '../../store/store'
import LessonAPI from '../../api/api.lesson'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LessonsList from '../../components/LessonsList/LessonsList'

const LessonsListPage = ({ course, lessons }) => {
  return (
    <div>
      <Header/>
      <LessonsList course={course} lessons={lessons}/>
    </div>
  )
}

export default LessonsListPage

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { id } = ctx.params
  const data = await LessonAPI.getCourseLessons(id)
  return {
    props: {
      course: data.course,
      lessons: data.lessons,
      ...await serverSideTranslations(ctx.locale, ['navbar', 'header']),
    },
  }
})
