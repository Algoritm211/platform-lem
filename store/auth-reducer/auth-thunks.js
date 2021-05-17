import { setAppReady } from '../app-reducer/app-reducer'
import {
  setAuthError,
  setIsAuth,
  setUserAuthData,
  toggleIsLoading,
} from './auth-reducer'
import AuthAPI from '../../api/api.auth'

export const authUser = () => async (dispatch) => {
  try {
    dispatch(toggleIsLoading(true))
    dispatch(setAppReady(false))
    const data = await AuthAPI.auth()
    dispatch(setUserAuthData(data.user))
    dispatch(setAppReady(true))
    dispatch(toggleIsLoading(false))
  } catch (error) {
    dispatch(setIsAuth({ isAuth: false }))
  }
}
