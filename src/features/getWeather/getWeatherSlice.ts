import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useWeatherService } from './getWeather.service'
import { Weather, WeatherState } from './weather.type'

const initialState: WeatherState = {
  loading: false,
  weather: {} as Weather
}

export const fetchWeater = createAsyncThunk('weather/fetchWeater', async () => {
  try {
    const res = await useWeatherService()
    return await res.json()
  } catch (err) {
    console.log(err)
  }
})

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeater.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchWeater.fulfilled, (state, action) => {
      state.loading = false
      state.weather = action.payload
    })
    builder.addCase(fetchWeater.rejected, (state, action) => {
      state.loading = false
    })
  }
})

export default weatherSlice.reducer
