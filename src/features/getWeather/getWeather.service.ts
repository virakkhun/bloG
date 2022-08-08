import { getCurrentLocation } from '../../utils/location/currentLocation'

export const useWeatherService = async () => {
  const { latitude, longitude } = await getCurrentLocation()

  const url = `/weather?latitude=${latitude}&longitude=${longitude}&current_weather=true`

  const fetchWeather = await fetch(url)

  const response = await fetchWeather.json()

  return response
}
