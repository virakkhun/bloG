import { Outlet } from 'react-router-dom'
import React from 'react'

const AuthLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AuthLayout
