import UserAPI from '../../api/api.user'
import { logout, setUserData, toggleIsLoading } from './reducer'

export const uploadAvatar = (photoFile) => async (dispatch) => {
  try {
    dispatch(toggleIsLoading(true))
    const data = await UserAPI.uploadAvatar(photoFile)
    dispatch(setUserData(data.user))
    dispatch(toggleIsLoading(false))
  } catch (error) {
    console.log(error)
    dispatch(toggleIsLoading(false))
  }
}

export const deleteAvatar = () => async (dispatch) => {
  try {
    dispatch(toggleIsLoading(true))
    const data = await UserAPI.deleteAvatar()
    dispatch(setUserData(data.user))
    dispatch(toggleIsLoading(false))
  } catch (error) {
    console.log(error)
    dispatch(toggleIsLoading(false))
  }
}

// all fields in update updateObj must be named like User model fields
export const updateUserInfo = (updateObj) => async (dispatch) => {
  try {
    dispatch(toggleIsLoading(true))
    const data = await UserAPI.updateUser(updateObj)
    dispatch(setUserData(data.user))
    dispatch(toggleIsLoading(false))
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(toggleIsLoading(false))
  }
}

export const deleteAccount = () => async (dispatch) => {
  try {
    await UserAPI.deleteAccount()
    dispatch(logout())
  } catch (error) {
    console.log(error)
  }
}

export const addStepToCompleted = (stepId) => async (dispatch) => {
  const data = await UserAPI.addStepToCompleted(stepId)
  dispatch(setUserData(data.user))
}
