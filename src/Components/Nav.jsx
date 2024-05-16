import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Show from './Show'

const Nav = () => {
  return (
    <div className='flex justify-center items-center gap-10 py-10'>
        <Link to='/'>{<Home/>}</Link>
        <Link to='/register'>{<Register/>}</Link>
        <Link to='/show'>{<Show/>}</Link>
        
    </div>
  )
}

export default Nav