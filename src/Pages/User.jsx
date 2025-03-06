import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axiosInstance';
import UserCard from '../Components/UserCard';
import UserForm from '../Modal/UserForm';


const User = () => {

  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleEdit = () => {
    setSelectedUser();
    setIsModalOpen(true);
   };

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5); 
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await  axiosInstance.get("/admin-and-reseller/users");
        setUsers(response.data.data || []);   
        setTotalPages(Math.ceil(response.data.length / usersPerPage));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [usersPerPage]);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };


  useEffect(() => {
    // this filteres inside initializing a varialbe
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    setTotalPages(Math.ceil(filtered.length / usersPerPage)); 
  }, [searchTerm, users, usersPerPage]);


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);


  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }


  const handleItemsPerPageChange = (e) => {
    setUsersPerPage(Number(e.target.value)); 
    setCurrentPage(1); 
  };


  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by number,type or device name...."
       className=" p-2 border rounded-md mr-2 w-95 text-sm border-cyan-600 ml-120"
        />
      </div>

        <div className="mb-4">
        <label className="mr-2">Entries per page:</label>
        <select
          value={usersPerPage}
          onChange={handleItemsPerPageChange}
          className="border p-2 rounded-md"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
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
          
          {currentUsers.filter((user)=>{
            return searchTerm.toLowerCase() === '' ? user
            : user.name.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm)||
            user.role.toLowerCase().includes(searchTerm);
          })
          .map((user, index) => (
            <UserCard key={user?._id} user={user} />
            
          ))}
          
        </tbody>
      </table>  
      <div className="container mx-auto px-4 py-6">

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <button
            onClick={handlePrev}
            className={`px-4 py-2 border rounded-md  ml-55 ${
              currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-white text-blue-500 hover:bg-gray-100"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <div className="mx-2">
            <span className='ml-10'>
              Page {currentPage} of {totalPages}
            </span>
          </div>

          <button
            onClick={handleNext}
            className={`px-4 py-2 border rounded-md ml-10 ${
              currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-white text-blue-500 hover:bg-gray-100"
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
            >
            </button>
          ))}
        </div>
      </div>
    </div>
    </div>
  </div>
  </>
  )
}
export default  User;
