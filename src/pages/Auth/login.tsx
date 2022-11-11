import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import { Login as UserLogin } from '../../features/auth/login.slice'
import { UserInfoThunk } from '../../features/user/user-info.slice'
import Loading from '../../components/assets/Loading'
import Icons from '../../components/Icons/Icons'
import loginImageUrl from '../../assets/images/Blogging-pana.svg'
import { Helmet } from 'react-helmet'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isVisiblePassword, setIsVisiblePassword] = useState(false)

  const { isLoading } = useSelector((state: RootState) => state.login)
  const dispatch = useDispatch<AppDispatch>()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (email === '' && password === '') {
      return
    }

    await dispatch(
      UserLogin({
        email: email,
        password: password
      })
    ).then(() => {
      dispatch(UserInfoThunk(email)).finally(() => navigate('/'))
    })
  }

  return (
    <>
      <Helmet>
        <title>Login | bloG</title>
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
        <meta property="og:title" content="bloG" />
        <meta property="og:type" content="web application" />
        <meta property="og:url" content={window.location.hostname} />
      </Helmet>
      <div className="w-full h-screen bg-white flex lg:flex-row flex-col-reverse gap-10 justify-center items-center md:px-0 px-4">
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 w-full flex flex-col gap-4 md:p-4 bg-default p-2 border border-gray-300"
        >
          <div className="text-3xl font-bold text-center mb-10 text-primary">
            <p>bLoG</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-primary">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-b-gray-300 w-full bg-transparent outline-none shadow-none pl-2 pb-2 text-primary"
              placeholder="johndoe@gmail.com"
              autoFocus={true}
              autoComplete="none"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="password" className="text-primary">
              Password
            </label>
            <div className="relative">
              <input
                type={isVisiblePassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b border-b-gray-300 w-full bg-transparent outline-none shadow-none pl-2 pb-2 text-primary focus:bg-transparent"
                placeholder="123456"
                onFocus={() => setIsVisiblePassword(false)}
              />
              <div onClick={() => setIsVisiblePassword(!isVisiblePassword)}>
                <Icons
                  name={isVisiblePassword ? 'eye-open' : 'eye-close'}
                  style="w-5 h-5 absolute top-1 fill-primary cursor-pointer right-3"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              disabled={email === '' || password === ''}
              className={
                email === '' || password === ''
                  ? 'w-full flex justify-center items-center py-2 bg-action opacity-50 cursor-not-allowed'
                  : 'w-full flex justify-center items-center py-2 bg-action hover:bg-secondary  hover:text-default transition-all rounded'
              }
            >
              {isLoading ? <Loading /> : <span>Login</span>}
            </button>
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/register" className="flex items-center gap-2">
              <span className="text-primary">Don't have an account?</span>
              <span className="text-action">Register</span>
            </Link>
          </div>
        </form>
        <div className="md:w-1/3 w-3/4">
          <img src={loginImageUrl} alt="login" className="w-full" />
        </div>
      </div>
    </>
  )
}

export default Login
