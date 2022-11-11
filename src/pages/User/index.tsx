import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { persist } from '../../features/user/user-info.slice'
import { AppDispatch, RootState } from '../../app/store'
import { useNavigate } from 'react-router-dom'
import UserProfile from '../../components/user/UserProfile'
import Icons from '../../components/Icons/Icons'
import jsCookie from 'js-cookie'
import { Helmet } from 'react-helmet'

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
    <>
      <Helmet>
        <title>{userInfo.name} | bloG</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="bloG is a mini social media, a legit platform for everyone"
        />
        <meta
          name="keywords"
          content="mini platform, cambodia, siem reap, khmer, blog, khmer blog, kon khmer, KSK, khmer sl khmer"
        />
        <meta
          property="og:description"
          content="bloG is a mini social media, which make your day happier."
        />
        <meta property="og:title" content={`${userInfo.name} | bloG`} />
        <meta property="og:type" content="web application" />
        <meta property="og:url" content={window.location.hostname} />
      </Helmet>
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
    </>
  )
}

export default Profile
