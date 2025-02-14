import React,{useEffect,useState} from 'react'
import { axiosInstance } from '../utils/axiosInstance';

const Dashboard = () => {

const [data, setData] = useState("")

useEffect(() => {
  async function fetchData(){
    const res = axiosInstance.get('campaign/campaigns')
    if(res.status === 200){
      setData(res.data.data)
    }
  } 
  fetchData()
}, [])

  const [campaigns, setCampaigns] = useState([
    {
      __id: "6798ae20b712dca3f6b37279", 
      compaignCreatorName : "Pratik Jadhav",
      compaignCreatorRole: "user",
      compaignStatus: "pending",
      compaignName: "Campaign 1",
      compaignStartDate : "2025-01-28T12:00:00.000Z"
},
    {_id: "6798ae20b712dca3f6b37279", 
      compaignCreatorName : "Pratik Jadhav",
      compaignCreatorRole: "user",
      compaignStatus: "pending",
      compaignName: "Campaign 2",
      compaignStartDate : "2024-12-31T10:26:00.000Z"
    },
    {
      __id: "6798ae20b712dca3f6b37279",
      compaignCreatorName : "Pratik Jadhav",
      compaignCreatorRole: "user",
      compaignStatus: "pending",
      compaignName: "Campaign Name 3",
      compaignStartDate : "2025-01-07T11:26:00.000Z"
    } 
  ]);


  return (
    <div className="p-7 ">
      <div className="grid grid-cols-1 sm:grid-cols- lg:grid-cols-3 gap-4  ">
        {campaigns.map((campaign) => (
          <div key={campaign._id} className="bg-white shadow-lg p-9 rounded-lg border  border-2 border-2  bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">
            <h3 className="flex flex-wrap text-sm font-medium text-center text-Black-500 border-b border-gray-950 rounded-t-lg bg-gray-200 dark:border-gray-800 dark:text-gray-50 dark:bg-gray-700">{campaign.compaignName}</h3>
            <p class="text-black-500 dark:text-gray-400 mt-2 text-sm italic md:italic ... ">
              <strong>compaignCreatorName: </strong>{campaign.compaignCreatorName}
            </p>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm italic md:italic ...">
              <strong> compaignCreatorRole: </strong> {campaign.compaignCreatorRole}
            </p>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm italic md:italic ...">
              <strong>Status:</strong>{" "}
              <span
                className={`px-2 py-1 rounded ${
                  campaign.compaignStatus === "active"
                    ? "bg-green-500 text-white"
                    : campaign.compaignStatus === "pending"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-500 text-white"
                }`}
              >
                {campaign.compaignStatus}
              </span>
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm italic md:italic ... ">
              <strong>compaignName: </strong>{campaign.compaignName}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm text-base/5 ... italic md:italic ...">
              <strong>compaignStartDate: </strong>{campaign.compaignStartDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
