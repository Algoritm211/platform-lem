import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { getUserData } from '../../store/auth/selectors'
import { countArrayEntries, getStepIdArr } from '../utils/lessonFunctions'

const LessonsListCard = ({ lesson, lessonIndex }) => {
  const user = useSelector(getUserData)
  let percentCompleted = 0
  if (user.stepsCompleted) {
    const completed = countArrayEntries(user.stepsCompleted, getStepIdArr(lesson.steps))
    if (completed !== 0) {
      percentCompleted = (completed * 100 / lesson.steps.length).toFixed(1)
    }
  }

  return (
    <div className="profile-courses-one d-flex my-3">
      <h3 className="profile-courses-one-lessonNumber">{lessonIndex + 1}.</h3>
      <div className="profile-courses-one-content">
        <h3 className="profile-courses-one-title">{lesson.title || 'Немає назви'}</h3>
        <p className="profile-courses-one-text mt-2" style={{ fontWeight: '600' }}>10 завдань</p>
      </div>
      <div className="ml-auto d-flex">
        {percentCompleted !== 0 && (
          <div className="d-flex align-items-center mr-3" style={{ width: '100px' }}>
            <i className="far fa-check-circle mr-1" style={{ color: '#63c76a', fontSize: '24px' }}/>
            <p className="profile-courses-one-text m-0" style={{ color: '#63c76a', fontSize: '24px' }}>{percentCompleted}%</p>
          </div>
        )}
        {/* ---------------Если чел не заходил на урок, у него нет лэйбла-------------- */}

        {/* ---------------Если чел набрал больше 60%, то у него текст ниже-------------- */}


        {/* ---------------Если чел набрал меньше 60%, то у него текст ниже-------------- */}
        {/* <div className="d-flex align-items-center mr-3" style={{ width: '100px' }}>*/}
        {/*  <i className="far fa-times-circle mr-1" style={{ color: 'crimson', fontSize: '24px' }}/>*/}
        {/*  <p className="profile-courses-one-text m-0" style={{ color: 'crimson', fontSize: '24px' }}> &lt;60% </p>*/}
        {/* </div>*/}
        <Link href={`/lesson/${lesson._id}`}>
          <a className="m-auto" style={{ textDecoration: 'none' }}>
            <button className="lesson-btn d-flex">
              <i className="fas fa-play"/>
            </button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default LessonsListCard
