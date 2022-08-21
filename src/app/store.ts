import { configureStore } from '@reduxjs/toolkit'
import createPostReducer from '../features/post/createPostSlice'
import postReducer from '../features/post/getPostSlice'
import loginReducer from '../features/auth/login.slice'
import registerReducer from '../features/auth/register.slice'
import getPostDetailReducer from '../features/post/getpostdetail.slice'
import postCommentSlice from '../features/comment/post-comment.slice'
import uploadImageSlice from '../features/user/upload-image.slice'
import modalControlSlice from '../features/modal/close-modal.slice'
import userInfoSlice from '../features/user/user-info.slice'
import getCommentSlice from '../features/comment/get-comment.slice'

export const store = configureStore({
  reducer: {
    post: postReducer,
    createPost: createPostReducer,
    login: loginReducer,
    register: registerReducer,
    postdetail: getPostDetailReducer,
    postcomment: postCommentSlice,
    upoloadimage: uploadImageSlice,
    modalcontrol: modalControlSlice,
    userinfo: userInfoSlice,
    comments: getCommentSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
