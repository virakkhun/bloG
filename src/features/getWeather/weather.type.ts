interface IWeather {
  id: number
  main: string
  description: string
  icon: string
}

interface IMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

interface IWind {
  speed: number
  deg: number
}

interface ICloud {
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
