import CourseAPI from '../../api/api.course'
import {
  deleteFromLearning,
  setAllCourses,
  setCurrentCourse, setUserAuthorCourses, setUserCourses,
  toggleIsLoading, updateCourse,
} from './reducer'
import { setUserData } from '../auth/reducer'

export const createCourse = (courseData) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await CourseAPI.create(courseData)
  dispatch(setCurrentCourse(data.course))
  dispatch(toggleIsLoading(false))
}
// title, description, about, id
export const updateCourseInfo = (courseData) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await CourseAPI.update(courseData)
  dispatch(setCurrentCourse(data.course))
  dispatch(toggleIsLoading(false))
}
// id and photo file
export const updateCoursePreview = (formData) => async (dispatch) => {
  try {
    dispatch(toggleIsLoading(true))
    const data = await CourseAPI.updatePreview(formData)
    dispatch(setCurrentCourse(data.course))
    dispatch(toggleIsLoading(false))
  } catch (error) {
    console.log(error)
  }
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

export const toggleCourseIsReady = (courseId) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await CourseAPI.toggleReady(courseId)
  dispatch(updateCourse(data.course))
  dispatch(toggleIsLoading(false))
}

export const subscribeToCourse = (courseId) => async (dispatch) => {
  const data = await CourseAPI.subscribe(courseId)
  dispatch(setUserData(data.user))
  dispatch(setCurrentCourse(data.course))
}

export const unsubscribeCourse = (courseId) => async (dispatch) => {
  dispatch(deleteFromLearning(courseId))
  const data = await CourseAPI.unsubscribe(courseId)
  dispatch(setUserData(data.user))
  dispatch(setCurrentCourse(data.course))
}

export const loadUserCourses = () => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await CourseAPI.getUserCourses()
  dispatch(setUserCourses(data))
  dispatch(setUserAuthorCourses(data))
  dispatch(toggleIsLoading(false))
}
