import { createSlice } from '@reduxjs/toolkit'

const modalControlSlice = createSlice({
  name: 'modal',
  initialState: {
    isShow: false
  },
  reducers: {
    openModal: (state) => {
      state.isShow = true
    },
    closeModal: (state) => {
      state.isShow = false
    }
  }
})
export const { openModal, closeModal } = modalControlSlice.actions
export default modalControlSlice.reducer
