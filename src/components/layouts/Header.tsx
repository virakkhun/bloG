import { Link } from 'react-router-dom'
import Icons from '../../components/Icons/Icons'
import React from 'react'
const Header: React.FC = () => (
  <div className="flex justify-between items-center">
    <div className="py-5">
      <p className="text-2xl font-bold text-default">BlogPost 🎴</p>
    </div>
    <div className="flex justify-between gap-md">
      <Link to="/">
        <Icons name="home" style="h-5 w-5 fill-default" />
      </Link>
      <Link to="/weather">
        <Icons name="weather" style="h-5 w-5 fill-default" />
      </Link>
      <Link to="/post">
        <Icons name="social" style="h-5 w-5 fill-default" />
      </Link>
      <a href={'https://github.com/virakkhun/weather-app.git'}>
        <Icons name="github" style="h-5 w-5 fill-secondary" />
      </a>
    </div>
  </div>
)

export default Header
