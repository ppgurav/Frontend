import React, { useEffect, useState } from 'react'
import { Pencil } from 'lucide-react';
import { Trash } from 'lucide-react';
import { axiosInstance } from '../utils/axiosInstance';
import EditModal from '../Pages/EditModal';

const UserCard = ({ user}) => {
    //  console.log(user);

    // destructing
const {
    _id
    ,name,email,role} = user //{id:"",name:""}

        const [selectedUser, setSelectedUser] = useState(null);
        const [isModalOpen, setIsModalOpen] = useState(false);


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


            const handleEdit = (user) => {
              setSelectedUser(user);
              setIsModalOpen(true);
          };


  
   return(
    <>
            <tr>
              <td className="px-4 py-2 border">{_id}</td>
              <td className="px-4 py-2 border">{name}</td>
              <td className="px-4 py-2 border">{email}</td>
              <td className="px-4 py-2 border">{role}</td>
              <td className="p-2 flex  border-gray-200 border-1 ">

                {data.map((user) => (
                    <div key={user._id}>
                    </div>
                ))}
                <Pencil className="text-blue-500 cursor-pointer" onClick={() => handleEdit(user)} />
               <EditModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                user={selectedUser}
               />

              <Trash
              size={23}
               className='ml-10'/>
              </td>
            </tr>

        
      
    
  </>
  )
}
export default UserCard; 
