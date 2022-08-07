import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useWeatherService } from './getWeather.service'
import { CurrentWeather } from './weather.type'

const initialState = {
  isFetching: false,
  currentWeather: {} as CurrentWeather
}

export const fetchWeater = createAsyncThunk<CurrentWeather>(
  'weather/fetchWeater',
  async () => {
    const { current_weather } = await useWeatherService()
    return current_weather
  }
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeater.pending, (state) => {
      state.isFetching = true
    })
    builder.addCase(
      fetchWeater.fulfilled,
      (state, action: PayloadAction<CurrentWeather>) => {
        state.isFetching = false
        state.currentWeather = action.payload
      }
    )
    builder.addCase(fetchWeater.rejected, (state, action) => {
      state.isFetching = false
      console.log(state.currentWeather)
    })
  }
})

export default weatherSlice.reducer
