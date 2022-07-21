export interface IWeather {
  main: string
  description: string
}

export interface IMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export interface IWind {
  speed: number
  deg: number
}

export interface Weather {
  visibility: string
  weather: IWeather[]
  main: IMain
  wind: IWind
  rain: any
  clouds: any
  name: string
}

export interface WeatherState {
  loading: boolean
  weather: Weather
}
