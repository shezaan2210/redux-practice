import React from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../store/reducers/registerSlice'

const Form = () => {
    const submitHandler= (e)=>{
        e.preventDefault()
      }

  return (
    <>
          <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
        <input onChange={useDispatch(()=> register())} className='border border-zinc-300' type="text" />
        <input className='border border-zinc-300' type="email" name="" id="" />
        <input className='border border-zinc-300' type="text" name="" id="" />
        <button>submit</button>
      </form>

    </>

  )
}

export default Form