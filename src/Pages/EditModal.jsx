import React from 'react';
import { X } from 'lucide-react';


const EditModal = ({ isOpen, onClose, user}) => {
    if (!isOpen || !user) return null;

    const handleSubmit = () => {
    }

    return (


        <div className="fixed inset-0 bg-transparent flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <button className="absolute top-2 right-2 text-red-500" onClick={onClose}>
                    <X />
                </button>
                <h1 className="text-xl font-bold mb-4">Update Password</h1>
                <p className="mb-0">
                    <strong className='font-light'>User ID:</strong> <span className="text-gray-700 font-medium" >{user._id}</span>
                </p>
                <div className="mb-4">
                <h1 className=" text-gray-700 font-bold ">New Password</h1>
                 <input
                     type="password"
                     name="newPassword"
                     required
                      className="w-full px-4 py-2 mt-1 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded w-full">
                Update Password
                </button>

            </div>
        </div>
        
    );
};

export default EditModal;
