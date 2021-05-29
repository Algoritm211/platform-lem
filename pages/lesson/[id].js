import React from 'react'
import Header from '../../components/Header/Header'
import Lesson from '../../components/Lesson/Lesson'
import { wrapper } from '../../store/store'
import LessonAPI from '../../api/api.lesson'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const CourseLesson = ({ lesson, course }) => {
  return (
    <div>
      <Header/>
      <Lesson course={course} lesson={lesson}/>
    </div>
  )
}

export default CourseLesson

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { id } = ctx.params
  const data = await LessonAPI.getOne(id)
  return {
    props: {
      lesson: data.lesson,
      course: data.course,
      ...await serverSideTranslations(ctx.locale, ['contacts', 'header', 'steps']),
    },
  }
})
