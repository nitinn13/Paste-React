import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/Pasteslice.js'

export default configureStore({
  reducer: {
    paste : pasteReducer,
  },
})