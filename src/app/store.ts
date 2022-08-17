import { configureStore } from '@reduxjs/toolkit'
import createPostReducer from '../features/post/createPostSlice'
import postReducer from '../features/post/getPostSlice'
import loginReducer from '../features/auth/login.slice'
import registerReducer from '../features/auth/register.slice'
import userInfoReducer from '../features/user/getuserinfo.slice'

export const store = configureStore({
  reducer: {
    post: postReducer,
    createPost: createPostReducer,
    login: loginReducer,
    register: registerReducer,
    userinfo: userInfoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
