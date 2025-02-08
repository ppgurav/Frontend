import React, { useState } from 'react'

import Validation from './Validation'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [values, setValues] = useState({
    email:'',
    password:''
  })

  const [errors, setErrors] = useState({})


  function handleChange(e) {
    const newobj = {...values,[e.target.name]: e.target.value}
    setValues(newobj)
  }
  
  function handleLogin(e){
    e.preventDefault();
   setErrors(Validation(values));
    
  }

  return (
    <body class="bg-blue-100 ">
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-blue-600" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
            required
          />
          {errors.email && <p className='text-red-500'>{errors.email}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-blue-600" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your password"
            required
          />
          {errors.name && <p className='text-red-500'>{errors.name}</p>}
        </div>
        <div className="w-full px-1 py-2 mt-1 text-blue-800">
      <input type="checkbox"/> Remember me
      </div>
        <button type="submit" className="w-full py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600">
          Login
        </button>

      <div className="w-full px-1 py-2 mt-1 text-blue-800">
        <a href="/for" className="text-blue-400 hover:underline">Forgot Password?</a>
      </div>
      </form>
      <div className="mt-4 text-center">
        <span>Don't have an account? </span>
        <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
      </div>
    </div>
</body>
  )
}

export default Login
