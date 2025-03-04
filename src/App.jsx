import React from 'react';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ProductList from './Pages/ProductList';
import User from './Pages/User';
import UserCard from './Components/UserCard';
import Profilepage from './Pages/Profilepage';
import Compaign from './Pages/Compaign';
import EditModal from './Modal/EditModal';
import UpdatePasswordModal from './Modal/UpdatePasswordModal';
import ForgetPage from './Pages/ForgetPage';
import ConfirmOTP from './Pages/ConfirmOTP';
import HomePage from './Pages/HomePage';
import Device from './Pages/Device';
import DeviceCard from './Components/DeviceCard';
import DeviceModal from './Modal/DeviceModal';
import UserForm from './Modal/UserForm';
import Container from './Pages/Container';
import LogPage from './Pages/LogPage';



function App() {
  return (

<>
<BrowserRouter basename="/">
<Routes>
<Route path="/" element={<Container />} > 
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpas" element={<ForgetPage />} />
        <Route path="/confirmOTP" element={<ConfirmOTP />} />
         <Route path="/signup" element={<Signup />} /> 


         <Route path="/user" element={<User />} />
        <Route path="/userForm" element={<UserForm />} />
        <Route path="/ucard" element={<UserCard />} />


         <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/log" element={<LogPage />} />


        <Route path="/compaign" element={<Compaign />} />
        
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/updatepas" element={<UpdatePasswordModal />} />
        <Route path="/update/:id" element={<EditModal />} />
        <Route path="/update/:id" element={<DeviceModal />} />



        <Route path="/device" element={<Device />} />
        <Route path="/dcard" element={<DeviceCard />} />


</Route>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
