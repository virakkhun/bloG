import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { persist } from '../../features/user/user-info.slice'
import { AppDispatch, RootState } from '../../app/store'
import { useNavigate } from 'react-router-dom'
import UserProfile from '../../components/user/UserProfile'
import Icons from '../../components/Icons/Icons'
import jsCookie from 'js-cookie'

const Profile = () => {
  const navigate = useNavigate()
  const { userInfo } = useSelector((state: RootState) => state.userinfo)
  const effect = useRef(true)
  const dispatch = useDispatch<AppDispatch>()

  const logout = () => {
    jsCookie.remove('tk')
    localStorage.removeItem('userInfo')

    navigate('/login')
  }

  useEffect(() => {
    document.title = `${userInfo.name ? userInfo.name : 'User'} - bloG`
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
        <div className="mt-10 flex justify-center">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
