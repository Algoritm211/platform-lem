import { addStep, setCurrentStep, toggleIsLoading } from './reducer'
import CodeStepAPI from '../../api/lessonTypes/api.code'

export const createCodeStep = (lessonId) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await CodeStepAPI.create(lessonId)
  dispatch(addStep(data.step))
  dispatch(toggleIsLoading(false))
}

export const updateCodeStep = (id, updateBody) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await CodeStepAPI.update(id, updateBody)
  dispatch(setCurrentStep(data.step))
  dispatch(toggleIsLoading(false))
}

export const loadCodeStep = (id) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await CodeStepAPI.getOne(id)
  dispatch(setCurrentStep(data.step))
  dispatch(toggleIsLoading(false))
}
