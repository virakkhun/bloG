import Spinner from '../../components/assets/Spinner'
import React from 'react'
import { userInfo } from '../../utils/storage/userInfo'

const Home: React.FC = () => {
  document.title = 'Home'
  const user = userInfo()
  if(userInfo()) {
    return (
      <div className="text-3xl flex justify-center items-center h-screen">
        <p>Welcome bro, {user.email}</p>
        <p>Your id is: {user.id}</p>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col gap-3 justify-center items-center w-full h-screen">
        <p className="text-default">No data found</p>
      </div>
    )
  }
}

export default Home
