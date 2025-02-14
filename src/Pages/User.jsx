import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axiosInstance';


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
    <div className="container mx-auto p-40">
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left bg-blue-100 text-blue-500">UserID</th>
            <th className="p-3 text-left bg-blue-100 text-blue-500">Name</th>
            <th className="p-3 text-left bg-blue-100 text-blue-500">Email</th>
            <th className="p-3 text-left bg-blue-100 text-blue-500">Role</th>
            <th className="p-3 text-center bg-blue-100 text-blue-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}>
              <td className="p-3">{user._id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
              {/* <td className="p-3 flex justify-center space-x-2">
                <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"></button>
                <button className="px-3 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600"></button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}
