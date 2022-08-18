import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useGetPostService } from './services/getPost.service'
import { IPost } from './interface/post.type'

const initialState: IPost & { isLoading: boolean } = {
  isLoading: false,
  post: []
}

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  return await useGetPostService()
})

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.post = payload.data
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export default postSlice.reducer
