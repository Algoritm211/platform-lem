import React from 'react'
import Header from '../../components/Header/Header'
import EditorPage from '../../components/EditorPage/CourseEditorPage'
import CourseAPI from '../../api/api.course'
import { wrapper } from '../../store/store'
import withEditProtect from '../../components/HOC/withEditProtect'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Editor = ({ course }) => {
  return (
    <div>
      <Header/>
      <EditorPage course={course}/>
    </div>
  )
}

export default withEditProtect(Editor)

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { id } = ctx.query
  const data = await CourseAPI.one(id)
  return {
    props: {
      course: data.course,
      ...await serverSideTranslations(ctx.locale, ['navbar', 'header', 'description']),
    },
  }
})
