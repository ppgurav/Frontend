import React from 'react';
import { X } from 'lucide-react';


const UserForm = ({ isOpen, onClose}) => {
    if (!isOpen) return null;

    const handleSubmit = () => {
    }

    return (


        <div className="fixed inset-0 bg-transparent flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <button className="absolute top-2 right-2 text-red-500" onClick={onClose}>
                    <X />
                </button>
                <h1 className=" text-black font-bold text-center text-xl ">UserForm</h1>
                <div className="mb-4">
               <h1 className=" text-black ">Name</h1>
                  <input
                     id="deviceName"
                     type="text"
                     required
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                   />
                </div>
                <div className="mb-4">
               <h1 className=" text-black ">Email</h1>
                  <input
                     id="email"
                     type="email"
                     required
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                   />
                </div>
                <div className="mb-4">
                <h1 className=" text-gray-700  ">Password</h1>
                 <input
                     type="password"
                     name="Password"
                     required
                      className="w-full px-4 py-2 mt-1 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
               <h1 className=" text-black ">Role</h1>
                <select
                 id="dropdown"
                 name="dropdown"
                 required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Select a Role</option>
        <option value="option1">User </option>
        <option value="option2">Manager</option>
        <option value="option3">Member</option>
      </select>
      </div>
                <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded w-full">
                Submit
                </button>

            </div>
        </div>
        
    );
};

export default UserForm;
