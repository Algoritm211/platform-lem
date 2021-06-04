import { deleteLessonSuccess, setCurrentLesson, setError, setLessons } from './reducer'
import LessonAPI from '../../api/api.lesson'
import { setCurrentCourse } from '../courses/reducer'


export const loadCourseLessons = (id) => async (dispatch) => {
  try {
    const data = await LessonAPI.getCourseLessons(id)
    setCurrentCourse(data.course)
    setLessons(data.lessons)
  } catch (error) {
    console.log(error)
    dispatch(setError('Can not get lessons'))
  }
}


export const deleteLesson = (id) => async (dispatch) => {
  try {
    await LessonAPI.delete(id)
    dispatch(deleteLessonSuccess(id))
  } catch (error) {
    console.log(error)
    dispatch(setError('Can not delete lessons'))
  }
}


export const updateLesson = (id, updateObj) => async (dispatch) => {
  try {
    const data = await LessonAPI.update(id, updateObj)
    dispatch(setCurrentLesson(data.lesson))
  } catch (error) {
    console.log(error)
    dispatch(setError('Can not delete lessons'))
  }
}

export const addLessonUserMark = (id, mark, lessonStepId) => async (dispatch) => {
  try {
    const data = await LessonAPI.addLessonMark(id, { mark, lessonStepId })
    dispatch(setCurrentLesson(data.lesson))
  } catch (error) {
    console.log(error)
    dispatch(setError('Can not add mark to lessons'))
  }
}
