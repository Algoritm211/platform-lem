export const getAllCourses = (state) => {
  return state.coursesReducer.allCourses
}

export const getIsLoading = (state) => {
  return state.coursesReducer.isLoading
}

export const getUserCourses = (state) => {
  return state.coursesReducer.usersCourses
}

export const getPage = (state) => {
  return state.coursesReducer.page
}

export const getCoursesCount = (state) => {
  return state.coursesReducer.coursesCount
}

export const getFilters = (state) => {
  return state.coursesReducer.filters
}

export const getCurrentCourse = (state) => {
  return state.coursesReducer.currentCourse
}

export const getUserAuthorCourses = (state) => {
  return state.coursesReducer.usersAuthorCourses
}
