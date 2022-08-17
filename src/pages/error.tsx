import React from 'react'
import { Link } from 'react-router-dom'

const Error: React.FC = () => {
  document.title = 'Page Not Found'

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <img
        src="/src/assets/images/404.png"
        className="w-1/4"
        alt="page not found!"
      />
      <p className="mt-5">It's seem pretty dark down here.</p>
      <Link to="/" className="py-2 px-5 text-black bg-action rounded mt-5">
        Go back
      </Link>
    </div>
  )
}

export default Error
