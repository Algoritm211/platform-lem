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
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload
    },
    toggleIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    updateLesson: (state, action) => {
      state.steps = state.steps.map((step) => {
        if (step.stepId._id === action.payload._id) {
          step.stepId = action.payload
          return step
        }
        return step
      })
    },
  },
})

export const {
  setSteps,
  updateLesson,
  toggleIsLoading,
  setCurrentStep } = lessonStepsReducer.actions

export default lessonStepsReducer.reducer
