import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useGetUserInfoService } from './service/getUserInfo.service'

const initialState: {isLoading: boolean} = {
  isLoading: false,
}

export const getUserInfo = createAsyncThunk('user/info', async (email: string) => {
  return await useGetUserInfoService(email)
})

export const getUserSlice = createSlice({
  name: 'user-info',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        if(payload.statusCode === 200) {
          useGetUserInfoService(
            payload.email
          ).then(data => {
            localStorage.setItem('userInfo', JSON.stringify(data.data))
          })
          state.isLoading = false
        } else {
          state.isLoading = false
        }
      })
      .addCase(getUserInfo.rejected, state => {
        state.isLoading = false
      })
  }
})

export default getUserSlice.reducer