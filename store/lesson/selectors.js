export const getCurrentLesson = (state) => {
  return state.lessonReducer.currentLesson
}

export const getLessonPage = (state) => {
  return state.lessonReducer.lessonPage
}

export const getLessonError = (state) => {
  return state.lessonReducer.error
}

export const getLessons = (state) => {
  return state.lessonReducer.lessons
}
