import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axiosInstance';
import image from '../assets/key1.png';
import im from '../assets/pen.png'
import Navigationbar from '../Components/Navigationbar';
import UserCard from '../Components/UserCard';


export default function User() {
const [data, setUser] = useState([]);
  useEffect(() => { 
    axiosInstance.get("/admin-and-reseller/users")
      .then((res) => {
        if (res.status === 200) {
          console.log("users", data);
          setUser(res.data.data || []);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setUser([]);
      });

  }, []);
//save
  console.log("users", data);
  

  return (
    <>
    <Navigationbar />
    <div className="container mx-auto p-50">
          
    <div className="overflow-x-auto p-3">

      <table className="w-full border-4 border-red-500 shadow-md rounded-lg overflow-hidden ">
        <thead className="bg-gray-100 ">
          <tr>
            <th className="p-3 text-left bg-blue-200 text-blue-700 border-black border-1">UserID</th>
            <th className="p-3 text-left bg-blue-200 text-blue-700  border-black border-1">Name</th>
            <th className="p-3 text-left bg-blue-200 text-blue-700  border-black border-1">Email</th>
            <th className="p-3 text-left bg-blue-200 text-blue-700  border-black border-1">Role</th>
            <th className="p-3 text-center bg-blue-200 text-blue-700  border-black border-1"> dd Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {data.map((user, index) => (
            <UserCard key={user?._id} user={user} />
            
          ))}

        </tbody>



      </table>  
      <div className='w-full px-10 flex justify-between'  >  <button className='bg-blue-700 p-2 mt-3 w-30 ... text-white'>Prv</button> <button className='bg-blue-700 p-2 mt-3 w-30 ... text-white'>nex</button>  </div>
    </div>

  </div>
  </>
  )
}
