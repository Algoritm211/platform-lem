import { userAPI } from '../../api/user-api'
import { logout, setUserData, toggleIsLoading } from './auth-reducer'

export const uploadAvatar = (photoFile) => async (dispatch) => {
  const data = await userAPI.uploadAvatar(photoFile)
  dispatch(setUserData(data.user))
}

export const deleteAvatar = () => async (dispatch) => {
  const data = await userAPI.deleteAvatar()
  dispatch(setUserData(data.user))
}

// all fields in update updateObj must be named like User model fields
export const updateUserInfo = (updateObj) => async (dispatch) => {
  try {
    dispatch(toggleIsLoading(true))
    const data = await userAPI.updateUser(updateObj)
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
    await userAPI.deleteAccount()
    dispatch(logout())
  } catch (error) {
    console.log(error)
  }
}
