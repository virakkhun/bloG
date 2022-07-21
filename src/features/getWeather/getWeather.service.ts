import { getCurrentLocation } from '../../utils/location/currentLocation'

export const useWeatherService = async () => {
  const apiKey = import.meta.env.VITE_API_KEY
  const lat = getCurrentLocation().latitude
  const long = getCurrentLocation().longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`

  return await fetch(url)
}
