import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import { getCookie } from '../utils/storage/useCookie'

const DefaultLayout: React.FC = () => {
  const auth = getCookie('tk')
  return (
    <div className="bg-white">
      <Header />
      <div className="lg:px-32 md:px-16 px-2 flex justify-center gap-5">
        <div className="lg:w-1/2 w-full">
          {auth !== '' ? <Outlet /> : Navigate({ to: '/login' })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
