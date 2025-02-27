import React from 'react'
import { useForm } from 'react-hook-form';

export default function() {
      const {
        register,
        handleSubmit,
        formState: { errors },
        
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
    
      };
  return (
<div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Confirm OTP</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-4">
        <label className="block text-sm font-medium text-blue-500" htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
             className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("email", {
              required: "Enter a email associated with your account.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid."
              }
            })}
          />
          {errors.email && <p className="errorMsg text-sm text-gray-500">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
        <label className="block text-sm font-medium text-blue-500" htmlFor="otp">OTP</label>
          <input
            type="text"
            placeholder="Enter your email"
             className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("otp", {
              required: "Enter the 6-digit OTP sent to your email.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "otp is not valid."
              }
            })}
          />
          {errors.otp && <p className="errorMsg text-sm text-gray-500">{errors.otp.message}</p>}
        </div>

        <div className="mb-4">
        <label className="block text-sm font-medium text-blue-500" htmlFor="new-password">New Password</label>
          <input
            type="text"
            placeholder="Enter your emnew passsword"
             className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("pas", {
              required: "Create a strong password for your account.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Strong password."
              }
            })}
          />
          {errors.pas && <p className="errorMsg text-sm text-gray-500">{errors.pas.message}</p>}
        </div>

        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-900 ">
          Confirm OTP and Reset Password
        </button>
      </form>
    </div>
  )
}
