import React from 'react'
import Navigationbar from './Navigationbar';

const UserCard = ({ user, }) => {
      console.log(user);
    //   destructuring
const {
    compaignCreatorName
    ,compaignCreatorRolename,compaignName} = user //{id:"",name:""}
     
   return(
    <>
    <Navigationbar />
    <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg flex items-center space-x-4">
      {/* <img
        src={avatar}
        alt={`${fullname}'s avatar`}
        className="w-16 h-16 rounded-full object-cover"
      /> */}
      <div>
        <img src={`https://ui-avatars.com/api/?name=${compaignCreatorName}`} style={{borderRadius:"50%"}}/>
        {/* <h2 className="text-xl font-semibold">{id}</h2> */}
         <h2 className="text-xl font-semibold">{compaignCreatorName}</h2>
        <p className="text-gray-500">{compaignCreatorRolename}</p>
        <p className="text-gray-400">{compaignName}</p> 
        {/* <div className="mt-2">
          {skills?.map((skill, index) => (
            <span
              key={index}
              className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2"
            >
              {skill}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  </div> 
  </>
  )
}
export default UserCard; 