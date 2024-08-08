import React from 'react'
import LoginForm from '../components/core/Auth/LoginForm'
import { useSelector } from 'react-redux'
import Loader from  '../components/core/Loader'

const Login = () => {
  const {isLoading} = useSelector(state => state.loader)
  return (
    <div className='w-screen min-h-screen bg-backdrop flex justify-center items-center relative'>
      <div className='border-2 w-full max-w-screen-sm border-white rounded-3xl p-20 bg-secondary_background'>
        <h1 className='text-5xl font-mono font-semibold text-cream_primary text-center'>Login</h1>
        <LoginForm />
      </div>
      {
        isLoading && <Loader />
      }
    </div>
  )
}

export default Login
