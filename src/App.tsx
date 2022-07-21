import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AppDispatch } from './app/store'
import Header from './components/layouts/Header'
import { fetchWeater } from './features/getWeather/getWeatherSlice'
import Home from './pages/Home/index'
import Weather from './pages/Weather/index'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const effect = useRef(true)

  useEffect(() => {
    if (effect.current) {
      effect.current = false
      console.log('effect')
      dispatch(fetchWeater())
    }
  }, [])

  return (
    <div className="lg:px-32 md:px-16 px-2 bg-primary">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  )
}

export default App
