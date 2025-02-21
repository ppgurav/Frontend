import React, { useState } from 'react'
import Navigationbar from './Navigationbar';

const CompaignCard = ({ user, }) => {
      console.log(user);
      const {compaignStatus,
        compaignCreatorName
        ,compaignCreatorRole,compaignName,compaignStartDate,members} = user //{id:"",name:""}
         
   return(
    <>
    <Navigationbar />
   <div className="p-17 mt-9 ">
   
  
             <div className=" p-9 rounded-lg  border-0  bg-white shadow-lg ...">
               <h1 className="flex flex-wrap text-sm font-medium text-center text-black border-b border-gray-950 rounded-t-lg">{compaignName}</h1>
               <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm italic md:italic ...">
                 <strong></strong>{" "}
                 <span
                   className={`px-20 py-1 rounded ${
                     compaignStatus === "active"
                       ? "bg-green-500 text-white"
                       : compaignStatus === "pending"
                       ? "bg-yellow-600 text-white"
                       : "bg-gray-500 text-white"
                   }`}
                 >
                   {compaignStatus}
                 </span>
               </p>
               {/* this line is for data inside another data  */}
               <p className="text-gray-700 dark:text-gray-400 mt-2  italic md:italic">
              <strong>Members:</strong> {members?.map(member => member.memberName).join(', ')}
               </p>
               
               <p className="text-black dark:text-gray-400 mt-2 text-sm italic md:italic ... ">
                 <strong>Last Actioner: </strong>{compaignCreatorName}({compaignCreatorRole})
               </p>
               <p className="text-black dark:text-gray-400 mt-2 text-sm italic md:italic ...">
                 
               {/* this line is for data formate */}
               <strong>Start Date: </strong>{
                   compaignStartDate
                   ? new Date(compaignStartDate).toLocaleDateString("en-US", {
                       year: "numeric",
                       month: "short",
                       day: "numeric",
                     })
                   : "N/A"
                 }
               </p>
             </div>
  
         </div>
   
   
  </>
  )
}
export default CompaignCard; 