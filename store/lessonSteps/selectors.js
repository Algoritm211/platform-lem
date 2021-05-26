
export const getSteps = (state) => {
  return state.lessonStepsReducer.steps
}

export const getCurrentStep = (state) => {
  return state.lessonStepsReducer.currentStep
}

export const getIsLoading = (state) => {
  return state.lessonStepsReducer.isLoading
}
