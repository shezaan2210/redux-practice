import React from 'react'
import Home from './Components/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav.jsx'
import Register from './Components/Register.jsx'
import Show from './Components/Show.jsx'

const App = () => {
  return (
   <>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/show' element={<Show/>}></Route>


   </Routes>
   
   </>
  )
}

export default App