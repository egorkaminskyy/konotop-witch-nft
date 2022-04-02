import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import header from './header/HeaderSlice';

export const store = configureStore({
  reducer: {
    header: header,
    
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
