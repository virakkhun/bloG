import { Link } from 'react-router-dom'
import React from 'react'
import { userInfo } from '../../utils/storage/userInfo'
const Header: React.FC = () => (
  <div className="flex justify-center items-center bg-black">
    <div className='md:w-1/2 w-full px-2 md:px-0 flex justify-between items-center'>
      <Link to="/" className="py-5">
        <p className="text-2xl font-bold text-default">bloG</p>
      </Link>
      <div className="flex justify-between gap-md">
        <Link
          to="/user"
          className="text-action hover:text-default transition-all flex items-center gap-2"
        >
          <img src={userInfo() === null ? '' : userInfo().authorImage} alt='profile' className='w-10 h-10 object-cover rounded-full'/>
        </Link>
      </div>
    </div>
  </div>
)

export default Header
