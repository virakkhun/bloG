import { createSlice } from '@reduxjs/toolkit'
import { IUser } from './interface/user.type'

export const UserInfoSlice = createSlice({
  name: 'user-info',
  initialState: {
    userInfo: JSON.parse(localStorage.getItem('userInfo')!) as IUser
  },
  reducers: {
    persist: (state) => {
      state.userInfo = JSON.parse(localStorage.getItem('userInfo')!) as IUser
    }
  }
})

export const { persist } = UserInfoSlice.actions

export default UserInfoSlice.reducer
