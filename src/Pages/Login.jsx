import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const [successMsg, setSuccessMsg] = useState("");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    

const LoginUser = async (data) => {
  console.log("s",data);

  const response = await axiosInstance.post("/auth/login",data)
  console.log(response,"response ")

  if(response.status === 200){
    navigate("/dashboard")
  }else if(response.status === 400 && response.statusText === 'Not Fount'){
    setSuccessMsg("Invalid credentaisl");
  }
  else{
    setSuccessMsg("Invalid Email and password...!");
  }
}
      const onSubmit = (data) => {
        // console.log(response.data);
        try {
          LoginUser(data)
          
        } catch (error) {
        
          console.log("catch: ", error);
        }

      };
    
    
    
      return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          {successMsg && <p className="success-msg" style={{
      marginTop: '20px',
      color: successMsg.startsWith('Login successful') ? 'green' : 'red',
    }}>{successMsg}</p>}
          <div className="mb-4">
          <label className="block text-sm font-medium text-blue-600" htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                 className="w-full px-4 py-2 mt-1 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                {...register("email", {
                  required: "Enter the email associated with your account",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid."
                  }
                })}
              />
              {errors.email && <p className="errorMsg">{errors.email.message}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-blue-600" htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
              className="w-full px-4 py-2 mt-1 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                {...register("password", {
                  required: true,
                  validate: {
                    checkLength: (value) => value.length >= 6,
                    // matchPattern: (value) =>
                    //   /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    //     value
                    //   )
                  }
                })}
              />
              {errors.password?.type === "required" && (
                <p className="errorMsg">Your account password.</p>
              )}
            </div>
            <div className="w-full px-1 py-2 mt-1 text-blue-800">
          <input type="checkbox"/> Remember me
          </div>
            <button type="submit" className="w-full py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600">
              Login
            </button>
          <div className="w-full px-1 py-2 mt-1 text-blue-800">
          <Link to={"/forgetpas"} className="text-blue-400 hover:underline" > Forgot Password </Link>
          </div>   
            </form>
            <div className="mt-4 text-center">
            <span>Don't have an account? </span>
            <Link to={"/signup"} className="text-blue-500 hover:underline"> Sign up </Link>
          </div>
        </div>
      );
}


export default Login