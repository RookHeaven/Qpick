import {configureStore} from '@reduxjs/toolkit';

import cart from './slices/cart/cartSlice.ts';

export const store = configureStore({
  reducer: {
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>
