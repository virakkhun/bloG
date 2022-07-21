import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useGetPostService } from './getPost.service'
import { IPost } from './post.type'

const initialState: IPost = {
  isLoading: false,
  post: []
}

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  const data = await useGetPostService()
  return data
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
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.post = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false
        console.log(action.error)
      })
  }
})

export default postSlice.reducer
