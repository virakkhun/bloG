import Icons from '../../components/Icons/Icons'
import type { AppDispatch, RootState } from '../../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchWeater } from '../../features/getWeather/getWeatherSlice'
import Spinner from '../../components/assets/Spinner'

const Home: React.FC = () => {
  const { isFetching, currentWeather } = useSelector(
    (state: RootState) => state.weather
  )
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchWeater())
  }, [])

  const formatDate = () => {
    const date = new Date(currentWeather.time).toString()
    return date.split(' ').slice(1, 4).join('-')
  }

  if (!isFetching) {
    return (
      <div className="my-md px-md py-sm bg-secondary rounded-md w-full h-screen">
        <h1 className="text-default my-sm text-xl bg-primary p-sm rounded-md md:flex items-center gap-2 block">
          <span>Today Weather at </span>
          <span className="underline">{'Phnom Penh'}</span>
          <span>
            <div className="text-sm text-action">
              <span>{formatDate()}</span>
            </div>
          </span>
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-md">
          <div className="flex justify-center flex-col items-center h-56 bg-black/50 backdrop-blur-md rounded-md shadow-lg">
            <p className="mb-sm text-default text-sm">Temperature</p>
            <div className="flex items-start gap-sm">
              <Icons name="temp" style="h-10 w-10 fill-cyan-600" />
              <span className="text-4xl text-action">
                {currentWeather.temperature}
              </span>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center h-56 bg-black/50 backdrop-blur-md rounded-md shadow-lg">
            <p className="mb-sm text-default text-sm">Wind Direction</p>
            <div className="flex items-start gap-sm">
              <Icons name="wind-direction" style="h-10 w-10 fill-cyan-600" />
              <span className="text-4xl text-action">
                {currentWeather.winddirection}
              </span>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center h-56 bg-black/50 backdrop-blur-md rounded-md shadow-lg">
            <p className="mb-sm text-default text-sm">Wind Speed</p>
            <div className="flex items-start gap-sm">
              <Icons name="wind" style="h-10 w-10 fill-cyan-600" />
              <span className="text-4xl text-action">
                {currentWeather.windspeed}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3 justify-center items-center w-full h-screen">
      <p className="text-default">Loading...</p>
      <Spinner />
    </div>
  )
}
export default Home
