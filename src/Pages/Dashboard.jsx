import React,{useEffect,useState} from 'react'
import { axiosInstance } from '../utils/axiosInstance';
import UserCard from '../Components/UserCard';
import Navigationbar from '../Components/Navigationbar';

const Dashboard = () => {


const [data, setData] = useState([]);
const [usersFeed, setUserfeed] = useState([]);

  useEffect(() => {
    axiosInstance.get('campaign/campaigns')
      .then((res) => {
        if (res.status === 200) {
          console.log("User list ",res.data)
          setUserfeed(res.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

      axiosInstance.get('campaign/campaigns')
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.data || []);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]);
      });
  }, []);
  
 
  return (
    <>
<Navigationbar />
    
<div className=" p-30">
      <div className="grid grid-cols-1 sm:grid-cols- lg:grid-cols-3 gap-9  ">




        {data.map((campaign) => (
          <div key={campaign._id} className="bg-white shadow-lg p-9 rounded-lg  border-2  bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">
            <h3 className="flex flex-wrap text-sm font-medium text-center text-Black-500 border-b border-gray-950 rounded-t-lg bg-gray-200 dark:border-gray-800 dark:text-gray-50 dark:bg-gray-700">{campaign.compaignName}</h3>
            <p className="text-black-500 dark:text-gray-400 mt-2 text-sm italic md:italic ... ">
              <strong>compaignCreatorName: </strong>{campaign.compaignCreatorName}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm italic md:italic ...">
              <strong> compaignCreatorRole: </strong> {campaign.compaignCreatorRole}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm italic md:italic ...">
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
              <strong>compaignStartDate: </strong>{
                campaign.compaignStartDate
                ? new Date(campaign.compaignStartDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : "N/A"
              }
            </p>
          </div>
        ))}

{usersFeed?.map((user) => (
          <div key={user?.id} className="bg-white shadow-lg p-9 rounded-lg  border-2  bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">

                <UserCard key={user?.id} user={user} />
                </div>
              ))}
      </div>
    </div>
    </>
  )
}

export default Dashboard
