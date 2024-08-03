import React from 'react'
import LoginForm from '../components/core/Auth/LoginForm'

const Login = () => {
  return (
    <div className='w-screen min-h-screen bg-backdrop flex justify-center items-center'>
      <div className='border-2 border-white rounded-3xl p-20 bg-text_secondary'>
        <h1 className='text-5xl font-mono font-semibold text-white text-center'>Login</h1>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
