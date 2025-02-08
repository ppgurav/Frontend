import React, { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errors = {}
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!email) {
      errors.email = 'Email is required'
    } else if (!emailPattern.test(email)) {
      errors.email = 'Please enter a valid email'
    }

    if (!password) {
      errors.password = 'Password is required'
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match'
    }

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleRegister = (e) => {
    e.preventDefault()

    if (validate()) {
      console.log({ email, password })
      // Handle register logic here
    }
  }

  return (
    <body className='bg-green-100'>
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-800">Create Your Account</h2>
      <form onSubmit={handleRegister}>
      <div className="mb-4">
          <label className="block text-sm font-medium text-green-800" htmlFor="email">Name</label>
          <input
            type="name"
            id="name"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-green-800" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-green-800" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-green-800" htmlFor="referral_code">referral_code</label>
          <input
            type="referral_code"
            id="referral_code"
            // value={confirmPassword}
            // onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter referral_code"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-green-800" htmlFor="role">Role</label>
          <input
            type="role"
            id="role"
            // value={confirmPassword}
            // onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your Role"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 bg-green-900 text-white rounded-md hover:bg-green-600 ">
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-center">
        <span>Already have an account? </span>
        <a href="/" className="text-blue-500 hover:underline">Login</a>
      </div>
    </div>
    </body>
  )
}

export default Signup
