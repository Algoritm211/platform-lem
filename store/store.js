import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './app/reducer'
import authReducer from './auth/reducer'
import coursesReducer from './courses/reducer'
import lessonReducer from './lesson/reducer'
import lessonStepsReducer from './lessonSteps/reducer'
import { createWrapper } from 'next-redux-wrapper'


const rootReducer = combineReducers({
  appReducer,
  authReducer,
  coursesReducer,
  lessonReducer,
  lessonStepsReducer,
})

const makeStore = (context) =>
  configureStore({
    reducer: rootReducer,
  })

export const wrapper = createWrapper(makeStore, { debug: false })
