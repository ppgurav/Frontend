import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axiosInstance';
import CompaignCard from '../Components/CompaignCard';


function Compaign() {

    const [campaign, setCampaign] = useState([]);
    
    const getCampaigns = async() => {
        try {
            const response = await  axiosInstance.get('campaign/campaigns');
            
setCampaign(response?.data?.data)

        } catch (error) {
            console.log("errr", error);
            
        }

      
    }

    useEffect(() => {
        getCampaigns();
        },[]);

if (campaign) {
    console.log("campaign", campaign);
    
}

  return (
    <>
    <div className='p-5 shadow-lg ...'>
            <div className="grid grid-cols sm:grid-cols-3 lg:grid-cols-3 p-5 ">
        {campaign?.map((user) => (
          <div key={user?.id} >

                <CompaignCard user={user} />
                </div>
              ))}
              </div>
              </div>
    </>
  )
}

export default Compaign
