import UserAPI from '../../api/api.user'
import { logout, setUserData, toggleIsLoading } from './auth-reducer'

export const uploadAvatar = (photoFile) => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await UserAPI.uploadAvatar(photoFile)
  dispatch(setUserData(data.user))
  dispatch(toggleIsLoading(false))
}

export const deleteAvatar = () => async (dispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await UserAPI.deleteAvatar()
  dispatch(setUserData(data.user))
  dispatch(toggleIsLoading(false))
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
