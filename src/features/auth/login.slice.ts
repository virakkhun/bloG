import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { saveCookie } from '../../utils/storage/useCookie'
import { ILogin } from './interface/login.type'
import { LoginService } from './service/login.service'

export const initialState: { isLoading: boolean } = {
  isLoading: false
}

export const Login = createAsyncThunk('user/login', async (payload: ILogin) => {
  return await LoginService(payload)
})

export const loginSlice = createSlice({
  initialState: initialState,
  name: 'user-login',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(Login.fulfilled, (state, { payload }) => {
        if (payload.statusCode === 200) {
          saveCookie({
            key: 'tk',
            text: payload.data
          })
          state.isLoading = false
        }
      })
      .addCase(Login.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export default loginSlice.reducer
