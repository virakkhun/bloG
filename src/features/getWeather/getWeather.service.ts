import { getCurrentLocation } from '../../utils/location/currentLocation'

export const useWeatherService = async () => {
  const apiKey = import.meta.env.VITE_API_KEY
  const { latitude, longitude } = await getCurrentLocation()
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

  const fetchWeather = await fetch(url)
  const response = await fetchWeather.json()

  return response
}
