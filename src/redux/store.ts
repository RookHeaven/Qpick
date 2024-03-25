import {configureStore} from '@reduxjs/toolkit';

import cart from './slices/cart/cartSlice.ts';
import modal from './slices/modal/modalSlice.ts';

export const store = configureStore({
  reducer: {
    cart,
    modal
  },
});

export type RootState = ReturnType<typeof store.getState>
