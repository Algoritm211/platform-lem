import { createSlice } from '@reduxjs/toolkit'

const reducer = createSlice({
  name: 'appReducer',
  initialState: {
    isReady: false,
  },
  reducers: {
    setAppReady: (state, action) => {
      state.isReady = action.payload
    },
  },
})

export const { setAppReady } = reducer.actions
export default reducer.reducer
