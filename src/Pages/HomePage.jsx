import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axiosInstance';
import Navigationbar from '../Components/Navigationbar';
import { Phone, PhoneCall, PhoneIncoming, PhoneMissed, PhoneOff, PhoneOutgoing } from 'lucide-react';

    const HomePage = () => {
           

    const [data, setUser] = useState([]);
      useEffect(() => { 
        axiosInstance.get("user/analytics-calls?filter=30days")
          .then((res) => {
            if (res.status === 200) {
              setUser(res.data || []);
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setUser([]);
          });
    
      }, []);

      
      console.log("Home", data);
          const Sdata = '2025-01-25'
          const Edata= '2025-02-24'

          const [selectedOption, setSelectedOption] = useState('');

          const handleChange = (event) => {
            setSelectedOption(event.target.value);
          };
  return (
<>
<Navigationbar/>

    <div className="container mx-auto mt-35 p-15">
        <h2 className='text-black font-bold ml-250'>Filter: <select
        id="dropdown"
        name="dropdown"
        value={selectedOption}
        onChange={handleChange}
        className="p-2 border text-blue-500 border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">30 Days</option>
        <option value="option1">1 </option>
        <option value="option2">2</option>
        <option value="option3">3</option>
      </select>
</h2>
      

        <div className="bg-white text-blue p-4 text-center rounded-lg shadow-md w-92 mt-2 my-5 ring-2 ring-blue-400 ...">
        <Phone  className='text-blue-500 ml-2'/>
          <h3 className="text-3xl text-blue-600 font-extrabold">{data.total_calls}</h3>
          <p className="mt-2 font-bold">Total Calls</p>
          <p className="mt-2 text-sm text-gray-800">Start Date:<strong className='text-sm font-light'>{Sdata}</strong></p>
          <p className="mt-2 text-sm text-gray-800">End Date:<strong  className='text-sm font-light'>{Edata}</strong></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <div className="bg-white text-blue p-2 text-center rounded-lg shadow-md .... ring-2 ring-blue-200 ...">
        <PhoneCall className='text-green-400 ml-2'/>
        <h3 className="text-3xl text-blue-600 font-extrabold">{data.answered_outgoing}</h3>
          <p className="mt-2 font-bold">Answered Outgoing</p>
          <p className="mt-2 text-sm text-gray-800">Start Date:<strong className='text-sm font-light'>{Sdata}</strong></p>
          <p className="mt-2 text-sm text-gray-800">End Date:<strong  className='text-sm font-light'>{Edata}</strong></p>
        </div>
 
        <div className="bg-white text-blue p-6 text-center rounded-lg shadow-md .... ring-2 ring-blue-200 ...">
        <PhoneIncoming className='text-yellow-300 ml-2'/>
        <h3 className="text-3xl text-blue-600 font-extrabold">{data.incoming_calls}</h3>
          <p className="mt-2 font-bold">Incoming Calls</p>
          <p className="mt-2 text-sm text-gray-800">Start Date:<strong className='text-sm font-light'>{Sdata}</strong></p>
          <p className="mt-2 text-sm text-gray-800">End Date:<strong  className='text-sm font-light'>{Edata}</strong></p>
        </div>

        <div className="bg-white text-blue p-6 text-center rounded-lg shadow-md .... ring-2 ring-blue-200 ...">
        <PhoneMissed className='text-red-600 ml-2'/>
        <h3 className="text-3xl text-blue-600 font-extrabold">{data.missed_calls}</h3>
          <p className="mt-2 font-bold">Missed Calls</p>
          <p className="mt-2 text-sm text-gray-800">Start Date:<strong className='text-sm font-light'>{Sdata}</strong></p>
        <p className="mt-2 text-sm text-gray-800">End Date:<strong  className='text-sm font-light'>{Edata}</strong></p>
        </div>


        <div className="bg-white text-blue p-6  text-center rounded-lg shadow-md .... ring-2 ring-blue-200 ...">
        <PhoneOutgoing className='text-gray-500 ml-2'/>
        <h3 className="text-3xl text-blue-600 font-extrabold">{data.outgoing_calls}</h3>
          <p className="mt-2 font-bold">Outgoing Calls</p>
          <p className="mt-2 text-sm text-gray-800">Start Date:<strong className='text-sm font-light'>{Sdata}</strong></p>
          <p className="mt-2 text-sm text-gray-800">End Date:<strong  className='text-sm font-light'>{Edata}</strong></p>
        </div>


        <div className="bg-white text-blue p-6 text-center rounded-lg shadow-md .... ring-2 ring-blue-200 ...">
        <PhoneOff  className='text-black ml-2'/>
        <h3 className="text-3xl text-blue-600 font-extrabold">{data.unanswered_outgoing}</h3>
          <p className="mt-2 font-bold">Unanswered Outgoing</p>
          <p className="mt-2 text-sm text-gray-800">Start Date:<strong className='text-sm font-light'>{Sdata}</strong></p>
        <p className="mt-2 text-sm text-gray-800">End Date:<strong  className='text-sm font-light'>{Edata}</strong></p>
        </div>
      </div>
    </div>


</>
  )
}
export default HomePage; 