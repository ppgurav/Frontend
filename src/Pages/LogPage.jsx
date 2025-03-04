import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../utils/axiosInstance';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { PiPhone } from 'react-icons/pi';

const CallLogs = () => {
  const [callLogs, setCallLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {

    axiosInstance.get("/user/call-logs")
      .then((response) => {
        if (response.data && response.data.callLogs) {
          setCallLogs(response.data.callLogs);
          setTotalPages(response.data.totalPages);
        } else {
          setError('Call logs data is missing.');
        }
        
      })
  }, [currentPage]); 
  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  };

  const formatDuration = (duration) => {
    const hr = Math.floor(duration/1000);
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${hr}hours ${minutes} min ${seconds} sec`;
  };

  const getTypeStyle = (type) => {
    switch (type) {
      case 'Outgoing':
        return { color: 'blue', fontWeight: 'bold' };
      case 'Missed':
        return { color: 'red', fontWeight: 'bold' };
      case 'Rejected':
        return { color: 'gray', fontWeight: 'bold' };
      case 'Incoming':
        return { color: 'green', fontWeight: 'bold' };
      default:
        return { color: 'black' };
    }
  };

  const [selectedOption, setSelectedOption] = useState('');
  
            const handleChange = (event) => {
              setSelectedOption(event.target.value);
            };


            // searching 

  const [search, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='p-35 text-center font-stretch-90% font-bold'>
      <div className='w-full px-9 flex justify-between my-3' >
      <PiPhone  className='ml-100 size-8 text-red-600 font-sans md:font-serif ...'/><h1 className='mr-138 text-2xl'>Call Logs</h1>
      </div>

      <div className='w-full px-9 flex justify-between my-10'  >
        <h1>Rows per page: <select
        id="dropdown"
        name="dropdown"
        value={selectedOption}
        onChange={handleChange}
        className="p-1 border text-blue-500 border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">10</option>
        <option value="option1">1 </option>
        <option value="option2">2</option>
        <option value="option3">3</option>
      </select></h1>
      <input
        type="text"
        onChange={handleSearchChange}
        placeholder="Search by number,type or device name...."
        className=" p-2 border rounded-md mr-2 w-95 text-sm border-cyan-600"
     />  

      </div>

      <div class="p-2 ">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase ">
              <tr class="bg-gray-300 border-b ">
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Number</th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Call Date</th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">Duration</th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> Device Name </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">SIM Slot</th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Type </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Last SMS</th>
              </tr>
            </thead>
        <tbody>
            {callLogs.filter((log)=>{
              return search.toLowerCase() === '' ? log 
              : log.number.toLowerCase().includes(search) ||
               log.deviceName.toLowerCase().includes(search);
            })
            .map((log) => (
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200" key={log._id}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{log.number}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{formatDate(log.callDate)}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{formatDuration(log.duration)}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{log.deviceName}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{log.simSlot}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" style={getTypeStyle(log.type)}>{log.type}</td> 
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" ></td> 
              </tr>
            ))}
        </tbody>
      </table>
      </div>
     
      <div className='w-full px-10 flex justify-between'  >
        <button 
        className="flex items-center text-gray-500 hover:text-gray-700 disabled:cursor-not-allowed"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
            <FaChevronLeft className="mr-2" />
           Previous
        </button>

        <span className='ml-80 font-sans md:font-serif ...'> Page {currentPage} of {totalPages} </span>

        <button 
        className="flex items-center text-gray-500 hover:text-gray-700 disabled:cursor-not-allowed ml-100"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
         Next
         <FaChevronRight className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default CallLogs;
