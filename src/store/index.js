import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import userReducer from './slices/userSlice'
import authReducer from './slices/authSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    auth: authReducer,
  },
})