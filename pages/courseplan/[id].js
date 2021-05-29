import React from 'react'
import Header from '../../components/Header/Header'
import CourseManager from '../../components/CourseManager/CourseManager'
import { wrapper } from '../../store/store'
import LessonAPI from '../../api/api.lesson'
import withEditProtect from '../../components/HOC/withEditProtect'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const CoursePlan = ({ course, lessons }) => {
  return (
    <div>
      <Header/>
      <CourseManager course={course} lessons={lessons}/>
    </div>
  )
}

export default withEditProtect(CoursePlan)

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
