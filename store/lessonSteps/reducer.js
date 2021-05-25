import { createSlice } from '@reduxjs/toolkit'


const lessonStepsReducer = createSlice({
  name: 'lessonStepsReducer',
  initialState: {
    steps: [],
    currentStep: null,
  },
  reducers: {
    setSteps: (state, action) => {
      state.steps = action.payload
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload
    },
  },
})

export const { setSteps, setCurrentStep } = lessonStepsReducer.actions

export default lessonStepsReducer.reducer
