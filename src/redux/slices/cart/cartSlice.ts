import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCartSlice } from './types.ts';
import { IProduct } from '../../../@types/types.ts';

const initialState: TCartSlice = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const findProduct = state.products.find(product => product.id === action.payload.id);

      if (findProduct && findProduct.count !== undefined) {
        findProduct.count++;
      } else {
        state.products.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalCount = state.products.reduce((sum, product) => (product.count ?? 0) + sum, 0);

      state.totalPrice = state.products.reduce((sum, product) => (product.price * (product.count ?? 1) + sum), 0);
    },
    removeProduct: (state, action: PayloadAction<IProduct>) => {
      const findProduct = state.products.find(product => product.id === action.payload.id);

      if (findProduct && findProduct.count) {
        findProduct.count--;
      }

      if (findProduct?.count === 0) {
        state.products = state.products.filter(product => product.id !== action.payload.id);
      }

      if (state.totalPrice > 0) {
        state.totalPrice -= action.payload.price;
      }

      if (action.payload.count) {
        state.totalCount--;
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(product => product.id !== action.payload.id);

      if (action.payload.count) {
        state.totalPrice -= action.payload.price * action.payload.count;
        state.totalCount -= action.payload.count;
      }
    },
  },
});

export const {
  addToCart,
  removeProduct,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
