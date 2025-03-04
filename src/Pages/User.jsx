import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axiosInstance';
import UserCard from '../Components/UserCard';
import UserForm from '../Modal/UserForm';


const User = () => {
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


               const [selectedUser, setSelectedUser] = useState(null);
               const [isModalOpen, setIsModalOpen] = useState(false);
              const handleEdit = () => {
                setSelectedUser();
                setIsModalOpen(true);
   };

  const [search, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <>

    <div className="container mx-auto p-50">
          
    <div className="overflow-x-auto p-3">
    <button  
        className="px-6 py-2 bg-blue-700 ml-180 text-white rounded-md hover:bg-blue-600 mb-4 "
        onClick={() => handleEdit()} >
        Add User
      </button>
      <UserForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                user={selectedUser}
               />

<input
       type="text"
       onChange={handleSearchChange}
       placeholder="Search by number,type or device name...."
       className=" p-2 border rounded-md mr-2 w-95 text-sm border-cyan-600 ml-120"
    />
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
          
          {data.filter((user)=>{
            return search.toLowerCase() === '' ? user
            : user.name.toLowerCase().includes(search) ||
            user.email.toLowerCase().includes(search);
          })
          .map((user, index) => (
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
export default  User;



