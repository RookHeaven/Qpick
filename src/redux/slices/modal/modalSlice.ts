import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {TModalSlice} from './types.ts';

const initialState: TModalSlice = {
  modalIsOpen: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<boolean>) => {
      state.modalIsOpen = action.payload;
    },
    closeModal: (state, action: PayloadAction<boolean>) => {
      state.modalIsOpen = action.payload;
    },
  },
})

export const {
  openModal,
  closeModal,
} = modalSlice.actions

export default modalSlice.reducer
