import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axiosInstance';
import { Eye, FileText, PowerOff, Trash2 } from 'lucide-react';



const DeviceCard = ({user,device}) => {
    const {
        _id,deviceName,today_total_calls,overall_total_calls,webhookUrl} = user //{id:"",name:""}
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

// For deleting device
                      const handleDelete = (_id) => {
                          console.log(`Attempting to delete device with _id: ${_id}`);
                          deleteDevice(_id);
                      };
                  
                      const deleteDevice = (_id) => {
                          axiosInstance.delete(`/user/delete-device/${_id}`)
                              .then((response) => {
                                  if (response.ok) {
                                      console.log(`Device with _id: ${_id} successfully deleted.`);
                                  } else {
                                      console.error(`Failed to delete device with _id: ${_id}.`);
                                  }
                              })
                              .catch((error) => {
                                  console.error(`Error occurred while deleting device with _id: ${_id}`, error);
                              });
                      };

// it's webhookModal logic
  const [isOpen, setIsOpen] = useState(false); 
  const webhookURL = `http:/localhost:5173/webhook/call-log/${_id}`; 
  const toggleModal = () => setIsOpen(!isOpen);

  return (
<>
    <tr>
              <td className="px-4 py-2 border">{_id}</td>
              <td className="px-1 py-4 border-1 text-center flex flex-row" >{deviceName}<Eye 
              className="text-blue-500 cursor-pointer ml-1" onClick={toggleModal}
              size={23}  />

{isOpen && (
       <div className="fixed inset-0 bg-transparent flex justify-center items-center">
         <div className="bg-white p-20 rounded-lg shadow-lg w-200">
           <div className="mb-4">
             <p className="font-medium text-lg mr-130 my-2">Device Details</p>          
               <p className='mr-19 '><strong>URL: </strong>{webhookURL} <button
              onClick={toggleModal}
              className="mt-4 ml-6 p-2 bg-red-500 text-white rounded-md"
            >
              Close
            </button></p> 

       </div>
       </div>
       </div>
     )}
              </td>
              <td className="px-4 py-2 border text-center"><PowerOff /></td>
              <td className="px-4 py-2 border text-center">{today_total_calls}</td>
              <td className="px-4 py-2 border text-center">{overall_total_calls}</td>
              <td className="px-4 py-2 border">{webhookUrl}</td>
              <td className="p-2 flex  border-gray-200 border-1 ">
              <FileText  className=''/>

              <button
                onClick={() => handleDelete(_id)} 
                className="delete-btn"
                title="Delete Device"
            >
                <Trash2 size={24} color="#ff0000" />
            </button>
              </td>
            </tr>
            </>
  )
}

export default DeviceCard;
