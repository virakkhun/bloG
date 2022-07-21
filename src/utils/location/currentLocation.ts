export interface Coord {
  latitude: string | number
  longitude: string | number
}
export const getCurrentLocation = (): Coord => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      return coords as Coord
    })
  }

  return {
    latitude: 11.5625,
    longitude: 104.916
  }
}
