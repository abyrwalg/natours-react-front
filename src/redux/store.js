import { configureStore } from '@reduxjs/toolkit';
import toursSlice from './slices/toursSlice';

export const store = configureStore({
  reducer: { tours: toursSlice },
});
