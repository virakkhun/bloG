import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { persist } from '../../features/user/user-info.slice'
import { AppDispatch, RootState } from '../../app/store'
import UserProfile from '../../components/user/UserProfile'
import { Link, useNavigate } from 'react-router-dom'
import Icons from '../../components/Icons/Icons'

const Profile = () => {
  const navigate = useNavigate()
  const { userInfo } = useSelector((state: RootState) => state.userinfo)
  const effect = useRef(true)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (effect.current) {
      effect.current = false
      dispatch(persist())
    }
  }, [])
  return (
    <div className="w-full">
      <div className="sticky top-28">
        <div className="my-5" onClick={() => navigate(-1)}>
          <Icons name="chevron-left" style="h-5 w-5 cursor-pointer" />
        </div>
        {userInfo !== null ? (
          <UserProfile
            age={userInfo.age}
            email={userInfo.email}
            gender={userInfo.gender}
            authorImage={userInfo.authorImage}
            name={userInfo.name}
            status={userInfo.status}
          />
        ) : (
          ''
        )}
        <div className='mt-10 flex justify-center'>
          <Link to='#'>Logout</Link>
        </div>
      </div>
    </div>
  )
}

export default Profile