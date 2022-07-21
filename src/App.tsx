import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import Home from './pages/Home/index'
import Post from './pages/Post'
import Weather from './pages/Weather/index'

function App() {
  return (
    <div className="lg:px-32 md:px-16 px-2 bg-primary">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
