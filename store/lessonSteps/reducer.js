import { createSlice } from '@reduxjs/toolkit'


const lessonStepsReducer = createSlice({
  name: 'lessonStepsReducer',
  initialState: {
    steps: [],
    currentStep: null,
    isLoading: false,
  },
  reducers: {
    setSteps: (state, action) => {
      state.steps = action.payload
    },
    addStep: (state, action) => {
      state.steps = [...state.steps, action.payload]
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload
    },
    clearCurrentStep: (state) => {
      state.currentStep = null
    },
    toggleIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const {
  setSteps,
  addStep,
  updateLesson,
  toggleIsLoading,
  clearCurrentStep,
  setCurrentStep } = lessonStepsReducer.actions

export default lessonStepsReducer.reducer
