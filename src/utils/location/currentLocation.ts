export interface Coord {
  latitude: string | number
  longitude: string | number
  city: string
}
export const getCurrentLocation = async (): Promise<Coord> => {
  const apiUrl = 'https://ipapi.co/json/'

  const data = await fetch(apiUrl)

  const { latitude, longitude, city } = await data.json()

  return {
    latitude: latitude,
    longitude: longitude,
    city: city
  }
}
