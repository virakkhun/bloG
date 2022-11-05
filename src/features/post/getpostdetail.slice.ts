import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../user/interface/user.type'
import { IPostDetail, PostBody } from './interface/post.type'
import { GetPostDetailService } from './services/getPostDetail.service'

const initialState: IPostDetail & { isLoading: boolean } = {
  detail: {} as PostBody & IUser,
  isLoading: false
}

export const getPostDetail = createAsyncThunk(
  'post/detail',
  async (id: string) => {
    return await GetPostDetailService(id)
  }
)

const getPostDetailSlice = createSlice({
  initialState: initialState,
  name: 'get-post-detail',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostDetail.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPostDetail.fulfilled, (state, { payload }) => {
        if (payload.statusCode === 200) {
          state.isLoading = false
          state.detail = payload.data.detail
        }
      })
      .addCase(getPostDetail.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export default getPostDetailSlice.reducer
