import React from 'react'

const Weather: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="md:w-1/2 md:h-1/2 flex flex-col items-center gap-4">
        <p className="text-default">Don't know what to put here.</p>
        <img
          src="/src/assets/images/thinking.svg"
          alt="thinking"
          className="w-3/4 mx-auto object-cover"
        />
      </div>
    </div>
  )
}

export default Weather
