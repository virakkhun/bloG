import Icons from '../../components/Icons/Icons'
import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Home: React.FC = () => {
  const { loading, weather } = useSelector((state: RootState) => state.weather)
  if (!loading && weather !== null) {
    return (
      <>
        <div className="my-md px-md py-sm bg-secondary rounded-md">
          <h1 className="text-default my-sm text-xl bg-primary p-sm rounded-md">
            Today Weather at <span className="underline">{weather.name}</span>
          </h1>
          <p>{weather.visibility}</p>
          <p className="mb-sm text-default text-sm">Temperature</p>
          <div className="flex items-start gap-sm">
            <Icons name="temp" style="h-5 w-5" />
            <p className="text-5xl text-action">{} &#8457;</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div>Loading....</div>
    </>
  )
}
export default Home
