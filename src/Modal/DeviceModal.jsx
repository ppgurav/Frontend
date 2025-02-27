
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { axiosInstance } from '../utils/axiosInstance';

const DeviceModal = ({ isOpen, onClose }) => {
    const [error, setError] = useState(null);
    const [deviceName, setDeviceName] = useState("");
    const [selectedInterval, setSelectedInterval] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const deviceData = {
        deviceName,
        sendInterval: selectedInterval,
      };
  
      try {
        const response = await axiosInstance.post("/admin-and-reseller/add-device",
          deviceData,
        );

      if (response.status === 200) {
        setSuccessMessage("Device added successfully!");
        setDeviceName("");
        setSelectedInterval("");
      } else {
        setError(data.message || "Error adding device");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Error adding device. Please try again later.");
    }
    };
  
    if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-transparent flex items-center justify-center">
           <div className="bg-white p-6 rounded-lg shadow-lg w-150 relative">
           <button className="absolute top-2 right-2 text-red-500" onClick={onClose}>
                    <X />
                    
                 </button>    
                 {error && <div className="success">{error}</div>}
                 <form onSubmit={handleSubmit}>
        <div className="mb-4">
               <h1 className=" text-black ">Enter Device Name</h1>
                  <input
                     id="deviceName"
                     type="text"
                     value={deviceName}
                     onChange={(e) => setDeviceName(e.target.value)}
                     required
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                   />
                </div>
                <div className="mb-4">
               <h1 className=" text-black ">Select Day Interval</h1>
                <select
                 id="dropdown"
                 name="dropdown"
                //  value={sendInterval}
                onChange={(event) => setSelectedInterval(event.target.value)}
                 required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option disabled={true} value="">Choose an option</option>
        <option value="daily">1 Day </option>
        <option value="weekly">7 Days</option>
        <option value="monthly">30 Days</option>
      </select>
      </div>
          <div className="flex justify-between">
          <button
              type="button"
              onClick={onClose}
              className="px-2 py-2 bg-red-600 text-white rounded-md hover:bg-gray-400 ml-97"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-600"
              >
                Submit
            </button>

          </div>
        </form>
        {successMessage && <p >{successMessage}</p>}
      </div>
    </div>
  );
};
export default DeviceModal;