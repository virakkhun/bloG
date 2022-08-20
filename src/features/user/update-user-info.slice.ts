import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUpdateIUser } from './interface/user.type'
import { UpdateUserInfoService } from './service/updateUserInfo.service'

export const UpdateUserInfo = createAsyncThunk(
  'user/update',
  async (payload: IUpdateIUser & { query: string }) => {
    return await UpdateUserInfoService(payload)
  }
)

export const UpdateUserSlice = createSlice({
  initialState: { isLoading: false },
  name: 'update-info-user',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UpdateUserInfo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(UpdateUserInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false
        localStorage.setItem('userInfo', JSON.stringify(payload.data))
      })
  }
})

export default UpdateUserSlice.reducer
