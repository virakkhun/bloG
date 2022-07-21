import { configureStore } from '@reduxjs/toolkit'
import weahterReducer from '../features/getWeather/getWeatherSlice'

export const store = configureStore({
  reducer: {
    weather: weahterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
