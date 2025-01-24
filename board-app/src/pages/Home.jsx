import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'> 
      <div className='text-style'>Home</div>
      <Link to="/boards" className='text-style'>게시판</Link>
    </div>
  )
}

export default Home