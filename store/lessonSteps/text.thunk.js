import { addStep, setCurrentStep, toggleIsLoading } from './reducer'
import TextStepAPI from '../../api/lessonTypes/api.text'

export const createTextStep = (lessonId) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await TextStepAPI.create(lessonId)
  dispatch(addStep(data.step))
  dispatch(toggleIsLoading(false))
}

export const updateTextStep = (id, updateBody) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await TextStepAPI.update(id, updateBody)
  dispatch(setCurrentStep(data.lesson))
  dispatch(toggleIsLoading(false))
}

export const loadTextStep = (id) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await TextStepAPI.getOne(id)
  dispatch(setCurrentStep(data.step))
  dispatch(toggleIsLoading(false))
}
