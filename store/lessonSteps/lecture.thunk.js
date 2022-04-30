import { addStep, setCurrentStep, toggleIsLoading } from './reducer'
import LectureStepAPI from '../../api/lessonTypes/api.lecture'

export const createLectureStep = (lessonId) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await LectureStepAPI.create(lessonId)
  dispatch(addStep(data.step))
  dispatch(toggleIsLoading(false))
}

export const updateLectureStep = (id, updateBody) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await LectureStepAPI.update(id, updateBody)
  dispatch(setCurrentStep(data.step))
  dispatch(toggleIsLoading(false))
}

export const loadLectureStep = (id) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await LectureStepAPI.getOne(id)
  dispatch(setCurrentStep(data.step))
  dispatch(toggleIsLoading(false))
}
