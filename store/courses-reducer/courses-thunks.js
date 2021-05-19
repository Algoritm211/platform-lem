import CourseAPI from '../../api/api.course'
import {
  setAllCourses,
  setCurrentCourse,
  toggleIsLoading, updateCourse,
} from './courses-reducer'
import { setUserData } from '../auth-reducer/auth-reducer'

export const createCourse = (courseData) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await CourseAPI.create(courseData)
  dispatch(setCurrentCourse(data.course))
  dispatch(toggleIsLoading(false))
}

export const loadAllCourses = (page, filters) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await CourseAPI.all(page, filters)
  dispatch(setAllCourses(data))
  dispatch(toggleIsLoading(false))
}

export const loadCurrentCourse = (courseId) => async (dispatch) => {
  const data = await CourseAPI.one(courseId)
  dispatch(setCurrentCourse(data.course))
}

export const toggleLikeCourse = (courseId) => async (dispatch) => {
  const data = await CourseAPI.toggleLike(courseId)
  dispatch(setUserData(data.user))
  dispatch(updateCourse(data.course))
}
