import React from 'react'
import { useSelector } from 'react-redux'
import Form from './Form'

const Register = () => {
  const user = useSelector(state=> state.register.value)
  console.log(user)



  return (
    <>
    <h1>Register</h1>
    <Form/>
    </>
  )
}

export default Register