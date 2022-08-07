import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PostBody } from './post.type'
import { CreatePostService } from './createPost.service'

const initialState: { isLoading: boolean } = {
  isLoading: false
}

export const createPost = createAsyncThunk(
  'post/createPost',
  async (postBody: PostBody) => {
    const data = await CreatePostService(postBody)
    console.log(data)
    return data
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
      .addCase(createPost.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(createPost.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export default createPostSlice.reducer
