import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary">Hello with Primary</h1>
      <button className="bg-secondary text-white px-4 py-2 rounded">
        Secondary Button
      </button>
      <p className="text-success">This is a success message</p>
      <p className="text-danger">This is a danger message</p>
      </div>
  )
}

export default Home