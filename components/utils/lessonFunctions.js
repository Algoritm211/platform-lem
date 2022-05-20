
export const countArrayEntries = (arr1, arr2) => {
  return arr1.reduce((a, c) => a + arr2.includes(c), 0)
}

// This function you must use with array like [{id: 123, stepId: 123}, {id: 321, stepId: 321}]
export const getStepIdArr = (array) => {
  const stepArr = array.reduce((accum, stepObj) => {
    return accum + stepObj.stepId + ','
  }, '')

  return stepArr.split(',').slice(0, -1)
}

// This function with lessons array, which you can give from courses.lessons
export const getAllCourseStepId = (arrayLessons) => {
  let allStepsIdArr = []
  arrayLessons.forEach((lesson) => {
    const stepArr = getStepIdArr(lesson.steps)
    allStepsIdArr = allStepsIdArr.concat(stepArr)
  })
  return allStepsIdArr
}

export const percentCompletedCourse = (userStepsCompleted, course) => {
  const preparedUserStep = Array.from(new Set(userStepsCompleted))
  let percentCompleted = 0
  const allSteps = Array.from(new Set(getAllCourseStepId(course.lessons)))
  const completed = countArrayEntries(preparedUserStep, allSteps)
  if (completed !== 0) {
    percentCompleted = (completed * 100 / allSteps.length).toFixed(1)
  }
  return percentCompleted
}
