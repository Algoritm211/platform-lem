import { createSlice } from '@reduxjs/toolkit'

const lessonReducer = createSlice({
  name: 'lessonReducer',
  initialState: {
    currentLesson: null,
    lessons: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    setCurrentLesson: (state, action) => {
      state.currentLesson = action.payload
    },
    clearCurrentLesson: (state, action) => {
      state.currentLesson = null
    },
    setLessons: (state, action) => {
      state.lessons = action.payload
    },
    deleteLessonSuccess: (state, action) => {
      const id = action.payload
      state.lessons = state.lessons.filter((lesson) => lesson._id !== id)
    },
    clearLessons: (state, action) => {
      state.lessons = []
    },
    toggleIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const {
  setCurrentLesson,
  setError,
  setLessons,
  clearLessons,
  deleteLessonSuccess,
  clearCurrentLesson } = lessonReducer.actions

export default lessonReducer.reducer
