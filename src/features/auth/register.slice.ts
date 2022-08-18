import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IRegister } from './interface/register.type'
import { RegisterService } from './service/register.service'

export const initialState: { isLoading: boolean } = {
  isLoading: false
}

export const Register = createAsyncThunk(
  'user/register',
  async (payload: IRegister) => await RegisterService(payload)
)

export const registerSlice = createSlice({
  initialState: initialState,
  name: 'user-register',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(Register.fulfilled, (state, { payload }) => {
        if (payload.statusCode === 200) {
          state.isLoading = false
        }
      })
      .addCase(Register.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export default registerSlice.reducer
