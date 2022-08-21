import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUser } from './interface/user.type'
import { useGetUserInfoService } from './service/getUserInfo.service'

export const UserInfoThunk = createAsyncThunk(
  'user-info',
  async (email: string) => {
    return await useGetUserInfoService(email)
  }
)

export const UserInfoSlice = createSlice({
  name: 'user-info',
  initialState: {
    userInfo: JSON.parse(localStorage.getItem('userInfo')!) as IUser
  },
  reducers: {
    persist: (state) => {
      state.userInfo = JSON.parse(localStorage.getItem('userInfo')!) as IUser
    }
  },
  extraReducers: (builder) => {
    builder.addCase(UserInfoThunk.fulfilled, (state, { payload }) => {
      state.userInfo = payload.data
      localStorage.setItem('userInfo', JSON.stringify(payload.data))
    })
  }
})

export const { persist } = UserInfoSlice.actions

export default UserInfoSlice.reducer
