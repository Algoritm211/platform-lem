import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './app/reducer'
import authReducer from './auth/reducer'
import coursesReducer from './courses/reducer'
import { createWrapper } from 'next-redux-wrapper'


const rootReducer = combineReducers({
  appReducer,
  authReducer,
  coursesReducer,
})

const makeStore = (context) =>
  configureStore({
    reducer: rootReducer,
  })

export const wrapper = createWrapper(makeStore, { debug: false })
