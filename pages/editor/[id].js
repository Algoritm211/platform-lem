import React from 'react'
import Header from '../../components/Header/Header'
import EditorPage from '../../components/EditorPage/EditorPage'
import CourseAPI from '../../api/api.course'
import { wrapper } from '../../store/store'

const Editor = ({ course }) => {
  return (
    <div>
      <Header/>
      <EditorPage course={course}/>
    </div>
  )
}

export default Editor

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { id } = ctx.query
  const data = await CourseAPI.one(id)
  return {
    props: {
      course: data.course,
    },
  }
})
