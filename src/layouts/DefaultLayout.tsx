import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import { getCookie } from '../utils/storage/useCookie'
import UserProfile from '../components/user/UserProfile'
import { userInfo } from '../utils/storage/userInfo'

const DefaultLayout: React.FC = () => {
  const auth = getCookie('tk')
  const user = userInfo()
  return (
    <div className="bg-white">
      <Header />
      <div className="lg:px-32 md:px-16 px-2 flex justify-center gap-5">
        <div className="lg:w-1/2 w-full">
          {auth !== '' ? <Outlet /> : Navigate({ to: '/login' })}
        </div>
        <div className="w-1/2 lg:block hidden">
          <div className="sticky top-28">
            {user !== null ? (
              <UserProfile
                age={user.age}
                email={user.email}
                gender={user.gender}
                image={user.image}
                name={user.name}
                status={user.status}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
