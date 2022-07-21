import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useWeatherService } from './getWeather.service'
import { WeatherState } from './weather.type'

const initialState: WeatherState = {
  cloud: {
    all: 0
  },
  loading: false,
  main: {
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0
  },
  name: '',
  visibility: 0,
  weather: [
    {
      description: '',
      icon: '',
      id: 0,
      main: ''
    }
  ],
  wind: {
    deg: 0,
    speed: 0
  }
}

export const fetchWeater = createAsyncThunk('weather/fetchWeater', async () => {
  const res = await useWeatherService()

  return res
})

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeater.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      fetchWeater.fulfilled,
      (state, action: PayloadAction<WeatherState>) => {
        state.loading = false
        state.cloud = action.payload.cloud
        state.main = action.payload.main
        state.name = action.payload.name
        state.visibility = action.payload.visibility
        state.weather = action.payload.weather
        state.wind = action.payload.wind
      }
    )
    builder.addCase(fetchWeater.rejected, (state, action) => {
      state.loading = false
      console.log(action)
    })
  }
})

export default weatherSlice.reducer
