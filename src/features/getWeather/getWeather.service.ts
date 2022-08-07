import { getCurrentLocation } from '../../utils/location/currentLocation'

export const useWeatherService = async () => {
  const baseUrl = import.meta.env.VITE_WEATHER_BASE_URL
  const { latitude, longitude } = await getCurrentLocation()

  const url = `${baseUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true`

  const fetchWeather = await fetch(url)

  const response = await fetchWeather.json()

  return response
}
