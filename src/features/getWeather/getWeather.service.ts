import { getCurrentLocation } from '../../utils/location/currentLocation'

export const useWeatherService = async () => {
  const apiKey = import.meta.env.VITE_API_KEY
  const { latitude, longitude, city } = await getCurrentLocation()
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2228271049mshd0bd43404425f8dp1c369ajsnf662c68bd1a9',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  }

  const fetchWeather = await fetch(
    `https://open-weather13.p.rapidapi.com/city/${city}`,
    options
  )

  const response = await fetchWeather.json()
  console.log(response)

  return response
}
