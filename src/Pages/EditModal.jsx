import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useParams } from 'react-router-dom';

const EditModal = ({ isOpen, onClose, user}) => {
    if (!isOpen || !user) return null;

    const handleSubmit = () => {
    }

    return (


        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
                    <X />
                </button>
                <h1 className="text-xl font-bold mb-4">Update Password</h1>
                <p className="mb-4">
                    <strong>User ID:</strong> <span className="text-gray-700">{user._id}</span>
                </p>
                <div className="mb-4">
                <label className=" text-gray-700">New Password</label>
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
