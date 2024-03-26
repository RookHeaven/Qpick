import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TModalSlice } from './types.ts';
import { IProduct } from '../../../@types/types.ts';

const initialState: TModalSlice = {
  modalIsOpen: false,
  modalProduct: null,
};

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
    setModalProduct: (state, action: PayloadAction<IProduct>) => {
      state.modalProduct = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  setModalProduct,
} = modalSlice.actions;

export default modalSlice.reducer;
