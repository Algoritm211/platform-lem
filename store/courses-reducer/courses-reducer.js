import { createSlice } from '@reduxjs/toolkit'

const coursesReducer = createSlice({
  name: 'coursesReducer',
  initialState: {
    allCourses: [],
    isLoading: false,
    usersCourses: [],
    usersAuthorCourses: [],
    page: 1,
    coursesCount: 0,
    filters: [],
    currentCourse: null,
  },
  reducers: {
    toggleIsLoading: (state, action) => {
      state.isLoading = action
    },
    setAllCourses: (state, action) => {
      state.allCourses = action.payload.courses
      state.coursesCount = action.payload.coursesCount
    },
    setUserCourses: (state, action) => {
      state.usersCourses = action.payload.courses
    },
    setUserAuthorCourses: (state, action) => {
      state.usersAuthorCourses = action.payload.coursesAuthor
    },
    setFilters: (state, action) => {
      state.filters = [...action.payload]
    },
    setCurrentCourse: (state, action) => {
      state.currentCourse = action.payload
    },
    clearCurrentCourse: (state, action) => {
      state.currentCourse = null
    },
    updateCourse: (state, action) => {
      const updateCallback = (course) => {
        if (course._id === action.payload._id) {
          return action.payload
        }
        return course
      }
      state.allCourses = state.allCourses.map((course) =>
        updateCallback(course),
      )
      state.usersCourses = state.usersCourses.map((course) =>
        updateCallback(course),
      )
    },
    deleteCourse: (state, action) => {
      const deleteCallback = (course) => {
        return course._id !== action.payload._id
      }
      state.usersAuthorCourses = state.usersAuthorCourses.filter((course) =>
        deleteCallback(course),
      )
      state.usersCourses = state.usersCourses.filter((course) =>
        deleteCallback(course),
      )
    },
  },
})

export const {
  setAllCourses,
  toggleIsLoading,
  setUserCourses,
  setCurrentCourse,
  updateCourse,
  deleteCourse,
  clearCurrentCourse,
  setUserAuthorCourses,
  setFilters,
} = coursesReducer.actions

export default coursesReducer.reducer
