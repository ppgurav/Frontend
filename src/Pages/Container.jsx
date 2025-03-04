import { Outlet } from 'react-router-dom'
import Navigationbar from "../Components/Navigationbar"
import Footer from '../Components/Footer'

const Container = () => {


  return (
    <>
        <Navigationbar/>

        
        <Outlet/>

        <Footer/>
        
          
    </>
  )
}

export default Container
