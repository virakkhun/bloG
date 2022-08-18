import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IComment } from './comment.type'
import { PostCommentService } from './post-comment.service'

const initialState: { isLoading: boolean } = {
  isLoading: false
}

export const PostComment = createAsyncThunk(
  'comment/create',
  async (payload: IComment) => {
    return await PostCommentService(payload)
  }
)

export const postCommentSlice = createSlice({
  name: 'create-comment',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PostComment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(PostComment.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(PostComment.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export default postCommentSlice.reducer
