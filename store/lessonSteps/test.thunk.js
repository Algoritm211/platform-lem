import { addStep, setCurrentStep, toggleIsLoading } from './reducer'
import TestStepAPI from '../../api/lessonTypes/api.test'

export const createTestStep = (lessonId) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await TestStepAPI.create(lessonId)
  dispatch(addStep(data.step))
  dispatch(toggleIsLoading(false))
}

export const updateTestStep = (id, updateBody) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await TestStepAPI.update(id, updateBody)
  dispatch(setCurrentStep(data.step))
  dispatch(toggleIsLoading(false))
}

export const loadTestStep = (id) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await TestStepAPI.getOne(id)
  dispatch(setCurrentStep(data.step))
  dispatch(toggleIsLoading(false))
}
