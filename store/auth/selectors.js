export const getUserData = (state) => {
  return state.authReducer.userData
}

export const getIsAuth = (state) => {
  return state.authReducer.isAuth
}

export const getAuthError = (state) => {
  return state.authReducer.authError
}

export const getRegistrationError = (state) => {
  return state.authReducer.registrationError
}

export const getIsLoading = (state) => {
  return state.authReducer.isLoading
}
