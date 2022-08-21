import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetCommentService } from './service/get-comment.service'
import { IComment } from './interface/comment.type'

export const GetCommentThunk = createAsyncThunk('comment/post', async (postId: string) => {
  return await GetCommentService(postId)
})

export const getCommentSlice = createSlice({
  name: 'get-comment',
  initialState: {
    comments: [] as IComment[],
    isLoading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        GetCommentThunk.pending,
        state => {
          state.isLoading = true
        }
      )
      .addCase(
        GetCommentThunk.fulfilled, (state, {payload}) => {
          state.isLoading = false
          state.comments = payload.data
        }
      )
  }
})

export default getCommentSlice.reducer