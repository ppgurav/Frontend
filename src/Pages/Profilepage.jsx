import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axiosInstance';

import Navigationbar from '../Components/Navigationbar';


const Profilepage = () =>{

const [data, setProfile] = useState([]);
  useEffect(() => {
    axiosInstance.get("/user/profile")
      .then((res) => {
        if (res.status === 200) {
          console.log("User list ",res.data)
                    
            setProfile([res.data.data]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      });
  }, []);

  
  return (
    <>
    <Navigationbar />

    <div className="flex justify-center items-center min-h-screen">
        {data.map((user) => (
          <div key={user._id} className="bg-white shadow-lg p-9 rounded-lg  border-1  bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">
            <img src={`https://ui-avatars.com/api/?name=${user.name}`} className="ml-12 gap-1 py-2 " style={{borderRadius:"50%"}}/>

            <p className="text-black-500 dark:text-gray-400 mt-2 text-sm italic md:italic...  ml-6">
              <strong>Name: </strong>{user.name}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm italic md:italic... ml-6">
              <strong> Email: </strong> {user.email}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-3 my-4 text-sm italic md:italic ... ml-6">
              <strong>Role: </strong>{user.role}
            </p>
            <a href='/UpdatePassword' type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-10 "> Update Password</a>
          </div>
        ))}
    </div>

  </>
  )
}
export default Profilepage;