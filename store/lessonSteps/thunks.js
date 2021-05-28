import { addStep, setCurrentStep, toggleIsLoading } from './reducer'
import TextLessonAPI from '../../api/lessonTypes/api.text'
import VideoLessonAPI from '../../api/lessonTypes/api.video'

export const createTextLesson = (lessonId) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await TextLessonAPI.create(lessonId)
  dispatch(addStep(data.step))
  dispatch(toggleIsLoading(false))
}

export const updateTextLesson = (id, updateBody) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await TextLessonAPI.update(id, updateBody)
  dispatch(setCurrentStep(data.step))
  dispatch(toggleIsLoading(false))
}

export const loadTextStep = (id) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await TextLessonAPI.getOne(id)
  dispatch(setCurrentStep(data.step))
  dispatch(toggleIsLoading(false))
}

export const createVideoLesson = (lessonId) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await VideoLessonAPI.create(lessonId)
  dispatch(addStep(data.step))
  dispatch(toggleIsLoading(false))
}

export const updateVideoLesson = (id, updateBody) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await VideoLessonAPI.update(id, updateBody)
  dispatch(setCurrentStep(data.lesson))
  dispatch(toggleIsLoading(false))
}

export const loadVideoStep = (id) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await VideoLessonAPI.getOne(id)
  dispatch(setCurrentStep(data.step))
  dispatch(toggleIsLoading(false))
}
