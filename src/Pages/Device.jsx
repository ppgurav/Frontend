import React, { useEffect, useState } from 'react'
import Navigationbar from '../Components/Navigationbar'
import { axiosInstance } from '../utils/axiosInstance';
import DeviceCard from '../Components/DeviceCard';
import DeviceModal from '../Modal/DeviceModal';

const Device = () => {
    const [data, setUser] = useState([]);
                 useEffect(() => { 
                    axiosInstance.get("/admin-and-reseller/devices")
                     .then((res) => {
                       if (res.status === 200) {
                         console.log("Device", data);
                         setUser(res.data.data || []);
                       }
                     })
                     .catch((error) => {
                       console.error("Error fetching data:", error);
                       setUser([]);
                     });
               
                 }, []);

                 console.log("Device", data);

                 const [isModalOpen, setIsModalOpen] = useState(false);
               
                 const openModal = () => {
                   setIsModalOpen(true);
                 };
               
                 const closeModal = () => {
                   setIsModalOpen(false);
                 };
              
  return (
    <>
      <Navigationbar/>

      <h2 className='text-center mt-30 font-extrabold my-5 text-2xl'> Devices </h2>
      <button
        onClick={openModal}
        className="px-6 py-2 bg-blue-700 ml-158 text-white rounded-md hover:bg-blue-600 mb-4"
      >
        Add New Device
      </button>

      <DeviceModal
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      <div className="container mx-auto p-2 mt-10 ">
          

      <table className="w-full border shadow-md  text-sm rounded-lg ">
        <thead className="bg-gray-100 ">
          <tr>
            <th className="p-3 text-left text-sm bg-Gray-200 text-Black border-black border-1">ID</th>
            <th className="p-3 text-left text-sm bg-Gray-200 text-Black  border-black border-1">Device Name</th>
            <th className="p-3 text-left text-sm bg-Gray-200 text-Black  border-black border-1">Status</th>
            <th className="p-3  text-sm bg-Gray-200 text-Black text-center border-black border-1">Today total Calls</th>
            <th className="p-3 text-center text-sm bg-Gray-200 text-Black  border-black border-1">Overall total Calls</th>
            <th className="p-3 text-center text-sm bg-Gray-200 text-Black  border-black border-1">Webhook URL</th>
            <th className="p-3 text-center text-sm bg-Gray-200 text-Black  border-black border-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          
        {data.map((user, index) => (
            <DeviceCard key={user?._id} user={user} />
            

          ))}

        </tbody>
      </table>  
      
     </div>


    </>
  )
}

export default Device; 