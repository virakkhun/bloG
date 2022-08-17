import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import Loading from '../../components/assets/Loading'
import Icons from '../../components/Icons/Icons'
import { Register as UserRegister } from '../../features/auth/register.slice'

const Register: React.FC = () => {
  document.title = 'Register'
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isVisiblePassword, setIsVisiblePassword] = useState(false)
  const { isLoading } = useSelector((state: RootState) => state.register)
  const dispatch = useDispatch<AppDispatch>()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (email === '' && password === '') {
      return
    }

    await dispatch(
      UserRegister({
        email: email,
        password: password
      })
    ).then(() => {
      if (!isLoading) {
        navigate('/login')
      }
    })
  }

  return (
    <div className="w-full h-screen bg-primary flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="md:w-1/3 w-full flex flex-col gap-4 md:px-0 px-2"
      >
        <p className="text-3xl font-bold text-center mb-10 text-default">
          BlogPost 🎴
        </p>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-action">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b border-default w-full bg-transparent outline-none text-white pl-2 pb-2 hover:scale-105 transition-all duration-300"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="password" className="text-action">
            Password
          </label>
          <div className="relative">
            <input
              type={isVisiblePassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b border-default w-full bg-transparent outline-none text-white pl-2 pb-2 hover:scale-105 transition-all duration-300"
              placeholder="123456"
              onFocus={() => setIsVisiblePassword(false)}
            />
            <div onClick={() => setIsVisiblePassword(!isVisiblePassword)}>
              <Icons
                name={isVisiblePassword ? 'eye-open' : 'eye-close'}
                style="w-5 h-5 absolute top-1 fill-default cursor-pointer right-3"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button className="w-full flex justify-center items-center py-2 bg-action hover:bg-secondary  hover:text-default transition-all rounded">
            {isLoading ? <Loading /> : <span>Register</span>}
          </button>
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/login" className="flex items-center gap-2">
            <span className="text-default">Already have an account?</span>
            <span className="text-action">Login</span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Register
