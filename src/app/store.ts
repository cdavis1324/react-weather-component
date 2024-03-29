import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import WeatherWidgetReducer from '../features/WeatherWidget/WeatherWidget.slice';

export const store = configureStore({
  reducer: {
    weatherWidget: WeatherWidgetReducer
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
