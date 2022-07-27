import Icons from '../../components/Icons/Icons'
import type { AppDispatch, RootState } from '../../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { fetchWeater } from '../../features/getWeather/getWeatherSlice'

const Home: React.FC = () => {
  const { loading, weather, cloud, main, name, visibility, wind } = useSelector(
    (state: RootState) => state.weather
  )
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchWeater())
  }, [])

  if (!loading) {
    return (
      <div className="my-md px-md py-sm bg-secondary rounded-md">
        <h1 className="text-default my-sm text-xl bg-primary p-sm rounded-md flex items-center gap-2">
          <span>Today Weather at</span>
          <span className="underline">{name}</span>
        </h1>
        <div className="flex flex-col gap-md">
          <div>
            <p className="mb-sm text-default text-sm">Temperature</p>
            <div className="flex items-start gap-sm">
              <Icons name="temp" style="h-5 w-5" />
              <span className="text-2xl text-action">{main.temp}</span>
            </div>
          </div>
          <div>
            <p className="mb-sm text-default text-sm">Visibility</p>
            <div className="flex items-start gap-sm">
              <Icons name="temp" style="h-5 w-5" />
              <span className="text-2xl text-action">{visibility}</span>
            </div>
          </div>
          <div>
            <p className="mb-sm text-default text-sm">Wind Speed</p>
            <div className="flex items-start gap-sm">
              <Icons name="temp" style="h-5 w-5" />
              <span className="text-2xl text-action">{wind.speed}</span>
            </div>
          </div>
          <div>
            <p className="mb-sm text-default text-sm">Weather</p>
            <div className="flex flex-col items-start gap-sm">
              <div className="flex gap-sm">
                <Icons name="temp" style="h-5 w-5" />
                <p className="text-2xl text-action">{weather[0].main}</p>
                <span className="text-sm">({weather[0].description})</span>
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
