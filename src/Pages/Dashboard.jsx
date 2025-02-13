import React,{useEffect,useState} from 'react'
import { axiosInstance } from '../utils/axiosInstance';

const Dashboard = () => {

const [data, setData] = useState("")

useEffect(() => {
  async function fetchData(){
    const res = axiosInstance.get('/user/call-logs')
    if(res.status === 200){
      setData(res.data.data)
    }
  } 
  fetchData()
}, [])


  return (
    <div>
      <h2>{data}</h2>
    </div>
  )
}

export default Dashboard
