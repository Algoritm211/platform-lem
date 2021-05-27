import { createSlice } from '@reduxjs/toolkit'

const reducer = createSlice({
  name: 'auth',
  initialState: {
    userData: {},
    isAuth: false,
    authError: null,
    registrationError: null,
    isLoading: false,
  },
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload.isAuth
    },
    setUserAuthData(state, action) {
      state.userData = action.payload
      state.isAuth = true
      state.authError = null
    },
    setUserData(state, action) {
      state.userData = action.payload
    },
    logout(state) {
      state.userData = {}
      state.isAuth = false
    },
    addCourseToUser(state, action) {
      state.userData.coursesAuthor.push(action.payload)
    },
    setAuthError(state, action) {
      state.authError = action.payload
    },
    setRegistrationError(state, action) {
      state.registrationError = action.payload
    },
    registrationSuccess(state) {
      state.registrationError = null
    },
    toggleIsLoading(state, action) {
      state.isLoading = action.payload
    },
  },
})

export const {
  setIsAuth,
  logout,
  setUserData,
  setAuthError,
  setUserAuthData,
  addCourseToUser,
  registrationSuccess,
  setRegistrationError,
  toggleIsLoading,
} = reducer.actions

export default reducer.reducer
