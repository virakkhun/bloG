import Icons from '../../components/Icons/Icons'
import type { AppDispatch, RootState } from '../../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { fetchWeater } from '../../features/getWeather/getWeatherSlice'

const Home: React.FC = () => {
  const { isFetching, currentWeather } = useSelector(
    (state: RootState) => state.weather
  )
  const dispatch = useDispatch<AppDispatch>()
  const effect = useRef(true)

  useEffect(() => {
    if (effect.current) {
      effect.current = false
      dispatch(fetchWeater())
    }
  }, [])

  const formatDate = () => {
    const date = new Date(currentWeather.time).toString()
    return date.split(' ').slice(1, 4).join('-')
  }

  if (!isFetching) {
    return (
      <div className="my-md px-md py-sm bg-secondary rounded-md">
        <h1 className="text-default my-sm text-xl bg-primary p-sm rounded-md flex items-center gap-2">
          <span>Today Weather at</span>
          <span className="underline">{'Phnom Penh'}</span>
        </h1>
        <div className="flex flex-col gap-md">
          <div>
            <p className="mb-sm text-default text-sm">Temperature</p>
            <div className="flex items-start gap-sm">
              <Icons name="temp" style="h-5 w-5" />
              <span className="text-2xl text-action">
                {currentWeather.temperature}
              </span>
            </div>
          </div>
          <div>
            <p className="mb-sm text-default text-sm">Wind Direction</p>
            <div className="flex items-start gap-sm">
              <Icons name="temp" style="h-5 w-5" />
              <span className="text-2xl text-action">
                {currentWeather.winddirection}
              </span>
            </div>
          </div>
          <div>
            <p className="mb-sm text-default text-sm">Wind Speed</p>
            <div className="flex items-start gap-sm">
              <Icons name="temp" style="h-5 w-5" />
              <span className="text-2xl text-action">
                {currentWeather.windspeed}
              </span>
            </div>
          </div>
          <div>
            <p className="mb-sm text-default text-sm">Date</p>
            <div className="flex flex-col items-start gap-sm">
              <div className="flex gap-sm">
                <Icons name="temp" style="h-5 w-5" />
                <div className="text-sm text-action">
                  <span>{formatDate()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <div>Loading....</div>
}
export default Home
