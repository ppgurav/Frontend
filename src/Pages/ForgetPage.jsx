
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../utils/axiosInstance";


export default function ForgetPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

  };

  return (
    <div className="max-w-md mx-auto mt-30 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Forget Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-4">
        <label className="block text-sm font-medium text-blue-500" htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
             className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("email", {
              required: "Enter a email associated with your account, and we'll send you a reset link.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid."
              }
            })}
          />
          {errors.email && <p className="errorMsg text-sm text-gray-500">{errors.email.message}</p>}
        </div>
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-900 ">
          Send reset link
        </button>
      </form>
    </div>
  );
}
