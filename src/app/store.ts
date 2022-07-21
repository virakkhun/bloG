import { configureStore } from '@reduxjs/toolkit'
import weahterReducer from '../features/getWeather/getWeatherSlice'
import postReducer from '../features/post/getPostSlice'
export const store = configureStore({
  reducer: {
    weather: weahterReducer,
    post: postReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
