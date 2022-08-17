import { Link } from 'react-router-dom'
import Icons from '../../components/Icons/Icons'
import React from 'react'
const Header: React.FC = () => (
  <div className="flex justify-between items-center bg-black lg:px-32 md:px-16 px-2 sticky top-0">
    <Link to="/" className="py-5">
      <p className="text-2xl font-bold text-default">bloG</p>
    </Link>
    <div className="flex justify-between gap-md">
      <Link
        to="/post/create"
        className="text-action hover:text-default transition-all flex items-center gap-2"
      >
        <span>Post Here</span>
        <Icons name="arrow-right-circle" style="w-5 g-5" />
      </Link>
    </div>
  </div>
)

export default Header
