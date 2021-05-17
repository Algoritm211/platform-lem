import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './app-reducer/app-reducer'
import authReducer from './auth-reducer/auth-reducer'
import { createWrapper } from 'next-redux-wrapper'


const rootReducer = combineReducers({
  appReducer,
  authReducer,
})

// create a makeStore function
const makeStore = (context) =>
  configureStore({
    reducer: rootReducer,
  })

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: false })
