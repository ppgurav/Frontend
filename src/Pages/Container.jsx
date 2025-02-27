import { Outlet } from 'react-router-dom'
import Navigationbar from "../Components/Navigationbar"

const Container = () => {


  return (
    <>
        <Navigationbar/>

        
        <Outlet/>
        
          
    </>
  )
}

export default Container
