import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import { getCookie } from '../utils/storage/useCookie'
import UserProfile from '../components/user/UserProfile'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const DefaultLayout: React.FC = () => {
  const auth = getCookie('tk')
  const { userInfo } = useSelector((state: RootState) => state.userinfo)
  return (
    <div className="bg-white">
      <Header />
      <div className="lg:px-32 md:px-16 px-2 flex justify-center gap-5">
        <div className="lg:w-1/2 w-full">
          {auth !== '' ? <Outlet /> : Navigate({ to: '/login' })}
        </div>
        <div className="w-1/2 lg:block hidden">
          <div className="sticky top-28">
            {userInfo !== null ? (
              <UserProfile
                age={userInfo.age}
                email={userInfo.email}
                gender={userInfo.gender}
                image={userInfo.image}
                name={userInfo.name}
                status={userInfo.status}
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
