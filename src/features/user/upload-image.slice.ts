import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UploadImageService } from './service/uploadImage.service'

const initialState: { isLoading: boolean } = {
  isLoading: false
}

export const UploadImage = createAsyncThunk(
  'user/upload-image',
  async (payload: { id: string; image: FormData | any }) => {
    return await UploadImageService(payload.id, payload.image)
  }
)

export const UploadImageSlice = createSlice({
  name: 'upload-image',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UploadImage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(UploadImage.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(UploadImage.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export default UploadImageSlice.reducer
