import { addStep, setCurrentStep, toggleIsLoading } from './reducer'
import VideoStepAPI from '../../api/lessonTypes/api.video'

export const createVideoStep = (lessonId) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await VideoStepAPI.create(lessonId)
  dispatch(addStep(data.step))
  dispatch(toggleIsLoading(false))
}

export const updateVideoStep = (id, updateBody) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await VideoStepAPI.update(id, updateBody)
  dispatch(setCurrentStep(data.lesson))
  dispatch(toggleIsLoading(false))
}

export const loadVideoStep = (id) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await VideoStepAPI.getOne(id)
  dispatch(setCurrentStep(data.step))
  dispatch(toggleIsLoading(false))
}

