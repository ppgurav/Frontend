
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../utils/axiosInstance";
import { Link } from 'react-router-dom'

export default function Signup() {
  const [successMsg, setSuccessMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm();


  //save
    const SignUpUser = async (data) => {
        console.log("s", data);
        
      const response  = await axiosInstance.post("/auth/signup", data )
        
    }

  const onSubmit = (data) => {
    console.log(data);

    try {
      SignUpUser(data)
    } catch (error) {
      console.log("catch: ", error);
      
    }


    setSuccessMsg("User registration is successful.");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-800">Create Your Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {successMsg && <p className="success-msg" style={{
      marginTop: '20px',
      color: successMsg.startsWith('Login successful') ? 'red' : 'green',
    }}>{successMsg}</p>}
        <div className="mb-4">
        <label className="block text-sm font-medium text-green-800" htmlFor="name">Name</label>
          <input
            type="text"
             className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("name", {
              required: "Your full name."
            })}
          />
          {errors.name && (
            <p className="errorMsg">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
        <label className="block text-sm font-medium text-green-800" htmlFor="email">Email</label>
          <input
            type="text"
             className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("email", {
              required: "Enter a valid email to receive updates.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid."
              }
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
        <label className="block text-sm font-medium text-green-800" htmlFor="password">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("password", {
              required: true,
              validate: {
                checkLength: (value) => value.length >= 6,
                matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value
                  )
              }
            })}
          />
          {errors.password?.type === "required" && (
            <p className="errorMsg">Your password must be strong and secure.</p>
          )}
          {errors.password?.type === "checkLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
          {errors.password?.type === "matchPattern" && (
            <p className="errorMsg">
              Password should contain at least one uppercase letter, lowercase
              letter, digit, and special symbol.
            </p>
          )}
        </div>
        <div className="mb-6">
        <label className="block text-sm font-medium text-green-800" htmlFor="referral_code">referral_code</label>
          <input
            type="text"
            placeholder="uthx1d3m"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("referral_code", {
              required: "referral_code."
            })}
          />
          {errors.referral_code && (
            <p className="errorMsg">{errors.referral_code.message}</p>
          )}
        </div> 
        <div className="mb-6">
        <label className="block text-sm font-medium text-green-800" htmlFor="role">Role</label>
          <input
            type="text"
             className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("role", {
              required: "Enter your Role."
            })}
          />
          {errors.role && (
            <p className="errorMsg">{errors.role.message}</p>
          )}
        </div>
        <button type="submit" className="w-full py-2 bg-green-900 text-white rounded-md hover:bg-green-600 ">
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-center">
        <span>Already have an account? </span>
        <Link to={"/"} className="text-blue-500 hover:underline"> Login </Link>
      </div>
    </div>
  );
}
