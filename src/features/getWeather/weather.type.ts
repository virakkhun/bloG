export interface IWeather {
  id: number
  main: string
  description: string
  icon: string
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

export interface ICloud {
  all: number
}

export interface WeatherState {
  loading: boolean
  weather: IWeather[]
  main: IMain
  visibility: number
  wind: IWind
  cloud: ICloud
  name: string
}
