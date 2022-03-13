import { configureStore } from '@reduxjs/toolkit';
import gameSlice from './gameLevel';

const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const gameActions = gameSlice.actions;
export default store;
