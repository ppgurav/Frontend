import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axiosInstance';
import image from '../assets/key1.png';
import im from '../assets/pen.png'
import Navigationbar from '../Components/Navigationbar';


export default function User() {
const [data, setUser] = useState([]);
  useEffect(() => {
    axiosInstance.get("/admin-and-reseller/users")
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.data || []);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setUser([]);
      });
  }, []);
  
  return (
    <>
    <Navigationbar />
    <div className="container mx-auto p-50">
                <button type="button" className="mt-1  ml-180 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-1 p-1">Add User</button>      
<form className="max-w-md mx-auto">   
    <div className="relative">

        <input type="search" id="default-search" class="block w-90 px-4 py-3 mt-1 ml-70 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search users by name or email..." required />

    </div>
</form>
    <div className="overflow-x-auto p-3">

      <table className="w-full border border-gray-200 shadow-md rounded-lg overflow-hidden ">
        <thead className="bg-gray-100 ">
          <tr>
            <th className="p-3 text-left bg-blue-200 text-blue-700 border-black border-1">UserID</th>
            <th className="p-3 text-left bg-blue-200 text-blue-700  border-black border-1">Name</th>
            <th className="p-3 text-left bg-blue-200 text-blue-700  border-black border-1">Email</th>
            <th className="p-3 text-left bg-blue-200 text-blue-700  border-black border-1">Role</th>
            <th className="p-3 text-center bg-blue-200 text-blue-700  border-black border-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {data.map((user, index) => (
            <tr key={user.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}>
              <td className="p-3  border-gray-400 border-1">{user._id}</td>
              <td className="p-3  border-gray-400 border-1">{user.name}</td>
              <td className="p-3  border-gray-400 border-1">{user.email}</td>
              <td className="p-3  border-gray-400 border-1">{user.role}</td>
              <td className="p-2 flex  border-gray-200 border-1 ">
                <a href="#" className="px-2 py-2 text-sm text-whiterounded-md  size-9 "><img src={im}/></a>
                <a href="#" className="px-2 py-2 text-sm text-whiterounded-md  size-9"><img src={image} /></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  ml-70 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-4 p-1">Previous</button>    
      <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2  ml-40 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-1 p-1">Next</button>    
    </div>
  </div>
  </>
  )
}
