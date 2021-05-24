import { setAppReady } from '../app/reducer'
import {
  logout,
  registrationSuccess,
  setIsAuth, setRegistrationError,
  setUserAuthData,
  toggleIsLoading,
} from './reducer'
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
    dispatch(toggleIsLoading(false))
  }
}

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const data = await AuthAPI.login(email, password)
    dispatch(setUserAuthData(data.user))
  } catch (error) {
    console.log(error)
  }
}

export const registerUser = (userData) => async (dispatch) => {
  try {
    const data = await AuthAPI.registration(userData)
    dispatch(setUserAuthData(data.user))
    dispatch(registrationSuccess())
  } catch (error) {
    console.log(error)
    dispatch(setRegistrationError(error.response?.data?.message))
  }
}

export const logoutUser = () => async (dispatch) => {
  try {
    await AuthAPI.logout()
    dispatch(logout())
  } catch (error) {
    console.log(error)
    dispatch(setIsAuth({ isAuth: false }))
  }
}
