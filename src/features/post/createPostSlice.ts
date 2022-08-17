import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PostBody } from './interface/post.type'
import { CreatePostService } from './services/createPost.service'

const initialState: { isLoading: boolean } = {
  isLoading: false
}

export const createPost = createAsyncThunk(
  'post/createPost',
  async (postBody: PostBody) => {
    return await CreatePostService(postBody)
  }
)

export const createPostSlice = createSlice({
  initialState: initialState,
  name: 'create-post',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPost.fulfilled, (state, {payload}) => {
        if(payload.statusCode === 200) {
          state.isLoading = false
        }
      })
      .addCase(createPost.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export default createPostSlice.reducer
